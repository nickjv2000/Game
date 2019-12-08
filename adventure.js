var torchs = false

function beginning() {
	title.style.visibility = "hidden"
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").innerHTML = "START"
	document.getElementById("button3").style.visibility = "hidden"
	document.getElementById("inventory").style.visibility = "hidden"
	document.getElementById("inventoryItem").style.visibility = "hidden"
	document.getElementById("button2").setAttribute("onclick", "begin();")
	document.getElementById("image").src = "images/start.jpg"
	document.getElementById("description").style.visibility = "hidden"
	document.getElementById("container").style.visibility = "hidden"
}

function begin() {
	title.innerHTML = "Welcome to my game!"	
	document.getElementById("description").innerHTML = "You're a knight for a kingdom and have a duty to protect the princess. <br> The princess has been kidnapped by the enemy kingdom and you're left <br> with the following choices as actions.<br><br> 1) Chase the enemy straight towards the castle. <br> 2) Take a different route than the enemy knights to get to their castle. <br> 3) Strategise with other knights and the king before attacking the enemy.";
	document.getElementById("button1").setAttribute("onclick", "chase();")
	document.getElementById("button2").setAttribute("onclick", "route();")
	document.getElementById("button3").setAttribute("onclick", "strat();")
	document.getElementById("inventoryItem").style.visibility = "hidden"
	document.getElementById("inventory").style.visibility = "hidden"
	document.getElementById("image").src = "images/steal.png";
	document.getElementById("button1").innerHTML = "Choice 1"
	document.getElementById("button2").innerHTML = "Choice 2"
	document.getElementById("button3").innerHTML = "Choice 3"
	document.getElementById("button1").style.visibility = "visible"
	title.style.visibility = "visible"
	document.getElementById("description").style.visibility = "visible"
	document.getElementById("button2").style.visibility = "visible"
	document.getElementById("button3").style.visibility = "visible"
	document.getElementById("inventory").style.visibility = "visible"
	document.getElementById("container").style.visibility = "visible"
	document.getElementById("result").style.visibility = "hidden"
}






function chase() {
	title.innerHTML = "You bravely chase the enemy to their own territory!"
	document.getElementById("description").innerHTML = "While chasing the other knights recognise you and the majority of them stop in their tracks to face you. <br> The knights have taken a formation to defend their own against you. <br><br> 1) Fight the knights you're chasing. <br> 2) Stop in your tracks and act to leave but then look for a different route."
	document.getElementById("button1").setAttribute("onclick", "fight();")
	document.getElementById("button2").setAttribute("onclick", "route();")
	document.getElementById("inventory").style.visibility = "visible";
	document.getElementById("button3").style.opacity = "0.6"
	document.getElementById("button3").style.cursor = "not-allowed"
	document.getElementById("button3").disabled = true;
	document.getElementById("button3").style.transform = "none"
	document.getElementById("image").src = "images/castle.jpg";
	document.getElementById("inventory").style.visibility = "hidden"
}

function fight() {
	title.innerHTML = "You fight the protecting knights head on!"
	document.getElementById("description").innerHTML = "You bravely charge forward towards the enemy knights guarding the kidnapper. <br> You managed to kill two of four knights but are exhausted from the fight. <br> The enemy knights look at you with pity in their eyes and give you the chance of running away. <br> Your choices of action are <br><br> 1) Stand up gratefully and charge towards the enemy. <br> 2) Stand up and take a defensive position and wait for the knights to attack you. <br> 3) Stand up and flee the scene."
	document.getElementById("button1").setAttribute("onclick", "charge();")
	document.getElementById("button2").setAttribute("onclick", "defend();")
	document.getElementById("button3").setAttribute("onclick", "flee();")
	document.getElementById("button3").style.visibility = "visible"
	document.getElementById("image").src = "images/battle.jpg"
	document.getElementById("button1").style.visibility = "visible"
	document.getElementById("button2").innerHTML = "Choice 2"
	document.getElementById("button3").innerHTML = "Choice 3"
	document.getElementById("button3").style.opacity = "1"
	document.getElementById("button3").style.cursor = "pointer"
	document.getElementById("button3").disabled = false;
	document.getElementById("button3").style.transformY = "4px"
}

