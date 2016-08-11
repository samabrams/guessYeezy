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
    this.numSongsTried = 0;
    this.previousSongs = [];
    this.cdSongsGuessed = 0;
    this.cdLength = 21;
    this.lrSongsGuessed = 0;
    this.lrLength = 21;
    this.catalog = [
        {
            title: /^intro$/,
            album: 'college dropout',
            trackNum: 1,
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
            album: 'college dropout',
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
            album: 'college dropout',
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
            album: 'college dropout',
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
            album: 'college dropout',
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
            album: 'college dropout',
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
            album: 'college dropout',
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
            album: 'college dropout',
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
            album: 'college dropout',
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
            album: 'college dropout',
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
            album: 'college dropout',
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
            album: 'college dropout',
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
            album: 'college dropout',
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
            album: 'college dropout',
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
            album: 'college dropout',
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
            album: 'college dropout',
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
            album: 'college dropout',
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
            album: 'college dropout',
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
            album: 'college dropout',
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
            album: 'college dropout',
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
            album: 'college dropout',
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
            album: 'late registration',
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
            album: 'late registration',
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
            album: 'late registration',
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
            album: 'late registration',
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
            album: 'late registration',
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
            album: 'late registration',
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
            album: 'late registration',
            trackNum: 7,
            producers: ['Kanye'],
            features: ['Common'],
            samples: ['\'Home is Where the Hatred Is\' by Gil Scott Heron'],
            difficultLine: ['The young smoke grass in grassless jungles'],
            mediumLine: ['I stroll where souls get lost like Vegas'],
            easyLine: ['I left three days ago, but no one seems to know I\'m gone'],
            songLength: '1:43'
        },
        {
            title: /^crack music$/,
            album: 'late registration',
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
            album: 'late registration',
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
            album: 'late registration',
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
            album: 'late registration',
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
            album: 'late registration',
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
            album: 'late registration',
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
            album: 'late registration',
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
            album: 'late registration',
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
            album: 'late registration',
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
            album: 'late registration',
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
            album: 'late registration',
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
            album: 'late registration',
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
            album: 'late registration',
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
            album: 'late registration',
            trackNum: 21,
            producers: ['Kanye'],
            features: [],
            samples: ['\'I\'ll Erase Your Pain\' by The Whatnauts', '\'What\'s Beef?\' by The Notorious B.I.G.'],
            difficultLine: ['Will I make it from the student loans to a Benzo?'],
            mediumLine: ['Like them eskimos, what would you do for a Klondike?'],
            easyLine: ['So turn this motherfucker up only if it feels right'],
            songLength: '3:50'
        }
    ];
    this.pickSong = function () {
        if (this.currentSong) this.previousSongs.push(this.currentSong);
        this.songIndex = Math.floor((Math.random() * this.catalog.length));
        this.currentSong = this.catalog.splice(this.songIndex, 1)[0];
        console.log(this.currentSong);
        this.clearInput();
        this.score = 100;
        this.awaitingGuess = true;
        if (this.numSongsTried > 0) this.calculateAverage();
        this.timeShown = false;
        this.numSongsTried++;
        this.updateFeedback('Try this one!');
    };
    this.showSample = function () {
        this.updateFeedback(this.currentSong.samples.shift() + ' is sampled on the track');
        this.score -= 2;
    };
    this.showFeature = function () {
        this.updateFeedback(this.currentSong.features.shift() + ' is featured on the track');
        this.score -= 10;
    };
    this.showProducer = function () {
        this.updateFeedback(this.currentSong.producers.shift() + ' did production on the track');
        this.score -= 5;
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
        this.score -= 8;
    };
    this.submitGuess = function () {
        var userGuess = $('#guess').val();
        var userGuessForComparison = userGuess.toLowerCase();

        if (userGuessForComparison.length == 0) return;
        this.clearInput();
        if (this.currentSong.title.test(userGuessForComparison)) {
            this.updateFeedback('You got it! Your score for this track is ' + this.score);
            this.setBest();
            this.sum += this.score;
            this.calculateAverage();
            this.timeShown = true;
            this.awaitingGuess = false;
            switch(this.currentSong.album){
                case 'college dropout':
                    this.cdSongsGuessed++;
                    break;
                case 'late registration':
                    this.lrSongsGuessed++;
                    break;
                default:
                    break;
            }
            if (this.catalog.length == 0){
                this.updateFeedback('. That\'s all for now! Thanks for playing. Refresh to play again.', 'concat');
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
                    } else if (i > this.songIndex){
                        this.updateFeedback('The track is on an earlier album than '+ this.catalog[i].album);
                    } else this.updateFeedback('The track is on a later album than ' + this.catalog[i].album);
                    this.score -= 10;
                    return;
                }
            }
            for (var i = 0; i < this.previousSongs.length; i++){
                if (this.previousSongs[i].title.test(userGuessForComparison)){
                    this.updateFeedback('We already did that one');
                    return;
                }
            }
            this.updateFeedback('Don\'t think '+userGuess+' is on a Kanye album');
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
        this.average = Math.round(this.sum/this.numSongsTried);
    };
    $(document).ready(this.pickSong());
});
