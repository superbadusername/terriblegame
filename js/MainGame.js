//Not massively important variables
var mouseOverBiscuit = false;
//Utility Variables
var navOpen = false;
var gameFps = 30;
/*======================
		MAIN GAME
========================*/
var Biscuit={};
var key = "BiscuitBuster"

//FORMAT TYPE - AMOUNT - COST - EFFECT
Biscuit.Buildings=[
["Cursors",0,15,0.1],
["Grandmas",0,100,3],
["Farms",0,1100,8],
["Mines",0,12000,47],
["Factories",0,130000,260],
["Banks",0,1400000,1400],
["Temples",0,20000000,7800],
["Wizard Towers",0,330000000,44000],
["Shipments",0,5100000000,260000],
["Alchemy Labs",0,75000000000,1600000],
["Portals",0,1000000000000,10000000],
["Time Machines",0,14000000000000,65000000],
["Antimatter Condensers",0,170000000000000,430000000],
["Prisms",0,2100000000000000,2900000000],
["Chancemakers",0,26000000000000000,21000000000]
];

Biscuit.Upgrades=[ //FORMAT: Building it belongs to - has it or not - name - desc - cost - precursor requirement
["Cursors","false","Reinforced Index Finger","Doubles cursor output and biscuits per bust",100,1],
["Cursors","false","Carpal Tunnel Prevention Cream","Doubles cursor output and biscuits per bust",500,1],
["Cursors","false","Ambidextrous","Doubles cursor output and biscuits per bust",10000,10],
["Cursors","false","Thousand Fingers","The mouse and cursors gain +0.1 per non-cursor building",100000,25],
["Cursors","false","Million Fingers","The mouse and cursor gain +0.5 per non-cursor building",10000000,50],
["Cursors","false","Billion Fingers","The mouse and cursor gain +5 per non-cursor building",100000000,100],
["Cursors","false","Trillion Fingers","The mouse and cursor gain +50 per non-cursor building",1000000000,150],
["Cursors","false","Quadrillion Fingers","The mouse and cursor gain +500 per non-cursor building",10000000000,200],
["Cursors","false","Quintillion Fingers","The mouse and cursor gain +5,000 per non-cursor building",10000000000000,250],
["Cursors","false","Sextillion Fingers","The mouse and cursor gain +50,000 per non-cursor building",10000000000000000,300],
["Cursors","false","Septillion Fingers","The mouse and cursor gain +500,000 per non-cursor building",10000000000000000000,350],
["Cursors","false","Octillion Fingers","The mouse and cursor gain +5 million per non cursor building",10000000000000000000000,400],
["Grandmas","false","Forwards from Grandma","Grandmas are twice as efficient",1000,1],
["Grandmas","false","Steel-plated rolling pins","Grandmas are twice as efficient",5000,5],
["Grandmas","false","Lubricated Dentures","Grandmas are twice as efficient",50000,25],
["Grandmas","false","Prune Juice","Grandmas are twice as efficient",5000000,50],
["Grandmas","false","Double-thick glasses","Grandmas are twice as efficient",500000000,100],
["Grandmas","false","Aging Agents","Grandmas are twice as efficient",50000000000,150],
["Grandmas","false","Xtreme Walkers","Grandmas are twice as efficient",50000000000000,200],
["Grandmas","false","The Unbridling","Grandmas are twice as efficient",50000000000000000,250],
["Grandmas","false","Reverse dimentia","Grandmas are twice as efficient",50000000000000000000,300],
["Farms","false","Cheap hoes","Farms are twice as efficient",11000,1],
["Farms","false","Fertilizer","Farms are twice as efficient",55000,5],
["Farms","false","Biscuit Trees","Farms are twice as efficient",550000,25],
["Farms","false","Genetically-modified Biscuits","Farms are twice as efficient",55000000,50],
["Farms","false","Gingerbread scarecrows","Farms are twice as efficient",5500000000,100],
["Farms","false","Pulsar sprinklers","Farms are twice as efficient",550000000000,150],
["Farms","false","Fudge fungus","Farms are twice as efficient",550000000000000,200],
["Farms","false","Wheat triffids","Farms are twice as efficient",550000000000000000,250],
["Farms","false","Humane pesticides","Farms are twice as efficient",550000000000000000000,300],
["Mines","false","Sugar gas","Mines are twice as efficient",120000,1],
["Mines","false","Megadrill","Mines are twice as efficient",600000,5],
["Mines","false","Ultradrill","Mines are twice as efficient",6000000,25],
["Mines","false","Ultimadrill","Mines are twice as efficient",600000000,50],
["Mines","false","H-bomb Mining","Mines are twice as efficient",60000000000,100],
["Mines","false","Coreforge","Mines are twice as efficient",6000000000000,150],
["Mines","false","Planetsplitters","Mines are twice as efficient",6000000000000000,200],
["Mines","false","Canola oil wells","Mines are twice as efficient",6000000000000000000,250],
["Mines","false","Mole People","Mines are twice as efficient",6000000000000000000000,300],
["Factories","false","Sturdier conveyor belts","Factories are twice as efficient",1300000,1],
["Factories","false","Child labor","Factories are twice as efficient",6500000,5],
["Factories","false","Sweatshop","Factories are twice as efficient",65000000,25],
["Factories","false","Radium reactors","Factories are twice as efficient",6500000000,50],
["Factories","false","Recombobulators","Factories are twice as efficient",650000000000,100],
["Factories","false","Deep-bake process","Factories are twice as efficient",65000000000000,150],
["Factories","false","Cyborg workforce","Factories are twice as efficient",65000000000000000,200],
["Factories","false","78-hour days","Factories are twice as efficient",65000000000000000000,250],
["Factories","false","Machine learning","Factories are twice as efficient",65000000000000000000000,300],
["Banks","false","Taller Tellers","Banks are twice as efficient",14000000,1],
["Banks","false","Scissor-resistant Credit Cards","Banks are twice as efficient",70000000,5],
["Banks","false","Acid-proof vaults","Banks are twice as efficient",700000000,25],
["Banks","false","Chocolate coins","Banks are twice as efficient",70000000000,50],
["Banks","false","Exponential interest rates","Banks are twice as efficient",7000000000000,100],
["Banks","false","Financial zen","Banks are twice as efficient",700000000000000,150],
["Banks","false","Way of the wallet","Banks are twice as efficient",700000000000000000,200],
["Banks","false","The stuff rationale","Banks are twice as efficient",700000000000000000000,250],
["Banks","false","Edible money","Banks are twice as efficient",700000000000000000000,300],
["Temples","false","Golden idols","Temples are twice as efficient",200000000,1],
["Temples","false","Sacrifices","Temples are twice as efficient",1000000000,5],
["Temples","false","Delicious blessing","Temples are twice as efficient",10000000000,25],
["Temples","false","Sun festival","Temples are twice as efficient",1000000000000,50],
["Temples","false","Enlarged pantheon","Temples are twice as efficient",100000000000000,100],
["Temples","false","Great Baker in the sky","Temples are twice as efficient",10000000000000000,150],
["Temples","false","Creation myth","Temples are twice as efficient",10000000000000000000,200],
["Temples","false","Theocracy","Temples are twice as efficient",10000000000000000000000,250],
["Temples","false","Sick rap prayers","Temples are twice as efficient",10000000000000000000000000,300],
["Wizard Towers","false","Pointier hats","Wizard towers are twice as efficient",3300000000,1],
["Wizard Towers","false","Beardlier beards","Wizard towers are twice as efficient",16500000000,5],
["Wizard Towers","false","Ancient grimoires","Wizard towers are twice as efficient",165000000000,25],
["Wizard Towers","false","Kitchen curses","Wizard towers are twice as efficient",16500000000000,50],
["Wizard Towers","false","School of sorcery","Wizard towers are twice as efficient",1650000000000000,100],
["Wizard Towers","false","Dark formulas","Wizard towers are twice as efficient",165000000000000000,150],
["Wizard Towers","false","Cookiemancy","Wizard towers are twice as efficient",165000000000000000000,200],
["Wizard Towers","false","Rabbit trick","Wizard towers are twice as efficient",165000000000000000000000,250],
["Wizard Towers","false","Deluxe tailored wands","Wizard towers are twice as efficient",165000000000000000000000000,300],
["Shipments","false","Vanilla nebulae","Shipments are twice as efficient",51000000000,1],
["Shipments","false","Wormholes","Shipments are twice as efficient",255000000000,5],
["Shipments","false","Frequent flyer","Shipments are twice as efficient",2550000000000,25],
["Shipments","false","Warp drive","Shipments are twice as efficient",255000000000000,50],
["Shipments","false","Chocolate monoliths","Shipments are twice as efficient",25500000000000000,100],
["Shipments","false","Generation ship","Shipments are twice as efficient",2550000000000000000,150],
["Shipments","false","Dyson sphere","Shipments are twice as efficient",2550000000000000000000,200],
["Shipments","false","The final frontier","Shipments are twice as efficient",2550000000000000000000000,250],
["Shipments","false","Autopilot","Shipments are twice as efficient",2550000000000000000000000000,300],
["Alchemy Labs","false","Antimony","Alchemy labs are twice as efficient",750000000000,1],
["Alchemy Labs","false","Essence of dough","Alchemy labs are twice as efficient",3750000000000,5],
["Alchemy Labs","false","True chocolate","Alchemy labs are twice as efficient",37500000000000,25],
["Alchemy Labs","false","Ambrosia","Alchemy labs are twice as efficient",3750000000000000,50],
["Alchemy Labs","false","Aqua crustulae","Alchemy labs are twice as efficient",375000000000000000,100],
["Alchemy Labs","false","Origin crucible","Alchemy labs are twice as efficient",37500000000000000000,150],
["Alchemy Labs","false","Theory of atomic fluidity","Alchemy labs are twice as efficient",37500000000000000000000,200],
["Alchemy Labs","false","Beige goo","Alchemy labs are twice as efficient",37500000000000000000000000,250],
["Alchemy Labs","false","The advent of chemistry","Alchemy labs are twice as efficient",37500000000000000000000000000,300],
["Portals","false","Ancient tablet","Portals are twice as efficient",10000000000000,1],
["Portals","false","Insane oatling workers","Portals are twice as efficient",50000000000000,5],
["Portals","false","Soul bond","Portals are twice as efficient",500000000000000,25],
["Portals","false","Sanity dance","Portals are twice as efficient",50000000000000000,50],
["Portals","false","Brane transplant","Portals are twice as efficient",5000000000000000000,100],
["Portals","false","Deity-sized portals","Portals are twice as efficient",500000000000000000000,150],
["Portals","false","End of times back-up plan","Portals are twice as efficient",500000000000000000000000,200],
["Portals","false","Maddening chants","Portals are twice as efficient",500000000000000000000000000,250],
["Portals","false","The real world","Portals are twice as efficient",500000000000000000000000000000,300],
["Time Machines","false","Flux capacitors","Time machines are twice as efficient",140000000000000,1],
["Time Machines","false","Time paradox resolver","Time machines are twice as efficient",700000000000000,5],
["Time Machines","false","Quantum conundrum","Time machines are twice as efficient",7000000000000000,25],
["Time Machines","false","Causality enforcer","Time machines are twice as efficient",700000000000000000,50],
["Time Machines","false","Yestermorrow comparators","Time machines are twice as efficient",70000000000000000000,100],
["Time Machines","false","Far future enactment","Time machines are twice as efficient",7000000000000000000000,150],
["Time Machines","false","Great loop hypothesis","Time machines are twice as efficient",7000000000000000000000000,200],
["Time Machines","false","Cookietopian moments of maybe","Time machines are twice as efficient",7000000000000000000000000000,250],
["Time Machines","false","Second seconds","Time machines are twice as efficient",7000000000000000000000000000000,300],
["Antimatter Condensers","false","Sugar bosons","Antimatter condensers are twice as efficient",1700000000000000,1],
["Antimatter Condensers","false","String theory","Antimatter condensers are twice as efficient",8500000000000000,5],
["Antimatter Condensers","false","Large macaron collider","Antimatter condensers are twice as efficient",85000000000000000,25],
["Antimatter Condensers","false","Big bang bake","Antimatter condensers are twice as efficient",8500000000000000000,50],
["Antimatter Condensers","false","Reverse cyclotrons","Antimatter condensers are twice as efficient",850000000000000000000,100],
["Antimatter Condensers","false","Nanocosmics","Antimatter condensers are twice as efficient",85000000000000000000000,150],
["Antimatter Condensers","false","The Pulse","Antimatter condensers are twice as efficient",85000000000000000000000000,200],
["Antimatter Condensers","false","Some other super-tiny fundamental particle? Probably?","Antimatter condensers are twice as efficient",85000000000000000000000000000,250],
["Antimatter Condensers","false","Quantum comb","Antimatter condensers are twice as efficient",85000000000000000000000000000000,300],
["Prisms","false","Gem polish","Prims are twice as efficient",21000000000000000,1],
["Prisms","false","9th color","Prims are twice as efficient",105000000000000000,5],
["Prisms","false","Chocolate light","Prims are twice as efficient",1050000000000000000,25],
["Prisms","false","Grainbow","Prims are twice as efficient",105000000000000000000,50],
["Prisms","false","Pure cosmic light","Prims are twice as efficient",10500000000000000000000,100],
["Prisms","false","Glow-in-the-dark","Prims are twice as efficient",1050000000000000000000000,150],
["Prisms","false","Lux sanctorum","Prims are twice as efficient",1050000000000000000000000000,200],
["Prisms","false","Reverse shadows","Prims are twice as efficient",1050000000000000000000000000000,250],
["Prisms","false","Crystal mirrors","Prims are twice as efficient",1050000000000000000000000000000000,300],
["Chancemakers","false","Your lucky cookie","Chancemakers are twice as efficient",260000000000000000,1],
["Chancemakers","false","'All Bets Are Off' magic coin","Chancemakers are twice as efficient",130000000000000000,5],
["Chancemakers","false","Winning lottery ticket","Chancemakers are twice as efficient",13000000000000000000,25],
["Chancemakers","false","Four-leaf clover field","Chancemakers are twice as efficient",130000000000000000000,50],
["Chancemakers","false","A recipe book about books","Chancemakers are twice as efficient",13000000000000000000000,100],
["Chancemakers","false","Leprechaun village","Chancemakers are twice as efficient",13000000000000000000000000,150],
["Chancemakers","false","Improbability drive","Chancemakers are twice as efficient",13000000000000000000000000000,200],
["Chancemakers","false","Antisuperstistronics","Chancemakers are twice as efficient",13000000000000000000000000000000,250],
["Chancemakers","false","Bunnypedes","Chancemakers are twice as efficient",13000000000000000000000000000000000,300]
]

