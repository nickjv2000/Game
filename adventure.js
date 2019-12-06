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
	document.getElementById("button1").setAttribute("onclick", "attack();")
	document.getElementById("button2").setAttribute("onclick", "sneak();")
	document.getElementById("button3").setAttribute("onclick", "run();")
}


function attack() {
	title.innerHTML = "You attack the guards!"
	document.getElementById("description").innerHTML = "You manage to defeat the guards! <br> You run into the entrance and find yourself in the side entrance of a hallway. <br> To your left there's a stairs that leads upstairs, to your right there's the main entrance with guards protecting it. <br> What is your course of action? <br> 1) Go to the stairs. <br> 2) Go to the end of the hallway past the stairs. <br> 3) Go to the main entrance and sneak up on the guards."
	document.getElementById("button1").setAttribute("onclick", "stairs();")
	document.getElementById("button2").setAttribute("onclick", "hallway();")
	document.getElementById("button3").setAttribute("onclick", "entrance();")
}

function hallway() {
	title.innerHTML = "You run to the end of the hallway"
	document.getElementById("description").innerHTML = "When arriving at the end of the hallway you see a torch. <br> You notice you can pick up the torch but slowly you hear footsteps coming closer. <br> The guards from the main entrance are closing in on you! What are you going to do?! <br> 1) Pick up the torch and swing it at them. <br> 2) You ignore the torch and run at them with your weaponry. <br> 3) You attempt to run past them."
	document.getElementById("button1").setAttribute("onclick", "torch();")
	document.getElementById("button2").setAttribute("onclick", "attack1();")
	document.getElementById("button3").setAttribute("onclick", "Run();")
}

function torch() {
	title.innerHTML = "You pick up the torch and turn around towards the guards!"
	document.getElementById("description").innerHTML = "You frantically start swinging it at every side you can cover hoping to hit the guards. <br> One guard tries to find an opening and goes for it but ends up getting hit and killed. <br> The other guard doesn't know what to do and tries to tackle you. <br> The torch manages to hit his stomach and he screams in agony. <br> You've killed the guards what could the torch be useful for other than this? <br> 1) Go back to the side entrance. <br> 2) Go to the main entrance. <br> 3) Go to the stairs."
	document.getElementById("button1").setAttribute("onclick", "side();")
	document.getElementById("button2").setAttribute("onclick", "ent();")
	document.getElementById("button3").setAttribute("onclick", "stairs();")
}

function attack1() {
	title.innerHTML = "You ignore the torch and go into attacking stance for the guards"
	document.getElementById("description").innerHTML = "You face the guards and notice there's two guards. <br> You feel confident in your sword skill and go towards the guards. <br> Sadly these guards managed to overmaster you and kill you. <br><br><br> You died."
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").style.visibility = "hidden"
	document.getElementById("button3").style.visibility = "hidden"
}

function stairs() {
	title.innerHTML = "You went to the stairs."
	document.getElementById("description").innerHTML = "You arrive at the stairs and notice it goes both up and down. <br> Which way do you go? <br> 1) Upstairs. <br> 2) Downstairs. <br> 3) Go back to the entrance."
	document.getElementById("button1").setAttribute("onclick", "upstairs();")
	document.getElementById("button2").setAttribute("onclick", "downstairs();")
	document.getElementById("button3").setAttribute("onclick", "attack();")
}

function upstairs() {
	title.innerHTML = "You chose to go upstairs"
	document.getElementById("description").innerHTML = "You went upstairs and at the top of the stairs there's a long hallway once again. <br> This hallway has several doors on the side and one door at the end with light shining underneath it. <br> You can try to enter every door. What do you do? <br> 1) Try every door until one budges. <br> 2) Open the door at the end" 
}

function downstairs() {
	title.innerHTML = "You chose to go downstairs"
	document.getElementById("description").innerHTML = "When going downstairs light slowly fades away and it becomes to dark to see. <br> You hear screams coming from downstairs but have no idea whats there. <br> Do you keep going? <br> 1) Keep going downstairs. <br> 2) Go back up to find a solution. <br>"
}

function attacks() {
	title.innerHTML = "You chose to attack the guards at the main entrance"
	document.getElementById("description").innerHTML = "You run at the main entrance to attack the guards. <br> What you failed to notice was a door on the side. <br> Randomly two guards who heard a noise in the hallway come barging out and stop you in your tracks. <br> Before you could react there was a sword stabbing you through your stomach. <br><br><br> You died."
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