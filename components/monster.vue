        <template> 
          <div class="row mt-4">
            <div class="col-6">
              <div class="row">
            <div class="character" :id="id" @click="selectTarget">
              <div class="row">
              
                  <div class="col ml-3 mr-0">
                      <div class="row">
                            <div class="col-8 ml-0 charName pl-0">
                              {{ name }}
                            </div>
                            <div class="col-4 level pl-2">
                            Lvl - {{ level }}
                            </div>
                            
                          </div>
                        <div class="row mt-1">
                            <div class="healthBar mb-2" >
                              
                              <div class="healthBarBg" :style="{width: (currentHealth / maxHealth) * 100 +'%'}">
                              <span class="statusText">{{ currentHealth }} / {{ maxHealth }}</span>
                            </div>
                            </div>
                          </div>
                        <div class="row">   
                              <div v-if="currentEnergy" class="energyBar">
                               <div class="energyBarBg" :style="{width: (currentEnergy / maxEnergy) * 100 +'%'}">
                              <span class="statusText">{{ currentEnergy }} / {{ maxEnergy }}</span>
                            </div>
                              </div>
                              <div class="manaBar" v-else>
                                <div class="manaBarBg" :style="{width: (currentMana / maxMana) * 100 +'%'}">
                              <span class="statusText">{{ currentMana }} / {{ maxMana }}</span>
                            </div>
                              </div>                      
                        </div>
                      </div>
                  <div class="col-2 mr-5 pr-5">
                      <div class="charIcon">
                        <img :src="avatar"  width="100%">
                      </div>
                  </div>

                  </div> 

              </div>
            </div>

            </div>
            <div class="col-2">
              <div class="charBuffs">
                  
              </div>
              <div class="dmgText negative" v-if="statusText.includes('-')">
                
                  {{ statusText
                   }}
                 
              </div>
              <div class="dmgText positive" v-else>
                  {{ statusText
                   }}
              </div>

            </div>
          </div>
        </template>
        <script>
        export default {
           props:  ['name', 'currentMana', 'currentEnergy', 'currentHealth', 'maxMana', 'maxEnergy', 'maxHealth', 'avatar', 'level', 'type',  'turn', 'id', 'statusText' ] ,
           computed: {
            checkEnergy () {
              if(this.currentEnergy >= 0)
              {
                return true;
              }
            }
           },
          methods: {
            updateTurn() 
            {
              this.$emit('updateTurn');
            },
            attack() 
            {
              this.$emit('attack');
            },
            selectTarget()
            {
              this.$emit('selectTarget', Math.floor(Math.random(1,10)*4 + 1));
             // console.log(event.currentTarget.id);
            }
            
          
          } }
        </script>