Biscuit.biscuits = 0;
Biscuit.biscuitsPerBust = 1;
Biscuit.biscuitsPerSecond = 0;
Biscuit.biscuitsEarned = 0;
Biscuit.biscuitsSpent = 0;
Biscuit.biscuitClicks = 0;
Biscuit.buildingsOwned = 0;
Biscuit.handmadeBiscuits = 0;
Biscuit.totalUpgrades = 0;

function ShopButtonsEnable(){
	for (x = 0; x < Biscuit.Buildings.length; x++){
		document.getElementById(Biscuit.Buildings[x][0]+"Button").className = "group";
	}
}

Biscuit.BuyUpgrade=function(index){
	if (Biscuit.biscuits >= Biscuit.Upgrades[index][4]) {
		Biscuit.Spend(Biscuit.Upgrades[index][4]);
		Biscuit.Upgrades[index][1] = "true";
		Biscuit.UpdateShopMenu(Biscuit.Upgrades[index][0]);
		Biscuit.CalculateCPS = true;
		Biscuit.totalUpgrades++;
	} else {
		document.getElementById("cannotAffordItem").innerHTML = "You cannot afford this upgrade! You need <b>" + Biscuit.FormatNumber(Biscuit.Upgrades[index][4] - Biscuit.biscuits,0,"normal") + "</b> more cookies!";
		setTimeout(Biscuit.EmptyCannotAfford,1500)
	}
}

Biscuit.UpdateShopMenu=function(upgradeType){
	ShopButtonsEnable();
	for(x = 0; x < Biscuit.Buildings.length; x++){
		if(Biscuit.Buildings[x][0] == upgradeType){
			document.getElementById(upgradeType+"Button").className = "group selected";
			document.getElementById("shopTitle").innerHTML = upgradeType;
			document.getElementById("shopInfo").innerHTML = upgradeType + " currently produce <b>" + Biscuit.FormatNumber(Biscuit.Buildings[x][3],1, "ps") + "</b> biscuits per second each.<br/>With a combined total of <b>" + Biscuit.FormatNumber(Biscuit.Buildings[x][3] * Biscuit.Buildings[x][1],1, "ps") + "</b> biscuits per second.<br/>You currently own <b>" + Biscuit.FormatNumber(Biscuit.Buildings[x][1],0,"normal") + "</b> " + upgradeType.toLowerCase();
			document.getElementById("buyButton").innerHTML = "<b>Cost: " + Biscuit.FormatNumber(Biscuit.Buildings[x][2],0, "normal")+"</b>";
			document.getElementById("buyButton").onclick = function() {
				if (Biscuit.biscuits >= Biscuit.Buildings[x][2]){ 
					Biscuit.Spend(Biscuit.Buildings[x][2]); 
					Biscuit.buildingsOwned += 1;
					Biscuit.Buildings[x][2] = Math.round(Biscuit.Buildings[x][2] *= 1.15);
					Biscuit.Buildings[x][1] += 1;
					document.getElementById(upgradeType+"Count").innerHTML = "x " + Biscuit.FormatNumber(Biscuit.Buildings[x][1],0,"normal");
					document.getElementById("cannotAffordItem").innerHTML = "";
					Biscuit.UpdateShopMenu(upgradeType);
					Biscuit.CalculateCPS = true;
				} else {
					document.getElementById("cannotAffordItem").innerHTML = "You cannot afford this yet! You need <b>" + Biscuit.FormatNumber(Biscuit.Buildings[x][2] - Biscuit.biscuits,0,"normal") + "</b> more biscuits!";
					Biscuit.UpdateShopMenu(upgradeType);
					setTimeout(Biscuit.EmptyCannotAfford,1500);
				}
			}
			document.getElementById("shopUpgradeInfo").innerHTML = "";
			for (y = 0; y < Biscuit.Upgrades.length; y++) {
				if (Biscuit.Upgrades[y][0] == upgradeType){
					if(Biscuit.Buildings[x][1] >= Biscuit.Upgrades[y][5] && Biscuit.Upgrades[y][1] == "false" ){
						document.getElementById("shopUpgradeInfo").innerHTML += "<button onclick='Biscuit.BuyUpgrade(" + y + ")' class='upgradeButton'><p class='white' align='center'><b>" + Biscuit.Upgrades[y][2] + "</b><br/><br/><b>Cost: " + Biscuit.FormatNumber(Biscuit.Upgrades[y][4],0,"normal") + "</b><br/><br/>" + Biscuit.Upgrades[y][3] + "</p></button>"		
					}
				}
			}
			break;
		}
	}
}

