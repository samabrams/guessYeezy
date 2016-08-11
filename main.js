/**
 * Created by sam on 8/8/16.
 */
var app = angular.module('myApp', []);
app.controller('gameController', function () {
    this.timeShown = false;
    this.awaitingGuess = false;
    this.score = 100;
    this.best = 0;
    this.average = 0;
    this.sum = 0;
    this.numSongsGuessed = 0;
    this.previousSongs = [];
    this.cdSongsGuessed = 0;
    this.cdLength = 21;
    this.lrSongsGuessed = 0;
    this.lrLength = 21;
    this.gradSongsGuessed = 0;
    this.gradLength = 13;
    this.heartbreakSongsGuessed = 0;
    this.heartbreakLength = 11;
    this.mbdtfSongsGuessed = 0;
    this.mbdtfLength = 13;
    this.yeezusSongsGuessed = 0;
    this.yeezusLength = 10;
    this.pabloSongsGuessed = 0;
    this.pabloLength = 20;
    this.guessedCorrectly = false;
    this.skippedSongs = [];
    this.catalog = [
        {
            title: /^intro$/,
            album: 'College Dropout',
            trackNum: 1,
            albumYear: 2004,
            producers: ['Kanye'],
            features: [],
            samples: [],
            difficultLine: [],
            mediumLine: [],
            easyLine: ['Kanye, can I talk to you for a minute?'],
            songLength: '0:19'
        },
        {
            title: /^we don[\']?t care$/,
            album: 'College Dropout',
            albumYear: 2004,
            trackNum: 2,
            producers: ['Kanye'],
            features: [],
            samples: ['\'I Just Wanna Stop\' by The Jimmy Castor Bunch'],
            difficultLine: ['And they DCFS, some of \'em dyslexic'],
            mediumLine: ['This dope money here is Lil\' Trey\'s scholarship'],
            easyLine: ['We wasn\'t s\'posed to make it past 25'],
            songLength: '3:59'
        }, {
            title: /^graduation day$/,
            album: 'College Dropout',
            albumYear: 2004,
            trackNum: 3,
            producers: ['Kanye'],
            features: [],
            samples: ['\'Pomp and Circumstance\' by Edward Elgar'],
            difficultLine: ['Cause you gettin\' the fuck out of this campus'],
            mediumLine: ['She ain\'t walked in my shoes I\'m just not everybody'],
            easyLine: ['What in the fuck was that, Kanye?!'],
            songLength: '1:22'
        }, {
            title: /^all falls down$/,
            album: 'College Dropout',
            albumYear: 2004,
            trackNum: 4,
            producers: ['Kanye'],
            features: ['Syleena Johnson'],
            samples: ['\'Mystery of Iniquity\' by Lauryn Hill', '\'Real Niggaz\' by The Notorius B.I.G.', '\'Wow\' by Kanye West ft. GLC'],
            difficultLine: ['Cause I want to be on 106 & Park pushin\' a Benz'],
            mediumLine: ['The prettiest people do the ugliest things'],
            easyLine: ['Now, tell me that ain\'t insecurr'],
            songLength: '3:43'
        },
        {
            title: /^i[\']?ll fly away$/,
            album: 'College Dropout',
            albumYear: 2004,
            trackNum: 5,
            producers: ['Kanye'],
            features: [],
            samples: [],
            difficultLine: [],
            mediumLine: [],
            easyLine: ['When I die Hallelujah bye and bye'],
            songLength: '1:09'
        },
        {
            title: /^spaceship$/,
            album: 'College Dropout',
            albumYear: 2004,
            trackNum: 6,
            producers: ['Kanye'],
            features: ['GLC', 'Consequence'],
            samples: ['\'Distant Lover\' by Marvin Gaye'],
            difficultLine: ['Yes I\'m the same ol\' G, same goatee'],
            mediumLine: ['Lock yourself in a room doing 5 beats a day for 3 summers'],
            easyLine: ['I\'ve been workin this graveshift and I ain\'t made shit'],
            songLength: '5:24'
        },
        {
            title: /^jesus walks$/,
            album: 'College Dropout',
            albumYear: 2004,
            trackNum: 7,
            producers: ['Kanye'],
            features: [],
            samples: ['\'(Don\'t Worry) If There\'s a Hell Below, We\'re All Going to Go\' by Curtis Mayfield', '\'Walk With Me\' by The ARC Choir', '\'Ode to Billie Joe\' by Lou Donaldson', '\'Keep It Rollin\'\' by A Tribe Called Quest ft. Large Professor'],
            difficultLine: [],
            mediumLine: ['Top floor the view alone will leave you breathless'],
            easyLine: ['God show me the way because the Devil\'s trying to break me down'],
            songLength: '3:13'
        },
        {
            title: /^never let me down$/,
            album: 'College Dropout',
            albumYear: 2004,
            trackNum: 8,
            producers: ['Kanye'],
            features: ['J. Ivy', 'Jay Z'],
            samples: ['\'Maybe It\'s the Power of Love\' by Blackjack', '\'Hovi Baby (Remix)\' by Jay Z'],
            difficultLine: ['I\'m back to claim pole position, holla at ya boy'],
            mediumLine: ['And with that in my blood I was born to be different'],
            easyLine: ['Get up, I get down'],
            songLength: '5:24'
        },
        {
            title: /^get [\']?em high$/,
            album: 'College Dropout',
            albumYear: 2004,
            trackNum: 9,
            producers: ['Kanye'],
            features: ['Talib Kweli', 'Common'],
            samples: ['\'Warning\' by the Notorious B.I.G.'],
            difficultLine: ['Now I apologize if I come off a little inconsiderate'],
            mediumLine: ['But this bastard\'s flow will bash your skull'],
            easyLine: ['Real rappers is hard to find, like a remote'],
            songLength: '4:49'
        },
        {
            title: /^workout plan$/,
            album: 'College Dropout',
            albumYear: 2004,
            trackNum: 10,
            producers: ['Kanye'],
            features: [],
            samples: [],
            difficultLine: ['Got you a six pack Shakur and stuff'],
            mediumLine: ['Girl, you need to let me know where I can cop that, how much is it?'],
            easyLine: ['FREE.99?!'],
            songLength: '0:46'
        },
        {
            title: /^(the )?new workout plan$/,
            album: 'College Dropout',
            albumYear: 2004,
            trackNum: 11,
            producers: ['Kanye'],
            features: [],
            samples: ['\'I Need To Know\' by Kanye West'],
            difficultLine: ['We juking to a cold beat'],
            mediumLine: ['Pick up your son and don\'t disrespect your seed'],
            easyLine: ['I just want to say, thank you Kanye! Woooo! Woooo! Woooo!'],
            songLength: '5:22'
        },
        {
            title: /^slow jamz$/,
            album: 'College Dropout',
            albumYear: 2004,
            trackNum: 12,
            producers: ['Kanye'],
            features: ['Jamie Foxx', 'Twista'],
            samples: ['\'A House Is Not A Home\' by Luther Vandross'],
            difficultLine: ['In the Chi and I be sippin Hennessey - play some R&B'],
            mediumLine: ['Tellin me them diamonds, when she know they rhinestones'],
            easyLine: ['Some Minnie Ripperton will definitely set this party off right'],
            songLength: '5:16'
        },
        {
            title: /^breathe in[,]? breathe out$/,
            album: 'College Dropout',
            albumYear: 2004,
            trackNum: 13,
            producers: ['Brian \"All Day\" Miller', 'Kanye'],
            features: ['Ludacris'],
            samples: [],
            difficultLine: ['Pullin\' up in the Lexuses, one on both hand, So I guess them GSes was ambidextrous'],
            mediumLine: ['I always had a Ph.D.: a Pretty Huge Dick'],
            easyLine: ['If ya iced up, pull ya sleeves out'],
            songLength: '4:06'
        },
        {
            title: /^school spirit skit 1$/,
            album: 'College Dropout',
            albumYear: 2004,
            trackNum: 14,
            producers: ['Kanye'],
            features: [],
            samples: [],
            difficultLine: ['Now you\'ll get that 25-thousand dollar job a year'],
            mediumLine: ['No more borrowing from mom for my high!'],
            easyLine: ['But I bet I can add up all the change in your purse very fast'],
            songLength: '1:18'
        },
        {
            title: /^school spirit$/,
            album: 'College Dropout',
            albumYear: 2004,
            trackNum: 15,
            producers: ['Kanye'],
            features: [],
            samples: ['\'Like This and Like That\' by Monica ft. Mr. Malik', '\'Spirit in the Dark\' by Aretha Franklin'],
            difficultLine: ['Bring more of them girls I\'ve seen in The Aurora'],
            mediumLine: ['I went to Cheesecake, he was a motherfucking waiter there'],
            easyLine: ['Alpha, step, Omega, step'],
            songLength: '5:24'
        },
        {
            title: /^school spirit skit 2$/,
            album: 'College Dropout',
            albumYear: 2004,
            trackNum: 16,
            producers: ['Kanye'],
            features: [],
            samples: [],
            difficultLine: ['You pick up all those books that you\'re gonna read and not remember'],
            mediumLine: ['Then you get your masters\' masters'],
            easyLine: ['You know what\'s gonna keep me warm? That\'s right, those degrees'],
            songLength: '0:43'
        },
        {
            title: /^lil jimmy skit$/,
            album: 'College Dropout',
            albumYear: 2004,
            trackNum: 17,
            producers: ['Kanye'],
            features: [],
            samples: ['\'Ride\' by The Kleptones'],
            difficultLine: '',
            mediumLine: ['And I was actually in school all while my dad was in school!'],
            easyLine: ['But I\'ll be the smartest dead guy! Who has that?'],
            songLength: '0:53'
        },
        {
            title: /^two words$/,
            album: 'College Dropout',
            albumYear: 2004,
            trackNum: 18,
            producers: ['Kanye'],
            features: ['The Harlem Boys Choir', 'Freeway', 'Mos Def'],
            samples: ['\'Peace and Love\' by Mandrill', '\'The Rainmaker\' by The 5th Dimension', '\'Got Nowhere\' by State Property', '\'Do It Again (Put Ya Hands Up)\' by Jay Z ft. Beanie Sigel and Amil'],
            difficultLine: ['These streets know game, can\'t ball, don\'t play'],
            mediumLine: ['Most imitated, Grammy nominated, hotel accommodated, cheerleader prom-dated'],
            easyLine: ['Still nowhere to go, still nowhere to go'],
            songLength: '4:26'
        },
        {
            title: /^through the wire$/,
            album: 'College Dropout',
            albumYear: 2004,
            trackNum: 19,
            producers: ['Kanye'],
            features: [],
            samples: ['\'Player\'s Ball\' by OutKast', '\'Through the Fire\' by Chaka Khan'],
            difficultLine: ['I got a lawyer for the case to keep what\'s in my safe safe'],
            mediumLine: ['Unbreakable, what, you thought they\'d call me Mr. Glass?'],
            easyLine: ['Somebody ordered pancakes, I just sip the sizzurp'],
            songLength: '3:41'
        },
        {
            title: /^family business$/,
            album: 'College Dropout',
            albumYear: 2004,
            trackNum: 20,
            producers: ['Kanye'],
            features: [],
            samples: ['\'Fonky Thang\' by The Dells', '\'Ambitionz Az a Ridah\' by 2Pac', 'Rain Rain Go Away'],
            difficultLine: ['When I brought it why the guard have to look all through it?'],
            mediumLine: ['But you ain\'t have to tell my girl I used to pee in the bed'],
            easyLine: ['And this is for the family that can\'t be with us'],
            songLength: '4:38'
        },
        {
            title: /^last call$/,
            album: 'College Dropout',
            albumYear: 2004,
            trackNum: 21,
            producers: ['Evidence', 'Kanye'],
            features: [],
            samples: ['\'Mr. Rockefeller\' by Bette Midler', '\'She\'s Gone to Another\' by The Whatnauts', '\'Doggone\' by Love', '\'Better Than Yours\' by Kanye West ft. Common', '\'Wow\' by Kanye West ft. GLC'],
            difficultLine: ['Last year shoppin my demo, I was tryin\' to shine'],
            mediumLine: ['They expected that College Dropout to drop and then flop'],
            easyLine: ['Yo fuck you, Kanye, first and foremost for making me do this shit, motherfucker'],
            songLength: '12:40'
        },
        {
            title: /^wake up mr[\.]? west$/,
            album: 'Late Registration',
            albumYear: 2005,
            trackNum: 1,
            producers: [],
            features: [],
            samples: ['\'Someone That I Used To Love\' by Natalie Cole'],
            difficultLine: ['He wanna play it again like he got somethin\' else to do'],
            mediumLine: ['Look at my face, do I got a promise face?'],
            easyLine: ['I knew I was gon\' see you again! Knew I was gon\' see you again!'],
            songLength: '0:41'
        },
        {
            title: /^heard [\']?em say$/,
            album: 'Late Registration',
            albumYear: 2005,
            trackNum: 2,
            producers: ['Jon Brion','Kanye'],
            features: ['Adam Levine'],
            samples: ['\'Candy Maker\' by Tommy James and the Shondells','\'Someone That I Used To Love\' by Natalie Cole'],
            difficultLine: ['My Aunt Pam can\'t put them cigarettes down'],
            mediumLine: ['Allāhu Akbar and throw him some hot cars'],
            easyLine: ['Nothing\'s ever promised tomorrow today'],
            songLength: '3:23'
        },
        {
            title: /^touch the sky$/,
            album: 'Late Registration',
            albumYear: 2005,
            trackNum: 3,
            producers: ['Just Blaze'],
            features: ['Lupe Fiasco'],
            samples: ['\'Move on Up\' by Curtis Mayfield', '\'Leaving on a Jet Plane\' by Peter, Paul & Mary'],
            difficultLine: ['I\'m back on the block like I\'m laying on the street'],
            mediumLine: ['Back when Slick Rick got the shit to pop'],
            easyLine: ['Come up in the spot lookin\' extra fly'],
            songLength: '3:57'
        },
        {
            title: /^gold digger$/,
            album: 'Late Registration',
            albumYear: 2005,
            trackNum: 4,
            producers: ['Jon Brion','Kanye'],
            features: ['Jamie Foxx'],
            samples: ['\'Bumpin\' Bus Stop\' by Thunder and Lightning', '\'Another Story to Tell\' by Mase', '\'I Got a Woman\' by Ray Charles'],
            difficultLine: [''],
            mediumLine: ['There\'s dishes in the back, he gotta roll up your sleeves'],
            easyLine: ['Holla, \"We want prenup! We want prenup!\" (Yeah!)'],
            songLength: '3:28'
        },
        {
            title: /^skit [#]?1$/,
            album: 'Late Registration',
            albumYear: 2005,
            trackNum: 5,
            producers: [],
            features: [],
            samples: [],
            difficultLine: [],
            mediumLine: [],
            easyLine: ['We can\'t afford no gas!'],
            songLength: '0:33'
        },
        {
            title: /^drive slow$/,
            album: 'Late Registration',
            albumYear: 2005,
            trackNum: 6,
            producers: ['Kanye'],
            features: ['GLC','Paul Wall'],
            samples: ['\'Wildflower\' by Hank Crawford', '\'Living Together is Keeping Us Apart\' by Clarence Reid'],
            difficultLine: ['Open up my mouth and sunlight illuminates the dark'],
            mediumLine: ['And that don\'t make no sense, but baby, I\'m the shit'],
            easyLine: ['You never know, homie, might meet some hoes, homie'],
            songLength: '4:32'
        },
        {
            title: /^my way home$/,
            album: 'Late Registration',
            albumYear: 2005,
            trackNum: 7,
            producers: ['Kanye'],
            features: ['Common'],
            samples: ['\'Home is Where the Hatred Is\' by Gil Scott-Heron'],
            difficultLine: ['The young smoke grass in grassless jungles'],
            mediumLine: ['I stroll where souls get lost like Vegas'],
            easyLine: ['I left three days ago, but no one seems to know I\'m gone'],
            songLength: '1:43'
        },
        {
            title: /^crack music$/,
            album: 'Late Registration',
            albumYear: 2005,
            trackNum: 8,
            producers: ['Jon Brion','Kanye'],
            features: ['Game'],
            samples: ['\'It\'s Your Thing\' by Cold Grits', '\'Since You Came in My Life\' by The New York Community Choir'],
            difficultLine: ['This that inspiration for the Moes and the Folks man'],
            mediumLine: ['Ronald Reagan cooked up an answer'],
            easyLine: ['That real black music nigga'],
            songLength: '4:31'
        },
        {
            title: /^Roses$/,
            album: 'Late Registration',
            albumYear: 2005,
            trackNum: 9,
            producers: ['Jon Brion','Kanye'],
            features: [],
            samples: ['\'Rosie\' by Bill Withers'],
            difficultLine: ['Feel like Amerie, it\'s just \"One Thing\"'],
            mediumLine: ['Bitch, is you smokin reefer?'],
            easyLine: ['I know it\'s past visiting hours but can I please give her these flowers?'],
            songLength: '4:05'
        },
        {
            title: /^bring me down$/,
            album: 'Late Registration',
            albumYear: 2005,
            trackNum: 10,
            producers: ['Jon Brion','Kanye'],
            features: ['Brandy'],
            samples: ['\'My Life Is Loving You\' by Rose Banks', '\'Wack Niggas\' by Talib Kweli ft. Common, Kanye West, and Consequence'],
            difficultLine: ['See, I\'m often catching crosswinds forgetting where the hell I met you'],
            mediumLine: ['Spanish girls say \"Yo no hablo inglés\"'],
            easyLine: ['Hater niggas marry hater bitches and have hater kids'],
            songLength: '3:18'
        },
        {
            title: /^addiction$/,
            album: 'Late Registration',
            albumYear: 2005,
            trackNum: 11,
            producers: ['Jon Brion','Kanye'],
            features: [],
            samples: ['\'My Funny Valentine\' by Etta James'],
            difficultLine: ['So I pour the potion, so we could both get high, as we could go'],
            mediumLine: ['She\'s coming over, so I guess, that means, I\'m her drugs'],
            easyLine: ['Why everything that\'s supposed to be bad make me feel so good?'],
            songLength: '4:27'
        },
        {
            title: /^skit [#]?2$/,
            album: 'Late Registration',
            albumYear: 2005,
            trackNum: 12,
            producers: [],
            features: [],
            samples: [],
            difficultLine: [],
            mediumLine: [],
            easyLine: ['Got no money (got no money)'],
            songLength: '0:31'
        },
        {
            title: /^diamonds from sierra leone [\(]?remix[\)]?$/,
            album: 'Late Registration',
            albumYear: 2005,
            trackNum: 13,
            producers: ['Jon Brion','Devo Springsteen','Kanye'],
            features: ['Jay Z'],
            samples: ['\'I Smoke, I Drank\' by Body Head Bangerz ft. Lil Boosie and Young Bleed', '\'Ms. Jackson\' by OutKast', '\'Diamond Are Forever\' by Shirley Bassey'],
            difficultLine: ['People lose hands, legs, arms, for real'],
            mediumLine: ['Bought a Polo rugby, it looks so nice'],
            easyLine: ['Yup, I got it from here, \'Ye, damn'],
            songLength: '3:53'
        },
        {
            title: /^we major$/,
            album: 'Late Registration',
            albumYear: 2005,
            trackNum: 14,
            producers: ['Warryn Campbell','Jon Brion','Kanye'],
            features: ['Really Doe', 'Nas'],
            samples: ['\'Action\' by Orange Krush', '\'Reasons\' by Earth, Wind & Fire'],
            difficultLine: ['Fo-fo\'s or Black Christ? Both flows\'d be nice'],
            mediumLine: ['Until you have a daughter that\'s what I call karma'],
            easyLine: ['High off the ground from stair to skyscraper'],
            songLength: '7:28'
        },
        {
            title: /^skit [#]?3$/,
            album: 'Late Registration',
            albumYear: 2005,
            trackNum: 15,
            producers: [],
            features: [],
            samples: [],
            difficultLine: ['Eating all of our cereal with forks because we wanted to save the milk, do you remember that?'],
            mediumLine: ['Who did not have when we could not eat'],
            easyLine: ['This was founded years ago'],
            songLength: '0:24'
        },
        {
            title: /^hey mama$/,
            album: 'Late Registration',
            albumYear: 2005,
            trackNum: 16,
            producers: ['Jon Brion','Kanye'],
            features: [],
            samples: ['\'This Little Light of Mine\'', '\'Today Won\'t Come Again\' by Donal Leace'],
            difficultLine: ['Tell me the perfect color so I make it just right'],
            mediumLine: ['This little light of mine and I\'m finna let it shine'],
            easyLine: ['I know I act a fool but, I promise you I\'m goin back to school'],
            songLength: '5:05'
        },
        {
            title: /^celebration$/,
            album: 'Late Registration',
            albumYear: 2005,
            trackNum: 17,
            producers: ['Jon Brion','Kanye'],
            features: [],
            samples: ['\'Heavenly Dream\' by the Kay-Gees'],
            difficultLine: ['All that talking is gon\' give me a Tylenol'],
            mediumLine: ['Got some Cris and some Mo'],
            easyLine: ['After that I grab yo ass'],
            songLength: '3:18'
        },
        {
            title: /^skit [#]?4$/,
            album: 'Late Registration',
            albumYear: 2005,
            trackNum: 18,
            producers: [],
            features: [],
            samples: [],
            difficultLine: ['Don\'t you ever come back smellin\' all good, taking showers and shit like that, alright?'],
            mediumLine: ['There is an imposter among us'],
            easyLine: ['This brother right here has been out making beats on the side, yes he has'],
            songLength: '1:18'
        },
        {
            title: /^gone$/,
            album: 'Late Registration',
            albumYear: 2005,
            trackNum: 19,
            producers: ['Kanye'],
            features: ['Consequence','Cam\'ron'],
            samples: ['\'Upon This Rock\' by Joe Farrell', '\'1-9-9-9\' by Common ft. Sadat X', '\'The Show\' by Doug E. Fresh, Slick Rick and The Get Fresh Crew', '\'My Dear, Sweet Brother Numpsay\' by The Golden Child', '\'It\'s Too Late\' by Otis Redding'],
            difficultLine: ['Caught something on the Usher tour, he had to let it burn'],
            mediumLine: ['If we up in Fridays, I still have it my way'],
            easyLine: ['We striving home, I ride on chrome'],
            songLength: '6:02'
        },
        {
            title: /^diamonds from sierra leone$/,
            album: 'Late Registration',
            albumYear: 2005,
            trackNum: 20,
            producers: ['Jon Brion','Devo Springsteen','Kanye'],
            features: [],
            samples: ['\'I Smoke, I Drank\' by Body Head Bangerz ft. Lil Boosie and Young Bleed', '\'Ms. Jackson\' by OutKast', '\'Diamond Are Forever\' by Shirley Bassey'],
            difficultLine: ['Got family in the D, Kin-folk from Motown'],
            mediumLine: ['A&R\'s lookin\' like, \"Pssh, we messed up\"'],
            easyLine: ['Throw your diamonds in the sky if you feel the vibe'],
            songLength: '3:58'
        },
        {
            title: /^late$/,
            album: 'Late Registration',
            albumYear: 2005,
            trackNum: 21,
            producers: ['Kanye'],
            features: [],
            samples: ['\'I\'ll Erase Your Pain\' by The Whatnauts', '\'What\'s Beef?\' by The Notorious B.I.G.'],
            difficultLine: ['Will I make it from the student loans to a Benzo?'],
            mediumLine: ['Like them eskimos, what would you do for a Klondike?'],
            easyLine: ['So turn this motherfucker up only if it feels right'],
            songLength: '3:50'
        },
        {
            title: /^good morning$/,
            album: 'Graduation',
            albumYear: 2007,
            trackNum: 1,
            producers: ['Kanye'],
            features: [],
            samples: ['\'Wake Up Mr. West\' by Kanye West','\'Someone Saved My Life Tonight\' by Elton John', '\'The Ruler\'s Back\' by Jay Z'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '3:15'
        },
        {
            title: /^champion$/,
            album: 'Graduation',
            albumYear: 2007,
            trackNum: 2,
            producers: ['Brian \'All Day\' Miller','Kanye'],
            features: [],
            samples: ['\'Kid Charlemagne\' by Steely Dan'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '2:47'
        },
        {
            title: /^stronger$/,
            album: 'Graduation',
            albumYear: 2007,
            trackNum: 3,
            producers: ['Mike Dean','Kanye'],
            features: [],
            samples: ['\'Harder Better Faster Stronger\' by Daft Punk'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '5:11'
        },
        {
            title: /^i wonder$/,
            album: 'Graduation',
            albumYear: 2007,
            trackNum: 4,
            producers: ['Kanye'],
            features: [],
            samples: ['\'Ambitionz Az a Ridah\' by 2Pac', '\'My Song\' by Labi Siffre'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '4:03'
        },
        {
            title: /^good life$/,
            album: 'Graduation',
            albumYear: 2007,
            trackNum: 5,
            producers: ['DJ Toomp', 'Mike Dean','Kanye'],
            features: ['T-Pain'],
            samples: ['\'School Spirit\' by Kanye West', '\'In Da Club\' by 50 Cent', '\'PYT\' by Michael Jackson'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '3:27'
        },
        {
            title: /^can[\']?t tell me nothing$/,
            album: 'Graduation',
            albumYear: 2007,
            trackNum: 6,
            producers: ['DJ Toomp','Kanye'],
            features: [],
            samples: ['\'I Got Money\' by Young Jeezy ft. T.I.', '\'They Reminisce Over You\' by Pete Rock and C.L. Smooth'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '4:30'
        },
        {
            title: /^barry bonds$/,
            album: 'Graduation',
            albumYear: 2007,
            trackNum: 7,
            producers: ['Nottz','Kanye'],
            features: ['Lil Wayne'],
            samples: ['\'Long Red\' by Mountain'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '3:24'
        },
        {
            title: /^drunk and hot girls$/,
            album: 'Graduation',
            albumYear: 2007,
            trackNum: 8,
            producers: ['Jon Brion','Kanye'],
            features: ['Mos Def'],
            samples: ['\'Sing Swan Song\' by Can'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '5:13'
        },
        {
            title: /^flashing lights$/,
            album: 'Graduation',
            albumYear: 2007,
            trackNum: 9,
            producers: ['Kanye'],
            features: ['Dwele'],
            samples: ['\'On Coming From a Broken Home (Parts 1 & 2)\' by Gil Scott-Heron','\'Green Lights\' by Charles Hamilton', '\'Sky High\' by Kid Cudi', '\'Still Here\' by Girl Talk', '\'I Want Those Flashing Lights\' by Colin Munroe'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '3:57'
        },
        {
            title: /^everything i am$/,
            album: 'Graduation',
            albumYear: 2007,
            trackNum: 10,
            producers: ['Eric Hudson','Kanye'],
            features: ['DJ Premier'],
            samples: ['\'If We Can\'t Be Lover\' by Prince Phillip Mitchell', '\'Bring the Noise\' by Public Enemy', '\'Jimbrowski\' by Jungle Brothers'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '3:47'
        },
        {
            title: /^the glory$/,
            album: 'Graduation',
            albumYear: 2007,
            trackNum: 11,
            producers: ['Gee Robertson','Plain Pat','Kanye'],
            features: [],
            samples: ['\'Save the Country\' by Laura Nyro', '\'Long Red\' by Mountain', '\'Award Tour\' by A Tribe Called Quest ft. Trugoy th Dove', '\'We Major\' by Kanye West ft. Nas and Really Doe'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '3:32'
        },
        {
            title: /^homecoming$/,
            album: 'Graduation',
            albumYear: 2007,
            trackNum: 12,
            producers: ['Warryn Campbell','Kanye'],
            features: ['Chris Martin'],
            samples: ['\'Streets is Talking\' by Jay Z ft. Beanie Sigel', '\'High Power Rap\' by Crash Crew', '\'Home\' by Kanye West ft. John Legend'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '3:23'
        },
        {
            title: /^big brother$/,
            album: 'Graduation',
            albumYear: 2007,
            trackNum: 13,
            producers: ['DJ Toomp'],
            features: [],
            samples: ['\'Hola Hovito\' by Jay Z', 'It\'s Gonna Be Lonely\' by Prince','\'Dirt Off Your Shoulder\' by Jay Z'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '4:47'
        },
        {
            title: /^say you will$/,
            album: '808s & Heartbreak',
            albumYear: 2008,
            trackNum: 1,
            producers: ['Kanye'],
            features: [],
            samples: [],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '6:17'
        },
        {
            title: /^welcome to heartbreak$/,
            album: '808s & Heartbreak',
            albumYear: 2008,
            trackNum: 2,
            producers: ['Jeff Bhasker','Plain Pat','Kanye'],
            features: ['Kid Cudi'],
            samples: [],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '4:22'
        },
        {
            title: /^heartless$/,
            album: '808s & Heartbreak',
            albumYear: 2008,
            trackNum: 3,
            producers: ['No I.D.','Kanye'],
            features: [],
            samples: [],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '3:30'
        },
        {
            title: /^amazing$/,
            album: '808s & Heartbreak',
            albumYear: 2008,
            trackNum: 4,
            producers: ['Jeff Bhasker','Kanye'],
            features: ['Young Jeezy'],
            samples: [],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '3:58'
        },
        {
            title: /^love lockdown$/,
            album: '808s & Heartbreak',
            albumYear: 2008,
            trackNum: 5,
            producers: ['Jeff Bhasker','Kanye'],
            features: [],
            samples: [],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '4:30'
        },
        {
            title: /^paranoid$/,
            album: '808s & Heartbreak',
            albumYear: 2008,
            trackNum: 6,
            producers: ['Jeff Bhasker', 'Plain Pat','Kanye'],
            features: ['Mr Hudson'],
            samples: [],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '4:37'
        },
        {
            title: /^robocop$/,
            album: '808s & Heartbreak',
            albumYear: 2008,
            trackNum: 7,
            producers: ['Kanye'],
            features: [],
            samples: ['\'Kissing in the Rain\' by Patrick Doyle'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '4:34'
        },
        {
            title: /^street lights$/,
            album: '808s & Heartbreak',
            albumYear: 2008,
            trackNum: 8,
            producers: ['Mr Hudson','Kanye'],
            features: [],
            samples: [],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '3:09'
        },
        {
            title: /^bad news$/,
            album: '808s & Heartbreak',
            albumYear: 2008,
            trackNum: 9,
            producers: ['Kanye'],
            features: [],
            samples: ['\'See-Line Woman\' by Nina Simone'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '3:58'
        },
        {
            title: /^see you in my nightmares$/,
            album: '808s & Heartbreak',
            albumYear: 2008,
            trackNum: 10,
            producers: ['No I.D.','Kanye'],
            features: ['Lil Wayne'],
            samples: [],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '4:18'
        },
        {
            title: /^coldest winter$/,
            album: '808s & Heartbreak',
            albumYear: 2008,
            trackNum: 11,
            producers: ['Jeff Bhasker', 'No I.D.','Kanye'],
            features: [],
            samples: ['\'Memories Fade\' by Tears for Fears'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '2:44'
        },
        {
            title: /^dark fantasy$/,
            album: 'My Beautiful Dark Twisted Fantasy',
            albumYear: 2010,
            trackNum: 1,
            producers: ['Jeff Bhasker','No I.D.','The RZA','Mike Dean','Kanye'],
            features: ['Bon Iver', 'Nicki Minaj'],
            samples: ['\'In High Places\' by Mike Oldfield ft. Jon Anderson', '\'GOOD Music Cypher\' by Kanye West and Common ft. Pusha T, Big Sean, and Cyhi Da Prince'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '4:40'
        },
        {
            title: /^gorgeous$/,
            album: 'My Beautiful Dark Twisted Fantasy',
            albumYear: 2010,
            trackNum: 2,
            producers: ['Mike Dean','No I.D.','Kanye'],
            features: ['Kid Cudi', 'Raekwon'],
            samples: ['\'You Showed Me\' by Enoch Light and the Glittering Guitars'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '5:57'
        },
        {
            title: /^power$/,
            album: 'My Beautiful Dark Twisted Fantasy',
            albumYear: 2010,
            trackNum: 3,
            producers: ['S1','Jeff Bhasker','Mike Dean','Andrew Dawson','Kanye'],
            features: ['Dwele'],
            samples: ['\'It\'s Your Thing\' by Cold Grits', '\'Afromerica\' by Continent Number 6', '\'21st Century Schizoid Man\' by King Crimson'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '4:52'
        },
        {
            title: /^all of the lights [\(]?interlude[\)]?$/,
            album: 'My Beautiful Dark Twisted Fantasy',
            albumYear: 2010,
            trackNum: 4,
            producers: ['Mike Dean','Kanye'],
            features: [],
            samples: [],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '1:02'
        },
        {
            title: /^all of the lights$/,
            album: 'My Beautiful Dark Twisted Fantasy',
            albumYear: 2010,
            trackNum: 5,
            producers: ['Jeff Bhasker','Kanye'],
            features: ['Fergie','Kid Cudi','Rihanna'],
            samples: [],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '4:59'
        },
        {
            title: /^monster$/,
            album: 'My Beautiful Dark Twisted Fantasy',
            albumYear: 2010,
            trackNum: 6,
            producers: ['Plain Pat','Mike Dean','Kanye'],
            features: ['Jay Z','Rick Ross','Bon Iver', 'Nicki Minaj'],
            samples: [],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '6:18'
        },
        {
            title: /^so appalled$/,
            album: 'My Beautiful Dark Twisted Fantasy',
            albumYear: 2010,
            trackNum: 7,
            producers: ['No I.D.','Mike Dean','Kanye'],
            features: ['Swizz Beatz', 'Jay Z','Pusha T', 'The RZA', 'Cyhi the Prince'],
            samples: ['\'You Are - I Am\' by Manfred Mann\'s Earth Band', '\'Think (About It)\' by Lyn Collins', '\'Can\'t Knock the Hustle\' by Jay Z ft. Mary J. Blige'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '6:38'
        },
        {
            title: /^devil in a new dress$/,
            album: 'My Beautiful Dark Twisted Fantasy',
            albumYear: 2010,
            trackNum: 8,
            producers: ['Bink!', 'Mike Dean'],
            features: ['Rick Ross'],
            samples: ['\'Will You Love Me Tomorrow\' by Smokey Robinson'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '5:52'
        },
        {
            title: /^runaway$/,
            album: 'My Beautiful Dark Twisted Fantasy',
            albumYear: 2010,
            trackNum: 9,
            producers: ['Emile','Jeff Bhasker','Mike Dean','Kanye'],
            features: ['Tony Williams','Pusha T'],
            samples: ['\'Expo \'83\' by The Backyard Heavies', '\'Mary Jane\' by Rick James', '\'Introduction to Star Time\' by James Brown'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '9:08'
        },
        {
            title: /^hell of a life$/,
            album: 'My Beautiful Dark Twisted Fantasy',
            albumYear: 2010,
            trackNum: 10,
            producers: ['Mike Caren','No I.D.','Mike Dean','Kanye'],
            features: [],
            samples: ['\'Stud-Spider\' by Tony Joe White', '\'She\'s My Baby\' by The Mojo Men', '\'Iron Man\' by Black Sabbath'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '5:27'
        },
        {
            title: /^blame game$/,
            album: 'My Beautiful Dark Twisted Fantasy',
            albumYear: 2010,
            trackNum: 11,
            producers: ['DJ Frank E','Mike Dean','Kanye'],
            features: ['John Legend'],
            samples: ['\'Avril 14th\' by Aphex Twin'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '7:49'
        },
        {
            title: /^lost in the world$/,
            album: 'My Beautiful Dark Twisted Fantasy',
            albumYear: 2010,
            trackNum: 12,
            producers: ['Jeff Bhasker','Kanye'],
            features: ['Bon Iver'],
            samples: ['\'Hook and Sling\' by Eddie Bo', '\'Think (About It)\' by Lyn Collins', '\'Soul Makossa\' by Manu Dibango','\'Comment #1\' by Gil Scott-Heron','\'Woods\' by Bon Iver'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '4:16'
        },
        {
            title: /^who will survive in america$/,
            album: 'My Beautiful Dark Twisted Fantasy',
            albumYear: 2010,
            trackNum: 13,
            producers: ['Jeff Bhasker','Kanye'],
            features: [],
            samples: ['\'Comment #1\' by Gil Scott-Heron'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '1:38'
        },
        {
            title: /^on sight$/,
            album: 'Yeezus',
            albumYear: 2013,
            trackNum: 1,
            producers: ['Benji B','Daft Punk','Mike Dean','Kanye'],
            features: [],
            samples: ['\'Sermon (He\'ll Give Us What We Really Need)\' by HOly Name of Mary Choral Family'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '2:36'
        },
        {
            title: /^black skinhead$/,
            album: 'Yeezus',
            albumYear: 2013,
            trackNum: 2,
            producers: ['Jack Donoghue','Noah Goldstein','Brodinski','Lupe Fiasco', 'Gesaffelstein','Daft Punk','No I.D.','Mike Dean','Kanye'],
            features: [],
            samples: [],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '3:08'
        },
        {
            title: /^i am a god$/,
            album: 'Yeezus',
            albumYear: 2013,
            trackNum: 3,
            producers: ['Hudson Mohawke', 'Daft Punk','Mike Dean','Kanye'],
            features: ['Justin Vernon'],
            samples: ['\'Forward Inna Dem Clothes\' by Capleton', '\'Are Zindagi Hai Khel\' by R.D. Burman'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '3:51'
        },
        {
            title: /^new slaves$/,
            album: 'Yeezus',
            albumYear: 2013,
            trackNum: 4,
            producers: ['Teachers','Shama Joseph','Travis Scott','Che Pope','Noah Goldstein','Mike Dean','Kanye'],
            features: ['Frank Ocean'],
            samples: ['\'Gyongyhaju Lany\' by Omega', '\'Gossip Files\' by Kanye West', '\'Cruel Cold Winter\' by Teachers', '\'HBA War\' by Dutch E Germ'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '4:16'
        },
        {
            title: /^hold my liquor$/,
            album: 'Yeezus',
            albumYear: 2013,
            trackNum: 5,
            producers: ['Arca','Noah Goldstein','Mike Dean','Kanye'],
            features: ['Justin Vernon', 'Chief Keef'],
            samples: ['\'Feminine\' by Arca'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '5:26'
        },
        {
            title: /^i[\']?m in it$/,
            album: 'Yeezus',
            albumYear: 2013,
            trackNum: 6,
            producers: ['Evian Christ','Dom Solo','Arca','Noah Goldstein','Mike Dean','Kanye'],
            features: ['Justin Vernon', 'Assassin'],
            samples: ['\'Lately\' by Kenny Lattimore'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '3:54'
        },
        {
            title: /^blood on the leaves$/,
            album: 'Yeezus',
            albumYear: 2013,
            trackNum: 7,
            producers: ['Carlos Broady','88 Keys','Lunice','Hudson Mohawke','Arca','Mike Dean','Kanye'],
            features: [],
            samples: ['\'Snowflakes Are Dancing\' by Isao Tomita', '\'Down for My Niggaz\' by C-Murder ft. Snoop Dogg and Magic', '\'R U Ready\' by TNGHT', '\'Strange Fruit\' by Nina Simone'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '6:00'
        },
        {
            title: /^guilt trip$/,
            album: 'Yeezus',
            albumYear: 2013,
            trackNum: 8,
            producers: ['Ackee Juice Rockers','S1','Travis Scott','Mike Dean','Kanye'],
            features: ['Kid Cudi'],
            samples: ['\'Chief Rocka\' by Lords of the Underground', '\'Blocka (Ackeejuice Rockers Remix)\' by Pusha T ft. Popcaan and Travis Scott'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '4:03'
        },
        {
            title: /^send it up$/,
            album: 'Yeezus',
            albumYear: 2013,
            trackNum: 9,
            producers: ['Brodinski','Gesaffelstein','Arca','Daft Punk','Mike Dean','Kanye'],
            features: ['King L'],
            samples: ['\'Stop Live in a De Pass\' by Beenie Man'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '2:58'
        },
        {
            title: /^bound 2$/,
            album: 'Yeezus',
            albumYear: 2013,
            trackNum: 10,
            producers: ['Eric Danchick','Che Pope','Noah Goldstein','No I.D.','Mike Dean','Kanye'],
            features: ['Charlie Wilson'],
            samples: ['\'Aeroplane(Reprise)\' by Wee', '\'Sweet Nothin\'s\' by Brenda Lee', '\'Bound\' by Ponderosa Twins Plus One'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '3:49'
        },
        {
            title: /^ultralight beam$/,
            album: 'The Life of Pablo',
            albumYear: 2016,
            trackNum: 1,
            producers: ['Derek Watkins','DJ Dodger Stadium','Chance the Rapper','Rick Rubin','Swizz Beatz','Plain Pat','Noah Goldstein','Mike Dean','Kanye'],
            features: ['Kelly Price','The-Dream','Kirk Franklin', 'Chance the Rapper'],
            samples: ['\'Late\' by Kanye West', '\'Otis\' by Jay Z and Kanye West', '\'This Little Light of Mine\'', '\'Natalie Praying and She\'s Only 4 Years Old!\''  ],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '5:11'
        },
        {
            title: /^father stretch my hands p(ar)?t[\.]? 1$/,
            album: 'The Life of Pablo',
            albumYear: 2016,
            trackNum: 2,
            producers: ['Metro Boommin','Allen Ritter','DJ Dodger Stadium','Rick Rubin','Noah Goldstein','Mike Dean','Kanye'],
            features: ['Kelly Price', 'Kid Cudi'],
            samples: ['\'Jumpman\' by Drake and Future','\'Father I Stretch My Hands\' by Pastor T.L. Barrett'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '2:12'
        },
        {
            title: /^(father stretch my hands)? p(ar)?t[\.]? 2$/,
            album: 'The Life of Pablo',
            albumYear: 2016,
            trackNum: 3,
            producers: ['Caroline Shaw','Menace','Rick Rubin','Plain Pat','Kanye'],
            features: ['Caroline Shaw', 'Desiigner'],
            samples: ['\'Street Fighter II Sound Effects\'', '\'Panda\' by Desiigner', '\'Father I Stretch My Hands\' by Pastor T.L. Barrett'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '2:07'
        },
        {
            title: /^famous$/,
            album: 'The Life of Pablo',
            albumYear: 2016,
            trackNum: 4,
            producers: ['Kurk Harrell','Havoc','Charlie Heat','Andrew Dawson','Hudson Mohawke','Plain Pat','Noah Goldstein','Mike Dean','Kanye'],
            features: ['Rihanna', 'Swizz Beatz'],
            samples: ['\'Wake Up Mr. West\' by Kanye West', '\'Mi Sono Svegliato E... Ho Chiuso Gli Occhi\' by Il Rovescio Della Medaglia', '\'Do What You Gotta Do\' by Nina Simone', '\'Bam Bam\' by Sister Nancy'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '3:11'
        },
        {
            title: /^feedback$/,
            album: 'The Life of Pablo',
            albumYear: 2016,
            trackNum: 5,
            producers: ['Charlie Heat','Noah Goldstein','Kanye'],
            features: [],
            samples: ['\'Talagh\' by Googosh'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '2:23'
        },
        {
            title: /^low lights$/,
            album: 'The Life of Pablo',
            albumYear: 2016,
            trackNum: 6,
            producers: ['Mike Dean','DJ Dodger Stadium','Kanye'],
            features: [],
            samples: ['\'So Alive\' by Kings of Tomorrow'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '2:08'
        },
        {
            title: /^highlights$/,
            album: 'The Life of Pablo',
            albumYear: 2016,
            trackNum: 7,
            producers: ['Plain Pat','Noah Goldstein','Southside','Velous','Mike Dean','Kanye'],
            features: ['Young Thug'],
            samples: [],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '3:14'
        },
        {
            title: /^freestyle 4$/,
            album: 'The Life of Pablo',
            albumYear: 2016,
            trackNum: 8,
            producers: ['Trevor Gureckis','Caroline Shaw','DJ Dodger Stadium','Hudson Mohawke','Noah Goldstein','Mike Dean','Kanye'],
            features: ['Desiigner'],
            samples: ['\'Human\' by Goldfrapp'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '2:00'
        },
        {
            title: /^i love kanye$/,
            album: 'The Life of Pablo',
            albumYear: 2016,
            trackNum: 9,
            producers: ['Kanye'],
            features: [],
            samples: [],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '0:44'
        },
        {
            title: /^waves$/,
            album: 'The Life of Pablo',
            albumYear: 2016,
            trackNum: 10,
            producers: ['Anthony Kilhoffer','Metro Boomin','Charlie Heat','Hudson Mohawke','Mike Dean','Kanye'],
            features: ['Chris Brown', 'Kid Cudi'],
            samples: ['\'Fantastic Freaks at the Dixie\' by DJ Grand Wizard THeodore and The Fantastic Five'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '2:56'
        },
        {
            title: /^fml$/,
            album: 'The Life of Pablo',
            albumYear: 2016,
            trackNum: 11,
            producers: ['Hudson Mohawke','Andrew Dawson','Mitus','Metro Boomin','Noah Goldstein','Mike Dean','Kanye'],
            features: ['The Weeknd'],
            samples: ['\'Hit\' by Section 25'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '3:49'
        },
        {
            title: /^real friends$/,
            album: 'The Life of Pablo',
            albumYear: 2016,
            trackNum: 12,
            producers: ['Sevn Thomas','Darren King','Havoc','Mike Dean', 'Noah Goldstein','Frank Dukes','Boi-1da','Kanye'],
            features: ['Ty Dolla Sign'],
            samples: ['\'Couches\' by Frank Dukes', '\'Friends\' by Whodini'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '4:04'
        },
        {
            title: /^wolves$/,
            album: 'The Life of Pablo',
            albumYear: 2016,
            trackNum: 13,
            producers: ['Caroline Shaw','Noah Goldstein','Sinjin Hawke','Cashmere Cat','Mike Dean','Kanye'],
            features: ['Sia', 'Vic Mensa'],
            samples: [],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '4:53'
        },
        {
            title: /^frank[\']?s track$/,
            album: 'The Life of Pablo',
            albumYear: 2016,
            trackNum: 14,
            producers: ['Sinjin Hawke','Cashmere Cat','Kanye'],
            features: ['Frank Ocean'],
            samples: ['\'Walking Dub\' by Sugar Minott'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '0:37'
        },
        {
            title: /^s[i]+lver surf[e]+r intermission$/,
            album: 'The Life of Pablo',
            albumYear: 2016,
            trackNum: 15,
            producers: ['Kanye'],
            features: ['French Montana', 'Max B'],
            samples: [],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '0:55'
        },
        {
            title: /^30 hours$/,
            album: 'The Life of Pablo',
            albumYear: 2016,
            trackNum: 16,
            producers: ['Karriem Riggins','Mike Dean','Kanye'],
            features: ['Andre 3000'],
            samples: ['\'Hot in Herre\' by Nelly', '\'E.I.\' by Nelly', '\'Joy\' by Isaac Hayes', '\'Opening\' by Apple Inc.', '\'Answers Me\' by Arthur Russell'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '5:14'
        },
        {
            title: /^no more parties in l[\.]?a[\.]?$/,
            album: 'The Life of Pablo',
            albumYear: 2016,
            trackNum: 17,
            producers: ['Madlib','Kanye'],
            features: ['Kendrick Lamar'],
            samples: ['\'Suzie Thundertussy\' by Junie Morrison', '\'Give Me My Love\' Johnny Guitar Watson', '\'Stand Up and Shout About Love\' by Larry Graham', '\'Mighty Healthy\' by Ghostface Killah', '\'NBA Jam Sound Effects\' by EA Sports'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '6:04'
        },
        {
            title: /^facts( [\(]?charlie heat version[\)]?)?$/,
            album: 'The Life of Pablo',
            albumYear: 2016,
            trackNum: 18,
            producers: ['Southside','Metro Boomin','Charlie Heat','Kanye'],
            features: [],
            samples: ['\'Dhalsim\' by Yoko Shimomura and Isao Abe'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '3:15'
        },
        {
            title: /^fade$/,
            album: 'The Life of Pablo',
            albumYear: 2016,
            trackNum: 19,
            producers: ['DJ Dodger Stadium','Noah Goldstein','Anthony Kilhoffer','Benji B','Charlie Handsome','Mike Dean','Kanye'],
            features: ['Ty Dolla Sign', 'Post Malone'],
            samples: ['\'Mystery of Love\' by Mr. Fingers', '\'Deep Inside\' by Hardrive', '\'I Get Lifted (The Underground Network Mix)\' by Barbara Tucker', '\'(I Know) I\'m Losing You\' by Rare Earth'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '3:08'
        },
        {
            title: /^s(ain)?t[\.]? pablo$/,
            album: 'The Life of Pablo',
            albumYear: 2016,
            trackNum: 20,
            producers: ['Noah Goldstein','Allen Ritter','Mike Dean','Kanye'],
            features: ['Sampha'],
            samples: ['\'Where I\'m From\' by Jay Z', '\'We Don\'t Care\' by Kanye West'],
            difficultLine: [],
            mediumLine: [],
            easyLine: [],
            songLength: '6:01'
        }

    ];
    this.pickSong = function () {
        if (this.currentSong){
            if (this.guessedCorrectly) this.previousSongs.push(this.currentSong);
            else this.skippedSongs.push(this.currentSong);
        }
        if (this.catalog.length == 0){
            this.catalog = this.skippedSongs;
            this.skippedSongs = [];
            console.log('catalog: ', this.catalog);
            console.log('skippedSongs: ', this.skippedSongs);
        }
        console.log('skipped songs', this.skippedSongs);
        this.songIndex = Math.floor((Math.random() * this.catalog.length));
        this.currentSong = this.catalog.splice(this.songIndex, 1)[0];
        console.log('current song: ', this.currentSong);
        console.log('songs left: '+this.catalog.length);
        this.clearInput();
        this.score = 100;
        this.awaitingGuess = true;
        this.timeShown = false;
        this.updateFeedback('Try this one!');
    };
    this.showSample = function () {
        this.updateFeedback(this.currentSong.samples.shift() + ' is sampled on the track');
        this.score -= 4;
    };
    this.showFeature = function () {
        this.updateFeedback(this.currentSong.features.shift() + ' is featured on the track');
        this.score -= 15;
    };
    this.showProducer = function () {
        this.updateFeedback(this.currentSong.producers.shift() + ' did production on the track');
        this.score -= 2;
    };
    this.showDifficultLine = function () {
        this.updateFeedback('Ok, here\'s a tough one: ' + this.currentSong.difficultLine.shift());
        this.score -= 10;
    };
    this.showMediumLine = function () {
        this.updateFeedback('This one might give it to you: ' + this.currentSong.mediumLine.shift());
        this.score -= 20;
    };
    this.showEasyLine = function () {
        this.updateFeedback('Give up if you don\'t know this one: ' + this.currentSong.easyLine.shift());
        this.score -= 40;
    };
    this.showSongLength = function () {
        this.updateFeedback('The track is ' + this.currentSong.songLength + ' long');
        this.timeShown = true;
        this.score -= 12;
    };
    this.submitGuess = function () {
        var userGuess = $('#guess').val();
        var userGuessForComparison = userGuess.toLowerCase();
        if (userGuessForComparison.length == 0) return;
        this.clearInput();
        if (this.currentSong.title.test(userGuessForComparison)) {
            this.updateFeedback('You got it! Your score for this track is ' + this.score);
            this.guessedCorrectly = true;
            this.numSongsGuessed++;
            this.setBest();
            this.sum += this.score;
            this.calculateAverage();
            this.timeShown = true;
            this.awaitingGuess = false;
            switch(this.currentSong.album){
                case 'College Dropout':
                    this.cdSongsGuessed++;
                    if (this.cdSongsGuessed == this.cdLength) this.updateFeedback('. Congratulations, you\'ve completed College Dropout!', 'concat');
                    break;
                case 'Late Registration':
                    this.lrSongsGuessed++;
                    if (this.lrSongsGuessed == this.lrLength) this.updateFeedback('. Congratulations, you\'ve completed Late Registration!', 'concat');
                    break;
                case 'Graduation':
                    this.gradSongsGuessed++;
                    if (this.gradSongsGuessed == this.gradLength) this.updateFeedback('. Congratulations, you\'ve completed Graduation!', 'concat');
                    break;
                case '808s & Heartbreak':
                    this.heartbreakSongsGuessed++;
                    if (this.heartbreakSongsGuessed == this.heartbreakLength) this.updateFeedback('. Congratulations, you\'ve completed 808s & Heartbreak!', 'concat');
                    break;
                case 'My Beautiful Dark Twisted Fantasy':
                    this.mbdtfSongsGuessed++;
                    if (this.mbdtfSongsGuessed == this.mbdtfLength) this.updateFeedback('. Congratulations, you\'ve completed My Beautiful Dark Twisted Fantasy!', 'concat');
                    break;
                case 'Yeezus':
                    this.yeezusSongsGuessed++;
                    if (this.yeezusSongsGuessed == this.yeezusLength) this.updateFeedback('. Congratulations, you\'ve completed College Dropout!', 'concat');
                    break;
                case 'The Life of Pablo':
                    this.pabloSongsGuessed++;
                    if (this.pabloSongsGuessed == this.pabloLength) this.updateFeedback('. Congratulations, you\'ve completed College Dropout!', 'concat');
                default:
                    break;
            }
            if (this.catalog.length == 0){
                if (this.skippedSongs.length == 0){
                    this.updateFeedback('. Way to go! You guessed every song. Your total score  is '+this.sum, 'concat');
                }
                else {
                    this.catalog = this.skippedSongs;
                    this.skippedSongs = [];
                    console.log('catalog: ', this.catalog);
                    console.log('skippedSongs: ', this.skippedSongs);
                }
            }
        }
        else {
            for (var i = 0; i < this.catalog.length; i++){
                if (this.catalog[i].title.test(userGuessForComparison)){
                    console.log("i: " + i, "songIndex: " + this.songIndex);
                    if (this.catalog[i].album == this.currentSong.album){
                        if (this.catalog[i].trackNum > this.currentSong.trackNum){
                            this.updateFeedback('The track is earlier on the album than '+userGuess);
                        }
                        else this.updateFeedback('The track is later on the album than '+userGuess);
                        this.score -= 5;
                        return;
                    } else if (this.catalog[i].albumYear > this.currentSong.albumYear){
                        this.updateFeedback('The track is on an earlier album than '+ this.catalog[i].album);
                    } else this.updateFeedback('The track is on a later album than ' + this.catalog[i].album);
                    this.score -= 10;
                    return;
                }
            }
            for (var i = 0; i < this.skippedSongs.length; i++){
                if (this.skippedSongs[i].title.test(userGuessForComparison)){
                    this.updateFeedback('You skipped that one');
                    return;
                }
            }
            for (var i = 0; i < this.previousSongs.length; i++){
                if (this.previousSongs[i].title.test(userGuessForComparison)){
                    this.updateFeedback('We already did that one');
                    return;
                }
            }
            this.updateFeedback('Don\'t think '+userGuess+' is on a Kanye solo album');
            this.score -= 20;
        }
    };
    this.updateFeedback = function (str, mode) {
        console.log('updating feedback');
        switch(mode){
            case 'replace':
                $('#feedback').text(str);
                break;
            case 'concat':
               var feedbackString = $('#feedback').text();
                feedbackString += str;
                $('#feedback').text(feedbackString);
                break;
            default:
                $('#feedback').text(str);
                break;
        }
    };
    this.clearInput = function(){
      $('#guess').val('');
    };
    this.setBest = function(){
        if (this.score > this.best) this.best = this.score;
    };
    this.calculateAverage = function(){
        this.average = Math.round(this.sum/this.numSongsGuessed);
    };
    $(document).ready(this.pickSong());
});
