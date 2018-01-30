//This is an absolute mess and has taken hours

//Cookie Variables
var cookies = 0;
var cPerSec = 0;
var amountPerClick = 1;
var nonCursorBonus = 0.1;
//Building Variables
var cursorEffect = 0.1;
var cursorCount = 0;
var cursorCost = 15;

var grandmaEffect = 1;
var grandmaCount = 0;
var grandmaCost = 100;

var farmEffect = 8;
var farmCount = 0;
var farmCost = 1100;

var mineEffect = 47;
var mineCount = 0;
var mineCost = 12000;

var factoryEffect = 260;
var factoryCount = 0;
var factoryCost = 130000;

var bankEffect = 1400;
var bankCount = 0;
var bankCost = 1400000;

var templeEffect = 7800;
var templeCount = 0;
var templeCost = 20000000;

var wizardEffect = 44000;
var wizardCount = 0;
var wizardCost = 330000000;

var shipmentEffect = 260000;
var shipmentCount = 0;
var shipmentCost = 5100000000;

var alchemyEffect = 1600000;
var alchemyCount = 0;
var alchemyCost = 75000000000;

var portalEffect = 10000000;
var portalCount = 0;
var portalCost = 1000000000000;

var timeEffect = 65000000;
var timeCount = 0;
var timeCost = 14000000000000;

var antiEffect = 430000000;
var antiCount = 0;
var antiCost = 170000000000000;

var prismEffect = 2900000000;
var prismCount = 0;
var prismCost = 2100000000000000;

var chanceEffect = 21000000000;
var chanceCount = 0;
var chanceCost = 26000000000000000;

//Starting Commands
Start();
cookiesPerSecond();

//Update Functions
function Start(){
	updateCookieText();
	document.getElementById("cpc").innerHTML = "<b style=\"color:green;\">Biscuits per bust: </b>" + amountPerClick;
	cPerSec = (cursorEffect * cursorCount);
	document.getElementById("cps").innerHTML = "<b style=\"color:green;\">Biscuits per second: </b>" + cPerSec;
}

function updateCookieText(){
	var temp = round(cookies, 1);
	document.getElementById("cookieText").innerHTML = temp.toLocaleString();
	document.getElementById("title").innerHTML = "Biscuit Buster &bull; " + temp.toLocaleString();
	calculatePerClick();
}

function clicked(){
	cookies += amountPerClick;
	updateCookieText();
}

function cookiesPerSecond(){
	calculateCPS();
	cookies += cPerSec;
	updateCookieText();
}

setInterval(cookiesPerSecond, 1000);

function updateCPSText(){
	calculateCPS();
	document.getElementById("cps").innerHTML = "<b style=\"color:green;\">Biscuits per second: </b>" + cPerSec.toLocaleString();
}

function updatePCText(){
	document.getElementById("cpc").innerHTML = "<b style=\"color:green;\">Biscuits per bust: </b>" + amountPerClick.toLocaleString();
}

function calculateCPS(){
	cPerSec = round(cursorEffect * cursorCount,1) + round(grandmaEffect * grandmaCount,1) + round(farmEffect * farmCount,1) + round(mineEffect * mineCount,1) + round(factoryEffect * factoryCount,1) + round(bankEffect * bankCount,1) + round(templeEffect * templeCount,1) + round(wizardEffect * wizardCount,1) + round(shipmentEffect * shipmentCount,1) + round(alchemyEffect * alchemyCount,1) + round(portalEffect * portalCount,1) + round(timeEffect * timeCount,1) + round(antiEffect * antiCount,1) + round(prismEffect * prismCount,1) + round(chanceEffect * chanceCount,1);
}

function shopButtonsToDanger(){
	document.getElementById("cusbutton").className = "btn btn-danger btn-block";
	document.getElementById("grabutton").className = "btn btn-danger btn-block";
	document.getElementById("farbutton").className = "btn btn-danger btn-block";
	document.getElementById("minbutton").className = "btn btn-danger btn-block";
	document.getElementById("facbutton").className = "btn btn-danger btn-block";
	document.getElementById("banbutton").className = "btn btn-danger btn-block";
	document.getElementById("tembutton").className = "btn btn-danger btn-block";
	document.getElementById("wizbutton").className = "btn btn-danger btn-block";
	document.getElementById("shibutton").className = "btn btn-danger btn-block";
	document.getElementById("alcbutton").className = "btn btn-danger btn-block";
	document.getElementById("porbutton").className = "btn btn-danger btn-block";
	document.getElementById("timbutton").className = "btn btn-danger btn-block";
	document.getElementById("antbutton").className = "btn btn-danger btn-block";
	document.getElementById("pributton").className = "btn btn-danger btn-block";
	document.getElementById("chabutton").className = "btn btn-danger btn-block";
}
var hasRF = false;
var hasCTPC = false;
var hasAMBI = false;
var hasTF = false;
var hasMF = false;
var hasBF = false;
var hasTriF = false;
var hasQF = false;
var hasQuiF = false;
var hasSF = false;
var hasSPF = false;
var hasOF = false;

function reinforcedfinger(){
	if (cookies >= 100){
		cookies -= 100;
		updateCookieText();
		hasRF = true;
		cursorEffect *= 2;
		amountPerClick *=2;
		shopDisplayUpdate("cursor");
		updateCPSText();
		updatePCText();
	}
}