Biscuit.EmptyCannotAfford=function(){
	document.getElementById("cannotAffordItem").innerHTML = "";
}

Biscuit.ExportSaveNavigation=function(){
	if(navOpen != true){ //So you cant open both menus at once
		str = Biscuit.WriteSave();
		document.getElementById("exportSave").value = str; //ezpz
		$("#exportSaveDiv").css({
			"display":"block"
		})
		navOpen = true;
	}
}

Biscuit.ExportSaveClose=function(){
	$("#exportSaveDiv").css({
		"display":"none"
	})
	navOpen = false;
}

Biscuit.ImportSaveNavigation=function(){
	if(navOpen != true){
		$("#importSaveDiv").css({
			"display":"block"
		})
		navOpen = true;
	}
}

Biscuit.ImportSave=function(){
	var str = document.getElementById("importSave").value;
	if (str == ""){
		console.log("No save data imported");
	} else {
		Biscuit.LoadSave(str);
	}
	$("#importSaveDiv").css({
		"display":"none"
	})
	document.getElementById("importSave").value = "";
	navOpen = false;
}

Biscuit.Load=function(){
	$("#exportSaveDiv").css({
		"display":"none"
	})
	$("#importSaveDiv").css({
		"display":"none"
	})
	Biscuit.PreLoop();
	Biscuit.MainLoop();
}

Biscuit.UpdateCookieDisplays=function(){
	document.getElementById("windowTitle").innerHTML = "Biscuits &bull; " + Biscuit.FormatNumber(Biscuit.biscuits, 0, "normal")
	document.getElementById("biscuitText").innerHTML = Biscuit.FormatNumber(Biscuit.biscuits, 0, "normal");
	document.getElementById("biscuitPSText").innerHTML = "per second: " + Biscuit.FormatNumber(Biscuit.biscuitsPerSecond, 1, "ps");
	document.getElementById("biscuitPBText").innerHTML = "per bust: " + Biscuit.FormatNumber(Biscuit.biscuitsPerBust, 1, "ps");
	document.getElementById("StatsBlock").innerHTML = "Biscuits in bank: <b>"+Biscuit.FormatNumber(Biscuit.biscuits,0,"normal")+"</b><br/>Total Biscuit Clicks: <b>"+Biscuit.FormatNumber(Biscuit.biscuitClicks,0,"normal")+"</b><br/>Total Biscuits Spent: <b>"+Biscuit.FormatNumber(Biscuit.biscuitsSpent,0,"normal")+"</b><br/>Total Buildings Owned: <b>" + Biscuit.FormatNumber(Biscuit.buildingsOwned,0,"normal")+"</b><br/>All-Time Biscuit Count: <b>"+Biscuit.FormatNumber(Biscuit.biscuitsEarned,0,"normal")+"</b><br/>Total handmade biscuits: <b>"+Biscuit.FormatNumber(Biscuit.handmadeBiscuits,0,"normal")+"</b><br/>Total upgrades purchased: <b>" + Biscuit.FormatNumber(Biscuit.totalUpgrades,0,"normal") + "</b><br/>Amount of times \"Stop playing that biscuit game!\" has been said: <b>1,234,567</b>";
}

Biscuit.GetLocalStorage=function(){
	var local=0;
	try{local=window.localStorage.getItem(key);}catch(exception){};
	return local;
}

Biscuit.SetLocalStorage=function(str){
	var local=0;
	try{local=window.localStorage.setItem(key,str);}catch (exception){}
	return local;
}

Biscuit.UpdateBuildingCountOnButtons=function(){
	for (x = 0; x < Biscuit.Buildings.length; x++){
		document.getElementById(Biscuit.Buildings[x][0]+"Count").innerHTML = "x " + Biscuit.FormatNumber(Biscuit.Buildings[x][1],0,"normal");
	}
}

Biscuit.PreLoop=function(){
	Biscuit.UpdateShopMenu("Cursors");
	var local = 0;
	local = Biscuit.GetLocalStorage();
	if(!local) {
		console.log("No Save Found");
	} else {
		console.log("Loading Save");
		Biscuit.LoadSave(local);
	}
}

Biscuit.WriteSave=function(){
	var str = "";
	str += "BISCUITBUSTERSAVE|"
	str += Biscuit.biscuits + "|";
	str += Biscuit.biscuitsPerBust + "|";
	str += Biscuit.biscuitsPerSecond + "|";
	str += Biscuit.biscuitsEarned + "|";
	str += Biscuit.biscuitsSpent + "|";
	for (x = 0; x < Biscuit.Buildings.length; x++){
		str += Biscuit.Buildings[x][1] + "|";
		str += Biscuit.Buildings[x][2] + "|";
		str += Biscuit.Buildings[x][3] + "|";
	}
	str += Biscuit.biscuitClicks + "|";
	str += Biscuit.buildingsOwned + "|";
	str += Biscuit.handmadeBiscuits + "|";
	for (x = 0; x < Biscuit.Upgrades.length; x++){
		str += Biscuit.Upgrades[x][1] + "|";
	}
	str += Biscuit.totalUpgrades + "|";


	//Convert to B64
	str = utf8_to_b64(str);
	Biscuit.SetLocalStorage(str);
	localT = Biscuit.GetLocalStorage();
	if (!localT){
		console.log("Couldn't save for some reason");
	} else {
		console.log("Saved Properly");
	}
	return str;
}

