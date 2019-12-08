var torchs = false
var mentrance = false
var mattack = false
var mhall = false
var rtk = false

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
	document.getElementById("image").src = "images/battle.jpg"
}

function defend() {
	title.innerHTML = "You stand up and take a defensive position."
	document.getElementById("description").innerHTML = "The enemy knights acknowledge your last bits of effort and decide no mercy whilst attacking you. <br> You managed to kill one of the opposing knights but the last standing knight takes that opportunity to strike you down. <br><br><br> You died."
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").style.visibility = "hidden"
	document.getElementById("button3").style.visibility = "hidden"
	document.getElementById("inventoryItem").style.visibility = "hidden"
	document.getElementById("inventory").style.visibility = "hidden"
	document.getElementById("image").src = "images/battle.jpg"
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
	if (mattack == false) {
	title.innerHTML = "You attack the guards!"
	document.getElementById("description").innerHTML = "You manage to defeat the guards! <br> You run into the entrance and find yourself in the side entrance of a hallway. <br> To your left there's a stairs that leads upstairs, to your right there's the main entrance with guards protecting it. <br> What is your course of action? <br><br> 1) Go to the stairs. <br> 2) Go to the end of the hallway past the stairs. <br> 3) Go to the main entrance and sneak up on the guards."
	document.getElementById("button1").setAttribute("onclick", "stairs();")
	document.getElementById("button2").setAttribute("onclick", "hallway();")
    document.getElementById("button3").setAttribute("onclick", "entrance();")
	document.getElementById("image").src = "images/hall2.png"
	mattack = true
	} else {
	title.innerHTML = "You go back to the side entrance and look around"
	document.getElementById("description").innerHTML = "The same options are before are available <br> You can go to the end of the hallway, the stairs or to the entrance again. <br><br> 1) Go to the stairs. <br> 2) Go to the end of the hallway <br> 3) Go back to the main entrance."
	document.getElementById("button1").setAttribute("onclick", "stairs();")
	document.getElementById("button2").setAttribute("onclick", "hallway();")
	document.getElementById("button3").setAttribute("onclick", "entrance();")
	document.getElementById("image").src = "images/hall2.png"
	document.getElementById("button3").style.opacity = "1"
	document.getElementById("button3").style.cursor = "pointer"
	document.getElementById("button3").disabled = false;
	document.getElementById("button3").style.transformY = "4px"
	document.getElementById("button2").style.opacity = "1"
	document.getElementById("button2").style.cursor = "pointer"
	document.getElementById("button2").disabled = false;
	document.getElementById("button2").style.transformY = "4px"
}
}

function entrance() {
	document.getElementById("button3").style.opacity = "0.6"
	document.getElementById("button3").style.cursor = "not-allowed"
	document.getElementById("button3").disabled = true;
	document.getElementById("button3").style.transform = "none"
	if (mentrance === false) {
	title.innerHTML = "You slowly close up to the guards at the entrance"
	document.getElementById("description").innerHTML = "As you slowly close up the distance the guards are not noticing your presence. <br> You end up stabbing both of them before they're able to react. <br> You end up gaining the power over the main entrance. <br> Whats your next move? <br><br> 1) Go back to the side entrance. <br> 2) Hurry back to your own castle to get support."
	document.getElementById("button1").setAttribute("onclick", "attack();")
	document.getElementById("button2").setAttribute("onclick", "help();")
	document.getElementById("image").src = "images/entrance.jpg"
	mentrance = true
	} else if (torchs === true) {
	title.innerHTML = "You go to the main entrance"
	document.getElementById("description").innerHTML = "You go to the main entrance that you have all accessibility of. <br> You can go back to the side entrance or <br> go back to your castle and call in more knights to help. <br> What do you do? <br><br> 1) Go back to the side entrance. <br> 2) Go to the castle for back up."
    document.getElementById("button1").setAttribute("onclick", "attack();")
	document.getElementById("button2").setAttribute("onclick", "help();")
	document.getElementById("image").src = "images/entrance.jpg"
    mattack = true
	mentrance = true
	} else {
	title.innerHTML = "You go back to the main entrance once again."
	document.getElementById("description").innerHTML = "You went back to the main entrance again <br> You have to make a choice now on your actions <br> Either go back inside or call for help. <br><br> 1) Go back inside <br> 2) Call for help at your own castle"
	document.getElementById("button1").setAttribute("onclick", "attack();")
	document.getElementById("button2").setAttribute("onclick", "help();")
	document.getElementById("image").src = "images/entrance.jpg"
	} 
}