function charge() {
	title.innerHTML = "You stand up with might and charge the enemy knights!"
	document.getElementById("description").innerHTML = "Due to your exhaustion you no longer have the strength in your swings and the opposing knights easily overmaster you. <br><br><br> You died."
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").style.visibility = "hidden"
	document.getElementById("button3").style.visibility = "hidden"
	document.getElementById("inventoryItem").style.visibility = "hidden"
	document.getElementById("inventory").style.visibility = "hidden"
}

function defend() {
	title.innerHTML = "You stand up and take a defensive position."
	document.getElementById("description").innerHTML = "The enemy knights acknowledge your last bits of effort and decide no mercy whilst attacking you. <br> You managed to kill one of the opposing knights but the last standing knight takes that opportunity to strike you down. <br><br><br> You died."
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").style.visibility = "hidden"
	document.getElementById("button3").style.visibility = "hidden"
	document.getElementById("inventoryItem").style.visibility = "hidden"
	document.getElementById("inventory").style.visibility = "hidden"
}

function flee() {
	title.innerHTML = "You hear the words flee and instantly get up to run away."
	document.getElementById("description").innerHTML = "You succesfully ran away and came back to your castle. <br> You quickly go to the king to inform him about your actions and achievements. <br> The king looks very distressed and calls for assistance from his right hand man. <br> After the two gentleman talked for a while they call you to stand up, the right hand man walks towards you and draws his sword. <br> Sadly you're aware what this means and you lower your head. <br> Before you knew it the right hand man calls to you and orders you to put your head up, instead of beheading you he shows his respect alongside of the king. <br> The king says you fought well and have deserved treatment. <br> The king sent an army of knights to save the princess and they succeed."
	document.getElementById("result").innerHTML = "<br><br>You neither win nor lose but the princess has been saved"
	document.getElementById("result").style.visibility = "visible"
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").style.visibility = "hidden"
	document.getElementById("button3").style.visibility = "hidden"
	document.getElementById("inventoryItem").style.visibility = "hidden"
	document.getElementById("image").src = "images/run.gif"
	document.getElementById("inventory").style.visibility = "hidden"
}
















function route() {
	title.innerHTML = "You take a different route to chase the enemy"
	document.getElementById("description").innerHTML = "The different route makes you go to the side of their castle and you notice 2 guards <br> protecting a side entrance. Your course of action? <br><br> 1) Attack the two guards and rush into the castle. <br> 2) Sneak up to the guards and try to assassinate them before they notice you. <br> 3) Flee back to your own castle."
	document.getElementById("button1").setAttribute("onclick", "attack();")
	document.getElementById("button2").setAttribute("onclick", "sneak();")
	document.getElementById("button3").setAttribute("onclick", "run();")
	document.getElementById("button3").style.visibility = "visible"
	document.getElementById("inventory").style.visibility = "visible"
	document.getElementById("image").src = "images/castle2.jpg"
	document.getElementById("button3").style.opacity = "1"
	document.getElementById("button3").style.cursor = "pointer"
	document.getElementById("button3").disabled = false;
	document.getElementById("button3").style.transformY = "4px"	
}

function sneak() {
	title.innerHTML = "You take your time to sneak up on the guards"
	document.getElementById("description").innerHTML = "For some reason you thought this was a good idea <br> They're looking right at you slowly sneaking up on them. <br> One of the guards walks up to you and stares at you blankly. <br> He stabs you in the chest and you bleed out. <br><br> You died."
	document.getElementById("inventory").style.visibility = "hidden"
	document.getElementById("inventoryItem").style.visibility = "hidden"
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").style.visibility = "hidden"
	document.getElementById("button3").style.visibility = "hidden"
	document.getElementById("image").src = "images/fool.gif"
}

function run() {
	title.innerHTML = "You choose to run back to get a team of knights to raid the castle."
	document.getElementById("description").innerHTML = "You succesfully ran away and came back to your castle. <br> You quickly go to the king to inform him about your actions and achievements. <br> The king looks very distressed and calls for assistance from his right hand man. <br> After the two gentleman talked for a while they call you to stand up,<br> the right hand man walks towards you and draws his sword. <br> Sadly you're aware what this means and you lower your head. <br><br> You died."
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").style.visibility = "hidden"
	document.getElementById("button3").style.visibility = "hidden"
	document.getElementById("inventoryItem").style.visibility = "hidden"
	document.getElementById("inventory").style.visibility = "hidden"
	document.getElementById("image").src = "images/dead.jpg"
}