Biscuit.LoadSave=function(data){
	var str = ""
	if(data)str=unescape(data); //ye no you ain't loading random shit mate :)
	str=b64_to_utf8(str);
	if(str!=""){
		str=str.split('|');
		if(str[0] == "BISCUITBUSTERSAVE"){
			Biscuit.biscuits = parseFloat(str[1]);
			Biscuit.biscuitsPerBust = parseFloat(str[2]);
			Biscuit.biscuitsPerSecond = parseFloat(str[3]);
			Biscuit.biscuitsEarned = parseFloat(str[4]);
			Biscuit.biscuitSpent = parseFloat(str[5]);
			Biscuit.Buildings[0][1] = parseFloat(str[6]);//Cursors
			Biscuit.Buildings[0][2] = parseFloat(str[7]);
			Biscuit.Buildings[0][3] = parseFloat(str[8]);
			Biscuit.Buildings[1][1] = parseFloat(str[9]);//Grandmas
			Biscuit.Buildings[1][2] = parseFloat(str[10]); 
			Biscuit.Buildings[1][3] = parseFloat(str[11]);
			Biscuit.Buildings[2][1] = parseFloat(str[12]);//Farms
			Biscuit.Buildings[2][2] = parseFloat(str[13]);
			Biscuit.Buildings[2][3] = parseFloat(str[14]);
			Biscuit.Buildings[3][1] = parseFloat(str[15]);//Mines
			Biscuit.Buildings[3][2] = parseFloat(str[16]);
			Biscuit.Buildings[3][3] = parseFloat(str[17]);
			Biscuit.Buildings[4][1] = parseFloat(str[18]);//Factories
			Biscuit.Buildings[4][2] = parseFloat(str[19]);
			Biscuit.Buildings[4][3] = parseFloat(str[20]);
			Biscuit.Buildings[5][1] = parseFloat(str[21]);//Banks
			Biscuit.Buildings[5][2] = parseFloat(str[22]);
			Biscuit.Buildings[5][3] = parseFloat(str[23]);
			Biscuit.Buildings[6][1] = parseFloat(str[24]);//Temples
			Biscuit.Buildings[6][2] = parseFloat(str[25]);
			Biscuit.Buildings[6][3] = parseFloat(str[26]);
			Biscuit.Buildings[7][1] = parseFloat(str[27]);//Wizard Towers
			Biscuit.Buildings[7][2] = parseFloat(str[28]);
			Biscuit.Buildings[7][3] = parseFloat(str[29]);
			Biscuit.Buildings[8][1] = parseFloat(str[30]);//Shipments
			Biscuit.Buildings[8][2] = parseFloat(str[31]);
			Biscuit.Buildings[8][3] = parseFloat(str[32]);
			Biscuit.Buildings[9][1] = parseFloat(str[33]);//Alchemy Labs
			Biscuit.Buildings[9][2] = parseFloat(str[34]);
			Biscuit.Buildings[9][3] = parseFloat(str[35]);
			Biscuit.Buildings[10][1] = parseFloat(str[36]);//Portals
			Biscuit.Buildings[10][2] = parseFloat(str[37]);
			Biscuit.Buildings[10][3] = parseFloat(str[38]);
			Biscuit.Buildings[11][1] = parseFloat(str[39]);//Time Machines
			Biscuit.Buildings[11][2] = parseFloat(str[40]);
			Biscuit.Buildings[11][3] = parseFloat(str[41]);
			Biscuit.Buildings[12][1] = parseFloat(str[42]);//Antimatter Condensers
			Biscuit.Buildings[12][2] = parseFloat(str[43]);
			Biscuit.Buildings[12][3] = parseFloat(str[44]);
			Biscuit.Buildings[13][1] = parseFloat(str[45]);//Prisms
			Biscuit.Buildings[13][2] = parseFloat(str[46]);
			Biscuit.Buildings[13][3] = parseFloat(str[47]);
			Biscuit.Buildings[14][1] = parseFloat(str[48]);//Chancemakers
			Biscuit.Buildings[14][2] = parseFloat(str[49]);
			Biscuit.Buildings[14][3] = parseFloat(str[50]);
			Biscuit.biscuitClicks = parseFloat(str[51]);
			Biscuit.buildingsOwned = parseFloat(str[52]);
			Biscuit.handmadeBiscuits = parseFloat(str[53]);
			Biscuit.Upgrades[0][1] = str[54];
			Biscuit.Upgrades[1][1] = str[55];
			Biscuit.Upgrades[2][1] = str[56];
			Biscuit.Upgrades[3][1] = str[57];
			Biscuit.Upgrades[4][1] = str[58];
			Biscuit.Upgrades[5][1] = str[59];
			Biscuit.Upgrades[6][1] = str[60];
			Biscuit.Upgrades[7][1] = str[61];
			Biscuit.Upgrades[8][1] = str[62];
			Biscuit.Upgrades[9][1] = str[63];
			Biscuit.Upgrades[10][1] = str[64];
			Biscuit.Upgrades[11][1] = str[65];
			Biscuit.Upgrades[12][1] = str[66];
			Biscuit.Upgrades[13][1] = str[67];
			Biscuit.Upgrades[14][1] = str[68];
			Biscuit.Upgrades[15][1] = str[69];
			Biscuit.Upgrades[16][1] = str[70];
			Biscuit.Upgrades[17][1] = str[71];
			Biscuit.Upgrades[18][1] = str[72];
			Biscuit.Upgrades[19][1] = str[73];
			Biscuit.Upgrades[20][1] = str[74];
			Biscuit.Upgrades[21][1] = str[75];
			Biscuit.Upgrades[22][1] = str[76];
			Biscuit.Upgrades[23][1] = str[77];
			Biscuit.Upgrades[24][1] = str[78];
			Biscuit.Upgrades[25][1] = str[79];
			Biscuit.Upgrades[26][1] = str[80];
			Biscuit.Upgrades[27][1] = str[81];
			Biscuit.Upgrades[28][1] = str[82];
			Biscuit.Upgrades[29][1] = str[83];
			Biscuit.Upgrades[30][1] = str[84];
			Biscuit.Upgrades[31][1] = str[85];
			Biscuit.Upgrades[32][1] = str[86];
			Biscuit.Upgrades[33][1] = str[87];
			Biscuit.Upgrades[34][1] = str[88];
			Biscuit.Upgrades[35][1] = str[89];
			Biscuit.Upgrades[36][1] = str[90];
			Biscuit.Upgrades[37][1] = str[91];
			Biscuit.Upgrades[38][1] = str[92];
			Biscuit.Upgrades[39][1] = str[93];
			Biscuit.Upgrades[40][1] = str[94];
			Biscuit.Upgrades[41][1] = str[95];
			Biscuit.Upgrades[42][1] = str[96];
			Biscuit.Upgrades[43][1] = str[97];
			Biscuit.Upgrades[44][1] = str[98];
			Biscuit.Upgrades[45][1] = str[99];
			Biscuit.Upgrades[46][1] = str[100];
			Biscuit.Upgrades[47][1] = str[101];
			Biscuit.Upgrades[48][1] = str[102];
			Biscuit.Upgrades[49][1] = str[103];
			Biscuit.Upgrades[50][1] = str[104];
			Biscuit.Upgrades[51][1] = str[105];
			Biscuit.Upgrades[52][1] = str[106];
			Biscuit.Upgrades[53][1] = str[107];
			Biscuit.Upgrades[54][1] = str[108];
			Biscuit.Upgrades[55][1] = str[109];
			Biscuit.Upgrades[56][1] = str[110];
			Biscuit.Upgrades[57][1] = str[111];
			Biscuit.Upgrades[58][1] = str[112];
			Biscuit.Upgrades[59][1] = str[113];
			Biscuit.Upgrades[60][1] = str[114];
			Biscuit.Upgrades[61][1] = str[115];
			Biscuit.Upgrades[62][1] = str[116];
			Biscuit.Upgrades[63][1] = str[117];
			Biscuit.Upgrades[64][1] = str[118];
			Biscuit.Upgrades[65][1] = str[119];
			Biscuit.Upgrades[66][1] = str[120];
			Biscuit.Upgrades[67][1] = str[121];
			Biscuit.Upgrades[68][1] = str[122];
			Biscuit.Upgrades[69][1] = str[123];
			Biscuit.Upgrades[70][1] = str[124];
			Biscuit.Upgrades[71][1] = str[125];
			Biscuit.Upgrades[72][1] = str[126];
			Biscuit.Upgrades[73][1] = str[127];
			Biscuit.Upgrades[74][1] = str[128];
			Biscuit.Upgrades[75][1] = str[129];
			Biscuit.Upgrades[76][1] = str[130];
			Biscuit.Upgrades[77][1] = str[131];
			Biscuit.Upgrades[78][1] = str[132];
			Biscuit.Upgrades[79][1] = str[133];
			Biscuit.Upgrades[80][1] = str[134];
			Biscuit.Upgrades[81][1] = str[135];
			Biscuit.Upgrades[82][1] = str[136];
			Biscuit.Upgrades[83][1] = str[137];
			Biscuit.Upgrades[84][1] = str[138];
			Biscuit.Upgrades[85][1] = str[139];
			Biscuit.Upgrades[86][1] = str[140];
			Biscuit.Upgrades[87][1] = str[141];
			Biscuit.Upgrades[88][1] = str[142];
			Biscuit.Upgrades[89][1] = str[143];
			Biscuit.Upgrades[90][1] = str[144];
			Biscuit.Upgrades[91][1] = str[145];
			Biscuit.Upgrades[92][1] = str[146];
			Biscuit.Upgrades[93][1] = str[147];
			Biscuit.Upgrades[94][1] = str[148];
			Biscuit.Upgrades[95][1] = str[149];
			Biscuit.Upgrades[96][1] = str[150];
			Biscuit.Upgrades[97][1] = str[151];
			Biscuit.Upgrades[98][1] = str[152];
			Biscuit.Upgrades[99][1] = str[153];
			Biscuit.Upgrades[100][1] = str[154];
			Biscuit.Upgrades[101][1] = str[155];
			Biscuit.Upgrades[102][1] = str[156];
			Biscuit.Upgrades[103][1] = str[157];
			Biscuit.Upgrades[104][1] = str[158];
			Biscuit.Upgrades[105][1] = str[159];
			Biscuit.Upgrades[106][1] = str[160];
			Biscuit.Upgrades[107][1] = str[161];
			Biscuit.Upgrades[108][1] = str[162];
			Biscuit.Upgrades[109][1] = str[163];
			Biscuit.Upgrades[110][1] = str[164];
			Biscuit.Upgrades[111][1] = str[165];
			Biscuit.Upgrades[112][1] = str[166];
			Biscuit.Upgrades[113][1] = str[167];
			Biscuit.Upgrades[114][1] = str[168];
			Biscuit.Upgrades[115][1] = str[169];
			Biscuit.Upgrades[116][1] = str[170];
			Biscuit.Upgrades[117][1] = str[171];
			Biscuit.Upgrades[118][1] = str[172];
			Biscuit.Upgrades[119][1] = str[173];
			Biscuit.Upgrades[120][1] = str[174];
			Biscuit.Upgrades[121][1] = str[175];
			Biscuit.Upgrades[122][1] = str[176];
			Biscuit.Upgrades[123][1] = str[177];
			Biscuit.Upgrades[124][1] = str[178];
			Biscuit.Upgrades[125][1] = str[179];
			Biscuit.Upgrades[126][1] = str[180];
			Biscuit.Upgrades[127][1] = str[181];
			Biscuit.Upgrades[128][1] = str[182];
			Biscuit.Upgrades[129][1] = str[183];
			Biscuit.Upgrades[130][1] = str[184];
			Biscuit.Upgrades[131][1] = str[185];
			Biscuit.Upgrades[132][1] = str[186];
			Biscuit.Upgrades[133][1] = str[187];
			Biscuit.Upgrades[134][1] = str[188];
			Biscuit.Upgrades[135][1] = str[189];
			Biscuit.Upgrades[136][1] = str[190];
			Biscuit.Upgrades[137][1] = str[191];
			Biscuit.totalUpgrades = parseFloat(str[192]);
		} else {
			console.log("Dont import random stuff you pleb");
		}
	}
	Biscuit.UpdateShopMenu("Cursors");
	Biscuit.UpdateBuildingCountOnButtons();
}

Biscuit.MainLoop=function(){
	//Do Game Logic
	Biscuit.Logic();
	//Loop 30 times a second
	if (document.hasFocus()){
		setTimeout(Biscuit.MainLoop,1000/gameFps);
	} else {
		setTimeout(Biscuit.MainLoop,1000);
	}
}

Biscuit.CalculateCPS = true;

Biscuit.Logic=function(){
	//Update Text
	Biscuit.UpdateCookieDisplays();
	//Handle biscutispersec - Only calculates when needed to save peformance
	if (Biscuit.CalculateCPS)
		Biscuit.CalculateBPS();
	if (document.hasFocus()){
		Biscuit.Earn(Biscuit.biscuitsPerSecond/gameFps);
	} else {
		Biscuit.Earn(Biscuit.biscuitsPerSecond);
	}
}