function help() {
	title.innerHTML = "You go back to get an army from the castle."
	document.getElementById("description").innerHTML = "You go back to your castle to announce the upcoming fall of the enemy kingdom. <br> The king is delighted by the news and orders you to gather up an army. <br> After an hour or two pass a massive army has gathered up. <br> You rush towards the enemy entrance which is still left open. <br> The army raids the kingdom and rescues the women in the basement. <br> In the meanwhile you and a group of other knights went upstairs for the princess. <br> You succesfully saved her and earned the title of hero."
	document.getElementById("result").innerHTML = "<br><br> YOU WIN!"
	document.getElementById("result").style.visibility = "visible"
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").style.visibility = "hidden"
	document.getElementById("button3").style.visibility = "hidden"
	document.getElementById("inventory").style.visibility = "hidden"
	document.getElementById("image").src = "images/winner.jpg"
}

function hallway() {
	if (mhall === false) {
	title.innerHTML = "You run to the end of the hallway"
	document.getElementById("description").innerHTML = "When arriving at the end of the hallway you see a torch. <br> You notice you can pick up the torch but slowly you hear footsteps coming closer. <br> The guards from the main entrance are closing in on you! What are you going to do?! <br><br> 1) Pick up the torch and swing it at them. <br> 2) You ignore the torch and run at them with your weaponry. <br> 3) You attempt to run past them."
	document.getElementById("button1").setAttribute("onclick", "torch();")
	document.getElementById("button2").setAttribute("onclick", "attack1();")
	document.getElementById("button3").setAttribute("onclick", "Run();")
	document.getElementById("image").src = "images/hall2.png"
	mhall = true
	} else if (torchs === true) {
	title.innerHTML = "You go back to the end of the hallway"
	document.getElementById("description").innerHTML = "You end up at the same spot that the guards cornered you. <br> There's nothing to do here anymore. You've already been here. <br> You've already taken the torch. Just go back."
	document.getElementById("button1").setAttribute("onclick", "attack();")
	document.getElementById("button2").style.opacity = "0.6"
	document.getElementById("button2").style.cursor = "not-allowed"
	document.getElementById("button2").disabled = true;
	document.getElementById("button2").style.transform = "none"
	document.getElementById("button3").style.opacity = "0.6"
	document.getElementById("button3").style.cursor = "not-allowed"
	document.getElementById("button3").disabled = true;
	document.getElementById("button3").style.transform = "none"
	document.getElementById("image").src = "images/hall.png"
	} else {
	title.innerHTML = "You go back to the end of the hallway"
	document.getElementById("description").innerHTML = "You were already here, cornered by the guards. <br> Though it feels like you missed something. <br> Oh ofcourse! The torch! Quick, grab it!"
	document.getElementById("button1").setAttribute("onclick", "torch();")
	document.getElementById("button2").style.opacity = "0.6"
	document.getElementById("button2").style.cursor = "not-allowed"
	document.getElementById("button2").disabled = true;
	document.getElementById("button2").style.transform = "none"
	document.getElementById("button3").style.opacity = "0.6"
	document.getElementById("button3").style.cursor = "not-allowed"
	document.getElementById("button3").disabled = true;
	document.getElementById("button3").style.transform = "none"
	document.getElementById("image").src = "images/hall2.png"
	}
}

