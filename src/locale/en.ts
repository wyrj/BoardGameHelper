export default {
  common: {
    score: 'Score',
  },
  home: {
    title: 'Home',
  },
  agricola: {
    title: 'Agricola Score Helper',
    grain: 'Grain',
    vegetable: 'Vegetables',
    sheep: 'Sheep',
    wild_boar: 'Wild Boar',
    cattle: 'Cattle',
    field: 'Plowed fields',
    pasture: 'Fenced Pastures',
    stable: 'Fenced Stables',
    room: 'Room',
    family: 'Family Member',
    unused: 'Unused Space',
    card: 'Card Points',
    bonus: 'Bonus Points',
    beg: 'Begging Card',
    room_type: 'Room Type',
    wood: 'Wood',
    clay: 'Clay',
    stone: 'Stone',
  },
  smallworld: {
    title: 'Small World',
    race: {
      // basic
      amazons: {
        name: 'AMAZONS',
        description: `Four of your Amazon tokens may only be used for conquest, not for defense, as indicated by the +4 on the banner itself. So you start your initial turn with 10 Amazon tokens (plus any additional ones that may be granted to you by the Special Power associated with the Amazons, depending on your combo). At the end of each of your Troop Redeployments (see Troop Redeployment, p. 5), remove four tokens from the map, making sure to leave at least one Amazon token in each of your Regions if possible, and only take these four tokens back in hand to redeploy on the map once you Ready your Troops (see Ready your Troops, p. 6) at the start of your next turn.`,
      },
      dwarves: {
        name: 'DWARVES',
        description: `Each Mine Region your Dwarves occupy is worth 1 bonus Victory coin, at the end of your turn. This power is kept even when the Dwarves are In Decline.`,
      },
      elves: {
        name: 'ELVES',
        description: `When the enemy conquers one of your Regions, keep all your Elf tokens in hand for redeployment at the end of the current player's turn, rather than discarding 1 Elf token back into the storage tray (see Enemy Losses & Withdrawals, p. 4).`,
      },
      ghouls: {
        name: 'GHOULS',
        description: `Your Ghoul tokens all stay on the map when going into Decline, instead of the usual 1 token per Region. In addition, unlike other Races, once In Decline, your Ghouls can continue to conquer new Regions in the following turns, playing exactly as if they were still Active tokens. However these conquests must be done at the start of your turn, before any conquest by your Active race. You may even attack your own currently Active race with your In Decline Ghouls, if you wish.`,
      },
      giants: {
        name: 'GIANTS',
        description: `Your Giants may conquer any Region adjacent to a Mountain Region they occupy at a cost of 1 less Giant token than normal. A minimum of 1 Giant token is still required.`,
      },
      halflings: {
        name: 'HALFLINGS',
        description: `Your Halfling tokens may enter the map through any Region of the map, not just border ones. Place a Hole-in-the-Ground in each of the first 2 Regions you conquer, to make them immune to enemy conquests as well as racial and special powers. You remove your Holes-in-the-Ground (and lose the protection they confer in these Regions) when your Halflings go into Decline, or if you choose to abandon a Region containing a Hole-in-the-Ground.`,
      },
      humans: {
        name: 'HUMANS',
        description: `Each Farmland Region your Humans occupy is worth 1 bonus Victory coin, at the end of your turn.`
      },
      orcs: {
        name: 'ORCS',
        description: `Each not empty Region your Orcs conquered this turn is worth 1 bonus Victory coin, at the end of your turn.`,
      },
      ratmen: {
        name: 'RATMEN',
        description: `No Race benefit; their sheer number of tokens is enough!`,
      },
      skeletons: {
        name: 'SKELETONS',
        description: `During your Troop Redeployment (p. 5), take 1 new Skeleton token from the storage tray for every 2 non-empty Regions you conquered this turn, and add it to the troops you redeploy at the end of your turn. If there are no more tokens in the storage tray, you do not receive any additional tokens.`,
      },
      sorcerers: {
        name: 'SORCERERS',
        description: `Once per turn per opponent, your Sorcerers can conquer a Region by substituting one of your opponent's Active tokens with one of your own taken from the storage tray. If there are no more tokens in the storage tray, then you cannot conquer a new Region in this way. The token your Sorcerers replaces must be the only race token in its Region (A single Troll token with its Troll's Lair is considered alone for this purpose; likewise for a Race token in a Fortress or on a Mountain, these markers provide no protection to a lone Race token) and that Region must be adjacent to one of your Sorcerers'. Place the substituted opponent's Race token back into the storage tray. If an Elf is converted by a Sorcerer, the Elf does lose his token.`,
      },
      tritons: {
        name: 'TRITONS',
        description: `Your Tritons may conquer all Coastal Regions (those bordering a Sea or Lake) at a cost of 1 less Triton token than normal. A minimum of 1 Triton token is still required.`,
      },
      trolls: {
        name: 'TROLLS',
        description: `Place a Troll's Lair in each Region your Trolls occupy. The Troll's Lair augments your region's defense by 1 (just as if you had an additional Troll token stationed there), and stays in the Region even after your Trolls go into Decline. Remove the Troll's Lair if you abandon the Region or when an enemy conquers it.`,
      },
      wizards: {
        name: 'WIZARDS',
        description: `Each Magic Region your Wizards occupy is worth 1 bonus Victory coin, at the end of your turn.`,
      },
      // Be Not Afraid
      barbarians: {
        name: 'BARBARIANS',
        description: `Your Barbarians cannot redeploy their troops at the end of each turn. If your fi nal conquest attempt fails, keep the unused Barbarians off the board until the start of your next turn.`,
      },
      homunculi: {
        name: 'HOMUNCULI',
        description: `Each time a Homunculi Race combo is bypassed, in addition to a Victory coin, you must also add a Homunculus token taken from the storage tray (if any left) to the combo. These tokens are added to those normally received when the Homunculi combo is fi nally picked, along with any Victory coins.`,
      },
      leprechauns: {
        name: 'LEPRECHAUNS',
        description: `During Redeployment, place 1 Pot of Gold in any (or all, if you wish) of the regions your Leprechauns occupy. Each Pot of Gold still present at the start of your next turn goes into your Victory stash and is worth 1 coin. If an opponent conquers one of these regions before your next turn, he gets the Pot of Gold instead. Any remaining Pot of Gold tokens can be used during subsequent redeployments until all are gone. `,
      },
      pixies: {
        name: 'PIXIES',
        description: `During your Troop Redeployment, leave only a single Pixie token in each region they occupy. All your other Pixies must be kept off the board until the start of your next turn.`,
      },
      pygmies: {
        name: 'PYGMIES',
        description: `Each time you lose a Pygmy token, roll a reinforcement die and receive as many new Pygmies from the storage tray as you rolled pips on the die (up to the number of Pygmies left). Deploy them on the board at the end of the current player’s turn`,
      },
      // A Spider's Web
      ice_witches: {
        name: 'ICE WITCHES',
        description: `Ice Witches collect 1 Winter marker for each Magic Source they control at the end of their Redeployment phase. At the end of their Redeployment phase, Ice Witches may place their Winter markers in their own Regions or any adjacent Region (there cannot be more than 1 Winter marker per Region though). A Winter marker permanently augments the Region’s defense by 1. It remains on the board as long as the Ice Witches are active. Regions with a Winter marker that are not controlled by an Ice Witch earn 1 less Victory coin than usual.`,
      },
      skags: {
        name: 'SKAGS',
        description: `Randomly select and place 1 Loot marker face down in each Region you conquer. You may look at it only after you have selected it and placed it on the board. When an opponent conquers one of your regions, reveal the Loot marker. If the Loot marker is a Skag Attack marker, the conquest is cancelled and the opponent loses one token (he cannot retry any attack against this region during this turn). Otherwise, the opponent collects the Loot token. If you abandon a Region, leave the Loot token behind. When you go in Decline, or at the end of your last turn if you didn’t go in Decline, reveal all Loot tokens in your regions and collect them`,
      },
      slingmen: {
        name: 'SLINGMEN',
        description: `Slingmen may conquer a Region that is one Region away from one they currently occupy, provided they do not control a Region adjacent to it. When a Region is conquered this way, they immediately take 1 Victory coin from the stash. They may conquer Regions beyond the Lake, but not over the Seas.`,
      },
      // Grand Dames
      gypsies: {
        name: 'GYPSIES',
        description: ``,
      },
      priestesses: {
        name: 'PRIESTESSES',
        description: ``,
      },
      white_ladies: {
        name: 'WHITE_LADIES',
        description: ``,
      },
      // Royal Bonus
      fauns: {
        name: 'FAUNS',
        description: `During Troop Redeployment, collect 1 new Race token for each active region you conquered this turn. Your victims also receive 1 new Race token for each of their regions you conquered.`,
      },
      igors: {
        name: 'IGORS',
        description: `You collect all Race tokens (Lost Tribes, Monsters and all Player’s race tokens, including your own) lost in conquests. At the beginning of your turn, you may exchange these for new Igor Race tokens at a rate equal to the number of players in the game (if 4 players, 4 tokens collected = 1 new Race token). If you collected enough tokens, you may get more than 1 new Race token.`,
      },
      shrubmen: {
        name: 'SHRUBMEN',
        description: `All Forest regions occupied by Shrubmen become immune to opponents’ conquests, racial and special powers, even when In Decline.`,
      },
      // Cursed
      goblins: {
        name: 'GOBLINS',
        description: `You may conquer any In Decline Region at a cost of 1 less Goblin token than normal. A minimum of 1 token is still required.`,
      },
      kobolds: {
        name: 'KOBOLDS',
        description: `You may never occupy (nor conquer) a Region with less than two Kobold tokens. When going In Decline however, keep a single token in each Region, as normal.`,
      },
      // sky island
      escargots: {
        name: 'ESCARGOTS',
        description: `You receive the Victory coins for the Regions you occupy with your Escargots at the beginning of your turn, not at the end (which means nothing for your fi rst turn with them). Victory coins earned through the use of your Special Power are not impacted by this rule and are still earned at the end of your turn.`,
      },
      scarcrows: {
        name: 'SCARCROWS',
        description: `Each time a player conquers a Region occupied by active Scarecrows, that player earns an extra Victory coin from the bank. Scarecrows are the quintessential victims.`,
      },
      khans: {
        name: 'KHANS',
        description: `While they are active, Khans earn an extra Victory coin per Hill or Farmland Region they occupy. However, any other Region is worth one less Victory coin. A region can never be worth less than zero Victory coins.`,
      },
      scavengers: {
        name: 'SCAVENGERS',
        description: `When Scavengers conquer an In Decline Region, Race tokens that would normally be discarded stay in place and add to the Region’s Defense. Even when Regions are occupied by the Scavengers, any In Decline Race owner still earns Victory coins for it at the end of their turn (this also applies to any In Decline race tokens that the Scavenger player has, allowing him to earn Victory coins for these regions twice per turn). The In Decline Race tokens are discarded when the Region is conquered by another Race or when the Scavengers go In Decline. Reminder: In Decline Race tokens are also discarded as usual when their controlling player’s active race enters In Decline`,
      },
      storm_giants: {
        name: 'STORM_GIANTS',
        description: `Storm Giants’ fi rst conquest can be in the Sky Islands. At the beginning of each turn you receive two Lightning Bolt tokens. Each of those tokens allows the conquest of any Mountain Region by using a single Race token, regardless of the number of enemy tokens defending it.`,
      },
      drakons: {
        name: 'DRAKONS',
        description: `Each turn, Drakons can transform up to three of their Race tokens into Dragons (transformed Drakon tokens are discarded).  These Dragons work in the exact same way as the Dragon Master power from the base game. At the beginning of your next turn, the Dragon tokens are removed from the board to be used again when another Drakon token is transformed.`,
      },
      wendigos: {
        name: 'WENDIGOS',
        description: `Once per turn, Wendigos can choose a Forest Region anywhere on the board (either on the Ground or in Sky Islands). This region is cleared of any Race tokens and the Wendigos gain an extra token from the storage tray if available. The player who occupied this Forest Region takes his Race token(s) back in hand, discards one of them as normal, and redeploys the rest at the end of the Wendigos’ turn. Elves are not immune to Wendigos’ power. If the Race in the Forest Region is In Decline, the token(s) in it are simply discarded. The emptied Forest Region can now be conquered normally.`,
      },
    },
    ability: {
      // basic
      alchemist: {
        name: 'ALCHEMIST',
        description: `Collect 2 bonus Victory coins at the end of each turn your race hasn't yet gone into Decline.`,
      },
      berserk: {
        name: 'BERSERK',
        description: `You may use the Reinforcement die before each of your conquests, rather than just the last one of your turn. Roll the die first; select the Region you wish to conquer; then place the required number of Race tokens (minus the die results) there. If you do not have enough tokens left, this is your final conquest attempt for the turn. As usual, a minimum of 1 token is still required to attempt the conquest.`,
      },
      bivouacking: {
        name: 'BIVOUACKING',
        description: `Deploy the 5 Encampment tokens in any of your Region(s), during your Troop Redeployment phase. Each Encampment counts as 1 Race token toward the defense of the Region in which it is placed (thereby protecting a single Race token with an Encampment from the Sorcerer's Racial Power). Multiple Encampments may be placed in the same Region to obtain a higher defense bonus. Each turn you may break camp and settle in any new Region you occupy. Encampments are never lost during an attack on the Region they are in: they are redeployed at the end of the current player's turn. When the Race they were associated with goes into Decline, they disappear.`,
      },
      commando: {
        name: 'COMMANDO',
        description: `You may conquer any Region with 1 less Race token than normal. A minimum of 1 token is still required.`,
      },
      diplomat: {
        name: 'DIPLOMAT',
        description: `At the end of your turn, you may select one opponent whose Active race you did not attack this turn as your ally. You are now at peace with him and he cannot attack your active race until your next turn. You may change allies each turn, or stay at peace with the same opponent. Tokens In Decline are not impacted (so Ghouls In Decline are immune to this power and may still attack you).`,
      },
      dragon_master: {
        name: 'DRAGON MASTER',
        description: `Once per turn, you may conquer a Region using a single Race token, regardless of the number of enemy tokens defending it. Once conquered, place your Dragon there. The Region is now immune to enemy conquests as well as to their racial and special powers until your Dragon moves. During each new turn, you may move your Dragon to a different Region you wish to conquer. Your Dragon disappears when you go into Decline; remove it from the board and place it back in the storage tray at that time. `,
      },
      flying: {
        name: 'FLYING',
        description: `You may conquer any Region of the map except Seas and Lakes. These Regions do not need to be adjacent or contiguous to ones you already occupy`,
      },
      forest: {
        name: 'FOREST',
        description: `Collect 1 bonus Victory coin for each Forest Region you occupy at turn's end.`,
      },
      fortified: {
        name: 'FORTIFIED',
        description: `Once per turn, as long as your Fortified Race is active, you may place 1 Fortress in a Region you occupy. The Fortress is worth 1 bonus Victory coin at turn's end, unless you are In Decline. The Fortress also augments your Region's defense by 1 (just as if you had an additional Race token stationed there), even if you are In Decline. Remove the Fortress if you abandon the Region or when an enemy conquers it. There can only ever be a maximum of 1 Fortress per Region, and a maximum of 6 Fortresses on the map.`,
      },
      heroic: {
        name: 'HEROIC',
        description: `At the end of your turn, place each of your 2 Heroes in 2 different Regions you occupy. These 2 Regions are immune to enemy conquests as well as to their racial and special powers until your Heroes move. Your Heroes disappear when you go into Decline.`,
      },
      hill: {
        name: 'HILL',
        description: `Collect 1 bonus Victory coin for each Hill Region you occupy at turn's end.`,
      },
      merchant: {
        name: 'MERCHANT',
        description: `Collect 1 bonus Victory coin for any Region you occupy at turn's end.`,
      },
      mounted: {
        name: 'MOUNTED',
        description: `You may conquer any Hill or Farmland Region with 1 less Race token than normal. A minimum of 1 token is still required.`,
      },
      pillaging: {
        name: 'PILLAGING',
        description: `Each non-empty Region you conquer this turn is worth 1 bonus Victory coin at turn's end.`,
      },
      seafaring: {
        name: 'SEAFARING',
        description: `As long as your Seafaring race is active, you may conquer the Seas and the Lake, considering them as 3 empty Regions. You keep these Regions even once you go into Decline, and continue scoring for them for as long as you have tokens there. Only Seafaring races may occupy the Seas and the Lake.`,
      },
      spirit: {
        name: 'SPIRIT',
        description: `When the Race tokens associated with your Spirit Special Power go into Decline, they never count toward the limit stated in Entering In Decline (p. 6) regarding having a single In Decline race on the map at any given time. You may thus end up with two different races In Decline on the map at the same time and score for them both. If a third race you control goes into Decline, your Spirits remain on the board, although the other race already In Decline disappears, as normal. In other words, your In Decline Spirits never leave the map (except when taking losses from opponents' conquests), though other races sent In Decline may go away when a new race goes into decline.`,
      },
      stout: {
        name: 'STOUT',
        description: `You may go In Decline at the end of a regular turn of conquests, after scoring, instead of spending an entire turn going into Decline.`,
      },
      swamp: {
        name: 'SWAMP',
        description: `Collect 1 bonus Victory coin for each Swamp Region you occupy at turn's end.`,
      },
      underworld: {
        name: 'UNDERWORLD',
        description: `You may conquer any Region with a Cavern with 1 less Race token than normal. A minimum of 1 token is still required. All Regions with a Cavern are also considered adjacent to each other for your conquest purposes.`,
      },
      wealth: {
        name: 'WEALTH',
        description: `Collect 7 bonus Victory coins, once only, at the end of your first turn.`,
      },
      // Be Not Afraid
      barricade: {
        name: 'BARRICADE',
        description: `Collect 3 bonus coins each time your Barricade troops occupy 4 regions or less at the end of your turn.`,
      },
      catapult: {
        name: 'CATAPULT',
        description: `Once per turn, you may place the Catapult in a region you occupy to conquer any region that is 1 region away (but not adjacent) at 1 less token than usual. The Catapult may be used to attack a region beyond the Lake, but not over Seas. The region with the Catapult is immune to enemy conquests as well as their racial and special powers. The Catapult disappears when you go into Decline.`,
      },
      corrupt: {
        name: 'CORRUPT',
        description: `Collect 1 bonus coin from any opponent each time they successfully conquer one of your active regions.`,
      },
      imperial: {
        name: 'IMPERIAL',
        description: `For each region in excess of 3, which your Imperial troops occupy at the end of your turn, collect 1 bonus coin. (i.e., if they occupy 5 regions at turn’s end, you receive 2 bonus coins.)`,
      },
      mercenary: {
        name: 'MERCENARY',
        description: `Each time you conquer a region, you may spend 1 Victory coin to reduce the number of tokens you need to conquer it by 2. A minimum of 1 token is still required. If you use Mercenary during your fi nal conquest attempt you may decide to do so after you roll your reinforcement die.`,
      },
      // A Spider's Web
      copycat: {
        name: 'COPYCAT',
        description: `At the beginning of each of your turns, you may place the Copycat marker on one of the six Powers from the combo list next to the board. Your active Race benefi ts from this Power’s effect until the beginning of your next turn, or until an opponent chooses it as his combo. When a Power’s effect stops, you lose all these Special Power tokens. Note that some Special Powers only apply on a given turn (for instance “Wealthy” only works on your fi rst turn, “Stout” only works if you go into Decline, etc.).`,
      },
      lava: {
        name: 'LAVA',
        description: `At the end of your turn, for each Mountain Region you occupy, you may place 1 Lava Token in any Region adjacent to that Mountain Region (excluding Regions protected by Special and Racial Powers). All tokens in this Region are taken in hand by the defeated player and treated as if the Region were conquered (except there is no loss of tokens). The Region may not be entered by any other player until after the beginning of your next turn. At the beginning of your next turn, remove all Lava Tokens from the board and proceed as usual.`,
      },
      soul_Touch: {
        name: 'SOUL-TOUCH',
        description: `When your Soul-Touch Race goes In Decline, it automatically revives your In-Decline Race. Instead of picking a new Race on your next turn you activate your previous In Decline Race. You may keep the tokens that In Decline Race already had on the board, fl ipping them back to their Active side; or take them back in your hand if you like. You get the rest (if any) of the Race tokens (and Markers, if any) you would receive if this was a new combo pick, and immediately play a full turn with them.`,
      },
      // Grand Dames
      historian: {
        name: 'HISTORIAN',
        description: `Collect 1 bonus Victory coin for each Race In Decline at the time you select the Historians. While you’re active, collect 1 bonus Victory coin each time another Race goes In Decline, and 1 fi nal bonus coin when your own Historians go In Decline!`,
      },
      peace_loving: {
        name: 'PEACE LOVING',
        description: `Collect 3 bonus Victory coins at the end of each turn during which you have attacked no active Race. You have no love for In Decline Ghouls though, and may attack them without forfeiting your Peace-loving bonus`,
      },
      // Royal Bonus
      aquatic: {
        name: 'AQUATIC',
        description: `Collect 1 bonus Victory Coin for each Coastal Region you occupy. Each non-Coastal Region brings 1 less Victory Coin than usual.`,
      },
      behemoth: {
        name: 'BEHEMOTH',
        description: `Your two Behemoths are each represented by a stack of tokens that matches the number of Swamp regions you currently occupy. These 2 stacks can never be split or mixed. Each Behemoths’ stack counts as an equivalent number of Race tokens for attack AND defense. The number of tokens in each stack is adjusted each time you capture or lose a Swamp region. A Behemoth must always be accompanied by at least one Race token. If the region it occupies is conquered, only the accompanying Race token is lost; redeploy your Behemoth (keep it as a single stack) at the end of your attacker’s turn, as normal.`,
      },
      fireball: {
        name: 'FIREBALL',
        description: `During Troop Redeployment, collect 1 Fireball marker for each Magic Source you occupy. Fireballs count as 2 Race tokens but may only be used during an attack on one of your following turns. They are discarded once used. Several Fireballs may be used to conquer a single Region. You still need a minimum of 1 Race token to occupy the Region.`,
      },
      // Cursed
      cursed: {
        name: 'CURSED',
        description: `You must pay 3 Victory coins, not 1, to skip the Race that is Cursed when selecting a Race and Special Power combo. It brings no additional Special Power.`,
      },
      hordes_of: {
        name: 'HORDES OF',
        description: `You may use your 2 Hordes of tokens exactly as if they were additional active Race tokens of your own Race. They disappear when you go In Decline, however.`,
      },
      ransacking: {
        name: 'RANSACKING',
        description: `Each time you successfully conquer a Region containing an opponent’s active Race token, he must immediately pay you 1 Victory coin from his own personal stash (unless he has no coins left). You cannot ransack In Decline Ghouls.`,
      },
      were: {
        name: 'WERE',
        description: `Each night (even numbered game turn), you may conquer all Regions with 2 less Race tokens than normal. A minimum of 1 token is still required. Your Special Power has no effect during the day (odd numbered game turn).`,
      },
      marauding: {
        name: 'MARAUDING',
        description: `Once your conquests are over (but before any fi nal conquest attempt using the Reinforcement Die), take your troops back in hand, leaving at least one token per region, and go through another complete cycle of conquests; then do your fi nal conquest attempt, if any.`,
      },
      // sky island
      goldsmith: {
        name: 'GOLDSMITH',
        description: `As long as it is active, the Goldsmith Race earns two extra Victory coins per Mine Region they occupy. However, any other Region is worth one less Victory coin. A region can never be worth less than zero Victory coin.`,
      },
      zepplined: {
        name: 'ZEPPLINED',
        description: `Your Zeppelin tokens can be used for up to fi ve special conquests per turn. To perform a Zeppelined conquest, you choose a Region anywhere on the board (either on the Ground or in Sky Islands) and roll the Reinforcement Die. Pips on the Die are worth one Race token each. If you don’t have enough Race tokens in hand to overcome the Defense value of the Region (you always need to place at least one Race token in the Region), your turn is over and you must redeploy any remaining tokens. If the roll is an empty side, the zeppelin crashes: the Defender discards one Race token for that attack and takes any others back in hand, exactly like a typical conquest. The Zeppelined player must also discard a Race token and doesn’t occupy the Region. Place a Burning Region token in the Region instead. It is immune to conquests and racial or special powers until the beginning of your next turn, when all the Burning Region tokens are removed from the board. Note: To perform a Zeppelined conquest, you must have at least one Race token in hand`,
      },
      airborne: {
        name: 'AIRBORNE',
        description: `During the turn when the Airborne power is selected, conquests follow normal requirements but they cost two less Race tokens than normal. A minimum of one Race token is still required.`,
      },
      haggling: {
        name: 'HAGGLING',
        description: `You receive 5 Trade Pact tokens. During your turn, you can freely distribute them among the other players. You cannot give more Trade Pacts than the amount of Victory coins you own though. If a player with Trade Pacts conquers at least one of your Haggling Race’s Regions, he must give you one Victory coin per Trade Pact he has (if he doesn’t have enough coins, he gives you everything he has). On the other hand, if a player with Trade Pacts doesn’t conquer any Region from your Haggling Race, you must give him one Victory coin per Trade Pact he has. Players who receive Trade Pact tokens must give them back at the end of their turn.`,
      },
      gunner: {
        name: 'GUNNER',
        description: `At the end of your fi rst turn, you put both Cannon tokens in two of your Gunner Regions with the inactive side up. During the following turns, each Cannon can either shoot (fl ip it to it’s “Fire!” side) or move to another of your Gunner Regions (inactive side up). Regions with a Cannon inside are immune to conquests and racial or special powers. A cannon with its “Fire!” side up allows the conquest of adjacent Regions at a cost of two less Race tokens than normal. The effect of both Cannon tokens are cumulative, but a minimum of one Race token is still required.`,
      },
      exploring: {
        name: 'EXPLORING',
        description: `At the end of each of your turns, you receive a Victory coin bonus equal to the number of Regions you occupy on the Ground or in the Sky Islands, whichever is less. Note: Exploring Special Power cannot be used in games without the Sky Island board`,
      },
      racketeering: {
        name: 'RACKETEERING',
        description: `Each time another player chooses a new race, you earn (from the bank) as many Victory coins as the number of combinations the player skips down to reach their choice. When your Racketeering Race fi nally goes In Decline, your next race is free no matter where it is in the column.`,
      },
    },
  },
  timer: {
    title: 'Timer',
    category: {
      normal: 'Normal',
      repeat: 'Repeat',
      duel: 'Duel',
    },
    start: 'Start',
    pause: 'Pause',
    continue: 'Continue',
    stop: 'Stop',
  },
}