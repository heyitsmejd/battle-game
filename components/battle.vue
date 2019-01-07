 <template>
  <div>
      <nav class="navbar  justify-content-between menuBar">
          <a class="navbar-brand ml-5 menuButton">Fighter</a>
          <div class="justify-content-center areaBg">
          Sorrowsong Forest
          </div>
          <div class="mr-5">Turn: {{roundCount}}</div>
          
    </nav>
    <modal
      v-show="isModalVisible"
      @close="closeModal"
      @selectRegion="selectRegion"
    />
    <div class="container-fluid topBg">
        <span class="slashEffectTwo" id="playerAnimation"><img  src="src/assets/cross.png" width="500px"></span>
        <span class="slashEffect" id="monsterAnimation"><img src="src/assets/slash.png" width="500px"></span>
          <div class="container characterSprites">
            <div class="row characterSprites">
          <div class="col-6">
            <div v-if="!characters[0].isDead">
            <img class="boss frontCharacter" id="playerCharThree" :name="characters[0].name" :src="characters[0].stance" width="80%">
           </div>
           <div v-if="!characters[1].isDead">
            <img class="boss backCharacter" id="playerCharTwo" :name="characters[1].name" :src="characters[1].stance">
          </div>
           <div v-if="!characters[2].isDead">
            <img class="boss middleCharacter" id="playerCharOne" :name="characters[2].name" :src="characters[2].stance" >
              </div>
          </div>
          <div class="col-4 offset-2 mt-5">
            <div class="boss characterSprites">
              <img :src="monsters[0].stance" :id="monsters[0].name" width="100%" >
              </div>
          </div>
          </div>
      </div>
    </div>
    <div class="container-fluid bottomBg">
      <div class="row">
        <div class="col-5">
            <character 
              v-for="character in characters"
              :name="character.name"
              :level="character.level"
              :avatar="character.avatar"
              :currentHealth="character.currentHealth"
              :maxHealth="character.maxHealth"
              :currentMana="character.currentMana"
              :maxMana="character.maxMana"
              :id="character.id"
              :choosingTarget:="choosingTarget"
              :currentEnergy="character.currentEnergy"
              :maxEnergy="character.maxEnergy"
              :turn="character.turn"
              :statusText="character.statusText"
              :isDead="character.isDead"
              @choosingTarget="checkTargetAllow"
              @sendAttack="attack"
              @selectTarget="selectTarget"
              >
                
            </character>

        </div>
        <div class="col-4 offset-3">
          <monster 
              v-for="monster in monsters"
              :name="monster.name"
              :level="monster.level"
              :avatar="monster.avatar"
              :currentHealth="monster.currentHealth"
              :maxHealth="monster.maxHealth"
              :currentMana="monster.currentMana"
              :maxMana="monster.maxMana"
              :id="monster.id"
              :currentEnergy="monster.currentEnergy"
              :maxEnergy="monster.maxEnergy"
              :turn="monster.turn"
              :statusText="monster.statusText"
              >
                
            </monster>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Monster from '../components/Monster.vue'
import Character from '../components/Character.vue'
import Modal from '../components/Modal.vue'
import { battle } from '../mixins/battle'
import { characters } from '../mixins/characters'
export default {
  name: 'app',
  data () {
    return {
      monsters: [{
          id: 0,
          name: 'Arakune',
          level: 253,
          currentHealth: 3192,
          maxHealth: 3192,
          currentEnergy: "0",
          maxEnergy: 50,
          type: 'Assassin',
          turn: false,
          avatar: "src/assets/assassin.jpg",
          stance: "/src/assets/monsters/arakune/arakune-stance.gif",
          attackAnimation: "/src/assets/monsters/arakune/arakune-attack.gif",
          specialAnimation: "/src/assets/monsters/arakune/arakune-spin.gif",
          statusText: '',
          isDead: false
        }
      ],
      testData: "yea",
      choosingTarget: false,
      monsterTurn: false,
      calcHit: '',
      target: '',
      roundCount: 1,
      possibleTarget: [0,1,2],
      turns: [0,1,2],
      isModalVisible: false,
      currentTurn: 1,
      inDungeon: false,
    }
  },
  computed: {
   
  },
  components: {
    Character,
    Monster,
    Modal
  },
  mixins: [battle, characters],
  methods: {

    showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
      
} }
</script>