function Run() {
	title.innerHTML = "You attempt to run past the guards that are coming for you"
	document.getElementById("description").innerHTML = "As you try to run past them one of the guards swings <br> his sword all around hitting both you and the other guard <br> You notice the misfortune and sigh with your last breath."
	document.getElementById("result").innerHTML = "<br><br> You lose."
	document.getElementById("image").src = "images/lose.png"
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").style.visibility = "hidden"
	document.getElementById("button3").style.visibility = "hidden"
	document.getElementById("inventory").style.visibility = "hidden"
	document.getElementById("inventoryItem").style.visibility = "hidden"
	document.getElementById("result").style.visibility = "visible"
}

function downstairs() {
	title.innerHTML = "You chose to go downstairs"
	document.getElementById("image").src = "images/stairs.jpg"
	if (torchs === false) {
	document.getElementById("description").innerHTML = "When going downstairs light slowly fades away and it becomes to dark to see. <br> You hear screams coming from downstairs but have no idea whats there. <br> Do you keep going? <br><br> 1) Keep going downstairs. <br> 2) Go back up to find a solution. <br>"
	document.getElementById("button1").setAttribute("onclick", "down();")
	document.getElementById("button2").setAttribute("onclick", "up();")
	document.getElementById("button3").style.opacity = "0.6"
	document.getElementById("button3").style.cursor = "not-allowed"
	document.getElementById("button3").disabled = true;
	document.getElementById("button3").style.transform = "none"
	} else {
	document.getElementById("description").innerHTML = "When going downstairs you notice the torch came in handy right away.<br> You start hearing screams of agony coming from downstairs.<br> They seem to be women screams. <br> Will you save the women or will you go back up to find the princess? <br><br> 1) Save the women <br> 2) Go back upstairs"
	document.getElementById("button1").setAttribute("onclick", "down();")
	document.getElementById("button2").setAttribute("onclick", "up();")
	document.getElementById("button3").style.opacity = "0.6"
	document.getElementById("button3").style.cursor = "not-allowed"
	document.getElementById("button3").disabled = true;
	document.getElementById("button3").style.transform = "none"
	}
}

function down() {
	if (torchs === false) {
	title.innerHTML = "You decide to go through the dark downstairs"
	document.getElementById("description").innerHTML = "As you walk downstairs you notice you're losing sense of where the <br>stairs steps are and accidentally skip one. <br> Due to skipping one you slip and fall down the stairs. <br> After you landed you open your eyes, your foot is broken and you can't walk. <br> There's someone approaching you but you can't see who it is. <br> He stabs you in the chest."
	document.getElementById("result").innerHTML = "<br><br>You lose."
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").style.visibility = "hidden"
	document.getElementById("button3").style.visibility = "hidden"
	document.getElementById("inventory").style.visibility = "hidden"
	document.getElementById("result").style.visibility = "visible"
	document.getElementById("image").src = "images/lose.png"
	} else {
	title.innerHTML = "You go down further chasing the screams."
	document.getElementById("description").innerHTML = "When you get downstairs you see a bunch of women chained to the wall <br>there's a knight guarding them and torturing them. <br> Will you save the women? <br><br> 1) Sneak up to the knight and kill him. <br> 2) Slowly go back upstairs so that the knight doesnt notice you."
	document.getElementById("button1").setAttribute("onclick", "atk1();")
	document.getElementById("button2").setAttribute("onclick", "up();")	
	document.getElementById("image").src = "images/sewers.png"	
	}
}

function up() {
	title.innerHTML = "You went back upstairs"
	if (torchs === false) {
	document.getElementById("description").innerHTML = "It was too dark to go downstairs so you chose to go back up. <br>You're standing where you were before going downstairs. <br> Where will you go now?<br><br> 1) The main entrance <br> 2) The end of the hallway"
	document.getElementById("button1").setAttribute("onclick", "entrance();")
	document.getElementById("button2").setAttribute("onclick", "hallway();")
	document.getElementById("button3").style.opacity = "0.6"
	document.getElementById("button3").style.cursor = "not-allowed"
	document.getElementById("button3").disabled = true;
	document.getElementById("button3").style.transform = "none"
	document.getElementById("image").src = "images/stairs.jpg"
	} else {
	document.getElementById("description").innerHTML = "Karma will get you back for leaving those women behind. <br> But for now the focus is on the princess. <br> Find her. Save her. <br> You end up looking at the stairs again. <br> Where will you go now? <br><br> 1) Upstairs <br> 2) Go back down and save the women! <br> 3) Go back to the side entrance"
	document.getElementById("button1").setAttribute("onclick", "upstairs();")
	document.getElementById("button2").setAttribute("onclick", "atk1();")
	document.getElementById("button3").setAttribute("onclick", "attack();")
	document.getElementById("image").src = "images/stairs.jpg"
	document.getElementById("button3").style.opacity = "1"
	document.getElementById("button3").style.cursor = "pointer"
	document.getElementById("button3").disabled = false;
	document.getElementById("button3").style.transformY = "4px"
	rtk = true
	}
}

