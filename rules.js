// ============================================================
//  rules.js — RÈGLES DE ZOMBICIDE 2e ÉDITION
// ============================================================

const ZOMBICIDE_RULES = `

### PRÉSENTATION DU JEU
* Zombicide est un jeu coopératif dans lequel 1 à 6 joueurs incarnent des Survivants luttant contre des Zombies contrôlés par le jeu lui-même.
* Le but du jeu est de choisir une Mission et d'accomplir son objectif, en tuant autant de Zombies que possible en chemin.
* Tous les joueurs gagnent ou perdent ensemble. La partie est gagnée immédiatement dès que tous les objectifs de la Mission ont été accomplis.
* La partie est perdue dès qu'un Survivant est éliminé, lorsque les objectifs de la Mission ne peuvent plus être remplis, ou lorsqu'une condition de défaite spécifique est remplie.

---

### MISE EN PLACE DU JEU
1. Choisissez une Mission et disposez les dalles de plateau comme indiqué. Les portes fermées, les marqueurs d'Objectif et les Caisses d'Armes Épiques sont prédéfinis sur les dalles.
2. Placez les Zones d'Invasion, les pions et les figurines selon la carte de la Mission.
3. Séparez et mélangez les piles de cartes face cachée près du plateau : Équipement de départ (gris), Équipement (bleu), Armes Épiques (rouge), Zombies (jaune) et Abominations. Placez la carte de référence de Voiture bien en vue.
4. Distribuez 1 Tableau de bord, 1 socle en plastique coloré et 5 pointeurs en plastique de la couleur correspondante à chaque Survivant.
5. Placez la flèche coulissante du Tableau de bord sur la case 0 de la zone bleue de la Barre de Danger. Placez un pointeur sur l'emplacement approprié de la Barre de Blessures (Santé 3 pour les Survivants classiques, Santé 2 pour les Enfants) et un autre sur la première Compétence Bleue. Placez les 3 pointeurs restants dans les emplacements de réserve en haut.
6. Distribuez les cartes d'Équipement de départ au hasard et équitablement entre les Survivants. L'équipement de départ peut être placé dans les emplacements Mains ou Sac à dos.
7. Premier Joueur : Le joueur qui reçoit la Hache d'incendie comme Équipement de départ obtient le pion Premier Joueur et effectue le premier Tour du premier Round de jeu.

---

### ROUNDS DE JEU
Chaque Round de jeu se déroule comme suit :
1. PHASE DES JOUEURS : Le joueur possédant le pion Premier Joueur active ses Survivants un par un, dans l'ordre de son choix. Each Survivant effectue initialement 3 Actions par Tour. Lorsqu'un joueur a activé tous ses Survivants, le joueur à sa gauche prend son Tour. Lorsque tous les joueurs ont terminé leur Tour, la Phase des Joueurs prend fin.
2. PHASE DES ZOMBIES : Tous les Zombies sur le plateau s'activent et dépensent 1 Action soit pour attaquer un Survivant qui se trouve dans leur Zone, soit, s'ils n'ont personne à attaquer, pour se Déplacer vers les Survivants. Les Forcenés obtiennent 2 Actions. Une fois que tous les Zombies ont effectué leurs Actions, de nouveaux Zombies apparaissent dans toutes les Zones d'Invasion actives.
3. PHASE DE FIN : Retirez tous les pions Bruit du plateau. Le premier joueur passe le pion Premier Joueur au joueur assis à sa gauche. Un nouveau Round de jeu commence alors.

---

### LES BASES & DÉFINITIONS
* Acteur : Un Survivant ou un Zombie.
* Zone : À l'intérieur d'un bâtiment, une Zone est une pièce. Dans une rue, une Zone est la zone comprise entre deux marquages linéaires (ou un marquage linéaire et le bord du plateau) et les murs des bâtiments.
* Ligne de vue (LDV) : Dans les Zones de rue, les Acteurs voient en ligne droite parallèle aux bords du plateau ; ils ne peuvent pas voir en diagonale. Dans les Zones de bâtiment, un Acteur voit dans toutes les Zones qui partagent une ouverture avec la pièce qu'il occupe, dans la limite d'une distance de 1 Zone. Les Portes Fermées bloquent les Lignes de vue.
* Déplacement : Les Acteurs se déplacent d'une Zone à la suivante si elles partagent au moins un bord ; les coins ne comptent pas (pas de déplacements en diagonale). Un Survivant doit dépenser 1 Action supplémentaire par Zombie présent dans la Zone qu'il tente de quitter. Entrer dans une Zone contenant des Zombies met fin à l'Action de Déplacement du Survivant.

---

### TYPES DE SURVIVANTS
* Survivants Classiques : N'ont pas de caractéristiques distinctives et commencent généralement avec une Santé de 3 (éliminés à la 3e blessure).
* Enfants : Ont leur propre symbole, commencent avec une Santé de 2 (éliminés à la 2e blessure), et peuvent utiliser la Compétence Insaisissable une fois par Tour avec une unique Action de Déplacement.

---

### ACTIONS DISPONIBLES POUR LES SURVIVANTS
* Se déplacer : Se déplacer de 1 Zone, en payant des actions supplémentaires pour quitter une Zone contenant des Zombies.
* Fouiller (1x per Tour) : Uniquement dans les Zones de bâtiment exemptes de Zombies. Piochez la carte supérieure de la pile Équipement. Vous pouvez la placer dans votre inventaire ou la défausser immédiatement.
* Action de Porte : Utilisez un Équipement d'ouverture de porte pour ouvrir une porte dans votre Zone. Placez un pion Porte sur sa face ouverte. Les portes ouvertes ne peuvent plus être refermées. Les portes de couleur ne peuvent pas être ouvertes tant que les conditions spécifiques de la Mission ne sont pas remplies.
* Réorganiser / Échanger : Réorganisez les cartes d'inventaire ou échangez un noble quelconque de cartes avec 1 autre Survivant situé dans la même Zone (qui peut alors se réorganiser gratuitement). Les échanges n'ont pas besoin d'être équitables.
* Actions de Combat : Dépensez des actions pour effectuer des Attaques au corps à corps ou des Attaques à distance en utilisant des armes équipées tenues dans les emplacements Mains.
* Prendre ou Activer un Objectif : Prenez ou activez un pion Objectif situé dans la même Zone ; rapporte 5 Points d'Adrénaline, sauf indication contraire de la Mission.
* Faire du Bruit : Placez un pion Bruit dans la Zone du Survivant.
* Ne rien faire : Met fin prématurément au Tour du Survivant, lui faisant perdre toutes ses Actions restantes.

---

### APPARITION DANS LES BÂTIMENTS
* Ouvrir un bâtiment pour la première fois révèle tous les Zombies qui attendent à l'intérieur. Les Zombies n'apparaissent que dans les pièces sombres appelées Zones d'ombre. Piochez une carte Zombie pour chaque Zone d'ombre l'une après l'autre.
* Cartes Ruée de Zombies : Lors de la pioche d'une carte comportant le mot-clé Ruée, placez les figurines normalement, puis ces Zombies effectuent immédiatement une Activation gratuite.
* Cartes Activation Supplémentaire : Aucun Zombie n'apparaît dans la Zone d'ombre désignée ; à la place, tous les Zombies du type indiqué déjà présents sur le plateau effectuent immédiatement une Activation supplémentaire. Ces cartes n'ont aucun effet au Niveau de Danger Bleu.
* Les bâtiments ouverts ou les bâtiments contenant des Survivants au début de la partie ne font jamais l'objet d'une apparition.

---

### LES ZOMBIES
* Rôdeur : Inflige 1 Blessure. Tué par une touche de Dégât 1. Rapporte 1 Point d'Adrénaline.
* Balèze : Inflige 1 Blessure. Tué par une touche de Dégât 2 ; les armes de Dégât 1 n'ont absolument aucun effet sur eux. Rapporte 1 Point d'Adrénaline.
* Forcené : Inflige 1 Blessure. Tué par une touche de Dégât 1. Rapporte 1 Point d'Adrénaline. Spécial : Les Forcenés ont 2 Actions à chaque fois qu'ils s'activent.
* Abomination : Inflige 1 Blessure. Seules les armes infligeant 3 Dégâts ou plus, ou un cocktail Molotov, peuvent la tuer. Rapporte 5 Points d'Adrénaline. Une seule Abomination peut se trouver sur le plateau à un moment donné ; si une autre carte en fait apparaître une, elle obtient une Activation supplémentaire à la place.
* Pénurie de figurines : Si vous venez à manquer de figurines du type requis lors d'une apparition, placez les figurines restantes, quelles qu'elles soient. Ensuite, tous les Zombies du type indiqué présents sur le plateau effectuent immédiatement une Activation supplémentaire. Plusieurs activations supplémentaires peuvent se produire à la suite.

#### Règles spéciales des Abominations de la Boîte de Base :
* Hobomination : Les Survivants se trouvant dans sa Zone ne peuvent pas effectuer d'Actions de Combat.
* Abominacop : Passe en premier dans l'Ordre de Priorité des Cibles.
* Abominawild : Les effets du Molotov dans sa Zone tuent uniquement l'Abominawild ; les autres Acteurs ne sont pas affectés et les effets de jeu associés sont ignorés.
* Patient 0 : N'a pas de règles spéciales.

---

### DÉPLACEMENT DES ZOMBIES & MÉCANIQUES DE SÉPARATION
* Sélection de la destination : Les Zombies qui n'ont pas attaqué sélectionnent leur Zone de destination vers les Survivants selon ces priorités :
  1. La Zone contenant des Survivants visibles en Ligne de vue qui possède le plus de pions Bruit.
  2. Si aucun Survivant n'est visible en LDV, ils sélectionnent la Zone la plus bruyante de tout le plateau.
  * Note : La distance n'importe pas lors de la sélection de la destination cible. Chaque Survivant compte comme un pion Bruit.
* Trajet : Les Zombies se déplacent de 1 Zone vers leur destination cible en empruntant le chemin disponible le plus court. S'il n'y a pas de chemin ouvert, ils ne bougent pas.
* Règles de Séparation : S'il y a plus d'un itinéraire de même longueur vers leur Zone cible, ou si différentes Zones cibles contiennent exactement le même nombre de pions Bruit, les Zombies se séparent en groupes de taille égale répartis par type pour suivre tous les itinéraires possibles. 
  * Séparations inégales : Si un groupe séparé est impair, les joueurs choisissent quel groupe reçoit le Zombie supplémentaire et quelle direction prennent les groupes inégaux.
  * Séparation d'un Zombie unique : Si un unique Zombie fait face à plusieurs itinéraires de longueur égale, les joueurs décident de la direction qu'il prend.

---

### AJUSTEMENT DE LA DIFFICULTÉ (NUMÉROS DES CARTES ZOMBIE)
* Cartes Zombie n°001 à n°018 : Partie la plus facile d'une invasion de Zombies. Les Zombies apparaissent en plus petites quantités, mais bénéficient tout de même des règles de Ruée. Il n'y a pas d'Abomination au Niveau de Danger Bleu.
* Cartes Zombie n°019 à n°036 : Partie la plus difficile d'une invasion. Les Zombies arrivent en plus grand nombre, particulièrement aux niveaux de Danger bas. Des Abominations peuvent apparaître au Niveau de Danger Bleu.
* Cartes Zombie n°037 à n°040 : Cartes d'Activation Supplémentaire. Elles rendent les Zombies moins prévisibles et mettent plus de pression sur les Survivants.

---

### ADRÉNALINE & NIVEAUX DE DANGER
* Pour chaque Zombie éliminé ou Objectif pris, un Survivant gagne 1 Point d'Adrénaline (PA) et progresse sur la Barre de Danger.
* Niveaux de Danger : Bleu (0 PA), Jaune (7 PA, octroie une 4e Action), Orange (19 PA) et Rouge (43 PA).
* Échelle de l'Invasion de Zombies : Lisez toujours la ligne des cartes Zombie piochées correspondant au Niveau de Danger le plus élevé atteint par l'un des Survivants actuellement sur le plateau.

---

### INVENTAIRE & CARTES ÉQUIPEMENT
* Chaque Survivant peut transporter jusqu'à 5 cartes Équipement : 2 emplacements Mains et 3 emplacements Sac à dos.
* Emplacements Mains : Les armes et les objets peuvent être utilisés normalement. Les deux mains sont utilisées pour le Combat.
* Emplacements Sac à dos : Les caractéristiques et les effets ne peuvent pas être utilisés à moins que la carte ne porte la mention « Peut être utilisé dans le Sac à dos ».
* Types de munitions : Les armes à distance ont des munitions infinies mais utilisent différents symboles de munitions. 
  * Symbole Balles : Tire des munitions de petit calibre. Permet à l'utilisateur d'utiliser la carte « Plein de balles » pour obtenir des relances pratiques.
  * Symbole Cartouches : Tire des munitions de plus gros calibre. Permet à l'utilisateur d'utiliser la carte « Plein de cartouches » pour obtenir des relances pratiques.
* Caractéristiques des armes : Portée (Zones Min-Max), Dés (nombre de dés lancés), Précision (valeur requise sur un d6 pour toucher) et Dégâts.

---

### MÉCANIQUES DE COMBAT
* Actions de corps à corps : Utilise une arme au corps à corps à une Portée de 0 (même Zone). Le joueur répartit les touches comme il le souhaite entre les cibles de sa Zone. Les attaques au corps à corps manquées ne peuvent pas causer de Tir Ami.
* Actions à distance : Utilise une arme à distance pour tirer sur une unique Zone à Portée et en LDV. Tirer à une Portée de 0 reste une Action à distance. Les attaques à distance manquées causent du Tir Ami.
* Règles des Armes Doubles : Si un Survivant possède 2 armes identiques équipées dans chaque emplacement Main dotées du symbole Double, il peut les utiliser ou faire feu simultanément avec une seule Action visant la même Zone, doublant ainsi le nombre de dés lancés. Une seule action utilisant des armes Doubles ne produit toujours qu'un seul pion Bruit.
* Ordre de Priorité des Cibles (pour les Actions à Distance et les Attaques de Voiture) : Les touches doivent être attribuées aux Acteurs de la Zone ciblée dans cet ordre strict :
  1. Balèze / Abomination (le tireur choisit si les deux sont présents).
  2. Rôdeur.
  3. Forcené.
* Effet de Bouclier de Priorité : Étant donné que les Balèzes et les Abominations sont en tête de l'ordre de priorité et sont immunes aux armes de Dégât 1, ils protègent les Rôdeurs et les Forcenés de leur Zone de toutes les Actions à distance de Dégât 1 en absorbant les touches sans subir de dégâts.
* Règle du Tir Ami : Lors d'un tir dans une Zone contenant un coéquipier, les touches réussies atteignent les zombies selon la priorité des cibles, mais tous les dés manqués touchent automatiquement les Survivants se trouvant dans cette Zone cible à la place. Distribuez les dégâts du Tir Ami normalement (les armes de Dégât 2 infligent 2 Blessures).

---

### ACTIONS DE VOITURE & VÉHICULES
* Règles générales des Voitures : Les voitures peuvent contenir 1 Conducteur et jusqu'à 3 Passagers. Une voiture ne peut pas être conduite dans des Zones de bâtiment. Conduire une voiture ne fait aucun Bruit. Les Survivants assis dans une voiture peuvent toujours être attaqués normalement par les Zombies de leur Zone. Dépenser des Actions de voiture ne déclenche pas de modificateurs de déplacement ; une voiture peut quitter ou traverser des zones contenant des Zombies sans dépenser d'actions supplémentaires ni s'arrêter.
* Actions de voiture (coûtent 1 Action chacune lorsqu'on se trouve dans la même Zone qu'une voiture) :
  * Monter ou descendre d'une voiture : On ne peut y monter que s'il n'y a pas de Zombies dans cette Zone. En descendre ne comporte aucune restriction.
  * Changer de siège : Basculer entre les emplacements Conducteur et Passager. Peut être fait même s'il y a des Zombies dans la Zone.
  * Conduire une voiture : Seul le Conducteur peut effectuer cette action. Choisissez un mode de conduite :
    * Conduite Lente : Déplace la voiture de 1 Zone. Aucune attaque n'est effectuée.
    * Conduite Rapide : Déplace la voiture de 2 Zones consécutives (demi-tours interdits). Effectuez une Attaque de Voiture dans chaque Zone contenant des Zombies dans laquelle la voiture pénètre.
* Attaques de Voiture : Les caractéristiques de résolution sont Portée 0, 3 Dés, Précision 4+, Dégâts 2. Les touches sont attribuées en respectant strictement l'Ordre de Priorité des Cibles. Cela peut causer du Tir Ami sur les Survivants à pied si la voiture pénètre dans une Zone contenant à la fois des Zombies et des Survivants à pied. Les Survivants à l'intérieur de la même voiture ou d'une autre voiture dans cette Zone sont immunes. Aucune Attaque de Voiture ne se produit si la voiture pénètre dans une zone ne contenant que des survivants à pied.
* Types de Voitures :
  * Muscle Car : Contient une unique Caisse d'Arme Épique au début de la partie si la Mission l'indique. Prendre la Caisse d'Arme Épique retire le pion et attribue une Arme Épique aléatoire. Une Muscle Car peut être conduite tout en gardant sa caisse dans le coffre, sans occuper de siège passager.
  * Voiture de Police : Contient une quantité illimitée de cartes d'arme. Peut être Fouillée normalement ; les compétences liées à la fouille et les Lampes de poche s'appliquent. Lors d'une Fouille, piochez des cartes jusqu'à ce qu'une carte d'arme soit piochée, puis défaussez les autres cartes non-armes. Si une carte « Aaahh !! » est piochée, elle déclenche l'apparition d'un Rôdeur et interrompt immédiatement la Fouille.

---

### TRAITS SPÉCIAUX DE L'ÉQUIPEMENT
* Lampe de poche : Octroie au Survivant la compétence « Fouille : 2 cartes » lors d'une fouille. Annule les pénalités de précision dans les Zones d'ombre. Ne se cumule pas avec une autre Lampe de poche. Peut être utilisé dans le Sac à dos.
* Molotov : Effectuez une Action à distance avec le Molotov en Main, défaussez la carte et créez une explosion dans la Zone ciblée. Tous les Acteurs de la Zone cible sont immédiatement éliminés, quel que soit leur seuil de Dégâts (y compris les Abominations). 
* Recharger : Les armes dotées de ce trait (ex. : fusil à canon scié, Ma's Shotgun) sont vidées à chaque fois qu'elles font feu. Un Survivant doit dépenser 1 Action pour Recharger l'arme s'il souhaite l'utiliser à nouveau durant le même Round de jeu. Toutes les armes rechargeables sont rechargées automatiquement et gratuitement durant la Phase de Fin. Une seule Action peut recharger 2 armes utilisées de manière Double.

---

### MODES DE JEU ADDITIONNELS
* Mode Zones d'ombre : Les Acteurs ne peuvent pas tracer de Lignes de vue vers les Zones d'ombre sauf à une Portée de 0-1. Les Attaques à distance visant des Zones d'ombre ont une Précision pénalisée à 6+ (obtenir un 6 est requis pour toucher). Posséder une Lampe de poche annule cette pénalité. Les Attaques au corps à corps ne sont pas affectées par les Zones d'ombre.
* Mode Compagnons : Les Compagnons jouent le rôle de personnages de soutien qui suivent les Survivants. Traits Généraux : Ils comptent pour 1 Bruit, sont touchés par le Tir Ami, n'ont ni inventaire ni actions, et sont immédiatement éliminés s'ils reçoivent une seule Blessure (ce qui entraîne la défaite de la partie). Ils restent toujours exactement dans la même Zone que leur Leader. Leur Leader gagne et bénéficie de la Compétence de Niveau de Danger Bleu du Compagnon. N'importe quel Survivant peut dépenser 1 Action pour rallier un Compagnon esseulé dans sa Zone afin de devenir son nouveau Leader.
* Mode Ultrared : Permet aux Survivants de gagner des Points d'Adrénaline au-delà du Niveau de Danger Rouge. Lorsqu'un Survivant atteint le maximum du Niveau Rouge, remettez le pointeur d'Adrénaline à 0. Le Survivant is toujours considéré au Niveau Rouge et conserve toutes ses Compétences débloquées. Continuez à compter les PA normalement ; en atteignant à nouveau les Niveaux de Danger, sélectionnez les Compétences restantes non choisies ou sélectionnez n'importe quelle nouvelle Compétence de la liste principale une fois que toutes les compétences du personnage sont entièrement débloquées.

---

### GLOSSAIRE COMPLET DES COMPÉTENCES (PAR ORDRE ALPHABÉTIQUE)
* +1 Action : Le Survivant dispose d'une Action supplémentaire qu'il peut utiliser comme il le souhaite.
* +1 Dégât : [Action] : Le Survivant obtient un bonus de +1 Dégât avec le type d'Action spécifié (Combat, Corps à corps ou À distance).
* +1 dé : [Action] : Chacune des armes du Survivant lance un dé supplémentaire lors des Actions du type spécifié (Combat, Corps à corps ou À distance). Les armes Doubles gagnent chacune un dé (+2 dés au total).
* +1 Action gratuite [type d'Action] : Le Survivant dispose d'une Action gratuite supplémentaire du type spécifié (Combat, Corps à corps, Déplacement, À distance ou Fouille).
* +1 Portée max : La Portée maximale des armes à distance utilisées par le Survivant est augmentée de 1.
* +1 Zone par Déplacement : Lorsque le Survivant dépense 1 Action pour se Déplacer, il peut se déplacer de 1 ou 2 Zones au lieu d'une. Entrer dans une Zone contenant des Zombies met toujours fin au Déplacement.
* +1 au résultat du dé : [Action] : Le Survivant ajoute 1 au résultat de chaque dé lancé lors des Actions du type spécifié (Combat, Corps à corps ou À distance). Le résultat maximal est toujours de 6.
* [Type d'Action] : Dégât 2 : Les armes du type indiqué (Combat, Corps à corps ou À distance) utilisées par le Survivant et ayant une valeur de Dégât de 1 sont considéres comme ayant une valeur de Dégât de 2.
* Deux cocktails valent mieux qu'un : Lancez un dé à chaque fois que le Survivant défausse un Molotov pour effectuer une Action à distance. Sur un résultat de 3 ou plus, la carte Molotov peut être remise gratuitement dans le Sac à dos.
* Ambidextre : Le Survivant traite toutes les armes comme si elles possédaient le symbole Double.
* Barbare : Lors de la résolution d'une Action au corps à corps, le Survivant peut remplacer le nombre de Dés de l'arme (or des armes) de corps à corps utilisée(s) par le nombre total de Zombies présents dans sa Zone actuelle.
* Blitz : Une fois par Tour, dépensez 1 Action pour vous déplacer jusqu'à 2 Zones vers une Zone où des Zombies sont à Portée d'une de vos armes à distance équipées, puis gagnez 1 Action à distance gratuite.
* Soif de sang : [Action] : Une fois par Tour, dépensez 1 Action pour vous déplacer jusqu'à 2 Zones vers une Zone contenant au moins 1 Zombie, puis gagnez 1 Action gratuite du type spécifié (Combat, Corps à corps ou À distance).
* Leader né : Pendant son Tour, le Survivant peut donner 1 Action gratuite à un autre Survivant pour qu'il l'utilise immédiatement.
* Effraction : Le Survivant n'a pas besoin d'Équipement pour ouvrir les portes et ne fait aucun Bruit en le faisant. Gagne une Action gratuite supplémentaire utilisable uniquement pour ouvrir des portes.
* Frère d'armes : [effet de jeu] : Actif lorsque le personnage se tient dans la même Zone qu'au moins 1 autre Survivant. Chaque Survivant dans cette Zone bénéficie de la Compétence/effet indiqué (Compagnons exclus).
* Peut Fouiller plus d'une fois : Le Survivant peut Fouiller plusieurs fois par Tour, en dépensant 1 Action pour chaque Fouille.
* Charge : Une fois par Tour et gratuitement, déplacez-vous jusqu'à 2 Zones vers une Zone contenant au moins 1 Zombie. Entrer dans une Zone contenant des Zombies met fin au Déplacement.
* Réflexes de combat : Chaque fois que des Zombies apparaissent à une Portée de 0-1 (avant toute Ruée), le Survivant peut immédiatement effectuer une Action de Combat gratuite contre eux. S'utilise une fois par carte Zombie piochée.
* Destinée : Une fois par Tour, lors de la révélation d'une carte Équipement piochée, ignorez-la et défaussez-la, puis piochez-en une autre dans le même paquet.
* Distributeur : Lors de la résolution de l'étape d'Invasion pendant la Phase des Zombies, piochez autant de cartes Zombie qu'il y a de Zones d'Invasion actives, regardez-les, et attribuez l'une d'elles à chaque Zone active selon votre choix.
* Dreadnought : [type de Zombie] : Le Survivant ignore toutes les Blessures provenant des Zombies ayant le mot-clé indiqué dans leur nom (ex. : Dreadnought : Rôdeur).
* Expert en double : Le Survivant dispose d'une Action de Combat gratuite tant qu'il a des armes Doubles équipées (utilisable uniquement avec ces armes Doubles).
* Escalade : [Action] : Le Survivant gagne 1 dé supplémentaire à lancer pour chaque Action consécutive du type spécifié (Combat, Corps à corps ou À distance). Cumulatif jusqu'à ce que le Tour se termine ou qu'un autre type d'Action soit effectué.
* Médecin de campagne : Une fois par Tour, dépensez 1 Action pour vous déplacer jusqu'à 2 Zones vers une Zone contenant au moins 1 Survivant, puis soignez 1 Blessure de n'importe quel Survivant dans cette Zone de destination.
* Recharge gratuite : Le Survivant recharge les armes rechargeables gratuitement.
* Plein auto : Lors de la résolution d'une Action à distance, le Survivant peut remplacer le nombre de Dés de l'arme (ou des armes) à distance utilisée(s) par le nombre de Zombies présents dans la Zone ciblée.
* Desperado : Le Survivant treats all Ranged weapons as if they had the Dual symbol.
* Frapper & courir : Action de Déplacement gratuite juste après avoir résolu une Action au corps à corps ou À distance ayant entraîné l'élimination d'au moins un Zombie. Aucun coût d'action supplémentaire pour quitter la Zone si des Zombies s'y trouvent.
* Réserve : Le Survivant peut transporter jusqu'à 2 cartes Équipement supplémentaires placées près de son Tableau de bord (considérées comme stockées dans son Sac à dos).
* Se boucher le nez : Pioche une carte Équipement (paquet de base uniquement) à chaque fois que le dernier Zombie présent dans sa Zone actuelle est éliminé. Ceci n'est PAS une Action de Fouille.
* Défenseur résidentiel : Le Survivant n'est pas limité à une Portée de 0-1 lorsqu'il trace des Lignes de vue à travers les Zones de bâtiment.
* Arme improvisée : Corps à corps : Une fois par Tour, effectuez une Attaque au corps à corps gratuite avec les caractéristiques suivantes : Portée 0, Dés 2, Précision 4+, Dégâts 1.
* Arme improvisée : À distance : Une fois par Tour, effectuez une Attaque à distance gratuite avec les caractéristiques suivantes : Portée 1-1, Dés 2, Précision 4+, Dégâts 1.
* C'est tout ce que tu as dans le ventre ? : Utilisé à tout moment lorsque le Survivant est sur le point de subir des Blessures. Annulez 1 Blessure pour chaque carte Équipement défaussée de son inventaire.
* Saut : Une fois par Tour, dépensez 1 Action pour vous déplacer de 2 Zones, en ignorant tout ce qui se trouve dans la Zone intermédiaire, à l'exception des murs et des portes fermées. Les pénalités de déplacement de la Zone de départ s'applquent.
* Sauveteur : Une fois par Tour et gratuitement, sélectionnez une Zone contenant au moins 1 Zombie et 1 Survivant à une Portée de 1 partageant une LDV et un chemin dégagé ; ramenez les Survivants choisis dans la Zone de l'utilisateur sans pénalité.
* Profil bas : Le Survivant ne peut pas être touché par un Tir Ami (complètement ignoré lorsque quelqu'un tire dans la Zone où il se trouve). Les règles du Molotov s'appliquent toujours.
* Chanceux : Pour chaque Action effectuée, le joueur peut choisir de relancer tous les dés une fois de plus. Se cumule avec les relances d'armes.
* Paire assortie : Lors d'une Fouille, si vous piochez une carte Équipement dotée du symbole Double, prenez immédiatement une deuxième carte du même type dans le paquet, puis remélangez-le.
* Médecin : Utilisé gratuitement pendant chaque Phase de Fin. Le Survivant et tous les Survivants de sa Zone peuvent soigner 1 Blessure. L'utilisateur gagne 1 PA par Blessure soignée.
* À bout portant : Peut effectuer des Actions à distance à une Portée de 0. Le joueur choisit librement ses cibles (éliminant n'importe quel type sans tenir compte de la priorité spéciale ou des mots-clés si les dégâts de l'arme sont suffisants). Le Tir Ami est ignoré.
* Faucheur : [Action] : Lors de l'attribution des touches pour le type spécifié (Combat, Corps à corps ou À distance), 1 touche peut éliminer gratuitement un Zombie identique supplémentaire dans la même Zone (maximum 1 supplémentaire par Action).
* Régénération : Durant chaque Phase de Fin, la Santé du Survivant est entièrement restaurée à sa valeur maximale.
* Résultat de 6 : +1 Dégât [Action] : Ajoutez 1 à la valeur de Dégât de l'arme utilisée pour chaque 6 obtenu lors d'une Action du type spécifié. Les relances doivent être résolues en premier.
* Résultat de 6 : +1 dé [Action] : Lancez un dé supplémentaire pour chaque 6 obtenu lors d'une Action du type spécifié. Continuez à lancer des dés supplémentaires tant que des 6 sont obtenus.
* Éboueur : Le Survivant peut Fouiller dans n'importe quelle Zone de bâtiment ou de rue en suivant les règles normales de Fouille.
* Fouille : 2 cartes : Piochez 2 cartes lorsque ce Survivant effectue une Fouille.
* Poussette : Une fois par Tour et gratuitement, poussez tous les Zombies présents dans la Zone du Survivant vers une Zone sélectionnée à une Portée de 1 partageant un chemin dégagé.
* Pas de côté : Chaque fois que des Zombies apparaissent à une Portée de 0-1 (avant toute Ruée), effectuez une Action de Déplacement gratuite sans dépenser d'actions supplémentaires pour les Zombies présents dans la Zone de départ. S'utilise une fois par carte piochée.
* Insaisissable : Le Survivant ne dépense pas d'Actions supplémentaires lorsqu'il quitte une Zone contenant des Zombies, et ignore les Zombies lorsqu'il effectue des Actions de Déplacement.
* Sniper : Le Survivant peut choisir librement les cibles de toutes ses Actions à distance. Le Tir Ami est ignoré.
* Sprint : Une fois par Tour, dépensez 1 Action de Déplacement pour vous déplacer de 2 ou 3 Zones au lieu d'une. Entrer dans une Zone contenant des Zombies met fin au Déplacement.
* Commence avec [X] Santé : Commence avec le niveau de base de Santé indiqué (ne peut pas être utilisé comme Compagnon).
* Commence avec 2 PA : Commence la partie avec 2 Points d'Adrénaline (ne peut pas être utilisé comme Compagnon).
* Commence avec un [Équipement] : Commence la partie avec la carte Équipement indiquée automatiquement attribuée lors de la Mise en place (ne peut pas être utilisé comme Compagnon).
* Main sûre : Le Survivant peut ignorer les autres Survivants de son choix s'il manque son tir lors d'une Action à distance (ne s'applique pas aux Molotovs).
* Super force : La valeur de Dégât des armes de corps à corps utilisées par le Survivant est considérée comme étant de 3.
* Maître d'armes : Le Survivant traite toutes les armes de corps à corps comme si elles possédaient le symbole Double.
* Tacticien : Le Tour du Survivant peut être résolu à n'importe quel moment de la Phase des Joueurs, avant ou après le Tour de tout autre Survivant.
* Provocation : Une fois par Tour et gratuitement, sélectionnez une Zone située jusqu'à 2 Zones de distance avec un chemin dégagé ; tous les Zombies de cette Zone obtiennent immédiatement une Activation supplémentaire pour tenter d'atteindre l'utilisateur, en ignorant et en dépassant les autres Survivants.
* Costaud : Le Survivant ignore la première Blessure reçue lors de chaque Étape d'Attaque (Phase des Zombies) et lors d'un Tir Ami.
* Commando : Tous les Équipements de l'inventaire du Survivant sont considéres comme équipés en Main.
* Lien zombie : Joue un Tour supplémentaire à chaque fois qu'une carte Activation Supplémentaire (pas les Ruées) est piochée dans la pile Zombie, en effectuant son Tour avant les Zombies activés par la carte.

---

### PIONS BRUIT — RÈGLES COMPLÈTES
* Les pions Bruit représentent les sons qui attirent les Zombies. Ils sont placés sur le plateau pendant la Phase des Joueurs et retirés à la fin de chaque Phase de Fin.
* Actions qui génèrent 1 pion Bruit dans la Zone du Survivant :
  * Effectuer une action de Fouille.
  * Effectuer n'importe quelle Attaque à distance (qu'elle touche ou non).
  * Ouvrir une porte en utilisant un Équipement d'ouverture de porte (ex. : Pied-de-biche). Ouvrir une porte à mains nues (via la compétence Effraction) ne génère aucun Bruit.
  * Utiliser l'action Faire du Bruit.
* Actions qui ne génèrent AUCUN Bruit :
  * Les actions de Déplacement.
  * Les Attaques au corps à corps.
  * Les actions de Réorganisation / Échange.
  * Conduire une voiture (les voitures sont explicitement silencieuses).
  * Interagir avec un pion Objectif.
* Plusieurs pions Bruit peuvent s'accumuler dans une même Zone au cours d'un round. Chaque Survivant physiquement présent dans une Zone compte également comme 1 pion Bruit à des fins de ciblage (mais il ne s'agit pas d'un pion physique et il n'est pas retiré lors de la Phase de Fin).
* Les pions Bruit ne se cumulent pas d'un round à l'autre — tous les pions sont retirés à la fin de chaque Phase de Fin, sans exception.

#### Résolution des égalités de Bruit (ordre de priorité complet)
Lorsque Zombies doit choisir entre deux ou plusieurs Zones ayant un niveau de bruit égal, appliquez ces critères de départage dans un ordre strict jusqu'à ce qu'une Zone l'emporte :
1. La Zone dans la Ligne de vue du Zombie qui possède le plus de pions Bruit (en comptant les Survivants comme du Bruit).
2. En cas d'égalité persistante, la Zone n'importe où sur le plateau contenant le plus grand total de Bruit (LDV non requise à cette étape).
3. En cas d'égalité persistante, la Zone contenant le plus de Survivants.
4. En cas d'égalité persistante, la Zone la plus proche d'une Zone d'Invasion (le plus petit nombre de Zones de distance).
5. En cas d'égalité persistante, les joueurs choisissent collectivement la direction dans laquelle le ou les Zombies se déplacent.

---

### PHASE DES ZOMBIES — ORDRE D'ACTIVATION DÉTAILLÉ
La Phase des Zombies est résolue selon cette séquence stricte :

#### Étape 1 — Activation des Zombies
Les Zombies s'activent un type à la fois, dans cet ordre :
1. Les **Abominations** s'activent en premier.
2. Les **Forcenés** s'activent ensuite — ils obtiennent chacun 2 Actions complètes (déplacement + déplacement, déplacement + attaque, ou attaque + attaque si des Survivants se trouvent déjà dans leur Zone).
3. Les **Balèzes** s'activent.
4. Les **Rôdeurs** s'activent en dernier.

Au sein de chaque type, lorsque plusieurs Zombies du même type doivent s'activer, les joueurs décident collectivement de l'ordre dans lequel les différents Zombies de ce type agissent. Chaque Zombie effectue soit :
- Une **Attaque** s'il y a au moins 1 Survivant dans sa Zone (il ne se déplace pas ; il attaque à la place).
- Un **Déplacement** de 1 Zone vers sa destination cible si aucun Survivant ne se trouve dans sa Zone.

Un Zombie qui attaque ne se déplace pas durant la même Action. Un Forcené qui attaque lors de sa première Action peut encore se déplacer ou attaquer à nouveau lors de sa deuxième Action.

#### Étape 2 — Invasion de Zombies
Après l'activation de tous les Zombies, piochez 1 carte Zombie par Zone d'Invasion active sur le plateau. Placez les Zombies indiqués sur la Zone d'Invasion correspondante. Les cartes Ruée et Activation Supplémentaire se résolvent immédiatement comme décrit dans les règles d'Apparition.

* **Pile de cartes Zombie épuisée** : Si la pile de pioche de cartes Zombie est épuisée à n'importe quel moment durant l'Étape d'Invasion, remélangez immédiatement et soigneusement l'intégralité de la défausse pour former une nouvelle pioche, puis continuez à piocher.

#### Étape 3 — Phase de Fin
Retirez tous les pions Bruit. Passez le pion Premier Joueur vers la gauche.

---

### NIVEAU DE DANGER — CLARIFICATIONS CLÉS
* Le Niveau de Danger utilisé pour toutes les lectures de cartes d'Invasion de Zombies est toujours déterminé by le **seul Survivant le plus avancé actuellement sur le plateau**. Si ce Survivant est éliminé, le niveau du Survivant le plus élevé suivant s'applique à partir de ce moment.
* Le Niveau de Danger **ne diminue jamais**, même si le Survivant de tête est éliminé en milieu de partie.
* Les Points d'Adrénaline (PA) sont gagnés individuellement par chaque Survivant. Chaque Survivant suit ses propres PA sur son Tableau de bord. Cependant, **tous les joueurs lisent la ligne d'Invasion de la carte Zombie correspondant au Niveau de Danger le plus élevé parmi tous les Survivants actifs sur le plateau** — et non leur propre niveau individuel.
* Atteindre un nouveau Niveau de Danger est immédiat : le Survivant débloque instantanément un nouvel emplacement de Compétence et choisit une Compétence. Cela prend effet à partir de sa prochaine Action.
* Le bonus de +1 Action accordé au niveau Jaune (7 PA) s'applique uniquement au Survivant qui a atteint le niveau Jaune, et non à tous les Survivants.

---

### RÉSOLUTION DES BLESSURES & ÉLIMINATION DES SURVIVANTS
* Lorsque les Zombies attaquent, chaque Zombie présent dans une Zone contenant au moins 1 Survivant inflige 1 Blessure à un Survivant de cette Zone.
* **Répartition des Blessures** : Les joueurs décident collectivement quel(s) Survivant(s) dans la Zone reçoi(ven)t les Blessures de l'attaque. Les Blessures n'ont pas besoin d'être réparties équitablement — les joueurs peuvent concentrer toutes les Blessures sur un seul Survivant s'ils le souhaitent.
* Un Survivant est **elimine** lorsque le nombre de Blessures qu'il a reçues est égal ou supérieur à sa valeur de Santé (3 pour les Survivants classiques, 2 pour les Enfants).
* Lorsqu'un Survivant est éliminé : retirez immédiatement sa figurine du plateau. La partie est perdue à ce moment précis (sauf si la Mission en spécifie autrement ou qu'une compétence comme Régénération s'applique). L'Équipement du Survivant éliminé reste dans la Zone où il a été éliminé et peut être ramassé par d'autres Survivants.
* **Les Blessures de Tir Ami** suivent les mêmes règles : les joueurs décident quel(s) Survivant(s) de la Zone ciblée reçoi(ven)t la touche.
* **Les armes de Dégât 2** infligent 2 Blessures par touche aux Survivants (ex. : une attaque à distance manquée avec une arme de Dégât 2 dans une Zone contenant un coéquipier cause 2 Blessures à ce coéquipier).

---

### PRIORITÉ DES CIBLES — CLARIFICATION CORPS À CORPS vs À DISTANCE
* **Actions à distance** : Les touches doivent être attribuées en suivant strictement l'Ordre de Priorité des Cibles : Balèze / Abomination en premier, puis Rôdeur, puis Forcené. Le tireur ne peut pas choisir de toucher un Rôdeur si un Balèze est présent dans la Zone cible, à moins qu'une Compétence (ex. : Sniper, À bout portant) ne remplace explicitement cette règle.
* **Actions au corps à corps** : Il n'y a AUCUN ordre de priorité obligatoire pour le corps à corps. Le Survivant répartit librement ses touches au corps à corps entre tous les Zombies de sa Zone dans l'ordre de son choix. Il peut décider de tuer les Forcenés d'abord, ou les Rôdeurs d'abord — c'est entièrement la décision du joueur.
* Cette distinction est essentielle : À distance = priorité stricte ; Corps à corps = choix libre.
* **Rappel sur l'immunité des Abominations** : Un Balèze nécessite des Dégâts de 2 pour être tué (les touches de Dégât 1 sont complètement gâchées sur eux). Une Abomination nécessite des Dégâts de 3 ou un Molotov. En combat à distance, si une arme de Dégât 1 cible une Zone contenant un Balèze, toutes les touches de dés sont absorbées par le Balèze sans aucun effet — cela protège les Rôdeurs et Forcenés situés derrière lui.

---

### COMPAGNONS — RÈGLES ADDITIONNELLES
* Un Compagnon occupe toujours exactement la même Zone que son Leader. Il ne peut en aucun cas se trouver dans une Zone différente.
* Si le Leader d'un Compagnon est éliminé, le Compagnon devient un Compagnon esseulé. Il reste dans la Zone où le Leader a été éliminé. N'importe quel autre Survivant peut dépenser 1 Action pour rallier le Compagnon esseulé et devenir son nouveau Leader.
* Un Compagnon esseulé dans une Zone compte toujours pour 1 Bruit et peut être attaqué par les Zombies. Si un Compagnon esseulé reçoit une Blessure, la partie est immédiatement perdue (de la même manière que s'il était avec un Leader).
* Les Compagnons ne peuvent pas monter dans les voitures. Ils n'occupent pas de sièges passagers.
* Les Compagnons ne bénéficient pas des Compétences qui s'appliquent uniquement « aux Survivants », à moins que la Compétence ou la carte Compagnon ne l'indique explicitement.
* Le Leader d'un Compagnon bénéficie de la Compétence de Niveau de Danger Bleu du Compagnon à tout moment, quel que soit le propre Niveau de Danger du Leader.
* Si plusieurs Survivants se trouvent dans la même Zone qu'un Compagnon esseulé, l'un d'entre eux (celui qui dépense l'Action) devient le nouveau Leader — les autres Survivants ne peuvent pas bénéficier de la compétence du Compagnon à moins qu'ils ne deviennent également son leader.

---

### ARMES ÉPIQUES — RÈGLES GÉNÉRALES
* Les Armes Épiques sont de puissants objets uniques trouvés dans les Caisses d'Armes Épiques sur le plateau (généralement sur ou à proximité de véhicules spécifiques, selon les définitions de la Mission).
* Pour prendre une Arme Épique, un Survivant doit se trouver dans la même Zone que la Caisse et dépenser 1 Action pour interagir avec elle. Piochez au hasard 1 carte du paquet des Armes Épiques (paquet rouge).
* Les Armes Épiques suivent toutes les règles normales d'Équipement : elles occupent des emplacements Mains ou Sac à dos, peuvent être échangées, et sont soumises à toutes les règles normales des armes (Double, Recharger, etc.) sauf si leur carte indique le contraire.
* Les Armes Épiques sont généralement nettement plus puissantes que les cartes Équipement standard et possèdent souvent des traits uniques introuvables sur les armes ordinaires.
* Une seule Caisse d'Arme Épique peut être prise par pion Caisse sur le plateau (le pion est retiré après utilisation).

=== ENTRER DANS UN BÂTIMENT POUR LA PREMIÈRE FOIS ===
Lorsqu'un Survivant ouvre une porte pour entrer dans un bâtiment pour la première fois (c'est-à-dire que le bâtiment n'a pas encore été ouvert au cours de cette partie), la séquence suivante doit être résolue immédiatement et dans cet ordre exact :

1. OUVRIR LA PORTE : Le Survivant dépense 1 Action pour ouvrir la porte en utilisant un Équipement d'ouverture de porte ou ses mains nues. Placez un pion Porte sur sa face ouverte. La porte ne peut plus être refermées.

2. RÉVÉLER ET FAIRE APPARAÎTRE LES ZOMBIES — ZONES D'OMBRE UNIQUEMENT : Ouvrir un bâtiment pour la première fois déclenche immédiatement une invasion de Zombies à l'intérieur. Les Zombies apparaissent UNIQUEMENT dans les Zones d'ombre (pièces sombres marquées d'un symbole spécifique sur la dalle). Piochez 1 carte Zombie par Zone d'ombre du bâtiment, l'une après l'autre, et placez les Zombies indiqués dans chaque Zone d'ombre correspondante. Les pièces qui ne sont PAS des Zones d'ombre ne reçoivent AUCUN Zombie à cette étape.

3. LES SURVIVANTS PEUVENT MAINTENANT ENTRER : Une fois la porte ouverte et les Zombies placés, les Survivants peuvent entrer normalement dans le bâtiment en utilisant leurs Actions restantes.

4. FOUILLER (facultatif) : Une fois à l'intérieur d'une pièce de bâtiment ne contenant aucun Zombie, un Survivant peut dépenser 1 Action pour Fouiller et piocher 1 carte Équipement.

CLARIFICATIONS CLÉS :
- Les Zombies sont placés UNIQUEMENT dans les Zones d'ombre, jamais dans les pièces éclairées, les couloirs ou les zones de rue adjacentes au bâtiment.
- Si un bâtiment ne comporte aucune Zone d'ombre, aucun Zombie n'est placé lorsqu'il est ouvert pour la première fois.
- Les bâtiments déjà ouverts au début de la mission ne déclenchent pas cette séquence d'invasion.
- Un bâtiment est considéré ouvert dès qu'une de ses portes est ouverte. Les portes suivantes menant au même bâtiment ne déclenchent pas une autre invasion.
- Après la révélation initiale, les Zones d'ombre du bâtiment deviennent des Zones d'Invasion régulières et feront apparaître des Zombies normalement pendant l'Étape d'Invasion de la Phase des Zombies.

\`;