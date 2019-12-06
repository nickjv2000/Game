function begin() {
title.innerHTML = "Welcome to my game!"	
document.getElementById("description").innerHTML = "You're a knight for a kingdom and have a duty to protect the princess. <br> The princess has been kidnapped by the enemy kingdom and you're left with the following choices as actions <br> 1) Chase the enemy straight towards the castle. <br> 2) Take a different route than the enemy knights to get to their castle. <br> 3) Strategise with other knights and the king before attacking the enemy.";
document.getElementById("button1").setAttribute("onclick", "chase();")
document.getElementById("button2").setAttribute("onclick", "route();")
document.getElementById("button3").setAttribute("onclick", "strat();")
}






function chase() {
	title.innerHTML = "You bravely chase the enemy to their own territory!"
	document.getElementById("description").innerHTML = "While chasing the other knights recognise you and the majority of them stop in their tracks to face you. <br> The knights have taken a formation to defend their own against you. <br> 1) Fight the knights you're chasing. <br> 2) Stop in your tracks and act to leave but then look for a different route."
	document.getElementById("button1").setAttribute("onclick", "fight();")
	document.getElementById("button2").setAttribute("onclick", "route();")
	document.getElementById("button3").style.visibility = "hidden";
}

function fight() {
	title.innerHTML = "You fight the protecting knights head on!"
	document.getElementById("description").innerHTML = "You bravely charge forward towards the enemy knights guarding the kidnapper. <br> You managed to kill two of four knights but are exhausted from the fight. <br> The enemy knights look at you with pity in their eyes and give you the chance of running away. <br> Your choices of action are <br> 1) Stand up gratefully and charge towards the enemy. <br> 2) Stand up and take a defensive position and wait for the knights to attack you. <br> 3) Stand up and flee the scene."
	document.getElementById("button1").setAttribute("onclick", "charge();")
	document.getElementById("button2").setAttribute("onclick", "defend();")
	document.getElementById("button3").setAttribute("onclick", "flee();")
	document.getElementById("button3").style.visibility = "visible"
}

function charge() {
	title.innerHTML = "You stand up with might and charge the enemy knights!"
	document.getElementById("description").innerHTML = "Due to your exhaustion you no longer have the strength in your swings and the opposing knights easily overmaster you. <br><br><br> You died."
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").style.visibility = "hidden"
	document.getElementById("button3").style.visibility = "hidden"
	document.getElementById("inventoryItem").style.visibility = "hidden"
}

function defend() {
	title.innerHTML = "You stand up and take a defensive position."
	document.getElementById("description").innerHTML = "The enemy knights acknowledge your last bits of effort and decide no mercy whilst attacking you. <br> You managed to kill one of the opposing knights but the last standing knight takes that opportunity to strike you down. <br><br><br> You died."
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").style.visibility = "hidden"
	document.getElementById("button3").style.visibility = "hidden"
	document.getElementById("inventoryItem").style.visibility = "hidden"
}

function flee() {
	title.innerHTML = "You hear the words flee and instantly get up to run away."
	document.getElementById("description").innerHTML = "You succesfully ran away and came back to your castle. <br> You quickly go to the king to inform him about your actions and achievements. <br> The king looks very distressed and calls for assistance from his right hand man. <br> After the two gentleman talked for a while they call you to stand up, the right hand man walks towards you and draws his sword. <br> Sadly you're aware what this means and you lower your head. <br> Before you knew it the right hand man calls to you and orders you to put your head up, instead of beheading you he shows his respect alongside of the king. <br> The king says you fought well and have deserved treatment. <br> The king sent an army of knights to save the princess and they succeed. <br><br><br><br> You neither win nor lose but the princess has been saved."
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").style.visibility = "hidden"
	document.getElementById("button3").style.visibility = "hidden"
	document.getElementById("inventoryItem").style.visibility = "hidden"
}
















function route() {
	title.innerHTML = "You take a different route to chase the enemy"
	document.getElementById("description").innerHTML = "The different route makes you go to the side of their castle and you notice 2 guards protecting a side entrance. Your course of action? <br> 1) Attack the two guards and rush into the castle. <br> 2) Sneak up to the guards and try to assassinate them before they notice you. <br> 3) Flee back to your own castle."

}

























function strat() {
	title.innerHTML = "You gather up the knights of your household"
	document.getElementById("description").innerHTML = "You approach the king with the terrible news and try to talk to him to make up a strategy to save the princess. <br> However the king thinks otherwise, he is dissapointed in your failure and decides not to listen to your reasoning. <br> The king calls forth his right hand and makes him draw his sword. At that moment you very well know what is coming for you. <br><br><br> You died." 
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").style.visibility = "hidden"
	document.getElementById("button3").style.visibility = "hidden"
	document.getElementById("inventoryItem").style.visibility = "hidden"
}


begin();