Biscuit.CalculateBPS=function(){
	Biscuit.CalculateCPS = false; //C for erm, count? 
	console.log("Calculating BPS");
	//Again can optimise this also but wouldn't save any lines cus its so short anyways
	if (Biscuit.Upgrades[0][1] == "true" && Biscuit.Buildings[0][3] == 0.1) { Biscuit.Buildings[0][3] *= 2; Biscuit.biscuitsPerBust *=2; Biscuit.UpdateShopMenu("Cursors"); }
	if (Biscuit.Upgrades[1][1] == "true" && Biscuit.Buildings[0][3] == 0.2) { Biscuit.Buildings[0][3] *= 2; Biscuit.biscuitsPerBust *=2; Biscuit.UpdateShopMenu("Cursors"); }
	if (Biscuit.Upgrades[2][1] == "true" && Biscuit.Buildings[0][3] == 0.4) { Biscuit.Buildings[0][3] *= 2; Biscuit.biscuitsPerBust *=2; Biscuit.UpdateShopMenu("Cursors"); }
	//This is optimisable, I'll do it when I can be assed
	if (Biscuit.Upgrades[3][1] == "true") { Biscuit.Buildings[0][3] = 0.8 + (0.1 * (Biscuit.buildingsOwned - Biscuit.Buildings[0][1])); Biscuit.biscuitsPerBust =  8 + (0.1 * (Biscuit.buildingsOwned - Biscuit.Buildings[0][1]))}
	if (Biscuit.Upgrades[4][1] == "true") { Biscuit.Buildings[0][3] = 0.8 + (0.5 * (Biscuit.buildingsOwned - Biscuit.Buildings[0][1])); Biscuit.biscuitsPerBust =  8 + (0.5 * (Biscuit.buildingsOwned - Biscuit.Buildings[0][1]))}
	if (Biscuit.Upgrades[5][1] == "true") { Biscuit.Buildings[0][3] = 0.8 + (5 * (Biscuit.buildingsOwned - Biscuit.Buildings[0][1])); Biscuit.biscuitsPerBust =  8 + (5 * (Biscuit.buildingsOwned - Biscuit.Buildings[0][1]))}
	if (Biscuit.Upgrades[6][1] == "true") { Biscuit.Buildings[0][3] = 0.8 + (50 * (Biscuit.buildingsOwned - Biscuit.Buildings[0][1])); Biscuit.biscuitsPerBust =  8 + (50 * (Biscuit.buildingsOwned - Biscuit.Buildings[0][1]))}
	if (Biscuit.Upgrades[7][1] == "true") { Biscuit.Buildings[0][3] = 0.8 + (500 * (Biscuit.buildingsOwned - Biscuit.Buildings[0][1])); Biscuit.biscuitsPerBust =  8 + (500 * (Biscuit.buildingsOwned - Biscuit.Buildings[0][1]))}
	if (Biscuit.Upgrades[8][1] == "true") { Biscuit.Buildings[0][3] = 0.8 + (5000 * (Biscuit.buildingsOwned - Biscuit.Buildings[0][1])); Biscuit.biscuitsPerBust =  8 + (5000 * (Biscuit.buildingsOwned - Biscuit.Buildings[0][1]))}
	if (Biscuit.Upgrades[9][1] == "true") { Biscuit.Buildings[0][3] = 0.8 + (50000 * (Biscuit.buildingsOwned - Biscuit.Buildings[0][1])); Biscuit.biscuitsPerBust =  8 + (50000 * (Biscuit.buildingsOwned - Biscuit.Buildings[0][1]))}
	if (Biscuit.Upgrades[10][1] == "true") { Biscuit.Buildings[0][3] = 0.8 + (500000 * (Biscuit.buildingsOwned - Biscuit.Buildings[0][1])); Biscuit.biscuitsPerBust =  8 + (500000 * (Biscuit.buildingsOwned - Biscuit.Buildings[0][1]))}
	if (Biscuit.Upgrades[11][1] == "true") { Biscuit.Buildings[0][3] = 0.8 + (5000000 * (Biscuit.buildingsOwned - Biscuit.Buildings[0][1])); Biscuit.biscuitsPerBust =  8 + (5000000 * (Biscuit.buildingsOwned - Biscuit.Buildings[0][1]))}

	//Grandmas
	if (Biscuit.Upgrades[12][1] == "true" && Biscuit.Buildings[1][3] == 3) { Biscuit.Buildings[1][3] *= 2; Biscuit.UpdateShopMenu("Grandmas"); }
	if (Biscuit.Upgrades[13][1] == "true" && Biscuit.Buildings[1][3] == 6) { Biscuit.Buildings[1][3] *= 2; Biscuit.UpdateShopMenu("Grandmas"); }
	if (Biscuit.Upgrades[14][1] == "true" && Biscuit.Buildings[1][3] == 12) { Biscuit.Buildings[1][3] *= 2; Biscuit.UpdateShopMenu("Grandmas"); }
	if (Biscuit.Upgrades[15][1] == "true" && Biscuit.Buildings[1][3] == 24) { Biscuit.Buildings[1][3] *= 2; Biscuit.UpdateShopMenu("Grandmas"); }
	if (Biscuit.Upgrades[16][1] == "true" && Biscuit.Buildings[1][3] == 48) { Biscuit.Buildings[1][3] *= 2; Biscuit.UpdateShopMenu("Grandmas"); }
	if (Biscuit.Upgrades[17][1] == "true" && Biscuit.Buildings[1][3] == 96) { Biscuit.Buildings[1][3] *= 2; Biscuit.UpdateShopMenu("Grandmas"); }
	if (Biscuit.Upgrades[18][1] == "true" && Biscuit.Buildings[1][3] == 192) { Biscuit.Buildings[1][3] *= 2; Biscuit.UpdateShopMenu("Grandmas"); }
	if (Biscuit.Upgrades[19][1] == "true" && Biscuit.Buildings[1][3] == 384) { Biscuit.Buildings[1][3] *= 2; Biscuit.UpdateShopMenu("Grandmas"); }
	if (Biscuit.Upgrades[20][1] == "true" && Biscuit.Buildings[1][3] == 768) { Biscuit.Buildings[1][3] *= 2; Biscuit.UpdateShopMenu("Grandmas"); }
	//Farms
	if (Biscuit.Upgrades[21][1] == "true" && Biscuit.Buildings[2][3] == 8) { Biscuit.Buildings[2][3] *= 2; Biscuit.UpdateShopMenu("Farms"); }
	if (Biscuit.Upgrades[22][1] == "true" && Biscuit.Buildings[2][3] == 16) { Biscuit.Buildings[2][3] *= 2; Biscuit.UpdateShopMenu("Farms"); }
	if (Biscuit.Upgrades[23][1] == "true" && Biscuit.Buildings[2][3] == 32) { Biscuit.Buildings[2][3] *= 2; Biscuit.UpdateShopMenu("Farms"); }
	if (Biscuit.Upgrades[24][1] == "true" && Biscuit.Buildings[2][3] == 64) { Biscuit.Buildings[2][3] *= 2; Biscuit.UpdateShopMenu("Farms"); }
	if (Biscuit.Upgrades[25][1] == "true" && Biscuit.Buildings[2][3] == 128) { Biscuit.Buildings[2][3] *= 2; Biscuit.UpdateShopMenu("Farms"); }
	if (Biscuit.Upgrades[26][1] == "true" && Biscuit.Buildings[2][3] == 256) { Biscuit.Buildings[2][3] *= 2; Biscuit.UpdateShopMenu("Farms"); }
	if (Biscuit.Upgrades[27][1] == "true" && Biscuit.Buildings[2][3] == 512) { Biscuit.Buildings[2][3] *= 2; Biscuit.UpdateShopMenu("Farms"); }
	if (Biscuit.Upgrades[28][1] == "true" && Biscuit.Buildings[2][3] == 1024) { Biscuit.Buildings[2][3] *= 2; Biscuit.UpdateShopMenu("Farms"); }
	if (Biscuit.Upgrades[29][1] == "true" && Biscuit.Buildings[2][3] == 2048) { Biscuit.Buildings[2][3] *= 2; Biscuit.UpdateShopMenu("Farms"); }
	//Mines
	if (Biscuit.Upgrades[30][1] == "true" && Biscuit.Buildings[3][3] == 47) { Biscuit.Buildings[3][3] *= 2; Biscuit.UpdateShopMenu("Mines"); }
	if (Biscuit.Upgrades[31][1] == "true" && Biscuit.Buildings[3][3] == 94) { Biscuit.Buildings[3][3] *= 2; Biscuit.UpdateShopMenu("Mines"); }
	if (Biscuit.Upgrades[32][1] == "true" && Biscuit.Buildings[3][3] == 188) { Biscuit.Buildings[3][3] *= 2; Biscuit.UpdateShopMenu("Mines"); }
	if (Biscuit.Upgrades[33][1] == "true" && Biscuit.Buildings[3][3] == 376) { Biscuit.Buildings[3][3] *= 2; Biscuit.UpdateShopMenu("Mines"); }
	if (Biscuit.Upgrades[34][1] == "true" && Biscuit.Buildings[3][3] == 752) { Biscuit.Buildings[3][3] *= 2; Biscuit.UpdateShopMenu("Mines"); }
	if (Biscuit.Upgrades[35][1] == "true" && Biscuit.Buildings[3][3] == 1504) { Biscuit.Buildings[3][3] *= 2; Biscuit.UpdateShopMenu("Mines"); }
	if (Biscuit.Upgrades[36][1] == "true" && Biscuit.Buildings[3][3] == 3008) { Biscuit.Buildings[3][3] *= 2; Biscuit.UpdateShopMenu("Mines"); }
	if (Biscuit.Upgrades[37][1] == "true" && Biscuit.Buildings[3][3] == 6016) { Biscuit.Buildings[3][3] *= 2; Biscuit.UpdateShopMenu("Mines"); }
	if (Biscuit.Upgrades[38][1] == "true" && Biscuit.Buildings[3][3] == 12032) { Biscuit.Buildings[3][3] *= 2; Biscuit.UpdateShopMenu("Mines"); }
	//Factories
	if (Biscuit.Upgrades[39][1] == "true" && Biscuit.Buildings[4][3] == 260) { Biscuit.Buildings[4][3] *= 2; Biscuit.UpdateShopMenu("Factories"); }
	if (Biscuit.Upgrades[40][1] == "true" && Biscuit.Buildings[4][3] == 520) { Biscuit.Buildings[4][3] *= 2; Biscuit.UpdateShopMenu("Factories"); }
	if (Biscuit.Upgrades[41][1] == "true" && Biscuit.Buildings[4][3] == 1040) { Biscuit.Buildings[4][3] *= 2; Biscuit.UpdateShopMenu("Factories"); }
	if (Biscuit.Upgrades[42][1] == "true" && Biscuit.Buildings[4][3] == 2080) { Biscuit.Buildings[4][3] *= 2; Biscuit.UpdateShopMenu("Factories"); }
	if (Biscuit.Upgrades[43][1] == "true" && Biscuit.Buildings[4][3] == 4160) { Biscuit.Buildings[4][3] *= 2; Biscuit.UpdateShopMenu("Factories"); }
	if (Biscuit.Upgrades[44][1] == "true" && Biscuit.Buildings[4][3] == 8320) { Biscuit.Buildings[4][3] *= 2; Biscuit.UpdateShopMenu("Factories"); }
	if (Biscuit.Upgrades[45][1] == "true" && Biscuit.Buildings[4][3] == 16640) { Biscuit.Buildings[4][3] *= 2; Biscuit.UpdateShopMenu("Factories"); }
	if (Biscuit.Upgrades[46][1] == "true" && Biscuit.Buildings[4][3] == 33280) { Biscuit.Buildings[4][3] *= 2; Biscuit.UpdateShopMenu("Factories"); }
	if (Biscuit.Upgrades[47][1] == "true" && Biscuit.Buildings[4][3] == 66560) { Biscuit.Buildings[4][3] *= 2; Biscuit.UpdateShopMenu("Factories"); }
	//Banks
	if (Biscuit.Upgrades[48][1] == "true" && Biscuit.Buildings[5][3] == 1400) { Biscuit.Buildings[5][3] *= 2; Biscuit.UpdateShopMenu("Banks"); }
	if (Biscuit.Upgrades[49][1] == "true" && Biscuit.Buildings[5][3] == 2800) { Biscuit.Buildings[5][3] *= 2; Biscuit.UpdateShopMenu("Banks"); }
	if (Biscuit.Upgrades[50][1] == "true" && Biscuit.Buildings[5][3] == 5600) { Biscuit.Buildings[5][3] *= 2; Biscuit.UpdateShopMenu("Banks"); }
	if (Biscuit.Upgrades[51][1] == "true" && Biscuit.Buildings[5][3] == 11200) { Biscuit.Buildings[5][3] *= 2; Biscuit.UpdateShopMenu("Banks"); }
	if (Biscuit.Upgrades[52][1] == "true" && Biscuit.Buildings[5][3] == 22400) { Biscuit.Buildings[5][3] *= 2; Biscuit.UpdateShopMenu("Banks"); }
	if (Biscuit.Upgrades[53][1] == "true" && Biscuit.Buildings[5][3] == 44800) { Biscuit.Buildings[5][3] *= 2; Biscuit.UpdateShopMenu("Banks"); }
	if (Biscuit.Upgrades[54][1] == "true" && Biscuit.Buildings[5][3] == 89600) { Biscuit.Buildings[5][3] *= 2; Biscuit.UpdateShopMenu("Banks"); }
	if (Biscuit.Upgrades[55][1] == "true" && Biscuit.Buildings[5][3] == 179200) { Biscuit.Buildings[5][3] *= 2; Biscuit.UpdateShopMenu("Banks"); }
	if (Biscuit.Upgrades[56][1] == "true" && Biscuit.Buildings[5][3] == 358400) { Biscuit.Buildings[5][3] *= 2; Biscuit.UpdateShopMenu("Banks"); }
	//Temples
	if (Biscuit.Upgrades[57][1] == "true" && Biscuit.Buildings[6][3] == 7800) { Biscuit.Buildings[6][3] *= 2; Biscuit.UpdateShopMenu("Temples"); }
	if (Biscuit.Upgrades[58][1] == "true" && Biscuit.Buildings[6][3] == 15600) { Biscuit.Buildings[6][3] *= 2; Biscuit.UpdateShopMenu("Temples"); }
	if (Biscuit.Upgrades[59][1] == "true" && Biscuit.Buildings[6][3] == 31200) { Biscuit.Buildings[6][3] *= 2; Biscuit.UpdateShopMenu("Temples"); }
	if (Biscuit.Upgrades[60][1] == "true" && Biscuit.Buildings[6][3] == 62400) { Biscuit.Buildings[6][3] *= 2; Biscuit.UpdateShopMenu("Temples"); }
	if (Biscuit.Upgrades[61][1] == "true" && Biscuit.Buildings[6][3] == 124800) { Biscuit.Buildings[6][3] *= 2; Biscuit.UpdateShopMenu("Temples"); }
	if (Biscuit.Upgrades[62][1] == "true" && Biscuit.Buildings[6][3] == 249600) { Biscuit.Buildings[6][3] *= 2; Biscuit.UpdateShopMenu("Temples"); }
	if (Biscuit.Upgrades[63][1] == "true" && Biscuit.Buildings[6][3] == 499200) { Biscuit.Buildings[6][3] *= 2; Biscuit.UpdateShopMenu("Temples"); }
	if (Biscuit.Upgrades[64][1] == "true" && Biscuit.Buildings[6][3] == 998400) { Biscuit.Buildings[6][3] *= 2; Biscuit.UpdateShopMenu("Temples"); }
	if (Biscuit.Upgrades[65][1] == "true" && Biscuit.Buildings[6][3] == 1996800) { Biscuit.Buildings[6][3] *= 2; Biscuit.UpdateShopMenu("Temples"); }
	//Wizard Towers
	if (Biscuit.Upgrades[66][1] == "true" && Biscuit.Buildings[7][3] == 44000) { Biscuit.Buildings[7][3] *= 2; Biscuit.UpdateShopMenu("Wizard Towers"); }
	if (Biscuit.Upgrades[67][1] == "true" && Biscuit.Buildings[7][3] == 88000) { Biscuit.Buildings[7][3] *= 2; Biscuit.UpdateShopMenu("Wizard Towers"); }
	if (Biscuit.Upgrades[68][1] == "true" && Biscuit.Buildings[7][3] == 176000) { Biscuit.Buildings[7][3] *= 2; Biscuit.UpdateShopMenu("Wizard Towers"); }
	if (Biscuit.Upgrades[69][1] == "true" && Biscuit.Buildings[7][3] == 352000) { Biscuit.Buildings[7][3] *= 2; Biscuit.UpdateShopMenu("Wizard Towers"); }
	if (Biscuit.Upgrades[70][1] == "true" && Biscuit.Buildings[7][3] == 704000) { Biscuit.Buildings[7][3] *= 2; Biscuit.UpdateShopMenu("Wizard Towers"); }
	if (Biscuit.Upgrades[71][1] == "true" && Biscuit.Buildings[7][3] == 1408000) { Biscuit.Buildings[7][3] *= 2; Biscuit.UpdateShopMenu("Wizard Towers"); }
	if (Biscuit.Upgrades[72][1] == "true" && Biscuit.Buildings[7][3] == 2816000) { Biscuit.Buildings[7][3] *= 2; Biscuit.UpdateShopMenu("Wizard Towers"); }
	if (Biscuit.Upgrades[73][1] == "true" && Biscuit.Buildings[7][3] == 5632000) { Biscuit.Buildings[7][3] *= 2; Biscuit.UpdateShopMenu("Wizard Towers"); }
	if (Biscuit.Upgrades[74][1] == "true" && Biscuit.Buildings[7][3] == 11264000) { Biscuit.Buildings[7][3] *= 2; Biscuit.UpdateShopMenu("Wizard Towers"); }
	//Shipments
	if (Biscuit.Upgrades[75][1] == "true" && Biscuit.Buildings[8][3] == 260000) { Biscuit.Buildings[8][3] *= 2; Biscuit.UpdateShopMenu("Shipments"); }
	if (Biscuit.Upgrades[76][1] == "true" && Biscuit.Buildings[8][3] == 520000) { Biscuit.Buildings[8][3] *= 2; Biscuit.UpdateShopMenu("Shipments"); }
	if (Biscuit.Upgrades[77][1] == "true" && Biscuit.Buildings[8][3] == 1040000) { Biscuit.Buildings[8][3] *= 2; Biscuit.UpdateShopMenu("Shipments"); }
	if (Biscuit.Upgrades[78][1] == "true" && Biscuit.Buildings[8][3] == 2080000) { Biscuit.Buildings[8][3] *= 2; Biscuit.UpdateShopMenu("Shipments"); }
	if (Biscuit.Upgrades[79][1] == "true" && Biscuit.Buildings[8][3] == 4160000) { Biscuit.Buildings[8][3] *= 2; Biscuit.UpdateShopMenu("Shipments"); }
	if (Biscuit.Upgrades[80][1] == "true" && Biscuit.Buildings[8][3] == 8320000) { Biscuit.Buildings[8][3] *= 2; Biscuit.UpdateShopMenu("Shipments"); }
	if (Biscuit.Upgrades[81][1] == "true" && Biscuit.Buildings[8][3] == 16640000) { Biscuit.Buildings[8][3] *= 2; Biscuit.UpdateShopMenu("Shipments"); }
	if (Biscuit.Upgrades[82][1] == "true" && Biscuit.Buildings[8][3] == 33280000) { Biscuit.Buildings[8][3] *= 2; Biscuit.UpdateShopMenu("Shipments"); }
	if (Biscuit.Upgrades[83][1] == "true" && Biscuit.Buildings[8][3] == 66560000) { Biscuit.Buildings[8][3] *= 2; Biscuit.UpdateShopMenu("Shipments"); }
	//Alchemy Labs
	if (Biscuit.Upgrades[84][1] == "true" && Biscuit.Buildings[9][3] == 1600000) { Biscuit.Buildings[9][3] *= 2; Biscuit.UpdateShopMenu("Alchemy Labs"); }
	if (Biscuit.Upgrades[85][1] == "true" && Biscuit.Buildings[9][3] == 3200000) { Biscuit.Buildings[9][3] *= 2; Biscuit.UpdateShopMenu("Alchemy Labs"); }
	if (Biscuit.Upgrades[86][1] == "true" && Biscuit.Buildings[9][3] == 6400000) { Biscuit.Buildings[9][3] *= 2; Biscuit.UpdateShopMenu("Alchemy Labs"); }
	if (Biscuit.Upgrades[87][1] == "true" && Biscuit.Buildings[9][3] == 12800000) { Biscuit.Buildings[9][3] *= 2; Biscuit.UpdateShopMenu("Alchemy Labs"); }
	if (Biscuit.Upgrades[88][1] == "true" && Biscuit.Buildings[9][3] == 25600000) { Biscuit.Buildings[9][3] *= 2; Biscuit.UpdateShopMenu("Alchemy Labs"); }
	if (Biscuit.Upgrades[89][1] == "true" && Biscuit.Buildings[9][3] == 51200000) { Biscuit.Buildings[9][3] *= 2; Biscuit.UpdateShopMenu("Alchemy Labs"); }
	if (Biscuit.Upgrades[90][1] == "true" && Biscuit.Buildings[9][3] == 102400000) { Biscuit.Buildings[9][3] *= 2; Biscuit.UpdateShopMenu("Alchemy Labs"); }
	if (Biscuit.Upgrades[91][1] == "true" && Biscuit.Buildings[9][3] == 204800000) { Biscuit.Buildings[9][3] *= 2; Biscuit.UpdateShopMenu("Alchemy Labs"); }
	if (Biscuit.Upgrades[92][1] == "true" && Biscuit.Buildings[9][3] == 409600000) { Biscuit.Buildings[9][3] *= 2; Biscuit.UpdateShopMenu("Alchemy Labs"); }
	//Portals
	if (Biscuit.Upgrades[93][1] == "true" && Biscuit.Buildings[10][3] == 10000000) { Biscuit.Buildings[10][3] *= 2; Biscuit.UpdateShopMenu("Portals"); }
	if (Biscuit.Upgrades[94][1] == "true" && Biscuit.Buildings[10][3] == 20000000) { Biscuit.Buildings[10][3] *= 2; Biscuit.UpdateShopMenu("Portals"); }
	if (Biscuit.Upgrades[95][1] == "true" && Biscuit.Buildings[10][3] == 40000000) { Biscuit.Buildings[10][3] *= 2; Biscuit.UpdateShopMenu("Portals"); }
	if (Biscuit.Upgrades[96][1] == "true" && Biscuit.Buildings[10][3] == 80000000) { Biscuit.Buildings[10][3] *= 2; Biscuit.UpdateShopMenu("Portals"); }
	if (Biscuit.Upgrades[97][1] == "true" && Biscuit.Buildings[10][3] == 160000000) { Biscuit.Buildings[10][3] *= 2; Biscuit.UpdateShopMenu("Portals"); }
	if (Biscuit.Upgrades[98][1] == "true" && Biscuit.Buildings[10][3] == 320000000) { Biscuit.Buildings[10][3] *= 2; Biscuit.UpdateShopMenu("Portals"); }
	if (Biscuit.Upgrades[99][1] == "true" && Biscuit.Buildings[10][3] == 640000000) { Biscuit.Buildings[10][3] *= 2; Biscuit.UpdateShopMenu("Portals"); }
	if (Biscuit.Upgrades[100][1] == "true" && Biscuit.Buildings[10][3] == 1280000000) { Biscuit.Buildings[10][3] *= 2; Biscuit.UpdateShopMenu("Portals"); }
	if (Biscuit.Upgrades[101][1] == "true" && Biscuit.Buildings[10][3] == 2560000000) { Biscuit.Buildings[10][3] *= 2; Biscuit.UpdateShopMenu("Portals"); }
	//Time Machines
	if (Biscuit.Upgrades[102][1] == "true" && Biscuit.Buildings[11][3] == 65000000) { Biscuit.Buildings[11][3] *= 2; Biscuit.UpdateShopMenu("Time Machines"); }
	if (Biscuit.Upgrades[103][1] == "true" && Biscuit.Buildings[11][3] == 130000000) { Biscuit.Buildings[11][3] *= 2; Biscuit.UpdateShopMenu("Time Machines"); }
	if (Biscuit.Upgrades[104][1] == "true" && Biscuit.Buildings[11][3] == 260000000) { Biscuit.Buildings[11][3] *= 2; Biscuit.UpdateShopMenu("Time Machines"); }
	if (Biscuit.Upgrades[105][1] == "true" && Biscuit.Buildings[11][3] == 520000000) { Biscuit.Buildings[11][3] *= 2; Biscuit.UpdateShopMenu("Time Machines"); }
	if (Biscuit.Upgrades[106][1] == "true" && Biscuit.Buildings[11][3] == 1040000000) { Biscuit.Buildings[11][3] *= 2; Biscuit.UpdateShopMenu("Time Machines"); }
	if (Biscuit.Upgrades[107][1] == "true" && Biscuit.Buildings[11][3] == 2080000000) { Biscuit.Buildings[11][3] *= 2; Biscuit.UpdateShopMenu("Time Machines"); }
	if (Biscuit.Upgrades[108][1] == "true" && Biscuit.Buildings[11][3] == 4160000000) { Biscuit.Buildings[11][3] *= 2; Biscuit.UpdateShopMenu("Time Machines"); }
	if (Biscuit.Upgrades[109][1] == "true" && Biscuit.Buildings[11][3] == 8320000000) { Biscuit.Buildings[11][3] *= 2; Biscuit.UpdateShopMenu("Time Machines"); }
	if (Biscuit.Upgrades[110][1] == "true" && Biscuit.Buildings[11][3] == 16640000000) { Biscuit.Buildings[11][3] *= 2; Biscuit.UpdateShopMenu("Time Machines"); }
	//Antimatter Condensers
	if (Biscuit.Upgrades[111][1] == "true" && Biscuit.Buildings[12][3] == 430000000) { Biscuit.Buildings[12][3] *= 2; Biscuit.UpdateShopMenu("Antimatter Condensers"); }
	if (Biscuit.Upgrades[112][1] == "true" && Biscuit.Buildings[12][3] == 860000000) { Biscuit.Buildings[12][3] *= 2; Biscuit.UpdateShopMenu("Antimatter Condensers"); }
	if (Biscuit.Upgrades[113][1] == "true" && Biscuit.Buildings[12][3] == 1720000000) { Biscuit.Buildings[12][3] *= 2; Biscuit.UpdateShopMenu("Antimatter Condensers"); }
	if (Biscuit.Upgrades[114][1] == "true" && Biscuit.Buildings[12][3] == 3440000000) { Biscuit.Buildings[12][3] *= 2; Biscuit.UpdateShopMenu("Antimatter Condensers"); }
	if (Biscuit.Upgrades[115][1] == "true" && Biscuit.Buildings[12][3] == 6880000000) { Biscuit.Buildings[12][3] *= 2; Biscuit.UpdateShopMenu("Antimatter Condensers"); }
	if (Biscuit.Upgrades[116][1] == "true" && Biscuit.Buildings[12][3] == 13760000000) { Biscuit.Buildings[12][3] *= 2; Biscuit.UpdateShopMenu("Antimatter Condensers"); }
	if (Biscuit.Upgrades[117][1] == "true" && Biscuit.Buildings[12][3] == 27520000000) { Biscuit.Buildings[12][3] *= 2; Biscuit.UpdateShopMenu("Antimatter Condensers"); }
	if (Biscuit.Upgrades[118][1] == "true" && Biscuit.Buildings[12][3] == 55040000000) { Biscuit.Buildings[12][3] *= 2; Biscuit.UpdateShopMenu("Antimatter Condensers"); }
	if (Biscuit.Upgrades[119][1] == "true" && Biscuit.Buildings[12][3] == 110080000000) { Biscuit.Buildings[12][3] *= 2; Biscuit.UpdateShopMenu("Antimatter Condensers"); }
	//Prisms
	if (Biscuit.Upgrades[120][1] == "true" && Biscuit.Buildings[13][3] == 2900000000) { Biscuit.Buildings[13][3] *= 2; Biscuit.UpdateShopMenu("Prisms"); }
	if (Biscuit.Upgrades[121][1] == "true" && Biscuit.Buildings[13][3] == 5800000000) { Biscuit.Buildings[13][3] *= 2; Biscuit.UpdateShopMenu("Prisms"); }
	if (Biscuit.Upgrades[122][1] == "true" && Biscuit.Buildings[13][3] == 11600000000) { Biscuit.Buildings[13][3] *= 2; Biscuit.UpdateShopMenu("Prisms"); }
	if (Biscuit.Upgrades[123][1] == "true" && Biscuit.Buildings[13][3] == 23200000000) { Biscuit.Buildings[13][3] *= 2; Biscuit.UpdateShopMenu("Prisms"); }
	if (Biscuit.Upgrades[124][1] == "true" && Biscuit.Buildings[13][3] == 46400000000) { Biscuit.Buildings[13][3] *= 2; Biscuit.UpdateShopMenu("Prisms"); }
	if (Biscuit.Upgrades[125][1] == "true" && Biscuit.Buildings[13][3] == 92800000000) { Biscuit.Buildings[13][3] *= 2; Biscuit.UpdateShopMenu("Prisms"); }
	if (Biscuit.Upgrades[126][1] == "true" && Biscuit.Buildings[13][3] == 185600000000) { Biscuit.Buildings[13][3] *= 2; Biscuit.UpdateShopMenu("Prisms"); }
	if (Biscuit.Upgrades[127][1] == "true" && Biscuit.Buildings[13][3] == 371200000000) { Biscuit.Buildings[13][3] *= 2; Biscuit.UpdateShopMenu("Prisms"); }
	if (Biscuit.Upgrades[128][1] == "true" && Biscuit.Buildings[13][3] == 742400000000) { Biscuit.Buildings[13][3] *= 2; Biscuit.UpdateShopMenu("Prisms"); }
	//Chancemakers
	if (Biscuit.Upgrades[129][1] == "true" && Biscuit.Buildings[14][3] == 21000000000) { Biscuit.Buildings[14][3] *= 2; Biscuit.UpdateShopMenu("Chancemakers"); }
	if (Biscuit.Upgrades[130][1] == "true" && Biscuit.Buildings[14][3] == 42000000000) { Biscuit.Buildings[14][3] *= 2; Biscuit.UpdateShopMenu("Chancemakers"); }
	if (Biscuit.Upgrades[131][1] == "true" && Biscuit.Buildings[14][3] == 84000000000) { Biscuit.Buildings[14][3] *= 2; Biscuit.UpdateShopMenu("Chancemakers"); }
	if (Biscuit.Upgrades[132][1] == "true" && Biscuit.Buildings[14][3] == 168000000000) { Biscuit.Buildings[14][3] *= 2; Biscuit.UpdateShopMenu("Chancemakers"); }
	if (Biscuit.Upgrades[133][1] == "true" && Biscuit.Buildings[14][3] == 336000000000) { Biscuit.Buildings[14][3] *= 2; Biscuit.UpdateShopMenu("Chancemakers"); }
	if (Biscuit.Upgrades[134][1] == "true" && Biscuit.Buildings[14][3] == 672000000000) { Biscuit.Buildings[14][3] *= 2; Biscuit.UpdateShopMenu("Chancemakers"); }
	if (Biscuit.Upgrades[135][1] == "true" && Biscuit.Buildings[14][3] == 1344000000000) { Biscuit.Buildings[14][3] *= 2; Biscuit.UpdateShopMenu("Chancemakers"); }
	if (Biscuit.Upgrades[136][1] == "true" && Biscuit.Buildings[14][3] == 2688000000000) { Biscuit.Buildings[14][3] *= 2; Biscuit.UpdateShopMenu("Chancemakers"); }
	if (Biscuit.Upgrades[137][1] == "true" && Biscuit.Buildings[14][3] == 5376000000000) { Biscuit.Buildings[14][3] *= 2; Biscuit.UpdateShopMenu("Chancemakers"); }
	//Put it all together noice and toyt
	Biscuit.biscuitsPerSecond = (Biscuit.Buildings[0][1] * Biscuit.Buildings[0][3]) + (Biscuit.Buildings[1][1] * Biscuit.Buildings[1][3]) + (Biscuit.Buildings[2][1] * Biscuit.Buildings[2][3]) + (Biscuit.Buildings[3][1] * Biscuit.Buildings[3][3]) + (Biscuit.Buildings[4][1] * Biscuit.Buildings[4][3]) + (Biscuit.Buildings[5][1] * Biscuit.Buildings[5][3]) + (Biscuit.Buildings[6][1] * Biscuit.Buildings[5][3]) + (Biscuit.Buildings[7][1] * Biscuit.Buildings[7][3]) + (Biscuit.Buildings[8][1] * Biscuit.Buildings[8][3]) + (Biscuit.Buildings[9][1] * Biscuit.Buildings[9][3]) + (Biscuit.Buildings[10][1] * Biscuit.Buildings[10][3]) + (Biscuit.Buildings[11][1] * Biscuit.Buildings[11][3]) + (Biscuit.Buildings[12][1] * Biscuit.Buildings[12][3]) + (Biscuit.Buildings[13][1] * Biscuit.Buildings[13][3]) + (Biscuit.Buildings[14][1] * Biscuit.Buildings[14][3]);

}