function atk1() {
	title.innerHTML = "You decide to fight the guard torturing the women."
	if (rtk === false) {
	document.getElementById("description").innerHTML = "You sneak up to the guard that's torturing the women. <br> You stab him in the chest and kill him. <br> You free the women and show them back to the castle. <br> Your efforts to save the women were in great reward but sadly one important loss. <br> You get news from the king that the princess's body was left in the woods.<br> She has died."
	document.getElementById("result").style.visibility = "visible"
	document.getElementById("result").innerHTML = "You dont win nor lose."
	document.getElementById("image").src = "images/end.gif"
	document.getElementById("inventory").style.visibility = "hidden"
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").style.visibility = "hidden"
	document.getElementById("button3").style.visibility = "hidden"
	document.getElementById("inventoryItem").style.visibility = "hidden"
	} else {
	document.getElementById("description").innerHTML = "You rush down to fight the enemy guard. <br> You quickly overmaster him and save the women. <br> You help them get back to the castle and your efforts were in great reward. <br> Sadly the news of the princess has arrived shortly after. <br> Her body has been dumped in the woods. <br> She has died."
	document.getElementById("result").style.visibility = "hidden"
	document.getElementById("result").innerHTML = "You dont win nor lose."
	document.getElementById("image").src = "images/end.gif"
	document.getElementById("inventory").style.visibility = "hidden"
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").style.visibility = "hidden"
	document.getElementById("button3").style.visibility = "hidden"
	document.getElementById("inventoryItem").style.visibility = "hidden"
	}
}

function torch() {
	if (torchs === false) {
	title.innerHTML = "You pick up the torch and turn around towards the guards!"
	document.getElementById("description").innerHTML = "You frantically start swinging it at every side you can cover hoping to hit the guards. <br> One guard tries to find an opening and goes for it but ends up getting hit and killed. <br> The other guard doesn't know what to do and tries to tackle you. <br> The torch manages to hit his stomach and he screams in agony. <br> You've killed the guards what could the torch be useful for other than this? <br><br> 1) Go back to the side entrance. <br> 2) Go to the main entrance. <br> 3) Go to the stairs."
	document.getElementById("button1").setAttribute("onclick", "attack();")
	document.getElementById("button2").setAttribute("onclick", "entrance();")
	document.getElementById("button3").setAttribute("onclick", "stairs();")
	document.getElementById("inventoryItem").src = "images/torch.jpg";
	document.getElementById("inventoryItem").style.visibility = "visible"
	document.getElementById("button3").style.opacity = "1"
	document.getElementById("button3").style.cursor = "pointer"
	document.getElementById("button3").disabled = false;
	document.getElementById("button3").style.transformY = "4px"
	torchs = true
	document.getElementById("image").src = "images/hall.png"
	} else {
	title.innerHTML = "You pick up the torch you forgot last time."
	document.getElementById("description").innerHTML = "You think to yourself what the torch might be useful for and you have a slight clue.<br> The stairs might give a hint."
	document.getElementById("button1").setAttribute("onclick", "stairs();")
	document.getElementById("button2").style.opacity = "0.6"
	document.getElementById("button2").style.cursor = "not-allowed"
	document.getElementById("button2").disabled = true;
	document.getElementById("button2").style.transform = "none"
	document.getElementById("button3").style.opacity = "0.6"
	document.getElementById("button3").style.cursor = "not-allowed"
	document.getElementById("button3").disabled = true;
	document.getElementById("button3").style.transform = "none"
	document.getElementById("image").src = "images/hall2.png"
	}
}