function carpaltunnel(){
	if (cookies >= 500){
		cookies -= 500;
		updateCookieText();
		hasCTPC = true;
		cursorEffect *= 2;
		amountPerClick *=2;
		shopDisplayUpdate("cursor");
		updateCPSText();
		updatePCText();
	}
}

function ambi(){
	if (cookies >= 10000){
		cookies -= 10000;
		updateCookieText();
		hasAMBI = true;
		cursorEffect *= 2;
		amountPerClick *=2;
		shopDisplayUpdate("cursor");
		updateCPSText();
		updatePCText();
	}
}

function tFingers(){
		if (cookies >= 100000){
		cookies -= 100000;
		updateCookieText();
		hasTF = true;
		shopDisplayUpdate("cursor");
		calculatePerClick();
		updatePCText();
	}
}

function mFingers(){
		if (cookies >= 10000000){
		cookies -= 10000000;
		updateCookieText();
		hasMF = true;
		shopDisplayUpdate("cursor");
		calculatePerClick();
		updatePCText();
	}
}

function bFingers(){
		if (cookies >= 100000000){
		cookies -= 100000000;
		updateCookieText();
		hasBF = true;
		shopDisplayUpdate("cursor");
		calculatePerClick();
		updatePCText();
	}
}

function triFingers(){
		if (cookies >= 1000000000){
		cookies -= 1000000000;
		updateCookieText();
		hasTriF = true;
		shopDisplayUpdate("cursor");
		calculatePerClick();
		updatePCText();
	}
}

function qFingers(){
		if (cookies >= 10000000000){
		cookies -= 10000000000;
		updateCookieText();
		hasQF = true;
		shopDisplayUpdate("cursor");
		calculatePerClick();
		updatePCText();
	}
}

function quiFingers(){
		if (cookies >= 10000000000000){
		cookies -= 10000000000000;
		updateCookieText();
		hasQuiF = true;
		shopDisplayUpdate("cursor");
		calculatePerClick();
		updatePCText();
	}
}

function sFingers(){
		if (cookies >= 10000000000000000){
		cookies -= 10000000000000000;
		updateCookieText();
		hasSF = true;
		shopDisplayUpdate("cursor");
		calculatePerClick();
		updatePCText();
	}
}

function spFingers(){
		if (cookies >= 10000000000000000000){
		cookies -= 10000000000000000000;
		updateCookieText();
		hasSPF = true;
		shopDisplayUpdate("cursor");
		calculatePerClick();
		updatePCText();
	}
}

function oFingers(){
		if (cookies >= 10000000000000000000000){
		cookies -= 10000000000000000000000;
		updateCookieText();
		hasOF = true;
		shopDisplayUpdate("cursor");
		calculatePerClick();
		updatePCText();
	}
}

function calculatePerClick(){
	if (hasTF == true && hasMF == false){
		var temporary = 8;
		temporary += 0.1 * (grandmaCount + farmCount + mineCount + factoryCount + bankCount + templeCount + wizardCount + shipmentCount + alchemyCount + portalCount + timeCount + antiCount + prismCount + chanceCount);
		amountPerClick = temporary;
		cursorEffect = temporary - 7.2
		updatePCText();
	} else if (hasTF == true && hasMF == true && hasBF == false) {
		var temporary = 8;
		temporary += 0.5 * (grandmaCount + farmCount + mineCount + factoryCount + bankCount + templeCount + wizardCount + shipmentCount + alchemyCount + portalCount + timeCount + antiCount + prismCount + chanceCount);
		amountPerClick = temporary;
		cursorEffect = temporary - 7.2
		updatePCText();
	} else if (hasTF == true && hasMF == true && hasBF == true && hasTriF == false){
		var temporary = 8;
		temporary += 5 * (grandmaCount + farmCount + mineCount + factoryCount + bankCount + templeCount + wizardCount + shipmentCount + alchemyCount + portalCount + timeCount + antiCount + prismCount + chanceCount);
		amountPerClick = temporary;
		cursorEffect = temporary - 7.2
		updatePCText();
	} else if (hasTF == true && hasMF == true && hasBF == true && hasTriF == true && hasQF == false){
		var temporary = 8;
		temporary += 50 * (grandmaCount + farmCount + mineCount + factoryCount + bankCount + templeCount + wizardCount + shipmentCount + alchemyCount + portalCount + timeCount + antiCount + prismCount + chanceCount);
		amountPerClick = temporary;
		cursorEffect = temporary - 7.2
		updatePCText();
	} else if (hasTF == true && hasMF == true && hasBF == true && hasTriF == true && hasQF == true && hasQuiF == false){
		var temporary = 8;
		temporary += 500 * (grandmaCount + farmCount + mineCount + factoryCount + bankCount + templeCount + wizardCount + shipmentCount + alchemyCount + portalCount + timeCount + antiCount + prismCount + chanceCount);
		amountPerClick = temporary;
		cursorEffect = temporary - 7.2
		updatePCText();
	} else if (hasTF == true && hasMF == true && hasBF == true && hasTriF == true && hasQF == true && hasQuiF == true && hasSF == false){
		var temporary = 8;
		temporary += 5000 * (grandmaCount + farmCount + mineCount + factoryCount + bankCount + templeCount + wizardCount + shipmentCount + alchemyCount + portalCount + timeCount + antiCount + prismCount + chanceCount);
		amountPerClick = temporary;
		cursorEffect = temporary - 7.2
		updatePCText();
	} else if (hasTF == true && hasMF == true && hasBF == true && hasTriF == true && hasQF == true && hasQuiF == true && hasSF == true && hasSPF == false){
		var temporary = 8;
		temporary += 50000 * (grandmaCount + farmCount + mineCount + factoryCount + bankCount + templeCount + wizardCount + shipmentCount + alchemyCount + portalCount + timeCount + antiCount + prismCount + chanceCount);
		amountPerClick = temporary;
		cursorEffect = temporary - 7.2
		updatePCText();
	} else if (hasTF == true && hasMF == true && hasBF == true && hasTriF == true && hasQF == true && hasQuiF == true && hasSF == true && hasSPF == true && hasOF == false){
		var temporary = 8;
		temporary += 500000 * (grandmaCount + farmCount + mineCount + factoryCount + bankCount + templeCount + wizardCount + shipmentCount + alchemyCount + portalCount + timeCount + antiCount + prismCount + chanceCount);
		amountPerClick = temporary;
		cursorEffect = temporary - 7.2
		updatePCText();
	} else if (hasTF == true && hasMF == true && hasBF == true && hasTriF == true && hasQF == true && hasQuiF == true && hasSF == true && hasSPF == true && hasOF == true){
		var temporary = 8;
		temporary += 5000000 * (grandmaCount + farmCount + mineCount + factoryCount + bankCount + templeCount + wizardCount + shipmentCount + alchemyCount + portalCount + timeCount + antiCount + prismCount + chanceCount);
		amountPerClick = temporary;
		cursorEffect = temporary - 7.2
		updatePCText();
	}
}