Biscuit.BiscuitClicked=function(){
	Biscuit.Earn(Biscuit.biscuitsPerBust);
	Biscuit.biscuitClicks++;
	Biscuit.handmadeBiscuits += Biscuit.biscuitsPerBust;
	$("#biscuitButton").stop(true,true)
	$("#biscuitButton").animate({
		height: '383px',
		width: '416px',
		"padding-top":"15px"
	},31.75)
	if (mouseOverBiscuit == false){
		$("#biscuitButton").animate({
			height: '413px',
			width: '436px',
			"padding-top":"0px"
		},31.75)
	} else {
		$("#biscuitButton").animate({
			height: '408px',
			width: '431px',
			"padding-top":"2px"
		},31.75)
	}
}

Biscuit.Spend=function(amountSpent){
	Biscuit.biscuits-=amountSpent;
	Biscuit.biscuitsSpent+=amountSpent;
}

Biscuit.Earn=function(amountEarned){
	Biscuit.biscuits+=amountEarned;
	Biscuit.biscuitsEarned+=amountEarned;
}

function utf8_to_b64( str ) {
	try{return Base64.encode(unescape(encodeURIComponent( str )));}
	catch(err)
	{return '';}
}

function b64_to_utf8( str ) {
	try{return decodeURIComponent(escape(Base64.decode( str )));}
	catch(err)
	{return '';}
}

