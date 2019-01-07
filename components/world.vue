<template>
	<div class="worldBg">
		<div :class="area.class + ' game-tooltip'" v-for="(area, index) in areas">
			<div class="tooltip-wrapper">
				<span class="game-tooltip-text">
						<div class="flex">	
								<div class="tool-left-col"><img src="https://cdn1.epicgames.com/ue/item/FPGGThumb-256x256-1ea405f168fc2fb663897bef6673b108.png" class="hover-image"></div>
								<div class="tool-right-col">	
								<div class="tooltip-title"><div>{{area.name}}</div><div class="owned-by">{{area.owner}}</div></div>
								<div class="pop-bar"><div class="pop-bar-fill"></div><span class="pop-text">{{area.reputation}}</span></div>
								<div class="battle-bar"><div class="battle-bar-fill"></div><span class="pop-text">{{area.conquer}}</span></div>
								<div class="tool-buttons"><button class="button action-btns trade-btn">Trade</button><button class="button action-btns attack-btn">Attack</button></div></div>
						</div>
				</span>

				<button type="button" @click="selectRegion" :class="area.class + ' ' + area.owner + ' selectArea'"></button>
				<div class="area-title">{{area.name}}</div>
			</div>
		</div>
		<div class="dialog-box">
			<div class="dialog-avatar">
				<div class="avatar-name"> Rance
				</div>
				<div class="avatar-image">
				</div>
			</div>
			<div class="dialog-message-box">
				<div class="dialog-menu">
					<div class="dialog-title">Test</div>
					<div class="dialog-menu-buttons">
						<button class="dialog-menu-button">Auto</button>
						<button class="dialog-menu-button">Skip</button>
						<button class="dialog-menu-button">X</button>
					</div>
					
				</div>
				<div class="dialog-message">
					<p>The fire nation has attacked us!!! What are we going to do???</p>
					<p>Please act quickly!!!</p>
				</div>
			</div>
		</div>
		<div class="top-menu">
			<button class="dialog-menu-button" @click="console.log(areas)">Menu</button>
			<div class="current-gold">0</div>
			<button class="dialog-menu-button">Troops</button>
			<button class="dialog-menu-button">End Turn</button>
		</div>
	</div>
