export const characters = {
  data () {
    return {
      characters: [ {
          id: 0,
          name: 'Hakumen',
          level: 18,
          currentEnergy: "0",
          maxEnergy: 50,
          type: 'Assassin',
          turn: true,
          avatar: "src/assets/assassin.jpg",
          stance: "/src/assets/hakumen/hakumen-stance.gif",
          attackAnimation: "/src/assets/hakumen/hakumen-2hit.gif",
          specialAnimation: "/src/assets/hakumen/hakumen-wind.gif",
          statusText: '',
          isDead: false,
          currentHealth: '',
          maxHealth: '',
        },
        {
          id: 1,
          name: 'Makoto',
          level: 12,
          currentMana: 323,
          maxMana: 323,
          type: 'Tank',
          avatar: "src/assets/tank.jpg",
          stance: "/src/assets/makoto/makoto-stance.gif",
          attackAnimation: "/src/assets/makoto/makoto-punchloop.gif",
          specialAnimation: "/src/assets/makoto/makoto-special.gif",
          turn: false,
          statusText: '',
          isDead: false,
                    currentHealth: '',
          maxHealth: '',
        },
        {
          id: 2,
          name: 'Yukiko',
          level: 15,
          currentHealth: '',
          maxHealth: '',
          currentMana: 5123,
          maxMana: 5123,
          type: 'Healer',
          turn: false,
          avatar: "src/assets/wizard.jpg",
          stance: "/src/assets/yukiko/yukiko-stance.gif",
          attackAnimation: "/src/assets/yukiko/yukiko-attack.gif",
          specialAnimation: "/src/assets/yukiko/yukiko-spin.gif",
          statusText: '',
          isDead: false
        }
      ]
  }
},
mounted: function () {
  this.$nextTick(function () {
      			for(var i = 0; i < this.characters.length; i++)
  			{
  				this.calcHealth(i);
  				//this.$set.characters[i].maxHealth = this.characters[i].level * 45 * 1.2;
  				//console.log(this.characters[i].maxHealth + " id:" + i)
  			}
  })
},
  methods: {
  	calcHealth (id) {
  		var char = this.characters[id];
  		var maxHP = (Math.floor((char.level * 45) * 1.2));
  		char.maxHealth = maxHP;
  		char.currentHealth = char.maxHealth;
  		console.log(char.maxHealth);
  	}
 }};