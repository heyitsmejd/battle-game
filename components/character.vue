        <template> 
          <div class="row mt-4">
            <div class="col-1 mr-5">
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
            <div class="col">
              <div class="row">

            <div class="character dead" :id="id" @click="selectTarget" v-if="isDead">
              <div class="row">
                  <div class="col-3 mr-4">
                      <div class="charIcon">
                        <img :src="avatar" width="100%">
                      </div>
                  </div>
                  <div class="col mr-3" >
                      <div class="row">
                        <div class="col p-0 charName pl-1">
                          {{ name }}
                        </div>
                        <div class="col level">
                        Lvl - {{ level }}
                        </div>
                        <div class="col p-0 classIcon">
                        {{ type }}
                        </div>
                      </div>
                      <div class="row mt-1">
                        <div class="healthBar mb-2" >
                          
                          <div class="healthBarBg" :style="{width: 0 +'%'}">
                          <span class="statusText">Dead</span>
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
                  </div>  

              </div>

              <div class="character" :id="id" @click="selectTarget" v-else>
              <div class="row">
                  <div class="col-2 mr-5">
                      <div class="charIcon">
                        <img :src="avatar" width="100%">
                      </div>
                  </div>
                  <div class="col mr-3" >
                      <div class="row">
                        <div class="col p-0 charName pl-1">
                          {{ name }}
                        </div>
                        <div class="col level">
                        Lvl - {{ level }}
                        </div>
                        <div class="col p-0 classIcon">
                        {{ type }}
                        </div>
                      </div>
                      <div class="row mt-1">
                        <div class="healthBar mb-2" >
                          <div class="healthBarBg" :style="{width: (currentHealth / maxHealth) * 100 +'%'}" >
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
                  </div>  
              </div>
            </div>
            </div>
            <div class="col ml-3 mt-1" >
              <div class="row" v-if="turn">
                  <button class="btn btn-info btn-rounded attack" @click="sendAttack" >Attack</button>
                  <button class="btn btn-danger btn-rounded  defen ml-3" @click="chooseTarget" >Defend</button>
              </div>
              <div class="row mt-3" v-if="turn">
                      <button class="btn btn-info btn-rounded special btn-warning">Special</button>
                      <button class="btn btn-rounded btn-secondary wait ml-3">Wait</button>
              </div>
            </div>
          </div>
        </template>
        <script>
        export default {
                      data: function() {
              return {
                pickTarget: false,
                isPositive: false,
              }
            },
           props:  ['name', 'currentMana', 'currentEnergy', 'currentHealth', 'maxMana', 'maxEnergy', 'maxHealth', 'avatar', 'level', 'type',  'turn', 'id', 'choosingTarget', 'statusText', 'isDead'] ,
           computed: {
            checkEnergy () {
              if(this.currentEnergy >= 0)
              {
                return true;
              }
            
            }
           },
           watch: {
              turn:function(val)
              {
                  var ele = document.getElementById(this.id);
                  if(this.turn == true)
                  {
                    ele.classList.add("currentTurn");
                  }
                  else
                    ele.classList.remove("currentTurn");
              }
           },
          methods: {
            sendAttack() 
            {
              this.$emit('sendAttack');       
            },

            chooseTarget() {
              this.pickTarget = true;
              this.$emit('choosingTarget', this.pickTarget);
              this.pickTarget = false;
            },
             selectTarget(event)
              {

                this.$emit('selectTarget', event.currentTarget.id); 
              },
            }
            
          
          }
        </script>
        <style>
        .currentTurn {
          animation: gradientShift;
          animation-iteration-count: infinite;
          animation-duration: 3s;
        }

        @keyframes gradientShift {
          0% {
            box-shadow: 0 0 5px #4dff85;
          }
          50%
          {
              box-shadow: 0 0 15px #4dff85;
          }

          100% {
              box-shadow: 0 0 5px #4dff85;
          }
        }
        </style>