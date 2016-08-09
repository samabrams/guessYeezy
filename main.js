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
    this.cd = [
        {
            title: /^intro$/,
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
            trackNum: 12,
            producer: ['Kanye'],
            features: ['Jamie Foxx', 'Twista'],
            samples: ['\'A House Is Not A Home\' by Luther Vandross'],
            difficultLine: ['In the Chi and I be sippin Hennessey - play some R&B'],
            mediumLine: ['Tellin me them diamonds, when she know they rhinestones'],
            easyLine: ['Some Minnie Ripperton will definitely set this party off right'],
            songLength: '5:16'
        },
        {
            title: /^breathe in[,]? breathe out$/,
            trackNum: 13,
            producer: ['Brian \"All Day\" Miller', 'Kanye'],
            features: ['Ludacris'],
            samples: [],
            difficultLine: ['Pullin\' up in the Lexuses, one on both hand, So I guess them GSes was ambidextrous'],
            mediumLine: ['I always had a Ph.D.: a Pretty Huge Dick'],
            easyLine: ['If ya iced up, pull ya sleeves out'],
            songLength: '4:06'
        },
        {
            title: /^school spirit skit 1$/,
            trackNum: 14,
            producer: ['Kanye'],
            features: [],
            samples: [],
            difficultLine: ['Now you\'ll get that 25-thousand dollar job a year'],
            mediumLine: ['No more borrowing from mom for my high!'],
            easyLine: ['But I bet I can add up all the change in your purse very fast'],
            songLength: '1:18'
        },
        {
            title: /^school spirit$/,
            trackNum: 15,
            producer: ['Kanye'],
            features: [],
            samples: ['\'Like This and Like That\' by Monica ft. Mr. Malik', '\'Spirit in the Dark\' by Aretha Franklin'],
            difficultLine: ['Bring more of them girls I\'ve seen in The Aurora'],
            mediumLine: ['I went to Cheesecake, he was a motherfucking waiter there'],
            easyLine: ['Alpha, step, Omega, step'],
            songLength: '5:24'
        },
        {
            title: /^school spirit skit 2$/,
            trackNum: 16,
            producer: ['Kanye'],
            features: [],
            samples: [],
            difficultLine: ['You pick up all those books that you\'re gonna read and not remember'],
            mediumLine: ['Then you get your masters\' masters'],
            easyLine: ['You know what\'s gonna keep me warm? That\'s right, those degrees'],
            songLength: '0:43'
        },
        {
            title: /^lil jimmy skit$/,
            trackNum: 17,
            producer: ['Kanye'],
            features: [],
            samples: ['\'Ride\' by The Kleptones'],
            difficultLine: '',
            mediumLine: ['And I was actually in school all while my dad was in school!'],
            easyLine: ['But I\'ll be the smartest dead guy! Who has that?'],
            songLength: '0:53'
        },
        {
            title: /^two words$/,
            trackNum: 18,
            producer: ['Kanye'],
            features: ['The Harlem Boys Choir', 'Freeway', 'Mos Def'],
            samples: ['\'Peace and Love\' by Mandrill', '\'The Rainmaker\' by The 5th Dimension', '\'Got Nowhere\' by State Property', '\'Do It Again (Put Ya Hands Up)\' by Jay Z ft. Beanie Sigel and Amil'],
            difficultLine: ['These streets know game, can\'t ball, don\'t play'],
            mediumLine: ['Most imitated, Grammy nominated, hotel accommodated, cheerleader prom-dated'],
            easyLine: ['Still nowhere to go, still nowhere to go'],
            songLength: '4:26'
        },
        {
            title: /^through the wire$/,
            trackNum: 19,
            producer: ['Kanye'],
            features: [],
            samples: ['\'Player\'s Ball\' by OutKast', '\'Through the Fire\' by Chaka Khan'],
            difficultLine: ['I got a lawyer for the case to keep what\'s in my safe safe'],
            mediumLine: ['Unbreakable, what, you thought they\'d call me Mr. Glass?'],
            easyLine: ['Somebody ordered pancakes, I just sip the sizzurp'],
            songLength: '3:41'
        },
        {
            title: /^family business$/,
            trackNum: 20,
            producer: ['Kanye'],
            features: [],
            samples: ['\'Fonky Thang\' by The Dells', '\'Ambitionz Az a Ridah\' by 2Pac', 'Rain Rain Go Away'],
            difficultLine: ['When I brought it why the guard have to look all through it?'],
            mediumLine: ['But you ain\'t have to tell my girl I used to pee in the bed'],
            easyLine: ['And this is for the family that can\'t be with us'],
            songLength: '4:38'
        },
        {
            title: /^last call$/,
            trackNum: 21,
            producer: ['Evidence', 'Kanye'],
            features: [],
            samples: ['\'Mr. Rockefeller\' by Bette Midler', '\'She\'s Gone to Another\' by The Whatnauts', '\'Doggone\' by Love', '\'Better Than Yours\' by Kanye West ft. Common', '\'Wow\' by Kanye West ft. GLC'],
            difficultLine: ['Last year shoppin my demo, I was tryin\' to shine'],
            mediumLine: ['They expected that College Dropout to drop and then flop'],
            easyLine: ['Yo fuck you, Kanye, first and foremost for making me do this shit, motherfucker'],
            songLength: '12:40'
        }
    ];
    this.pickSong = function () {
        if (this.currentSong) this.previousSongs.push(this.currentSong);
        this.songIndex = Math.floor((Math.random() * this.cd.length));
        this.currentSong = this.cd.splice(this.songIndex, 1)[0];
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
            this.cdSongsGuessed++;
            if (this.cd.length == 0){
                this.updateFeedback('. That\'s all for now! Thanks for playing. Refresh to play again.', 'concat');
            }
        }
        else {
            for (var i = 0; i < this.cd.length; i++){
                if (this.cd[i].title.test(userGuessForComparison)){
                    console.log("i: " + i, "songIndex: " + this.songIndex);
                    if (this.cd[i].trackNum > this.currentSong.trackNum){
                        this.updateFeedback('The track is earlier on the album than '+userGuess);
                    }
                    else this.updateFeedback('The track is later on the album than '+userGuess);
                    this.score -= 5;
                    return;
                }
            }
            for (var i = 0; i < this.previousSongs.length; i++){
                if (this.previousSongs[i].title.test(userGuessForComparison)){
                    this.updateFeedback('We already did that one');
                    return;
                }
            }
            this.updateFeedback('that\'s not on the album');
            this.score -= 10;
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