//Cookie Aesthetics
$("#biscuitButton").mouseenter(function(){
	$("#biscuitButton").animate({
		height: '408px',
		width: '431px',
		"padding-top":"2px"
	},31.75)
	mouseOverBiscuit = true;
})

$("#biscuitButton").mouseleave(function(){
	$("#biscuitButton").animate({
		height: '413px',
		width: '436px',
		"padding-top":"0px"
	},31.75)
	mouseOverBiscuit = false;
})

Biscuit.FormatNumber=function(numToFormat, precision, type){
	var num = numToFormat;
	//Get sub 1 million outta da way
	if (type == "normal" && num < 1000000) {num = num.toFixed(0); return commafy(num)}
	if (type == "ps" && num < 1000000) {num = num.toFixed(1); return commafy(num)};

	//Yay copy and paste 500 million times
	if (num >= 1000000000000000000000000000000000000000000000000) { num = (num/1000000000000000000000000000000000000000000000000).toFixed(3); return num + " quindecillion"; }
	if (num >= 1000000000000000000000000000000000000000000000) { num = (num/1000000000000000000000000000000000000000000000).toFixed(3); return num + " quattordecillion"; }
	if (num >= 1000000000000000000000000000000000000000000) { num = (num/1000000000000000000000000000000000000000000).toFixed(3); return num + " tredicillion"; }
	if (num >= 1000000000000000000000000000000000000000) { num = (num/1000000000000000000000000000000000000000).toFixed(3); return num + " duodecillion"; }
	if (num >= 1000000000000000000000000000000000000) { num = (num/1000000000000000000000000000000000000).toFixed(3); return num + " undecillion"; }
	if (num >= 1000000000000000000000000000000000) { num = (num/1000000000000000000000000000000000).toFixed(3); return num + " decillion"; }
	if (num >= 1000000000000000000000000000000) { num = (num/1000000000000000000000000000000).toFixed(3); return num + " nonillion"; }
	if (num >= 1000000000000000000000000000) { num = (num/1000000000000000000000000000).toFixed(3); return num + " octillion"; }
	if (num >= 1000000000000000000000000) { num = (num/1000000000000000000000000).toFixed(3); return num + " septillion"; }
	if (num >= 1000000000000000000000) { num = (num/1000000000000000000000).toFixed(3); return num + " sextillion"; }
	if (num >= 1000000000000000000) { num = (num/1000000000000000000).toFixed(3); return num + " quintillion"; }
	if (num >= 1000000000000000) { num = (num/1000000000000000).toFixed(3); return num + " quadrillion"; }
	if (num >= 1000000000000) { num = (num/1000000000000).toFixed(3); return num + " trillion"; }
	if (num >= 1000000000) { num = (num/1000000000).toFixed(3); return num + " billion"; }
	if (num >= 1000000) { num = (num/1000000).toFixed(3); return num + " million"; }
}

/*============
Load the thing
==============*/
Biscuit.Load();

//Im a bully so no holding enter
window.addEventListener('keydown', function(e) {
							if (e.keyIdentifier == 'U+000A' || e.keyIdentifier == 'Enter' || e.keyCode == 13) {
								if (e.target.nodeName == 'INPUT' && e.target.type == 'image') {
									e.preventDefault();
									return false;
								}
							}
						}, true);

//Utility
function commafy (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}