function attack() {
	title.innerHTML = "You attack the guards!"
	document.getElementById("description").innerHTML = "You manage to defeat the guards! <br> You run into the entrance and find yourself in the side entrance of a hallway. <br> To your left there's a stairs that leads upstairs, to your right there's the main entrance with guards protecting it. <br> What is your course of action? <br><br> 1) Go to the stairs. <br> 2) Go to the end of the hallway past the stairs. <br> 3) Go to the main entrance and sneak up on the guards."
	document.getElementById("button1").setAttribute("onclick", "stairs();")
	document.getElementById("button2").setAttribute("onclick", "hallway();")
	document.getElementById("button3").setAttribute("onclick", "entrance();")
	document.getElementById("image").src = "images/hall.png"
}

function hallway() {
	title.innerHTML = "You run to the end of the hallway"
	document.getElementById("description").innerHTML = "When arriving at the end of the hallway you see a torch. <br> You notice you can pick up the torch but slowly you hear footsteps coming closer. <br> The guards from the main entrance are closing in on you! What are you going to do?! <br> 1) Pick up the torch and swing it at them. <br> 2) You ignore the torch and run at them with your weaponry. <br> 3) You attempt to run past them."
	document.getElementById("button1").setAttribute("onclick", "torch();")
	document.getElementById("button2").setAttribute("onclick", "attack1();")
	document.getElementById("button3").setAttribute("onclick", "Run();")
}

function downstairs() {
	title.innerHTML = "You chose to go downstairs"
	if (torchs == false) {
	document.getElementById("description").innerHTML = "When going downstairs light slowly fades away and it becomes to dark to see. <br> You hear screams coming from downstairs but have no idea whats there. <br> Do you keep going? <br> 1) Keep going downstairs. <br> 2) Go back up to find a solution. <br>"
	document.getElementById("button1").setAttribute("onclick", "go();")
	document.getElementById("button2").setAttribute("onclick", "back();")
	document.getElementById("button3").style.visibility = "hidden"
	} else {
		document.getElementById("description").innerHTML = "When going downstairs you notice the torch came in handy right away.<br> You start hearing screams of agony coming from downstairs.<br> They seem to be women screams. <br> Will you save the women or will you go back up to find the princess? <br><br> 1) Save the women <br> 2) Go back upstairs"
		document.getElementById("button1").setAttribute("onclick", "down();")
		document.getElementById("button2").setAttribute("onclick", "up();")
		document.getElementById("button3").style.visibility = "hidden"
	}
}

function torch() {
	title.innerHTML = "You pick up the torch and turn around towards the guards!"
	document.getElementById("description").innerHTML = "You frantically start swinging it at every side you can cover hoping to hit the guards. <br> One guard tries to find an opening and goes for it but ends up getting hit and killed. <br> The other guard doesn't know what to do and tries to tackle you. <br> The torch manages to hit his stomach and he screams in agony. <br> You've killed the guards what could the torch be useful for other than this? <br> 1) Go back to the side entrance. <br> 2) Go to the main entrance. <br> 3) Go to the stairs."
	document.getElementById("button1").setAttribute("onclick", "side();")
	document.getElementById("button2").setAttribute("onclick", "ent();")
	document.getElementById("button3").setAttribute("onclick", "stairs();")
	document.getElementById("inventoryItem").src = "images/torch.jpg";
	document.getElementById("inventoryItem").style.visibility = "visible"
	torchs = true
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
	document.getElementById("description").innerHTML = "You arrive at the stairs and notice it goes both up and down. <br> Which way do you go? <br><br> 1) Upstairs. <br> 2) Downstairs. <br> 3) Go back to the entrance."
	document.getElementById("button1").setAttribute("onclick", "upstairs();")
	document.getElementById("button2").setAttribute("onclick", "downstairs();")
	document.getElementById("button3").setAttribute("onclick", "attack();")
}

function upstairs() {
	title.innerHTML = "You chose to go upstairs"
	document.getElementById("description").innerHTML = "You went upstairs and at the top of the stairs <br> there's a long hallway once again. <br> This hallway has several doors on the side <br> and one door at the end with light shining underneath it. <br> You can try to enter every door. <br>What do you do? <br><br> 1) Try every door until one budges. <br> 2) Open the door at the end" 
	document.getElementById("button1").setAttribute("onclick", "budge();")
	document.getElementById("button2").setAttribute("onclick", "door();")
	document.getElementById("image").src = "images/hall2.jpg"
	document.getElementById("button3").style.opacity = "0.6"
	document.getElementById("button3").style.cursor = "not-allowed"
	document.getElementById("button3").disabled = true;
	document.getElementById("button3").style.transform = "none"
}