function attack1() {
	title.innerHTML = "You ignore the torch and go into attacking stance for the guards"
	document.getElementById("description").innerHTML = "You face the guards and notice there's two guards. <br> You feel confident in your sword skill and go towards the guards. <br> Sadly these guards managed to overmaster you and kill you."
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").style.visibility = "hidden"
	document.getElementById("button3").style.visibility = "hidden"
	document.getElementById("image").src = "images/hall2.png"
	document.getElementById("inventory").style.visibility = "hidden"
	document.getElementById("result").innerHTML = "<br><br><br>You lose"
	document.getElementById("image").src = "images/lose.png"
	document.getElementById("result").style.visibility = "visible"
}

function stairs() {
	title.innerHTML = "You went to the stairs."
	document.getElementById("description").innerHTML = "You arrive at the stairs and notice it goes both up and down. <br> Which way do you go? <br><br> 1) Upstairs. <br> 2) Downstairs. <br> 3) Go back to the entrance."
	document.getElementById("button1").setAttribute("onclick", "upstairs();")
	document.getElementById("button2").setAttribute("onclick", "downstairs();")
	document.getElementById("button3").setAttribute("onclick", "attack();")
	document.getElementById("image").src = "images/stairs.jpg"
	document.getElementById("button2").style.opacity = "1"
	document.getElementById("button2").style.cursor = "pointer"
	document.getElementById("button2").disabled = false;
	document.getElementById("button2").style.transformY = "4px"
	document.getElementById("button3").style.opacity = "1"
	document.getElementById("button3").style.cursor = "pointer"
	document.getElementById("button3").disabled = false;
	document.getElementById("button3").style.transformY = "4px"
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
	document.getElementById("image").src = "images/king.png"
}

function atk() {
	title.innerHTML = "You attack the guards with a powerful swing"
	document.getElementById("description").innerHTML = "Because of your power and anger from seeing the princess<br> like this you easily kill the guards. <br> The king looks at you frightened. <br> You slowly walk up to him with the anger in your heart burning. <br> <br> Please leave me alone! I didn't hurt her! <br> Said the king. <br> But sadly for him you showed no mercy<br> and stabbed him as soon as you got in reach. <br> You saved the queen and went back to the castle."
	document.getElementById("result").innerHTML = "<br>HUGE WIN!!"
	document.getElementById("result").style.visibility = "visible"
	document.getElementById("image").src = "images/king.gif"
	document.getElementById("inventory").style.visibility = "hidden"
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").style.visibility = "hidden"
	document.getElementById("button3").style.visibility = "hidden"
}

function princess() {
	title.innerHTML = "You try to run past the guards"
	document.getElementById("description").innerHTML = "Sadly, these guards are no joke and manage to stop you mid way. <br> They are standing in front of you and show no mercy. <br> They cleanly chop your limbs off and leave you to die."
	document.getElementById("result").innerHTML = "<br>You lost."
	document.getElementById("result").style.visibility = "visible"
	document.getElementById("image").src = "images/dead.jpg"
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").style.visibility = "hidden"
	document.getElementById("button3").style.visibility = "hidden"
	document.getElementById("inventory").style.visibility = "hidden"
}

function king() {
	title.innerHTML = "You ignore the guards and go straight for the king"
	document.getElementById("description").innerHTML = "Your attempt to reach the king quickly ends as the guards jump in front of you. <br> You try your best to get past them but their fierce stance is too much for you. <br> After a lot of effort you get exhausted and the guards overmaster you. <br> Your conciousness slowly fades away."
	document.getElementById("result").innerHTML = "<br><br> You lose."
	document.getElementById("image").src = "images/lose.png"
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").style.visibility = "hidden"
	document.getElementById("button3").style.visibility = "hidden"
	document.getElementById("inventory").style.visibility = "hidden"
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