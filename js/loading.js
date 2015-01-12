var displaySpeed = 10000; //Sets speed (in milleseconds) at which to cycle tips
var tips = [
"When the DM asks you 'Really? Are you sure?', you say 'NO.'",
"Never split the party."
];


function rotateTip() {
	var tipElement = document.getElementById('tip')
    	var elem = Math.floor(Math.random() * tips.length)
    	tipElement.innerHTML = "[" + (elem + 1) + "] " + tips[elem]
}

setInterval(rotateTip, displaySpeed);