function shopDisplayUpdate(type){
	if (type == "cursor"){
		document.getElementById("upDisplay").innerHTML = "<b>Cursor Upgrades</b><br/><p>Currently your cursors produce <strong>" + cursorEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + round(cursorEffect * cursorCount, 1).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + cursorCount.toLocaleString() + "</b> total cursors.<br/><br/><button class=\"btn btn-success\" onclick=\"boughtCursor()\"\>Cost: " + cursorCost.toLocaleString() + "</button><br/><p id=\"cantafford\"></p>";
		if (cursorCount > 0){
			if (hasRF == false){
				document.getElementById("upDisplay").innerHTML += "<button onclick=\"reinforcedfinger()\" class=\"subupgrade\">Reinforced Index Finger<br/><br/><b>Cost:</b> 100</button><div class=\"divider\"/>"
			} else {
				document.getElementById("upDisplay").innerHTML += "<button class=\"subupgrade disabledcustom\">Reinforced Index Finger<br/><br/><b>Purchased</b></button><div class=\"divider\"/>"
			}
		}
		if (hasRF == true){
			if (hasCTPC == false) {
				document.getElementById("upDisplay").innerHTML += "<button onclick=\"carpaltunnel()\" class=\"subupgrade\">Carpal Tunnel Prevention Cream<br/><br/><b>Cost:</b> 500</button>"
			} else {
				document.getElementById("upDisplay").innerHTML += "<button class=\"subupgrade disabledcustom\">Carpal Tunnel Prevention Cream<br/><br/><b>Purchased</b></button><br/><br/>"
			}
		}
		if (cursorCount >= 10 && hasCTPC == true) {
			if (hasAMBI == false){
				document.getElementById("upDisplay").innerHTML += "<button onclick=\"ambi()\" class=\"subupgrade\">Ambidextrous<br/><br/><b>Cost:</b> 10,000</button>"
			} else {
				document.getElementById("upDisplay").innerHTML += "<button class=\"subupgrade disabledcustom\">Ambidextrous<br/><br/><b>Purchased</b></button><br/><br/>"
			}
		}
		if (cursorCount >= 25 && hasAMBI == true) {
			if (hasTF == false){
				document.getElementById("upDisplay").innerHTML += "<button onclick=\"tFingers()\" class=\"subupgrade\">Thousand Fingers<br/><br/><b>Cost:</b> 100,000</button>"
			} else {
				document.getElementById("upDisplay").innerHTML += "<button class=\"subupgrade disabledcustom\">Thousand Fingers<br/><br/><b>Purchased</b></button><div class=\"divider\"/>"
			}
		}
		if (cursorCount >= 50 && hasTF == true) {
			if (hasMF == false){
				document.getElementById("upDisplay").innerHTML += "<button onclick=\"mFingers()\" class=\"subupgrade\">Million Fingers<br/><br/><b>Cost:</b> 10,000,000</button>"
			} else {
				document.getElementById("upDisplay").innerHTML += "<button class=\"subupgrade disabledcustom\">Million Fingers<br/><br/><b>Purchased</b></button><br/><br/>"
			}
		} if (cursorCount >= 100 && hasMF == true) {
			if (hasBF == false){
				document.getElementById("upDisplay").innerHTML += "<button onclick=\"bFingers()\" class=\"subupgrade\">Billion Fingers<br/><br/><b>Cost:</b> 100,000,000</button>"
			} else {
				document.getElementById("upDisplay").innerHTML += "<button class=\"subupgrade disabledcustom\">Billion Fingers<br/><br/><b>Purchased</b></button><div class=\"divider\"/>"
			}
		} if (cursorCount >= 150 && hasBF == true) {
			if (hasTriF == false){
				document.getElementById("upDisplay").innerHTML += "<button onclick=\"triFingers()\" class=\"subupgrade\">Trillion Fingers<br/><br/><b>Cost:</b> 1,000,000,000</button><br/><br/>"
			} else {
				document.getElementById("upDisplay").innerHTML += "<button class=\"subupgrade disabledcustom\">Trillion Fingers<br/><br/><b>Purchased</b></button><br/><br/>"
			}
		} if (cursorCount >= 200 && hasTriF == true) {
			if (hasQF == false){
				document.getElementById("upDisplay").innerHTML += "<button onclick=\"qFingers()\" class=\"subupgrade\">Quadrillion Fingers<br/><br/><b>Cost:</b> 10,000,000,000</button>"
			} else {
				document.getElementById("upDisplay").innerHTML += "<button class=\"subupgrade disabledcustom\">Quadrillion Fingers<br/><br/><b>Purchased</b></button><div class=\"divider\"/>"
			}
		} if (cursorCount >= 250 && hasQF == true) {
			if (hasQuiF == false){
				document.getElementById("upDisplay").innerHTML += "<button onclick=\"quiFingers()\" class=\"subupgrade\">Quintillion Fingers<br/><br/><b>Cost:</b> 10,000,000,000,000</button>"
			} else {
				document.getElementById("upDisplay").innerHTML += "<button class=\"subupgrade disabledcustom\">Quintillion Fingers<br/><br/><b>Purchased</b></button><br/><br/>"
			}
		} if (cursorCount >= 300 && hasQuiF == true) {
			if (hasSF == false){
				document.getElementById("upDisplay").innerHTML += "<button onclick=\"sFingers()\" class=\"subupgrade\">Sextillion Fingers<br/><br/><b>Cost:</b> 10,000,000,000,000,000</button>"
			} else {
				document.getElementById("upDisplay").innerHTML += "<button class=\"subupgrade disabledcustom\">Sextillion Fingers<br/><br/><b>Purchased</b></button>"
			}
		} if (cursorCount >= 350 && hasSF == true) {
			if (hasSPF == false){
				document.getElementById("upDisplay").innerHTML += "<button onclick=\"spFingers()\" class=\"subupgrade\">Septillion Fingers<br/><br/><b>Cost:</b> 10,000,000,000,000,000,000</button>"
			} else {
				document.getElementById("upDisplay").innerHTML += "<button class=\"subupgrade disabledcustom\">Septillion Fingers<br/><br/><b>Purchased</b></button>"
			}
		} if (cursorCount >= 400 && hasSPF == true) {
			if (hasOF == false){
				document.getElementById("upDisplay").innerHTML += "<button onclick=\"oFingers()\" class=\"subupgrade\">Octillion Fingers<br/><br/><b>Cost:</b> 10,000,000,000,000,000,000,000</button>"
			} else {
				document.getElementById("upDisplay").innerHTML += "<button class=\"subupgrade disabledcustom\">Octillion Fingers<br/><br/><b>Purchased</b></button>"
			}
		}
	} else if (type == "grandma") {
		if (cursorCount > 0){
			document.getElementById("upDisplay").innerHTML = "<b>Grandma Upgrades</b><br/><p>Currently your grandmas produce <strong>" + grandmaEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (grandmaEffect * grandmaCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + grandmaCount.toLocaleString() + "</b> total grandmas.<br/><br/><button class=\"btn btn-success\" onclick=\"boughtGrandma()\">Cost: " + grandmaCost.toLocaleString() + "</button><br/><p id=\"cantafford\"></p>";
		} else {
			document.getElementById("upDisplay").innerHTML = "<b>Grandma Upgrades</b><br/><p>Currently your grandmas produce <strong>" + grandmaEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (grandmaEffect * grandmaCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + grandmaCount.toLocaleString() + "</b> total grandmas.<br/><br/><button class=\"btn btn-default disabled\">You must have at least 1 cursor!</button><br/><p id=\"cantafford\"></p>";
		}
	} else if (type == "farm") {
		if (grandmaCount > 0){
			document.getElementById("upDisplay").innerHTML = "<b>Farm Upgrades</b><br/><p>Currently your farms produce <strong>" + farmEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (farmEffect * farmCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + farmCount.toLocaleString() + "</b> total farms.<br/><br/><button class=\"btn btn-success\" onclick=\"boughtFarm()\">Cost: " + farmCost.toLocaleString() + "</button><br/><p id=\"cantafford\"></p>";
		} else {
			document.getElementById("upDisplay").innerHTML = "<b>Farm Upgrades</b><br/><p>Currently your farms produce <strong>" + farmEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (farmEffect * farmCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + farmCount.toLocaleString() + "</b> total farms.<br/><br/><button class=\"btn btn-default disabled\">You must have at least 1 grandma!</button><br/><p id=\"cantafford\"></p>";
		}
	} else if (type == "mine"){
		if (farmCount > 0){
			document.getElementById("upDisplay").innerHTML = "<b>Mine Upgrades</b><br/><p>Currently your mines produce <strong>" + mineEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (mineEffect * mineCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + mineCount.toLocaleString() + "</b> total mines.<br/><br/><button class=\"btn btn-success\" onclick=\"boughtMine()\">Cost: " + mineCost.toLocaleString() + "</button><br/><p id=\"cantafford\"></p>";
		} else {
			document.getElementById("upDisplay").innerHTML = "<b>Mine Upgrades</b><br/><p>Currently your mines produce <strong>" + mineEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (mineEffect * mineCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + mineCount.toLocaleString() + "</b> total mines.<br/><br/><button class=\"btn btn-default disabled\">You must have at least 1 farm!</button><br/><p id=\"cantafford\"></p>";
		}
	} else if (type == "factory"){
		if (mineCount > 0){
			document.getElementById("upDisplay").innerHTML = "<b>Factory Upgrades</b><br/><p>Currently your factories produce <strong>" + factoryEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (factoryEffect * factoryCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + factoryCount.toLocaleString() + "</b> total factories.<br/><br/><button class=\"btn btn-success\" onclick=\"boughtFactory()\">Cost: " + factoryCost.toLocaleString() + "</button><br/><p id=\"cantafford\"></p>";
		} else {
			document.getElementById("upDisplay").innerHTML = "<b>Factory Upgrades</b><br/><p>Currently your factories produce <strong>" + factoryEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (factoryEffect * factoryCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + factoryCount.toLocaleString() + "</b> total factories.<br/><br/><button class=\"btn btn-default disabled\">You must have at least 1 mine!</button><br/><p id=\"cantafford\"></p>";
		}
	} else if (type == "bank"){
		if (factoryCount > 0){
			document.getElementById("upDisplay").innerHTML = "<b>Bank Upgrades</b><br/><p>Currently your banks produce <strong>" + bankEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (bankEffect * bankCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + bankCount.toLocaleString() + "</b> total banks.<br/><br/><button class=\"btn btn-success\" onclick=\"boughtBank()\">Cost: " + bankCost.toLocaleString() + "</button><br/><p id=\"cantafford\"></p>";
		} else {
			document.getElementById("upDisplay").innerHTML = "<b>Bank Upgrades</b><br/><p>Currently your banks produce <strong>" + bankEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (bankEffect * bankCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + bankCount.toLocaleString() + "</b> total banks.<br/><br/><button class=\"btn btn-default disabled\">You must have at least 1 factory!</button><br/><p id=\"cantafford\"></p>";
		}
	} else if (type == "temple"){
		if (bankCount > 0){
			document.getElementById("upDisplay").innerHTML = "<b>Temple Upgrades</b><br/><p>Currently your temples produce <strong>" + templeEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (templeEffect * templeCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + templeCount.toLocaleString() + "</b> total temples.<br/><br/><button class=\"btn btn-success\" onclick=\"boughtTemple()\">Cost: " + templeCost.toLocaleString() + "</button><br/><p id=\"cantafford\"></p>";
		} else {
			document.getElementById("upDisplay").innerHTML = "<b>Temple Upgrades</b><br/><p>Currently your temples produce <strong>" + templeEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (templeEffect * templeCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + templeCount.toLocaleString() + "</b> total temples.<br/><br/><button class=\"btn btn-default disabled\">You must have at least 1 bank!</button><br/><p id=\"cantafford\"></p>";
		}
	} else if (type == "wizard"){
		if (templeCount > 0){
			document.getElementById("upDisplay").innerHTML = "<b>Wizard Tower Upgrades</b><br/><p>Currently your wizard towers produce <strong>" + wizardEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (wizardEffect * wizardCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + wizardCount.toLocaleString() + "</b> total wizard towers.<br/><br/><button class=\"btn btn-success\" onclick=\"boughtWizard()\">Cost: " + wizardCost.toLocaleString() + "</button><br/><p id=\"cantafford\"></p>";
		} else {
			document.getElementById("upDisplay").innerHTML = "<b>Wizard Tower Upgrades</b><br/><p>Currently your wizard towers produce <strong>" + wizardEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (wizardEffect * wizardCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + wizardCount.toLocaleString() + "</b> total wizard towers.<br/><br/><button class=\"btn btn-default disabled\">You must have at least 1 temple!</button><br/><p id=\"cantafford\"></p>";
		}
	} else if (type == "shipment"){
		if (wizardCount > 0){
			document.getElementById("upDisplay").innerHTML = "<b>Shipment Upgrades</b><br/><p>Currently your shipments produce <strong>" + shipmentEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (shipmentEffect * shipmentCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + shipmentCount.toLocaleString() + "</b> total shipments.<br/><br/><button class=\"btn btn-success\" onclick=\"boughtShipment()\">Cost: " + shipmentCost.toLocaleString() + "</button><br/><p id=\"cantafford\"></p>";
		} else {
			document.getElementById("upDisplay").innerHTML = "<b>Shipment Upgrades</b><br/><p>Currently your wizard towers produce <strong>" + shipmentEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (shipmentEffect * shipmentCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + shipmentCount.toLocaleString() + "</b> total shipments.<br/><br/><button class=\"btn btn-default disabled\">You must have at least 1 wizard tower!</button><br/><p id=\"cantafford\"></p>";
		}
	} else if (type == "alchemy"){
		if (shipmentCount > 0){
			document.getElementById("upDisplay").innerHTML = "<b>Alchemy Lab Upgrades</b><br/><p>Currently your alchemy labs produce <strong>" + alchemyEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (alchemyEffect * alchemyCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + alchemyCount.toLocaleString() + "</b> total alchemy labs.<br/><br/><button class=\"btn btn-success\" onclick=\"boughtAlchemy()\">Cost: " + alchemyCost.toLocaleString() + "</button><br/><p id=\"cantafford\"></p>";
		} else {
			document.getElementById("upDisplay").innerHTML = "<b>Alchemy Lab Upgrades</b><br/><p>Currently your alchemy labs produce <strong>" + alchemyEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (alchemyEffect * alchemyCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + alchemyCount.toLocaleString() + "</b> total alchemy labs.<br/><br/><button class=\"btn btn-default disabled\">You must have at least 1 shipment!</button><br/><p id=\"cantafford\"></p>";
		}
	} else if (type == "portal"){
		if (alchemyCount > 0){
			document.getElementById("upDisplay").innerHTML = "<b>Portal Upgrades</b><br/><p>Currently your portals produce <strong>" + portalEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (portalEffect * portalCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + portalCount.toLocaleString() + "</b> total portals.<br/><br/><button class=\"btn btn-success\" onclick=\"boughtPortal()\">Cost: " + portalCost.toLocaleString() + "</button><br/><p id=\"cantafford\"></p>";
		} else {
			document.getElementById("upDisplay").innerHTML = "<b>Portal Upgrades</b><br/><p>Currently your portals produce <strong>" + portalEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (portalEffect * portalCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + portalCount.toLocaleString() + "</b> total portals.<br/><br/><button class=\"btn btn-default disabled\">You must have at least 1 alchemy lab!</button><br/><p id=\"cantafford\"></p>";
		}
	} else if (type == "time"){
		if (portalCount > 0){
			document.getElementById("upDisplay").innerHTML = "<b>Time Machine Upgrades</b><br/><p>Currently your time machines produce <strong>" + timeEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (timeEffect * timeCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + timeCount.toLocaleString() + "</b> total time machines.<br/><br/><button class=\"btn btn-success\" onclick=\"boughtTime()\">Cost: " + timeCost.toLocaleString() + "</button><br/><p id=\"cantafford\"></p>";
		} else {
			document.getElementById("upDisplay").innerHTML = "<b>Time Machine Upgrades</b><br/><p>Currently your time machines produce <strong>" + timeEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (timeEffect * timeCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + timeCount.toLocaleString() + "</b> total time machines.<br/><br/><button class=\"btn btn-default disabled\">You must have at least 1 portal!</button><br/><p id=\"cantafford\"></p>";
		}
	} else if (type == "anti"){
		if (timeCount > 0){
			document.getElementById("upDisplay").innerHTML = "<b>Antimatter Condenser Upgrades</b><br/><p>Currently your antimatter condensers produce <strong>" + antiEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (antiEffect * antiCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + antiCount.toLocaleString() + "</b> total antimatter condensers.<br/><br/><button class=\"btn btn-success\" onclick=\"boughtAnti()\">Cost: " + antiCost.toLocaleString() + "</button><br/><p id=\"cantafford\"></p>";
		} else {
			document.getElementById("upDisplay").innerHTML = "<b>Antimatter Condenser Upgrades</b><br/><p>Currently your antimatter condensers produce <strong>" + antiEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (antiEffect * antiCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + antiCount.toLocaleString() + "</b> total antimatter condensers.<br/><br/><button class=\"btn btn-default disabled\">You must have at least 1 time machine!</button><br/><p id=\"cantafford\"></p>";
		}
	} else if (type == "prism"){
		if (antiCount > 0){
			document.getElementById("upDisplay").innerHTML = "<b>Prism Upgrades</b><br/><p>Currently your prisms produce <strong>" + prismEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (prismEffect * prismCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + prismCount.toLocaleString() + "</b> total prisms.<br/><br/><button class=\"btn btn-success\" onclick=\"boughtPrism()\">Cost: " + prismCost.toLocaleString() + "</button><br/><p id=\"cantafford\"></p>";
		} else {
			document.getElementById("upDisplay").innerHTML = "<b>Prism Upgrades</b><br/><p>Currently your prisms produce <strong>" + prismEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (prismEffect * prismCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + prismCount.toLocaleString() + "</b> total prisms.<br/><br/><button class=\"btn btn-default disabled\">You must have at least 1 antimatter condenser!</button><br/><p id=\"cantafford\"></p>";
		}
	} else if (type == "chance"){
		if (prismCount > 0){
			document.getElementById("upDisplay").innerHTML = "<b>Chancemaker Upgrades</b><br/><p>Currently your chancemakers produce <strong>" + chanceEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (chanceEffect * chanceCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + chanceCount.toLocaleString() + "</b> total chancemakers.<br/><br/><button class=\"btn btn-success\" onclick=\"boughtChance()\">Cost: " + chanceCost.toLocaleString() + "</button><br/><p id=\"cantafford\"></p>";
		} else {
			document.getElementById("upDisplay").innerHTML = "<b>Chancemaker Upgrades</b><br/><p>Currently your chancemakers produce <strong>" + chanceEffect.toLocaleString() + "</strong> cookies each, with a combined total of <strong>" + (chanceEffect * chanceCount).toLocaleString() + "</strong> cookies per second.<br/>You have <b> " + chanceCount.toLocaleString() + "</b> total chancemakers.<br/><br/><button class=\"btn btn-default disabled\">You must have at least 1 prism!</button><br/><p id=\"cantafford\"></p>";
		}
	}
}
//Upgrade Functions
//Cursors
function cursorNav(){
	shopDisplayUpdate("cursor");
	shopButtonsToDanger();
	document.getElementById("cusbutton").className = "btn btn-success btn-block"
}

function emptyCantAfford(){
	document.getElementById("cantafford").innerHTML = "";
}

function boughtCursor(){
	if (cookies >= cursorCost){
		cookies -= cursorCost;
		updateCookieText();
		cursorCount += 1;
		cursorCost = round(cursorCost * 1.15, 0);
		shopDisplayUpdate("cursor");
		updateCPSText();
	} else {
		document.getElementById("cantafford").innerHTML = "<b>You cannot afford this item yet! You need " + round((cursorCost - cookies),1).toLocaleString() + " more cookies!</b>";
		setTimeout(emptyCantAfford, 1000);
	}
}
//Grandmas
function grandmaNav(){
	shopDisplayUpdate("grandma");
	shopButtonsToDanger();
	document.getElementById("grabutton").className = "btn btn-success btn-block"
}

function boughtGrandma(){
	if (cookies >= grandmaCost){
		cookies -= grandmaCost;
		updateCookieText();
		grandmaCount += 1;
		grandmaCost = round(grandmaCost * 1.15, 0);
		shopDisplayUpdate("grandma");
		updateCPSText();
	} else {
		document.getElementById("cantafford").innerHTML = "<b>You cannot afford this item yet! You need " + round((grandmaCost - cookies),1).toLocaleString() + " more cookies!</b>";
		setTimeout(emptyCantAfford, 1000);
	}
}
//Farms
function farmNav(){
	shopDisplayUpdate("farm");
	shopButtonsToDanger();
	document.getElementById("farbutton").className = "btn btn-success btn-block"
}

function boughtFarm(){
	if (cookies >= farmCost){
		cookies -= farmCost;
		updateCookieText();
		farmCount += 1;
		farmCost = round(farmCost * 1.15, 0);
		shopDisplayUpdate("farm");
		updateCPSText();
	} else {
		document.getElementById("cantafford").innerHTML = "<b>You cannot afford this item yet! You need " + round((farmCost - cookies),1).toLocaleString() + " more cookies!</b>";
		setTimeout(emptyCantAfford, 1000);
	}
}
//Mines
function mineNav(){
	shopDisplayUpdate("mine");
	shopButtonsToDanger();
	document.getElementById("minbutton").className = "btn btn-success btn-block"
}

function boughtMine(){
	if (cookies >= mineCost){
		cookies -= mineCost;
		updateCookieText();
		mineCount += 1;
		mineCost = round(mineCost * 1.15, 0);
		shopDisplayUpdate("mine");
		updateCPSText();
	} else {
		document.getElementById("cantafford").innerHTML = "<b>You cannot afford this item yet! You need " + round((mineCost - cookies),1).toLocaleString() + " more cookies!</b>";
		setTimeout(emptyCantAfford, 1000);
	}
}
//Factories
function factoryNav(){
	shopDisplayUpdate("factory");
	shopButtonsToDanger();
	document.getElementById("facbutton").className = "btn btn-success btn-block";
}

function boughtFactory(){
	if (cookies >= factoryCost){
		cookies -= factoryCost;
		updateCookieText();
		factoryCount += 1;
		factoryCost = round(factoryCost * 1.15, 0);
		shopDisplayUpdate("factory");
		updateCPSText();
	} else {
		document.getElementById("cantafford").innerHTML = "<b>You cannot afford this item yet! You need " + round((factoryCost - cookies),1).toLocaleString() + " more cookies!</b>";
		setTimeout(emptyCantAfford, 1000);
	}
}
//Banks
function bankNav(){
	shopDisplayUpdate("bank");
	shopButtonsToDanger();
	document.getElementById("banbutton").className = "btn btn-success btn-block";
}

function boughtBank(){
	if (cookies >= bankCost){
		cookies -= bankCost;
		updateCookieText();
		bankCount += 1;
		bankCost = round(bankCost * 1.15, 0);
		shopDisplayUpdate("bank");
		updateCPSText();
	} else {
		document.getElementById("cantafford").innerHTML = "<b>You cannot afford this item yet! You need " + round((bankCost - cookies),1).toLocaleString() + " more cookies!</b>";
		setTimeout(emptyCantAfford, 1000);
	}
}
//Temples
function templeNav(){
	shopDisplayUpdate("temple");
	shopButtonsToDanger();
	document.getElementById("tembutton").className = "btn btn-success btn-block";
}

function boughtTemple(){
	if (cookies >= templeCost){
		cookies -= templeCost;
		updateCookieText();
		templeCount += 1;
		templeCost = round(templeCost * 1.15, 0);
		shopDisplayUpdate("temple");
		updateCPSText();
	} else {
		document.getElementById("cantafford").innerHTML = "<b>You cannot afford this item yet! You need " + round((templeCost - cookies),1).toLocaleString() + " more cookies!</b>";
		setTimeout(emptyCantAfford, 1000);
	}
}
//Wizard Towers
function wizardNav(){
	shopDisplayUpdate("wizard");
	shopButtonsToDanger();
	document.getElementById("wizbutton").className = "btn btn-success btn-block";
}

function boughtWizard(){
	if (cookies >= wizardCost){
		cookies -= wizardCost;
		updateCookieText();
		wizardCount += 1;
		wizardCost = round(wizardCost * 1.15, 0);
		shopDisplayUpdate("wizard");
		updateCPSText();
	} else {
		document.getElementById("cantafford").innerHTML = "<b>You cannot afford this item yet! You need " + round((wizardCost - cookies),1).toLocaleString() + " more cookies!</b>";
		setTimeout(emptyCantAfford, 1000);
	}
}
//Shipments
function shipmentNav(){
	shopDisplayUpdate("shipment");
	shopButtonsToDanger();
	document.getElementById("shibutton").className = "btn btn-success btn-block";
}

function boughtShipment(){
	if (cookies >= shipmentCost){
		cookies -= shipmentCost;
		updateCookieText();
		shipmentCount += 1;
		shipmentCost = round(shipmentCost * 1.15, 0);
		shopDisplayUpdate("shipment");
		updateCPSText();
	} else {
		document.getElementById("cantafford").innerHTML = "<b>You cannot afford this item yet! You need " + round((shipmentCost - cookies),1).toLocaleString() + " more cookies!</b>";
		setTimeout(emptyCantAfford, 1000);
	}
}
//Alchemy Labs
function alchemyNav(){
	shopDisplayUpdate("alchemy");
	shopButtonsToDanger();
	document.getElementById("alcbutton").className = "btn btn-success btn-block";
}

function boughtAlchemy(){
	if (cookies >= alchemyCost){
		cookies -= alchemyCost;
		updateCookieText();
		alchemyCount += 1;
		alchemyCost = round(alchemyCost * 1.15, 0);
		shopDisplayUpdate("alchemy");
		updateCPSText();
	} else {
		document.getElementById("cantafford").innerHTML = "<b>You cannot afford this item yet! You need " + round((alchemyCost - cookies),1).toLocaleString() + " more cookies!</b>";
		setTimeout(emptyCantAfford, 1000);
	}
}
//Portals
function portalNav(){
	shopDisplayUpdate("portal");
	shopButtonsToDanger();
	document.getElementById("porbutton").className = "btn btn-success btn-block";
}

function boughtPortal(){
	if (cookies >= portalCost){
		cookies -= portalCost;
		updateCookieText();
		portalCount += 1;
		portalCost = round(portalCost * 1.15, 0);
		shopDisplayUpdate("portal");
		updateCPSText();
	} else {
		document.getElementById("cantafford").innerHTML = "<b>You cannot afford this item yet! You need " + round((portalCost - cookies),1).toLocaleString() + " more cookies!</b>";
		setTimeout(emptyCantAfford, 1000);
	}
}
//Time Machines
function timeNav(){
	shopDisplayUpdate("time");
	shopButtonsToDanger();
	document.getElementById("timbutton").className = "btn btn-success btn-block";
}

function boughtTime(){
	if (cookies >= timeCost){
		cookies -= timeCost;
		updateCookieText();
		timeCount += 1;
		timeCost = round(timeCost * 1.15, 0);
		shopDisplayUpdate("time");
		updateCPSText();
	} else {
		document.getElementById("cantafford").innerHTML = "<b>You cannot afford this item yet! You need " + round((timeCost - cookies),1).toLocaleString() + " more cookies!</b>";
		setTimeout(emptyCantAfford, 1000);
	}
}
//Antimatter Condensers
function antimatterNav(){
	shopDisplayUpdate("anti");
	shopButtonsToDanger();
	document.getElementById("antbutton").className = "btn btn-success btn-block";
}

function boughtAnti(){
	if (cookies >= antiCost){
		cookies -= antiCost;
		updateCookieText();
		antiCount += 1;
		antiCost = round(antiCost * 1.15, 0);
		shopDisplayUpdate("anti");
		updateCPSText();
	} else {
		document.getElementById("cantafford").innerHTML = "<b>You cannot afford this item yet! You need " + round((antiCost - cookies),1).toLocaleString() + " more cookies!</b>";
		setTimeout(emptyCantAfford, 1000);
	}
}
//Prisms
function prismNav(){
	shopDisplayUpdate("prism");
	shopButtonsToDanger();
	document.getElementById("pributton").className = "btn btn-success btn-block";
}

function boughtPrism(){
	if (cookies >= prismCost){
		cookies -= prismCost;
		updateCookieText();
		prismCount += 1;
		prismCost = round(prismCost * 1.15, 0);
		shopDisplayUpdate("prism");
		updateCPSText();
	} else {
		document.getElementById("cantafford").innerHTML = "<b>You cannot afford this item yet! You need " + round((prismCost - cookies),1).toLocaleString() + " more cookies!</b>";
		setTimeout(emptyCantAfford, 1000);
	}
}
//Chancemakers
function chanceNav(){
	shopDisplayUpdate("chance");
	shopButtonsToDanger();
	document.getElementById("chabutton").className = "btn btn-success btn-block";
}

function boughtChance(){
	if (cookies >= chanceCost){
		cookies -= chanceCost;
		updateCookieText();
		chanceCount += 1;
		chanceCost = round(chanceCost * 1.15, 0);
		shopDisplayUpdate("chance");
		updateCPSText();
	} else {
		document.getElementById("cantafford").innerHTML = "<b>You cannot afford this item yet! You need " + round((chanceCost - cookies),1).toLocaleString() + " more cookies!</b>";
		setTimeout(emptyCantAfford, 1000);
	}
}

//Utility functions
function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

window.addEventListener('keydown', function(e) {
							if (e.keyIdentifier == 'U+000A' || e.keyIdentifier == 'Enter' || e.keyCode == 13) {
								if (e.target.nodeName == 'INPUT' && e.target.type == 'image') {
									e.preventDefault();
									return false;
								}
							}
						}, true);
