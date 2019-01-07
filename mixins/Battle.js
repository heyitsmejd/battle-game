export const battle = {
  methods: {
    nextTurn () 
    {
      for(var i = 0; i < this.characters.length; i++)
      {
          this.characters[i].turn = false;
      }
 


       if(this.turns.length < 1)
      {
        //  this.checkDead();
          for(var i = 0; i < this.characters.length; i++)
          {
              this.characters[i].turn = false;
          }
          this.showModal();
          console.log("No turns left.");
      }
     // this.monsterAi();
      var that = this;
      //var splice =   this.turns.push(this.turns.splice([0], 1)[0]);
       setTimeout(function(){
          that.monsterAi();
           that.checkTurn();
           that.turns.push(that.turns.splice([0], 1)[0]);
      }, 2000);
      //this.turns.push(this.turns.splice([0], 1)[0]);
      //this.checkTurn(); 
      console.log(this.turns);

    },
    checkTurn(){
      this.currentTurn = this.turns[0];
      this.characters[this.currentTurn].turn = true;
      console.log(this.currentTurn);
    },
    checkDead(){ //Fix this shit.
      for(var i = 0; i < 3; i++)
      {
        if(this.characters[i].currentHealth <= 0)
        {
          this.characters[i].isDead = true;
         
        //  this.turns.splice(, 1);
          var x = this.turns.indexOf(i);
          if(x != -1) 
          {
              this.turns.splice(x, 1);
          }
                 // this.turns.filter(i);
          //console.log(this.turns);

        }
      }
    },
    checkTargetAllow()
    {
      this.choosingTarget = !this.choosingTarget;
      console.log(this.choosingTarget);
    },
    selectTarget(tar) {
        if(this.choosingTarget == true)
        {
          this.heal(tar);
          this.nextTurn();
          this.choosingTarget = false;
        }
       else
        console.log("It's not your turn!");

    },
    heal(tar) 
    {
        this.calcDamage(this.turns[0]);
        this.characters[tar].currentHealth += this.calcHit;
        this.characters[tar].statusText = "+" + this.calcHit;
        setTimeout(function() { this.characters[tar].statusText = 0 }, 2000);
        if(this.characters[tar].currentHealth >= this.characters[tar].maxHealth)
        {
          this.characters[tar].currentHealth = this.characters[tar].maxHealth;
          console.log("The character was at full health already.");
        }
        else
        console.log("Healed " + this.characters[tar].name + " for " + this.calcHit);
    },
    calcDamage(i) {
      if(i == 0)
      {
                this.calcHit = Math.floor((Math.random(1,10)*10) * Math.floor(this.characters[i].level / 2) + this.characters[i].level * 2.86);
                console.log("It's using the first hit.");
      }
      else if(i == 1) {
                this.calcHit = Math.floor((Math.random(1,10)*10) * Math.floor(this.characters[i].level / 2) + this.characters[i].level * 2.66);
                console.log("It's using the second hit.");
      }
      else if(i == 2) {
                this.calcHit = Math.floor((Math.random(1,10)*10) * Math.floor(this.characters[i].level / 2) + this.characters[i].level * 2.66 * 1.75);
                console.log("It's using the third hit.");
      }
      else
      {
        this.calcHit = Math.floor(((Math.random(7,10)*10) + 5)* Math.floor(this.monsters[0].level / 20));
      }
    },
    attack() {
      this.attackAnimationMonster();
      if(this.turns[0] == 0)
      {
        var img = document.getElementById("playerCharThree");
        var stance = this.characters[0].stance;
        img.src = (this.characters[0].attackAnimation);
        img.width = "650";
        setTimeout(function(){
           img.src = (stance);
           img.width = "500";
        }, 1500);
      }
      if(this.turns[0] == 1)
      {
        var img = document.getElementById("playerCharTwo");
        var stance = this.characters[1].stance;
        img.src = (this.characters[1].attackAnimation);
        img.width = "550";
        setTimeout(function(){
           img.src = (stance);
           img.width = "200";
        }, 1500);
      }
            if(this.turns[0] == 2)
      {
        var img = document.getElementById("playerCharOne");
        var stance = this.characters[2].stance;
        img.src = (this.characters[2].attackAnimation);
        img.width = "550";
        setTimeout(function(){
           img.src = (stance);
           img.width = "200";
        }, 1500);
      }

      //slideSource.classList.toggle('fade');
      this.calcDamage(this.turns[0]);
      this.monsters[0].currentHealth -= this.calcHit;
      this.monsters[0].statusText = "-" + this.calcHit;
      console.log(this.characters[this.turns[0]].name + " hit the " + this.monsters[0].name + " for " + this.calcHit + "!");

      this.nextTurn();
    },
    attackAnimationMonster(){
        var $monster = $('#monsterAnimation');
        $monster.addClass('animationMonster');
        setTimeout(function(){
           $monster.removeClass('animationMonster');
        }, 300);
    },
    attackAnimationPlayer(){
        var $anim = $('#playerAnimation');
        $anim.addClass('animation');
        setTimeout(function(){
           $anim.removeClass('animation');
        }, 300);
    },
    monsterAi() { 
        var img = document.getElementById(this.monsters[0].name);
        var stance = this.monsters[0].stance;
        img.src = (this.monsters[0].attackAnimation);
        img.width = "430";
        setTimeout(function(){
           img.src = (stance);
           img.width = "360";
        }, 1500);
      this.attackAnimationPlayer();
      this.target = this.turns[Math.floor(Math.random()* this.turns.length)];
      if(this.target == null)
      {
        this.showModal();
        console.log("No targets left, the game is over.");
        return;
      }

      this.calcDamage(4);
      this.characters[this.target].currentHealth -= this.calcHit;
      this.characters[this.target].statusText = "-" + this.calcHit;
      console.log(this.monsters[0].name + " hit " + this.characters[0].name + " for " + this.calcHit + "!");
            this.checkDead(); 
      this.roundCount++;
      
    }
  }
};