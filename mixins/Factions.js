export const factions = {
  data () {
    return {
      factions: [ {
          name: "Mayn",
          mages: 4,
          tanks: 1,
          healers: 1,
          melee: 0,
          reputation: 0,
          strengthMod: 1.4,
          healthMod: 1.0,
          defenseMod: 0.8,
          specialUnit: {
            name: "Battle Mage",
            class: "mage"
            strengthMod: 1.4,
            healthMod: 1.0,
            defenseMod: 0.8,
            chance: 0.25        
          }
        },{
          name: "Xuli",
          mages: 0,
          tanks: 4,
          healers: 2,
          melee: 0,
          reputation: 0,
          strengthMod: 1.2,
          healthMod: 1.6,
          defenseMod: 1.4,
          specialUnit: {
            name: "Earthen Claw",
            class: "tank"
            strengthMod: 1.4,
            healthMod: 2.1,
            defenseMod: 1.3,
            chance: 0.10        
          }
        },{
          name: "Kapor",
          mages: 2,
          tanks: 2,
          healers: 1,
          melee: 1,
          reputation: 0,
          strengthMod: 1.0,
          healthMod: 1.0,
          defenseMod: 1.0,
          specialUnit: {
            name: "Paladin",
            class: "healer"
            strengthMod: 1.4,
            healthMod: 1.5,
            defenseMod: 1.8,
            healMod: 1.8,
            chance: 0.25        
          }
        },{
          name: "Ailr",
          mages: 0,
          tanks: 0,
          healers: 2,
          melee: 4,
          reputation: 0,
          strengthMod: 1.6,
          healthMod: 1.0,
          defenseMod: 1.0,
          specialUnit: {
            name: "Knight",
            class: "melee"
            strengthMod: 1.9,
            healthMod: 1.4,
            defenseMod: 1.3,
            chance: 0.45        
          }
        }
      ]
  }
},
// mounted: function () {
//   this.$nextTick(function () {
//       			for(var i = 0; i < this.characters.length; i++)
//   			{
//   				this.calcHealth(i);
//   				//this.$set.characters[i].maxHealth = this.characters[i].level * 45 * 1.2;
//   				//console.log(this.characters[i].maxHealth + " id:" + i)
//   			}
//   })
// },
//   methods: {
//   	calcHealth (id) {
//   		var char = this.characters[id];
//   		var maxHP = (Math.floor((char.level * 45) * 1.2));
//   		char.maxHealth = maxHP;
//   		char.currentHealth = char.maxHealth;
//   		console.log(char.maxHealth);
//   	}
//  }
};