function budge() {
	title.innerHTML = "You try to open every door"
	document.getElementById("description").innerHTML = "To your suprise not even one of the doors open. <br> You eventually go up to the last door and hear a soft mumble. <br> You slowly open the door to see the enemy king standing there. <br> As you enter the room you notice he's laughing.<br> The princess is on the ground with what seems like<br> a pool of blood surrounding her.. <br> The king looks at you and frantically starts laughing. <br><br> You're too late you fool! The king says. <br> My guards just killed her because she<br> was too annoying and you're next! <br> The guards started to surround you<br> and you have no choice but to surrender. <br><br> You lost."
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").style.visibility = "hidden"
	document.getElementById("button3").style.visibility = "hidden"
	document.getElementById("inventory").style.visibility = "hidden"
	document.getElementById("inventoryItem").style.visibility = "hidden"
	document.getElementById("image").src = "images/king.png"
}

function door() {
	title.innerHTML = "You immediately go for the door at the end"
	document.getElementById("description").innerHTML = "As you get closer you hear soft mumbling. <br> You slowly open the door to see the king next to the princess. <br> Before you even had a thought to your mind you stormed inside the room. <br> You were greeted by two guards protecting the king and the princess screaming to you. <br> The knights are blocking your way to the princess! <br> What are you going to do? <br><br> 1) Attack the knights! <br> 2) Try to avoid the knights and get the princess. <br> 3) Avoid the knights and try to kill the enemy king."
	document.getElementById("button3").style.opacity = "1"
	document.getElementById("button3").style.cursor = "pointer"
	document.getElementById("button3").disabled = false;
	document.getElementById("button3").style.transformY = "4px"
	document.getElementById("button1").setAttribute("onclick", "atk();")
	document.getElementById("button2").setAttribute("onclick", "princess();")
	document.getElementById("button3").setAttribute("onclick", "king();")
}

function atk() {
	title.innerHTML = "You attack the guards with a powerful swing"
	document.getElementById("description").innerHTML = "Because of your power and anger from seeing the princess<br> like this you easily kill the guards. <br> The king looks at you frightened. <br> You slowly walk up to him with the anger in your heart burning. <br> <br> Please leave me alone! I didn't hurt her! <br> Said the king. <br> But sadly for him you showed no mercy<br> and stabbed him as soon as you got in reach. <br> You saved the queen and went back to the castle."
	document.getElementById("result").innerHTML = "<br>HUGE WIN!!"
	document.getElementById("result").style.visibility = "visible"
}

function princess() {
	title.innerHTML = "You try to run past the guards"
	document.getElementById("description").innerHTML = "Sadly, these guards are no joke and manage to stop you mid way. <br> They are standing in front of you and show no mercy. <br> They cleanly chop your limbs off and leave you to die."
	document.getElementById("result").innerHTML = "<br>You lost."
	document.getElementById("result").style.visibility = "visible"
	document.getElementById("image").src = "images/dead.jpg"
}

function king() {
	title.innerHTML = "You ignore the guards and go straight for the king"
}

function attacks() {
	title.innerHTML = "You chose to attack the guards at the main entrance"
	document.getElementById("description").innerHTML = "You run at the main entrance to attack the guards. <br> What you failed to notice was a door on the side. <br> Randomly two guards who heard a noise in the hallway come barging out and stop you in your tracks. <br> Before you could react there was a sword stabbing you through your stomach."
	document.getElementById("result").innerHTML = "<br>HUGE WIN!!!"
	document.getElementById("image").src = "images/entrance.jpg"
	document.getElementById("result").style.visibility = "visible"
}
















function strat() {
	title.innerHTML = "You gather up the knights of your household"
	document.getElementById("description").innerHTML = "You approach the king with the terrible news and try to talk to him <br> to make up a strategy to save the princess. <br> However the king thinks otherwise, he is dissapointed in your failure <br> and decides not to listen to your reasoning. <br> The king calls forth his right hand and makes him draw his sword. <br>At that moment you very well know what is coming for you. <br><br><br> You died." 
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").style.visibility = "hidden"
	document.getElementById("button3").style.visibility = "hidden"
	document.getElementById("inventoryItem").style.visibility = "hidden"
	document.getElementById("inventory").style.visibility = "hidden"
	document.getElementById("image").src = "images/dead.jpg"
}

















beginning();