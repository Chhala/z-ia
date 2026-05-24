// ============================================================
//  rules.js — RÈGLES DE ZOMBICIDE 2e ÉDITION
// ============================================================

const ZOMBICIDE_RULES = `

### GAME OVERVIEW
* Zombicide is a cooperative game where 1 to 6 players take the roles of Survivors battling Zombies controlled by the game itself[cite: 108].
* The game's goal is to choose a Mission and complete its objective, killing as many Zombies as possible along the way[cite: 110].
* All players win or lose together[cite: 114, 244]. The game is won immediately when all of the Mission objectives have been accomplished[cite: 242].
* The game is lost whenever a Survivor is eliminated, when the Mission objectives can no longer be fulfilled, or when a specified losing condition is met[cite: 243].

---

### GAME SETUP
1. Choose a Mission and place the map tiles as indicated[cite: 154, 155]. Closed doors, Objective markings, and Epic Weapon Crates are pre-defined on the tiles[cite: 121, 158, 159].
2. Place Spawn Zones, tokens, and miniatures according to the Mission map[cite: 156].
3. Separate and shuffle the card decks facedown near the board: Starting Equipment (grey), Equipment (blue), Epic Weapons (red), Zombies (yellow), and Abominations[cite: 166, 167, 168, 169, 170, 171, 172]. Place the Car reference card within view[cite: 173].
4. Distribute 1 Dashboard, 1 colored plastic base, and 5 plastic trackers of the matching color to each Survivor[cite: 163, 164, 165].
5. Set the Dashboard sliding arrow on the 0 space in the blue area of the Danger Bar[cite: 192]. Place a tracker on the appropriate slot of the Wound Bar (Health 3 for classic Survivors, Health 2 for Kids) and another on the first Blue Skill[cite: 127, 193]. Place the remaining 3 trackers in the reserve slots at the top[cite: 194].
6. Deal Starting Equipment cards randomly and evenly among Survivors[cite: 188]. Starting equipment may be placed in Hand or Backpack slots[cite: 195].
7. First Player: The player who receives the Fire Axe as their Starting Equipment gets the First Player token and takes the first Turn of the first Game Round[cite: 203, 204].

---

### GAME ROUNDS
Each Game Round proceeds as follows:
1. PLAYER PHASE: The player with the First Player token activates their Survivors 1 at a time, in any order[cite: 227]. Each Survivor initially performs 3 Actions per Turn[cite: 228]. Once a player has activated all their Survivors, the player to their left takes their Turn[cite: 230]. When all players have completed their Turns, the Player Phase ends[cite: 231].
2. ZOMBIE PHASE: All Zombies on the board activate and spend 1 Action to either attack a Survivor standing in their Zone or, if they have nobody to attack, Move towards the Survivors[cite: 234]. Runners get 2 Actions[cite: 235]. Once all Zombies have performed their Actions, new Zombies appear in all active Spawn Zones[cite: 236].
3. END PHASE: Remove all Noise tokens from the board[cite: 239, 1450]. The first player hands the First Player token to the player on their left[cite: 239, 1451]. Another Game Round then begins[cite: 240].

---

### THE BASICS & DEFINITIONS
* Actor: A Survivor or Zombie[cite: 250].
* Zone: Inside a building, a Zone is a room[cite: 251]. On a street, a Zone is the area between two linear markings (or a linear marking and the board's edge) and the walls of buildings[cite: 251].
* Line of Sight (LOS): In street Zones, Actors see in straight lines parallel to the edges of the board; they cannot see diagonally[cite: 287, 288]. In building Zones, an Actor sees into all Zones that share an opening with the room they occupy, limited to a distance of 1 Zone[cite: 289, 291]. Closed Doors block Lines of Sight[cite: 294].
* Movement: Actors move from one Zone to the next if they share at least one edge; corners do not count (no diagonal moves)[cite: 318, 319]. A Survivor must spend 1 additional Action per Zombie standing in the Zone they are attempting to leave[cite: 598]. Entering a Zone containing Zombies ends the Survivor's Move Action[cite: 600].

---

### SURVIVOR TYPES
* Classic Survivors: Have no distinguishing features and usually start with Health 3 (eliminated at the 3rd wound)[cite: 127, 209].
* Kids: Have their own symbol, start with Health 2 (eliminated at the 2nd wound), and can use the Slippery Skill once per Turn with a single Move Action[cite: 125, 127, 210].

---

### ACTIONS AVAILABLE TO SURVIVORS
* Move: Move 1 Zone, paying extra actions if leaving a Zone with Zombies[cite: 597, 598].
* Search (1x per Turn): Only in building Zones free of Zombies[cite: 609, 612]. Draw the top card from the Equipment deck[cite: 610]. You may place it in inventory or discard it immediately[cite: 611].
* Door Action: Use Door-opening Equipment to open a door in your Zone[cite: 614]. Place a Door token on its open side[cite: 615]. Open doors cannot be closed again[cite: 617]. Colored doors cannot be opened until specific Mission conditions are met[cite: 618].
* Reorganize/Trade: Reorganize inventory cards or exchange any number of cards with 1 other Survivor in the same Zone (who can then reorganize for free)[cite: 680, 681, 682]. Trades do not have to be equal[cite: 683].
* Combat Actions: Spend actions to perform Melee Attacks or Ranged Attacks using equipped weapons held in Hand slots[cite: 684, 693, 703].
* Take or Activate an Objective: Take or activate an Objective token in the same Zone; gives 5 Adrenaline Points unless noted otherwise by the Mission[cite: 717, 722].
* Make Noise: Place a Noise token in the Survivor's Zone[cite: 716].
* Do Nothing: Prematurely ends the Survivor's Turn, losing all remaining Actions[cite: 720].

---

### SPAWNING IN BUILDINGS
* Opening a building for the first time reveals all Zombies waiting inside[cite: 629]. Zombies only spawn in darkened rooms called Dark Zones[cite: 631]. Draw a Zombie card for each Dark Zone one after the other[cite: 632].
* Zombie Rush Cards: When drawing a card featuring the Rush keyword, place the miniatures normally, and then those Zombies immediately perform a free Activation[cite: 640, 641].
* Extra Activation Cards: No Zombies appear in the designated Dark Zone; instead, all Zombies of the indicated type on the board immediately perform an extra Activation[cite: 656, 657, 659]. These cards have no effect at the Blue Danger Level[cite: 660].
* Open buildings or buildings containing Survivors at the start of the game are never spawned in[cite: 661, 662].

---

### THE ZOMBIES
* Walker: Deals 1 Wound[cite: 518]. Killed by Damage 1 hit[cite: 519]. Provides 1 Adrenaline Point[cite: 519].
* Brute: Deals 1 Wound[cite: 532]. Killed by Damage 2 hit; Damage 1 weapons have no effect on them at all[cite: 531, 533]. Provides 1 Adrenaline Point[cite: 534].
* Runner: Deals 1 Wound[cite: 537]. Killed by Damage 1 hit[cite: 538]. Provides 1 Adrenaline Point[cite: 538]. Special: Runners have 2 Actions every time they activate[cite: 538].
* Abomination: Deals 1 Wound[cite: 544]. Only weapons dealing 3 Damage or more, or a Molotov cocktail, can kill it[cite: 542, 545]. Provides 5 Adrenaline Points[cite: 545]. Only 1 Abomination can be on the board at any given time; if another card spawns one, it gets an extra Activation instead[cite: 540, 553].
* Running Out of Miniatures: If you run out of miniatures of the required type when spawning, place whatever miniatures are remaining[cite: 844, 845]. Then, all Zombies of that indicated type on the board immediately resolve an extra Activation[cite: 846]. Multiple extra activations may occur in a row[cite: 847].

#### Core Box Abominations Special Rules:
* Hobomination: Survivors in its Zone cannot perform Combat Actions[cite: 562].
* Abominacop: Goes first in Targeting Priority Order[cite: 569].
* Abominawild: Molotov effects in its Zone only kill the Abominawild; other Actors are unaffected and related game effects are ignored[cite: 572, 573].
* Patient 0: Has no special rules[cite: 576].

---

### ZOMBIE MOVEMENT & SPLITTING MECHANICS
* Destination Selection: Zombies that did not attack select their destination Zone toward Survivors based on these priorities[cite: 763, 764]:
  1. The Zone containing visible Survivors in Line of Sight that has the most Noise tokens[cite: 765].
  2. If no Survivors are visible in LOS, they select the noisiest Zone on the entire board[cite: 767].
  * Note: Distance does not matter when selecting the target destination[cite: 767]. Each Survivor counts as a Noise token[cite: 766].
* Pathing: Zombies move 1 Zone toward their target destination by taking the shortest available path[cite: 769]. If there are no open paths, they do not move[cite: 770].
* Splitting Rules: If there is more than one route of the same length to their target Zone, or if different target Zones contain the exact same number of Noise tokens, Zombies split into groups of equal numbers separated by type to follow all possible routes[cite: 771, 772]. 
  * Uneven splits: If a split group is uneven, players choose which split group gets the extra Zombie and which direction the uneven split groups go[cite: 773].
  * Single Zombie splitting: If a single Zombie is offered multiple routes of equal length, players decide which direction it goes[cite: 774].

---

### TUNING THE DIFFICULTY (ZOMBIE CARD NUMBERS)
* Zombie cards #001 to #018: Easier part of a Zombie invasion[cite: 1201]. Zombies appear in lower amounts, but still benefit from the Rush rules[cite: 1202]. There are no Abominations at the Blue Danger Level[cite: 1202].
* Zombie cards #019 to #036: Harder part of an invasion[cite: 1203]. Zombies come in greater numbers, especially at low Danger Levels[cite: 1203]. Abominations can appear at the Blue Danger Level[cite: 1204].
* Zombie cards #037 to #040: Extra Activations cards[cite: 1205]. They make the Zombies less predictable and put more pressure on the Survivors[cite: 1205].

---

### ADRENALINE & DANGER LEVELS
* For each Zombie eliminated or Objective taken, a Survivor gains 1 Adrenaline Point (AP) and moves up the Danger Bar[cite: 445, 446].
* Danger Levels: Blue (0 AP), Yellow (7 AP, grants a 4th Action), Orange (19 AP), and Red (43 AP)[cite: 473, 474, 475, 476].
* Zombie Spawn scaling: Always read the line on drawn Zombie cards corresponding to the highest Danger Level achieved by any Survivor currently on the board[cite: 450].

---

### INVENTORY & EQUIPMENT CARDS
* Each Survivor can carry up to 5 Equipment cards: 2 Hand slots and 3 Backpack slots[cite: 486].
* Hand slots: Weapons and items can be used normally[cite: 488]. Both hands are used for Combat[cite: 499].
* Backpack slots: Characteristics and effects cannot be used unless the card bears the distinction "May be used in the Backpack"[cite: 489, 490].
* Ammo Types: Ranged weapons have infinite ammo but use different Ammo symbols[cite: 337, 338]. 
  * Bullets symbol: Fires small-caliber ammo[cite: 339]. Allows the user to use the "Plenty of Bullets" card to gain handy re-rolls[cite: 340, 341].
  * Shells symbol: Fires higher caliber ammo[cite: 353]. Allows the user to use the "Plenty of Shells" card to gain handy re-rolls[cite: 354].
* Weapon stats: Range (Min-Max zones), Dice (number of dice rolled), Accuracy (value required on a d6 to hit), and Damage[cite: 386, 391, 393, 411].

---

### COMBAT MECHANICS
* Melee Actions: Uses a Melee weapon at Range 0 (same Zone)[cite: 351, 693]. Player divides hits as they wish among targets in their Zone[cite: 895]. Missed Melee strikes cannot cause Friendly Fire[cite: 896].
* Ranged Actions: Uses a Ranged weapon to shoot at a single Zone within Range and LOS[cite: 703]. Shooting at Range 0 is still a Ranged Action[cite: 705]. Missed ranged attacks cause Friendly Fire[cite: 880].
* Dual Weapon Rules: If a Survivor has 2 identical weapons equipped in each Hand slot that feature the Dual symbol, they may fire or swing them both simultaneously with a single Action aimed at the same Zone, doubling the number of dice rolled[cite: 407, 408, 872, 873]. A single action using Dual weapons still only produces a single Noise token[cite: 432].
* Targeting Priority Order (For Ranged Actions and Car Attacks): Hits must be assigned to Actors in the targeted Zone in this strict order[cite: 931]:
  1. Brute / Abomination (shooter chooses if both are present)[cite: 932].
  2. Walker[cite: 933].
  3. Runner[cite: 934].
* Priority Shielding effect: Because Brutes and Abominations are first in priority order and are immune to Damage 1 weapons, they protect Walkers and Runners in their Zone from all Damage 1 Ranged Actions by absorbing the hits safely[cite: 945, 946, 947].
* Friendly Fire Rule: When shooting into a Zone containing a teammate, successful hits hit the zombies matching targeting priority, but any missed dice automatically hit the Survivors standing in that target Zone instead[cite: 952]. Distribute Friendly Fire damage normally (Damage 2 weapons inflict 2 Wounds)[cite: 953].

---

### CAR ACTIONS & VEHICLES
* Car General Rules: Cars can hold 1 Driver and up to 3 Passengers[cite: 1040]. A car cannot be driven into building Zones[cite: 1056]. Driving a car makes no Noise[cite: 1067]. Survivors sitting in a car can still be attacked normally by Zombies in their Zone[cite: 1036]. Spending Car Actions does not trigger movement modifiers; a car can leave or cross zones with Zombies without spending extra actions or stopping[cite: 1056, 1057].
* Car Actions (Cost 1 Action each when in the same Zone as a car)[cite: 1033]:
  * Get In or Out of a Car: May only get in if there are no Zombies in that Zone[cite: 1038]. Getting out has no restrictions[cite: 1041].
  * Change Seats: Switch between Driver and Passenger slots[cite: 1043]. Can be done even with Zombies in the Zone[cite: 1045].
  * Drive a Car: Only the Driver can perform this action[cite: 1055]. Choose one driving mode[cite: 1058]:
    * Slow Drive: Moves the car 1 Zone[cite: 1059]. No attack is performed[cite: 1059].
    * Fast Drive: Moves the car 2 consecutive Zones (no U-turns allowed)[cite: 1060]. Perform a Car Attack in each Zone with Zombies the car enters[cite: 1061].
* Car Attacks: Resolution stats are Range 0, 3 Dice, Accuracy 4+, Damage 2[cite: 1026, 1052]. Hits are assigned strictly matching the Targeting Priority Order[cite: 1063]. May cause Friendly Fire to pedestrian Survivors if driving into a Zone containing both Zombies and pedestrian Survivors[cite: 1064]. Survivors inside the same car or another car in that Zone are immune[cite: 1065]. No Car Attack occurs if entering a zone with only pedestrian survivors[cite: 1066].
* Car Types:
  * Muscle Car: Contains a single Epic Weapon Crate at the start of the game if instructed by the Mission[cite: 1098]. Taking the Epic Weapon Crate removes the token and awards a random Epic Weapon[cite: 1099, 1100]. A Muscle Car can be driven while still holding its crate in the trunk without occupying a passenger seat[cite: 1101, 1103].
  * Police Car: Contains an unlimited amount of weapon cards[cite: 1104]. Can be Searched normally; search-related skills and Flashlights apply[cite: 1105]. When Searching, draw cards until a weapon card is drawn, then discard the other non-weapon cards[cite: 1106]. An "Aaahh!!" card drawn triggers a Walker spawn and immediately interrupts the Search[cite: 1106, 1107].

---

### SPECIAL EQUIPMENT TRAITS
* Flashlight: Grants the Survivor the "Search: 2 cards" skill when searching[cite: 972]. Cancels Dark Zone accuracy penalties[cite: 1119]. Does not stack with another Flashlight[cite: 973]. May be used in the Backpack[cite: 490].
* Molotov: Perform a Ranged Action with the Molotov in Hand, discard the card, and create an explosion in the targeted Zone[cite: 978]. All Actors in the target Zone are immediately eliminated regardless of their Damage threshold (including Abominations)[cite: 979]. 
* Reload: Weapons with this trait (e.g., Sawed-Off, Ma's Shotgun) are emptied each time they are fired[cite: 983]. A Survivor must spend 1 Action to Reload the weapon if they wish to fire it again in the same Game Round[cite: 984]. All reloadable weapons are freely reloaded automatically during the End Phase[cite: 985]. A single Action can reload 2 weapons fired in a Dual manner[cite: 987].

---

### ADDITIONAL GAME MODES
* Dark Zones Mode: Actors cannot trace Lines of Sight to Dark Zones except at Range 0-1[cite: 1117]. Ranged Attacks aimed at Dark Zones have a penalized Accuracy of 6+ (rolling a 6 is required to hit)[cite: 1118]. Having a Flashlight cancels this penalty[cite: 1119]. Melee Attacks are unaffected by Dark Zones[cite: 1121].
* Companions Mode: Companions play as support characters that follow Survivors[cite: 1131]. General Traits: They count as 1 Noise [cite: 1155], are hit by Friendly Fire [cite: 1155], do not have an inventory or actions [cite: 1158, 1159], and are immediately eliminated upon receiving a single Wound (which results in losing the game)[cite: 1156]. They always stay in the exact same Zone as their Leader[cite: 1157]. Their Leader gains and benefits from the Companion's Blue Danger Level Skill[cite: 1146]. Any Survivor can spend 1 Action to rally a lone Companion in their Zone to become their new Leader[cite: 1151, 1152].
* Ultrared Mode: Allows Survivors to gain Adrenaline Points past the Red Danger Level[cite: 1176]. When a Survivor reaches the Red Level maximum, move the Adrenaline tracker back to 0[cite: 1178]. The Survivor is still considered on the Red Level and keeps all their unlocked Skills[cite: 1179]. Continue counting AP normally; upon reaching Danger Levels again, select remaining unselected Skills or select any new Skill from the master list once all character skills are fully unlocked[cite: 1180, 1181].

---

### COMPREHENSIVE SKILLS GLOSSARY (ALPHABETICAL)
* +1 Action: The Survivor has an extra Action they may use as they please[cite: 1215].
* +1 Damage: [Action]: The Survivor gets a +1 Damage bonus with the specified type of Action (Combat, Melee, or Ranged)[cite: 1216].
* +1 die: [Action]: Each of the Survivor's weapons rolls an extra die with Actions of the specified type (Combat, Melee, or Ranged). Dual weapons each gain a die (+2 dice total)[cite: 1217, 1218].
* +1 free [Action type] Action: The Survivor has 1 extra free Action of the specified type (Combat, Melee, Move, Ranged, or Search)[cite: 1219].
* +1 max Range: The maximum Range of Ranged weapons the Survivor uses is increased by 1[cite: 1221].
* +1 Zone per Move: When the Survivor spends 1 Action to Move, they can Move 1 or 2 Zones instead of 1. Entering a Zone containing Zombies still ends the Move[cite: 1222].
* +1 to dice roll: [Action]: The Survivor adds 1 to the result of each die they roll with Actions of the specified type (Combat, Melee, or Ranged). Max result is always 6[cite: 1223, 1224].
* [Action Type]: Damage 2: Weapons of the indicated type (Combat, Melee, or Ranged) used by the Survivor and having a Damage value of 1 are considered to have a Damage value of 2[cite: 1225].
* 2 cocktails are better than 1: Roll a die each time the Survivor discards a Molotov to perform a Ranged Action. On a result of 3 or more, the Molotov card may be put back in the Backpack for free[cite: 1226, 1227].
* Ambidextrous: The Survivor treats all weapons as if they had the Dual symbol[cite: 1229].
* Barbarian: When resolving a Melee Action, the Survivor may substitute the Dice number of the Melee weapon(s) used with the total number of Zombies standing in their current Zone[cite: 1236].
* Blitz: Once per Turn, spend 1 Action to Move up to 2 Zones to a Zone where Zombies are within Range of one of their equipped Ranged weapons, then gain 1 free Ranged Action[cite: 1238, 1239, 1240].
* Bloodlust: [Action]: Once per Turn, spend 1 Action to Move up to 2 Zones to a Zone containing at least 1 Zombie, then gain 1 free Action of the specified type (Combat, Melee, or Ranged)[cite: 1241, 1242, 1243].
* Born leader: During their Turn, the Survivor may give 1 free Action to another Survivor to use immediately[cite: 1244, 1245].
* Break-in: The Survivor doesn't need Equipment to open doors and makes no Noise doing so. Gains one extra free Action used only to open doors[cite: 1246, 1248].
* Brother in arms: [game effect]: Active when standing in the same Zone as at least 1 other Survivor. Each Survivor in that Zone benefits from the indicated Skill/effect (Companions excluded)[cite: 1249, 1250, 1251].
* Can Search more than once: The Survivor can Search multiple times per Turn, spending 1 Action for each Search[cite: 1253].
* Charge: Once per Turn for free, move up to 2 Zones to a Zone containing at least 1 Zombie. Entering a Zone with Zombies ends the Move[cite: 1255, 1256, 1257].
* Combat reflexes: Whenever Zombies spawn within Range 0-1 (before any Rush), the Survivor may immediately perform a free Combat Action against them. Used once per Zombie card drawn[cite: 1258, 1260].
* Destiny: Once per Turn when revealing a drawn Equipment card, ignore and discard it, then draw another from the same deck[cite: 1261, 1262].
* Distributor: When resolving the Spawn Step during the Zombie Phase, draw as many Zombie Cards as active Spawn Zones, look at them, and assign 1 of them to each active Zone as desired[cite: 1264, 1265].
* Dreadnought: [Zombie type]: The Survivor ignores all Wounds coming from Zombies having the indicated keyword in its name (e.g., Dreadnought: Walker)[cite: 1266, 1267].
* Dual expert: The Survivor has a free Combat Action as long as they have Dual weapons equipped (used only with those Dual equipped weapons)[cite: 1268, 1269].
* Escalation: [Action]: The Survivor gains 1 extra die to roll for consecutive Actions of the specified type (Combat, Melee, or Ranged). Cumulative until the Turn ends or another kind of Action is performed[cite: 1270, 1271, 1272].
* Field medic: Once per Turn, spend 1 Action to Move up to 2 Zones to a Zone containing at least 1 Survivor, then heal 1 Wound from any Survivor in that destination Zone[cite: 1276, 1277, 1278].
* Free reload: The Survivor reloads reloadable weapons for free[cite: 1280].
* Full auto: When resolving a Ranged Action, the Survivor may substitute the Dice number of the Ranged weapon(s) used with the number of Zombies standing in the targeted Zone[cite: 1281].
* Gunslinger: The Survivor treats all Ranged weapons as if they had the Dual symbol[cite: 1283].
* Hit & run: Free Move Action just after resolving a Melee or Ranged Action resulting in at least 1 Zombie being eliminated. No extra action cost to leave if Zombies are in their Zone[cite: 1284, 1285].
* Hoard: The Survivor can carry up to 2 extra Equipment cards placed near their Dashboard (considered to be stored in their Backpack)[cite: 1286, 1287].
* Hold your nose: Draws an Equipment card (Core deck only) whenever the last Zombie standing in their current Zone is eliminated. This is NOT a Search Action[cite: 1288, 1290].
* Home defender: The Survivor is not limited to Range 0-1 when tracing Lines of Sight through building Zones[cite: 1291].
* Improvised weapon: Melee: Once per Turn, perform a free Melee Attack with stats: Range 0, Dice 2, Accuracy 4+, Damage 1[cite: 1292, 1294].
* Improvised weapon: Ranged: Once per Turn, perform a free Ranged Attack with stats: Range 1-1, Dice 2, Accuracy 4+, Damage 1[cite: 1295, 1297].
* Is That All You've Got?: Used any time the Survivor is about to endure Wounds. Negate 1 Wound for each Equipment card discarded from inventory[cite: 1298, 1299].
* Jump: Once per Turn, spend 1 Action to move 2 Zones, ignoring everything in the intervening Zone except walls and closed doors. Movement penalties from starting Zone apply[cite: 1300, 1301, 1302].
* Lifesaver: Once per Turn for free, select a Zone with at least 1 Zombie and 1 Survivor at Range 1 sharing LOS and a clear path; drag chosen Survivors to the user's Zone without penalty[cite: 1303, 1304, 1305, 1306].
* Low profile: The Survivor cannot get hit by Friendly Fire (ignored entirely when shooting into the Zone they stand in). Molotov rules still apply[cite: 1308, 1309].
* Lucky: For each Action taken, the player may choose to re-roll all dice an additional time. Stacks with weapon re-rolls[cite: 1310, 1311].
* Matching set: When Searching and drawing an Equipment card with the Dual symbol, immediately take a second card of the same type from the deck and reshuffle[cite: 1312, 1313].
* Medic: Used for free during each End Phase. The Survivor and all Survivors in their Zone may heal 1 Wound. User earns 1 AP per Wound healed[cite: 1314, 1315, 1316].
* Point-blank: Can perform Ranged Actions at Range 0. Player freely chooses targets (eliminating any type regardless of special priority or keyword if weapon damage is sufficient). Friendly Fire ignored[cite: 1317, 1318, 1319].
* Reaper: [Action]: When assigning hits for the specified type (Combat, Melee, or Ranged), 1 hit can freely eliminate an additional identical Zombie in the same Zone (max 1 additional per Action)[cite: 1320, 1321, 1322].
* Regeneration: During each End Phase, the Survivor's Health is fully restored to its maximum value[cite: 1324].
* Roll 6: +1 Damage [Action]: Add 1 to the Damage value of the weapon used for each 6 rolled on an Action of the specified type. Re-rolls must be resolved first[cite: 1332, 1333].
* Roll 6: +1 die [Action]: Roll an additional die for each 6 rolled on an Action of the specified type. Keep rolling additional dice as long as 6s are obtained[cite: 1334, 1335].
* Scavenger: The Survivor may Search in any building or street Zone following normal Search rules[cite: 1336, 1337].
* Search: 2 cards: Draw 2 cards when Searching with the Survivor[cite: 1338].
* Shove: Once per Turn for free, push all Zombies standing in the Survivor's Zone to a selected Zone at Range 1 sharing a clear path[cite: 1339, 1340, 1341].
* Sidestep: Whenever Zombies spawn within Range 0-1 (before any Rush), perform a free Move Action without spending extra actions for Zombies in their starting Zone[cite: 1342, 1343]. Used once per card drawn[cite: 1344].
* Slippery: The Survivor does not spend extra Actions when moving out of a Zone containing Zombies, and ignores Zombies when performing Move Actions[cite: 1345, 1346].
* Sniper: The Survivor may freely choose the targets of all their Ranged Actions. Friendly Fire is ignored[cite: 1347].
* Sprint: Once per Turn, spend 1 Move Action to move 2 or 3 Zones instead of 1. Entering a Zone with Zombies ends the Move[cite: 1348, 1349].
* Starts with [X] Health: Starts with indicated Health base level (cannot be used as a Companion)[cite: 1350, 1351].
* Starts with 2 AP: Begins the game with 2 Adrenaline Points (cannot be used as a Companion)[cite: 1352, 1353].
* Starts with a [Equipment]: Begins the game with the indicated Equipment card automatically assigned during Setup (cannot be used as a Companion)[cite: 1354, 1355, 1356].
* Steady hand: The Survivor can ignore other Survivors of their choosing when missing with a Ranged Action (does not apply to Molotovs)[cite: 1357, 1358].
* Super strength: Consider the Damage value of Melee weapons used by the Survivor to be 3[cite: 1359].
* Swordmaster: The Survivor treats all Melee weapons as if they had the Dual symbol[cite: 1360].
* Tactician: The Survivor's Turn can be resolved anytime during the Player Phase, before or after any other Survivor's Turn[cite: 1361].
* Taunt: Once per Turn for free, select a Zone up to 2 Zones away with a clear path; all Zombies in that Zone immediately gain an extra Activation trying to reach the user, ignoring and passing other Survivors[cite: 1363, 1364, 1365, 1366].
* Tough: The Survivor ignores the first Wound received during each Attack Step (Zombie Phase) and during Friendly Fire[cite: 1368].
* Webbing: All Equipment in the Survivor's inventory is considered equipped in Hand[cite: 1369].
* Zombie link: Plays an extra Turn each time an Extra Activation card (not Rushes) is drawn from the Zombie pile, taking their Turn before the extra-activated Zombies[cite: 1370].

---

### NOISE TOKENS — COMPLETE RULES
* Noise tokens represent sound that attracts Zombies. They are placed on the board during the Player Phase and removed at the end of every End Phase.
* Actions that generate 1 Noise token in the Survivor's Zone:
  * Performing a Search action.
  * Performing any Ranged Attack (whether or not it hits).
  * Opening a door using Door-opening Equipment (e.g. Crowbar). Opening a door with bare hands (via Break-in skill) generates no Noise.
  * Using the Make Noise action.
* Actions that generate NO Noise:
  * Move actions.
  * Melee Attacks.
  * Reorganize / Trade actions.
  * Driving a Car (cars are explicitly silent).
  * Interacting with an Objective token.
* Multiple Noise tokens can accumulate in the same Zone over a round. Each Survivor physically present in a Zone also counts as 1 Noise token for targeting purposes (but is not a token and is not removed at End Phase).
* Noise tokens are not cumulative across rounds — all tokens are removed at the end of every End Phase without exception.

#### Noise Tie-Breaking (full priority order)
When Zombies must choose between two or more Zones with equal noise, apply these tie-breakers in strict order until one Zone wins:
1. The Zone within the Zombie's Line of Sight that has the most Noise tokens (counting Survivors as Noise).
2. If still tied, the Zone anywhere on the board with the most total Noise (LOS not required at this step).
3. If still tied, the Zone containing the most Survivors.
4. If still tied, the Zone closest to a Spawn Zone (fewest Zones away).
5. If still tied, the players collectively choose which direction the Zombie(s) move.

---

### ZOMBIE PHASE — DETAILED ACTIVATION ORDER
The Zombie Phase is resolved in this strict sequence:

#### Step 1 — Zombie Activation
Zombies activate one type at a time, in this order:
1. **Abominations** activate first.
2. **Runners** activate next — they get 2 full Actions each (move + move, move + attack, or attack + attack if Survivors are already in their Zone).
3. **Brutes** activate.
4. **Walkers** activate last.

Within each type, when multiple Zombies of the same type must activate, the players collectively decide the order in which individual Zombies of that type act. Each Zombie either:
- **Attacks** if there is at least 1 Survivor in its Zone (it does not move; it attacks instead).
- **Moves** 1 Zone toward its target destination if no Survivor is in its Zone.

A Zombie that attacks does not move in the same Action. A Runner that attacks with its first Action may still move or attack again with its second Action.

#### Step 2 — Zombie Spawn
After all Zombies have activated, draw 1 Zombie card per active Spawn Zone on the board. Place the indicated Zombies on the corresponding Spawn Zone. Rush and Extra Activation cards resolve immediately as described in the Spawning rules.

* **Exhausted Zombie deck**: If the Zombie draw deck runs out of cards at any point during a Spawn Step, immediately and thoroughly reshuffle the entire discard pile to form a new draw deck, then continue drawing.

#### Step 3 — End Phase
Remove all Noise tokens. Pass the First Player token to the left.

---

### DANGER LEVEL — KEY CLARIFICATIONS
* The Danger Level used for all Zombie spawn card readings is always determined by the **single most advanced Survivor currently on the board**. If that Survivor is eliminated, the next highest Survivor's level applies from that point forward.
* The Danger Level **never decreases**, even if the leading Survivor is eliminated mid-game.
* Adrenaline Points (AP) are gained individually per Survivor. Each Survivor tracks their own AP on their Dashboard. However, **all players read the Zombie card spawn row matching the highest Danger Level among all active Survivors on the board** — not their own individual level.
* Reaching a new Danger Level is immediate: the Survivor immediately unlocks a new Skill slot and selects a Skill. This takes effect from their next Action onward.
* The +1 Action bonus granted at Yellow level (7 AP) applies only to the Survivor who has reached Yellow, not to all Survivors.

---

### WOUND RESOLUTION & SURVIVOR ELIMINATION
* When Zombies attack, every Zombie in a Zone that contains at least 1 Survivor deals 1 Wound to a Survivor in that Zone.
* **Wound distribution**: The players collectively decide which Survivor(s) in the Zone receive the Wounds from the attack. Wounds do not have to be distributed evenly — players may concentrate all Wounds on a single Survivor if they choose.
* A Survivor is **eliminated** when the number of Wounds they have received equals or exceeds their Health value (3 for classic Survivors, 2 for Kids).
* When a Survivor is eliminated: remove their miniature from the board immediately. The game is lost at that moment (unless the Mission specifies otherwise or a skill such as Regeneration applies). The eliminated Survivor's Equipment remains in the Zone where they were eliminated and can be picked up by other Survivors.
* **Friendly Fire Wounds** follow the same rules: players decide which Survivor(s) in the targeted Zone receive the hit.
* **Damage 2 weapons** inflict 2 Wounds per hit to Survivors (e.g. a missed Ranged attack with a Damage 2 weapon in a Zone with a teammate causes 2 Wounds to that teammate).

---

### TARGETING PRIORITY — MELEE vs. RANGED CLARIFICATION
* **Ranged Actions**: Hits must be assigned strictly following Targeting Priority Order: Brute/Abomination first, then Walker, then Runner. The shooter cannot choose to hit a Walker if a Brute is present in the target Zone unless a Skill (e.g. Sniper, Point-blank) explicitly overrides this.
* **Melee Actions**: There is NO mandatory targeting priority for Melee. The Survivor freely divides their Melee hits among any Zombies in their Zone in any order they choose. They may choose to kill Runners first, or Walkers first — it is entirely the player's decision.
* This distinction is critical: Ranged = strict priority; Melee = free choice.
* **Abomination immunity reminder**: A Brute requires Damage 2 to kill (Damage 1 hits are completely wasted on them). An Abomination requires Damage 3 or a Molotov. In Ranged combat, if a Damage 1 weapon targets a Zone with a Brute, all dice hits are absorbed by the Brute with no effect — this protects Walkers and Runners behind it.

---

### COMPANIONS — ADDITIONAL RULES
* A Companion always occupies the exact same Zone as their Leader. They cannot be in a different Zone under any circumstances.
* If a Companion's Leader is eliminated, the Companion becomes a lone Companion. It stays in the Zone where the Leader was eliminated. Any other Survivor may spend 1 Action to rally the lone Companion and become its new Leader.
* A lone Companion in a Zone still counts as 1 Noise and can be attacked by Zombies. If a lone Companion receives a Wound, the game is lost immediately (same as if they were with a Leader).
* Companions cannot ride in cars. They do not occupy passenger seats.
* Companions do not benefit from Skills that only apply "to Survivors" unless the Skill or the Companion card explicitly states otherwise.
* The Leader of a Companion benefits from the Companion's Blue Danger Level Skill at all times, regardless of the Leader's own Danger Level.
* If multiple Survivors are in the same Zone as a lone Companion, any one of them (the one who spends the Action) becomes the new Leader — the other Survivors cannot benefit from the Companion's skill unless they also become its leader.

---

### EPIC WEAPONS — GENERAL RULES
* Epic Weapons are powerful unique items found in Epic Weapon Crates on the board (usually on or near specific vehicles, as defined by the Mission).
* To take an Epic Weapon, a Survivor must be in the same Zone as the Crate and spend 1 Action to interact with it. Draw 1 card from the Epic Weapons deck (red deck) at random.
* Epic Weapons follow all normal Equipment rules: they occupy Hand or Backpack slots, can be traded, and are subject to all normal weapon rules (Dual, Reload, etc.) unless their card states otherwise.
* Epic Weapons are generally significantly more powerful than standard Equipment cards and often have unique traits not found on regular weapons.
* Only 1 Epic Weapon Crate can be taken per Crate token on the board (the token is removed after use).

=== ENTERING A BUILDING FOR THE FIRST TIME ===
When a Survivor opens a door to enter a building for the first time (i.e. the building has not yet been opened this game), the following sequence must be resolved immediately and in this exact order:

1. OPEN THE DOOR: The Survivor spends 1 Action to open the door using Door-opening Equipment or bare hands. Place a Door token on its open side. The door cannot be closed again.

2. REVEAL AND SPAWN ZOMBIES — DARK ZONES ONLY: Opening a building for the first time immediately triggers a Zombie spawn inside. Zombies ONLY appear in Dark Zones (darkened rooms marked with a specific symbol on the tile). Draw 1 Zombie card per Dark Zone in the building, one after the other, and place the indicated Zombies in each corresponding Dark Zone. Rooms that are NOT Dark Zones receive NO Zombies at this stage.

3. SURVIVORS MAY NOW ENTER: After the door is open and Zombies have been placed, Survivors may move into the building normally on their remaining Actions.

4. SEARCH (optional): Once inside a building room with no Zombies, a Survivor may spend 1 Action to Search and draw 1 Equipment card.

KEY CLARIFICATIONS:
- Zombies are placed ONLY in Dark Zones, never in lit rooms, corridors, or street zones adjacent to the building.
- If a building has no Dark Zones, no Zombies are placed when it is first opened.
- Buildings that are already open at the start of the mission do not trigger this spawn sequence.
- A building is considered opened as soon as any one of its doors is opened. Subsequent doors into the same building do not trigger another spawn.
- After the initial reveal, the building's Dark Zones become regular Spawn Zones and will spawn Zombies normally during the Zombie Phase Spawn Step.

\`;