</template>
<script>
  export default {

    methods: {
      selectRegion() {
        this.$emit('selectRegion');
      },
  },
     data() {
     	return {
     		areas: [
     			{
     				name: 'Dusk Marsh',
     				class: 'dusk-marsh',
     				reputation: 0,
     				conquer: 0,
     				status: 'Peaceful',
     				owner: 'Ailr'
     			},
     			{
     				name: 'Napeer',
     				class: 'napeer',
     				reputation: 0,
     				conquer: 0,
     				status: 'Peaceful',
     				owner: 'Mayn'
     			},
     			{
     				name: 'River Valley',
     				class: 'river-valley',
     				reputation: 100,
     				conquer: 0,
     				status: 'Peaceful',
     				owner: 'Xuli'
     			}

     		]
     	}
     }
  };
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=PT+Sans');
.activeArea {
		background:none;
	border:none;
	position: absolute;
	animation:none;
	animation:bounce;
	animation-duration: 1s;
	animation-iteration-count: infinite; 
}
@keyframes bounce {
	0% {
		width:2%;
		margin-top: 0%;
	}
	50% {
		width:3%;
		margin-top: 0.1%;
	}
	100%{
		width:1%;
		margin-top: 0%;
	}
}
.mellow-plains {
	top: 34%;
	right: 21%;
}
.napeer {
	top: 53%;
	left: 13%;
}
.klupe {
	top: 64%;
	left: 11%;
}
.river-valley {
    top: 28%;
    left: 21%;
}
.dark-forest {
	top: 25%;
	left: 15%;
}
.dusk-marsh {
    bottom: 26%;
    right: 43%;
}
.Ailr {
	background-image: URL('src/assets/icons/factions/kingdom.svg');
	background-size: cover;
}
.Xuli {
	background-image: URL('src/assets/icons/factions/bear.svg');
	background-size: cover;
}
.Mayn {
	background-image: URL('src/assets/icons/factions/mayn.svg');
	background-size: cover;
}
.Kapor {
	background-image: URL('src/assets/icons/factions/kapor.svg');
	background-size: cover;
}
.flex {
    display: flex;
}
.dialog-box {
	display: none;
	font-family: 'PT Sans', sans-serif !important;
	font-size: 2rem;
    border-top: solid 2px black;
    position: absolute;
    z-index: 2;
    bottom: 0;
    height: 30%;
    background: #1b1a1af0;
    width: 100%;
    overflow: hidden;
    color: white;
}
.dialog-message {
	padding: 3rem;
	width: 100%;
}
.dialog-avatar {
	border-right: solid 2px black;
   width: 15%;
   max-width: 15%;
   overflow: hidden;
}
.unclaimed-land {
	background: grey;
}
.avatar-name {

    text-align: center;
    border-bottom: solid 2px black;
    background: #191929;
    font-size: 1.5rem;
    height: 2.5rem;
}
.avatar-image {
	background-image: URL('https://i.imgur.com/Wx00xcA.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	height: calc(100% - 2.5rem);
}
.top-menu {
	top: 0;
	position: absolute;
	width: 100%;
    border-bottom: solid 2px black;
    background: #191929;
    font-size: 1.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
}
.dialog-title {
	margin-left: 3rem;
	color: gold;
}
.dialog-menu-button {
	background: #191929;
	border: none;
	color: white;
	margin-right: 1rem;
	padding-left: 1rem;
	padding-right: 1rem;
}
.dialog-menu-button:hover {
	background: #272740;
	color: white;
}
.tooltip-wrapper {
    width: 20rem;
    text-align: center;
    padding-top: 2rem;
}
.dialog-message-box {
	width: 100%;
	justify-content: space-between;
}
.dialog-menu {
	width: 100%;
    border-bottom: solid 2px black;
    background: #191929;
    font-size: 1.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
}
.selectArea {
	border: solid 3px #1d1d1d;
	width: 64px;
	height: 64px;
}
.worldBg {
	background-image: URL('src/assets/worldmap.jpg');
	background-size: cover;
	background-repeat: no-repeat;
}
.game-tooltip {
	position: absolute;
	/*display: inline-block;*/	
}
.game-tooltip .game-tooltip-text {
	visibility: hidden;
	padding: 0.25rem;
	color: white;
	background: #1d1d1d;
	padding: 0.5rem;
	border-radius: 6px;
	position: absolute;
	left: 50%;
	bottom: 100%;
	width: 20rem;
	margin-left: -10rem;
	margin-bottom: -1.5rem;
	z-index: 99;
}
.game-tooltip:hover .game-tooltip-text {
	visibility: visible;
}
.tooltipwrapper {
	position: relative;
	display: inline-block;
}
.tool-left-col {
	width: 33%;
	margin-right: 0.5rem
}
.hover-image {
	width: 100%;
	height: 100%;
}
.pop-bar {
	position: relative;
	width: 100%;
	height: 1.5rem;
	border: solid 1px white;
	margin-bottom: 0.5rem;
}
.battle-bar {
	position: relative;
	width: 100%;
	height: 1.5rem;
	border: solid 1px white;
}

.battle-bar-fill {
	width: 50%;
	height: 100%;
background: #CB356B;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #BD3F32, #CB356B);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #BD3F32, #CB356B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.pop-bar-fill {
	width: 15%;
	height: 100%;
background: #00B4DB;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #0083B0, #00B4DB);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #0083B0, #00B4DB); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.pop-text {
    position: absolute;
    width: 100%;
    text-align: right;
    bottom: 0%;
    right: 0.5rem;
}
.game-tooltip .game-tooltip-text::after {
    content: " ";
    position: absolute;
    top: 100%; /* At the bottom of the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #1d1d1d transparent transparent transparent;
}
.tool-buttons {
	margin-top: 0.5rem;
	display: flex;
	justify-content: space-between;
}
.area-title {
	font-size: 1.5rem;
	font-weight: bold;
  text-shadow:
   -1px -2px 0 #000,  
    1px -2px 0 #000,
    -1px 2px 0 #000,
     1px 2px 0 #000;
   color: white;
}
.action-btns {
	padding-left: 1rem;
	padding-right: 1rem;
	border: none;
}
.tooltip-title {
	display: flex;
	justify-content: space-between;
	font-weight: bold;
	font-size: 1rem;
}
.attack-btn {
	background: #be3e37;
	color: white;
}
.trade-btn {
	background: #008db9;
	color: white;
}
.tool-right-col {
    width: 66%;
}
</style>