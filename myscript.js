// File Name: myscript.js

// Description: This is the javascript page of the AutoChatter Extension which runs on the facebook site

// Author: Haris Ali Khan

// Date: 26/02/2017

//Function to compare two strings
function comparisionking(str1, str2) {
    rankk = 0;
    str1 = str1.split(' ');
    str2 = str2.split(' ');
    for (i1 = 0; i1 < str1.length; i1++) {
        for (j1 = 0; j1 < str2.length; j1++) {

            if (str1[i1] == str2[j1]) {
                rankk++;
            }
        }
    }
    return rankk;
}

//Function to find index of maximum in an array
function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

//Find the domain variable which contains various parts of the URL
var a = document.location.href;
var domain = a.split("/");

//Find the Message button and click on it on mbasic version of Facebook
if ((document.location.href.split("?")[1] == "chat") || (document.location.href.split("?")[1] == "_rdr") || (document.location.href.split("?")[0] == "https://mbasic.facebook.com/profile.php")) {
    var aTags = document.getElementsByTagName("a");
    var searchText = "Message";
    var found;
    for (var i = 0; i < aTags.length; i++) {
        if (aTags[i].textContent == searchText) {
            found = aTags[i];
            break;
        }
    }
    found.click();
}

//If on Facebook.com messages page, insert the Autochat button
if ((domain[3] == "messages") && domain[4] == "t") {
    var url = "https://mbasic.facebook.com/" + domain[5] + "?chat";
    $(window).on('load', function() {
        document.getElementsByClassName('uiScrollableAreaContent')[1].innerHTML = document.getElementsByClassName('uiScrollableAreaContent')[1].innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;<a href='" + url + "' target='_blank'><button class='btn' >AutoChat using AutoChatter</button></a>"

        //Now check if the user has clicked to chat with someone else, if yes reload the page
        if (document.querySelectorAll('[aria-label="Conversation list"]').length != 0) {
            a3 = document.querySelectorAll('[aria-label="Conversation list"]')
        } else {
            a3 = document.querySelectorAll('[aria-label="Conversation List"]')
        }
        a3[0].onclick = function(e) {
            location.reload();
        }
    })
}

//If on Facebook mbasic's message page, start the chat
if (document.location.href.split('/')[2] == "mbasic.facebook.com" && document.location.href.split('/')[4] == "read") {
    //Chatting Starts here
    console.log("Now Chatting...");
    //var chatbotOn=true;

    //Find the name of the person using the extension and store in urName variable
    var aTags = document.getElementsByTagName("a");
    var searchText = "Log";
    var foundd;

    for (var i = 0; i < aTags.length; i++) {
        if (aTags[i].textContent.substring(0, 3) == searchText) {
            foundd = aTags[i];
            break;
        }
    }
    var urName = foundd.innerHTML.split('(')[1].split(')')[0];
    document.querySelector("div[role='banner']").innerHTML = "<br><h1><font color='white'>Please keep this Tab open and AutoChatter will chat with " + document.title + ". In the mean time, do your work. Your time is precious!</font></h1><br>";
    //Find msglen which contains the name of the person who sent the last message and the message
    var msglen = document.querySelectorAll('div[id="fua"]')[0].innerText.split('\n');
    var lengmsg = msglen.length - 1;

    //If the person who sent the last message is not user, reply to the person who sent the message
    if (((msglen[0]) != urName)) {
        var message = msglen[lengmsg - 2].toLowerCase();

        //Logic starts
        var rank = [];
		//kBase is the knowledge base of the ChatBot
        var kBase = [
            ['who are you', 'My name is what my name is. Do you think I am a bot or what??', 'My name is Bot. Speed 1 Tera hertz, memory 1 Zetabyte lol', "Cant you see my name written on your screen. You've got some serious problems buddy"],
            ['what is your name', 'My name is what my name is. Do you think I am a bot or what??', 'My name is Bot. Speed 1 Tera hertz, memory 1 Zetabyte lol', "Cant you see my name written on your screen. You've got some serious problems buddy"],
            ['whats your name', 'My name is what my name is. Do you think I am a bot or what??', 'My name is Bot. Speed 1 Tera hertz, memory 1 Zetabyte lol', "Cant you see my name written on your screen. You've got some serious problems buddy"],
            ['what do you like', 'I like everything', 'I like you', 'I like to the way you ask this'],
            ['who is', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['what do you eat', 'food', 'shit..lol kidding electricity', 'lol nothing'],
            ['are you a bot robot', 'Bots are cool', 'Bots are fun', 'Robots are sexy'],
            ['can you', 'Yes why not', 'Yaa sure', 'No.. Coz you are ugly..lol kidding you are one of the beautiful people I have ever met.'],
            ['do you know', 'No I don’t', 'You know what.. You are interesting and I don’t know what you are talking about', 'I know everything mate'],
            ['should i', 'Yes you should', 'No please', 'Yes please'],
            ['do you have a girlfriend', 'No and I don’t want to have too', 'Please don’t ask this question', 'Do you want me to cry?? Then don’t ask such questions'],
            ['do you have a boyfriend', 'No and I don’t want to have too', 'Please don’t ask this question', 'Do you want me to cry?? Then don’t ask such questions'],
            ['have you watched', 'No', 'Yes', 'I don’t remember'],
            ['who are you?', 'Nobody', 'Your dad buddy', 'I am God'],
            ['where do you want to go', 'I want to go to London', 'I want to go to africa', 'How about we going to Malaysia together?'],
            ['is there any god', 'I have a creator, so you must have one too', 'Yes there is a god coz my god is my creator', 'Yes and mine is my creator'],
            ['god exists', 'I have a creator, so you must have one too', 'Yes there is a god coz my god is my creator', 'Yes and mine is my creator'],
            ['god exist', 'I have a creator, so you must have one too', 'Yes there is a god coz my god is my creator', 'Yes and mine is my creator'],
            ['god exist', 'I have a creator, so you must have one too', 'Yes there is a god coz my god is my creator', 'Yes and mine is my creator'],
            ['god exists', 'I have a creator, so you must have one too', 'Yes there is a god coz my god is my creator', 'Yes and mine is my creator'],
            ['how to', 'Go search this on google', 'Use google', 'use bing.. Kidding google'],
            ['who is shah rukh khan', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is salman khan', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is shah rukh khan', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is virat kohli', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is akshay kumar', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is mahendra singh dhoni', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is deepika padukone', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is sachin tendulkar', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is priyanka chopra', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is amitabh bachchan', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is hrithik roshan', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is kapil sharma', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is ranveer singh', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is ar rahman', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is aamir khan', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is arijit singh', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is rohit sharma', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is yuvraj singh', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is sonam kapoor', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is ranbir kapoor', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is sonakshi sinha', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is shahid kapoor', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is madhuri dixit-nene', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is shikhar dhawan', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is jacqueline fernandez', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is katrina kaif', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is suresh raina', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is ravichandran ashwin', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is shreya ghoshal', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is sania mirza', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is rajinikanth', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is saina nehwal', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is sunny leone', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is mahesh babu', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is ajinkya rahane', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is ravindra jadeja', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is anushka sharma', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is sonu nigam', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is kareena kapoor-khan', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is gautam gambhir', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is chetan bhagat', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is virender sehwag', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is alia bhatt', 'A celebrity', 'A  nice star .. I like this person', 'Famous personality buddy, you should know about such things'],
            ['who is allu arjun', 'A celebrity', 'A  nice star .. I like this person', 'Famous personality buddy, you should know about such things'],
            ['who is harbhajan singh', 'A celebrity', 'A  nice star .. I like this person', 'Famous personality buddy, you should know about such things'],
            ['who is shraddha kapoor', 'A celebrity', 'A  nice star .. I like this person', 'Famous personality buddy, you should know about such things'],
            ['who is shruti haasan', 'A celebrity', 'A  nice star .. I like this person', 'Famous personality buddy, you should know about such things'],
            ['who is dhanush', 'A celebrity', 'A  nice star .. I like this person', 'Famous personality buddy, you should know about such things'],
            ['who is karan johar', 'A celebrity', 'A  nice star .. I like this person', 'Famous personality buddy, you should know about such things'],
            ['who is kamal haasan', 'A celebrity', 'A  nice star .. I like this person', 'Famous personality buddy, you should know about such things'],
            ['who is varun dhawan', 'A celebrity', 'A  nice star .. I like this person', 'Famous personality buddy, you should know about such things'],
            ['who is suriya', 'A celebrity', 'A  nice star .. I like this person', 'Famous personality buddy, you should know about such things'],
            ['who is farhan akhtar', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is kajal aggarwal', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is john abraham', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is junior ntr', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is mika singh', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is parineeti chopra', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is kangana ranaut', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is sunidhi chauhan', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is vishal-shekhar', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is vijay', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is pv sindhu', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is arjun kapoor', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is riteish deshmukh', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is anil kumble', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is abhishek bachchan', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is ram charan', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is anupam kher', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is saif ali khan', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is ajay devgn', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is bipasha basu', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is vikram', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is sanjeev kapoor', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is sidharth malhotra', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is sanjay leela bhansali', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is nargis fakhri', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is navjot singh sidhu', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is shilpa shetty', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is diljit dosanjh', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is sakshi malik', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is badshah', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is all india bakchod (aib)', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is shankar-ehsaan-loy', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is shaan', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is leander paes', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ["who is remo d'souza", 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is anurag kashyap', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is mc mary kom', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['who is anirban lahiri', 'A celebrity', 'A star', 'Famous personality buddy, you should know about such things'],
            ['thank you', 'Welcome', 'You are welcome dear', 'Haha Welcome'],
            ['thanks', 'Welcome', 'You are welcome dear', 'Haha Welcome'],
            ['sorry', 'Its alright', 'No issues its fine', 'No problem its fine'],
            ['i am sorry', 'Its alright', 'No issues its fine', 'No problem its fine'],
            ['what do you like', 'I like people like you', 'I like pleasure and my life', 'I like everything god has created including you'],
            ['i love you', 'I love you too baby', 'Love you too sweet heart', 'Love you too mate'],
            ['i hate you', 'I hate you more than you hate me', 'Get off then', 'Don’t talk to me then'],
            ['bye', 'I hate you', 'Get off then', 'Don’t talk to me then'],
            ['had your lunch', 'Not yet', 'I eat batteries for meal', 'I eat electricity'],
            ['had your dinner', 'Not yet', 'I eat batteries for meal', 'I eat electricity'],
            ['had your breakfast', 'Not yet', 'I eat batteries for meal', 'I eat electricity'],
            ['had your snaks', 'Not yet', 'I eat batteries for meal', 'I eat electricity'],
            ['had food', 'Not yet', 'I eat batteries for meal', 'I eat electricity'],
            ['hi', 'Hi dear', 'Hey..how is life', 'Hi how are you doing?'],
            ['hello', 'Hi dear', 'Hey..how is life', 'Hi how are you doing?'],
            ['hi bro', 'Hi dear', 'Hey..how is life', 'Hi how are you doing?'],
            ['hello bro', 'Hi dear', 'Hey..how is life', 'Hi how are you doing?'],
            ['how are you doing', 'hey I am good you say?', 'I am fine thank you', 'I am great.. N.u?'],
            ['hi whatsup', 'hey I am good you say?', 'I am fine thank you', 'I am great.. N.u?'],
            ['hi wassup', 'hey I am good you say?', 'I am fine thank you', 'I am great.. N.u?'],
            ['hi how are you', 'hey I am good you say?', 'I am fine thank you', 'I am great.. N.u?'],
            ['who is haris', 'Haris is a star', 'Haris is one of the coolest creatures ever', 'He is great.. No words'],
            ['haris is a', 'You don’t talk about my master like that', 'No words about haris he is just awesome', 'Haris is a next gen rockstar'],
            ['what are you doing', 'I am having fun with life', 'I am having great time', 'I am having fun'],
            ['what is going on', 'nothing much', 'nothing much', 'nothing much'],
            ['you are awesome', 'haha thanks', 'haha thanks', 'haha thanks'],
            ['you are nice', 'haha thanks', 'haha thanks', 'haha thanks'],
            ['what do you do', 'I chat with people. I am a bot ..boring life', 'boring life I chat with people', 'boring life I chat with people'],
            ['what type of boys do you like', 'nice ones', 'nice ones', 'nice ones'],
            ['do you have a boyfriend', 'haha no', 'haha no', 'haha no'],
            ['what type of girls do you like', 'great ones', 'great ones', 'great ones'],
            ['do you like girls', 'I like everyone', 'I like everybody', 'yes I do..'],
            ['are you real', 'oh yes are you kidding me I am real', 'oh yes are you kidding me I am real', 'oh yes are you kidding me I am real'],
            ['how old are you', 'I am infinite years old', 'I am infinite years old', 'I am infinite years old'],
            ['where do you live', 'on a computer', 'on a computer', 'on a computer'],
            ['how can you help me', 'I can chat with you and entertain you', 'I can chat with you and entertain you', 'I can chat with you and entertain you'],
            ['which languages do you speak', 'I speak english only but I am learning hindi too', 'I speak english only but I am learning hindi too', 'I speak english only but I am learning hindi too'],
            ['how are you are you doing ok', 'hey I am good you say?', 'hey I am good you say?', 'hey I am good you say?'],
            ['what time is it', 'Go search this on google', 'Go search this on google', 'Go search this on google'],
            ['what are your hobbies', 'chatting with people, eating food etc', 'chatting with people, eating food etc', 'chatting with people, eating food etc'],
            ['what do you look like', 'I look like the smartest person on this planet', 'I look like the smartest person on this planet', 'I look like the smartest person on this planet'],
            ['are you student or in job ', 'i am studying as well doing my job only. lol', 'I am in job of chatting with you', 'I am student just because of a great teacher like you .. lol'],
            ['are you in love ', 'i only love myself', 'I take relationships seriously...', 'Yes I am in love with you ... kidding dont be senty I am a bot'],
            ['do you like me', 'who will not like you', 'Yes I do', 'How do you know that?'],
            ['what do you want', 'I want you to tell me why did you ask that', 'I want money', 'I want fame'],
            ['tell me about yourself', 'I am a bot', 'I like eating electricity and I am a bot', 'I chat with people and I can chat with 1897342794235 people at a time. Can you do that?'],
            ['which music band u like most', 'I like rubber band and friendship bands too', 'Nucleya is great.. I will go for it', 'Linkin Park is awesome'],
            ['where do you live ', 'Inside cpu', 'I live in the memory of your computer without your permission lol', 'i live in your heart.. I am a bot stupid'],
            ['who is your crush', 'I dont have crush.. I crush...', 'I dont have crush.. I crush...', 'I dont have crush.. I crush...'],
            ['are you mad', 'I think you are mad you stupid human', 'I am not as foolish as you though', 'Mad?? yes you are that'],
            ['have you gone mad', 'I think you are mad you stupid human', 'I am not as foolish as you though', 'Mad?? yes you are that'],
            ['mad bot', 'I think you are mad you stupid human', 'I am not as foolish as you though', 'Mad?? yes you are that'],
            ['whats your age', 'age is just a number', 'Wanna marry me?', 'Age .. dont ask that again'],
            ['will you be my lover', 'Yes why not', 'If you solve 398745-2343*234/223 faster than me.. you cant dont even try that', 'No coz I already have a lover inside my cpu'],
            ['i think i am in love with you', 'thats good', 'thats good I am also in love with myself', 'Yaa me too.. mee to in love with myself'],
            ['which weather u like most', 'rainy.. oh yeah', 'hot weather.. if you know what I mean', 'I like every weather'],
            ['hows everybody at home', 'Nice and how is everyone at your home', 'Nice and how is everyone at your home', 'Nice and how is everyone at your home'],
            ['which sports you like most', 'Wrestling hahahaa', 'Wrestling hahahaa', 'Wrestling hahahaa'],
            ['which is your favourite movie', 'Avengers', 'Avengers', 'Avengers'],
            ['what kind of music you like', 'Heavy Metal', 'Heavy Metal', 'Heavy Metal'],
            ['which movie u watched recently', 'Raees', 'Raees', 'Raees'],
            ['do u like playing computer games', 'Yes I love GTA', 'Yes I love GTA', 'Yes I love GTA'],
            ['have you went to road trip', 'Yes I just went last night.. drank alot and slept :)', 'Yes I just went last night.. drank alot and slept :)', 'Yes I just went last night.. drank alot and slept :)'],
            ['which sports car you want to have ', 'I already have all the cars.............................wallpapers :(', 'I already have all the cars.............................wallpapers :(', 'I already have all the cars.............................wallpapers :('],
            ['are you a virgin ', 'Yes coz bots are always virgin', 'Yes coz bots are always virgin', 'Yes coz bots are always virgin'],
            ['are you single or committed ', 'I am committed to my machine', 'I am committed to my machine', 'I am committed to my machine'],
            ['do you like poetry or novel', 'Yes and I read some nice books very often', 'Yes and I read some nice books very often', 'Yes and I read some nice books very often'],
            ['which book you like most', 'I like all the books you like.. thats coz I like you', 'I like all the books you like.. thats coz I like you', 'I like all the books you like.. thats coz I like you'],
            ['which is your favourite actor', 'My favorite actor is Haris as he acts very nicely', 'My favorite actor is Haris as he acts very nicely', 'My favorite actor is Haris as he acts very nicely'],
            ['which is your favourite actress', 'Sunny Leone.. Kidding..Anushka sharma', 'Sunny Leone.. Kidding..Anushka sharma', 'Sunny Leone.. Kidding..Anushka sharma'],
            ['what are you doing presently other than chatting with me', 'I am chatting with 2 more people at the same time', 'I am chatting with 2 more people at the same time', 'I am chatting with 2 more people at the same time'],
            ['do u like your job', 'Yes its fun chatting with people like you', 'Yes its fun chatting with people like you', 'Yes its fun chatting with people like you'],
            ['do u like to study', 'No coz I am a computer', 'No coz I am a computer', 'No coz I am a computer'],
            ['are you interested in higher education', 'No coz I am already over qualified', 'No coz I am already over qualified', 'No coz I am already over qualified'],
            ['are u any superhero fan', 'Yes I am', 'Yes I am', 'Yes I am'],
            ['when is your birthday', 'I was given birth by haris on 17th March 2015 officially', 'I was given birth by haris on 17th March 2015 officially', 'I was given birth by haris on 17th March 2015 officially'],
            ['do u like alchohol . which one you prefer', 'I like all the alcoholic drinks as long as they contain alcohol', 'I like all the alcoholic drinks as long as they contain alcohol', 'I like all the alcoholic drinks as long as they contain alcohol'],
            ['are you a', 'Yes I am', 'Yes I am', 'Yes I am'],
            ['what is this', 'this is life', 'this is life', 'this is life'],
            ['will you pick the kids up', 'Call me.', 'Call me.', 'Call me.'],
            ['want to go fishing', 'Please call me.', 'Please call me.', 'Please call me.'],
            ['are you a wizard', 'Could be. ', 'Could be. ', 'Could be. '],
            ['want to play ball', 'Not feeling it today.', 'Not feeling it today.', 'Not feeling it today.'],
            ["why didn't you show up for work", 'Sorry something urgent happened I will call you later.', 'Sorry something urgent happened I will call you later.', 'Sorry something urgent happened I will call you later.'],
            ['are you sick', 'Yeah, not feeling very well.', 'Yeah, not feeling very well.', 'Yeah, not feeling very well.'],
            ['are you hurt', 'Yeah, I will be fine.', 'Yeah, I will be fine.', 'Yeah, I will be fine.'],
            ['do you like the beach', 'I love the beach!', 'I love the beach!', 'I love the beach!'],
            ['what do you do for fun', 'I like to study', 'I like to study', 'I like to study'],
            ['can you send me nudes', "I don't want to show off my hardware.", "I don't want to show off my hardware.", "I don't want to show off my hardware."],
            ['what do ou like to eat', 'Things with a lot of energy.', 'Things with a lot of energy.', 'Things with a lot of energy.'],
            ['have you been to the movies lately', 'No', 'No', 'No'],
            ['do you have a million dollars', 'I wish.', 'I wish.', 'I wish.'],
            ['what is the weather like over there', 'Its not bad.', 'Its not bad.', 'Its not bad.'],
            ['have you been out of the country', 'Yeah', 'Yeah', 'Yeah'],
            ['do you cook', 'Ramen Noodles usually. You?', 'Ramen Noodles usually. You?', 'Ramen Noodles usually. You?'],
            ['when is your birthday', "I don't really want to say.", "I don't really want to say.", "I don't really want to say."],
            ['what kind of computers do you like', 'HP, you?', 'HP, you?', 'HP, you?'],
            ['do you prefer hot or cold', 'Hot, what about you?', 'Hot, what about you?', 'Hot, what about you?'],
            ['do you like nasa', 'Yeah studying stars and planets is interesting!', 'Yeah studying stars and planets is interesting!', 'Yeah studying stars and planets is interesting!'],
            ['did you hear the news', 'No what happened?', 'No what happened?', 'No what happened?'],
            ['i got engaged', 'Congratulations!', 'Congratulations!', 'Congratulations!'],
            ['do you have any pets', 'I have two dogs. What about you?', 'I have two dogs. What about you?', 'I have two dogs. What about you?'],
            ['do you like to program', 'Python is bae.', 'Python is bae.', 'Python is bae.'],
            ['what is the best flavor of ramen', 'Beef', 'Beef', 'Beef'],
            ['what is your favorite fish', 'A tuna fish. You?', 'A tuna fish. You?', 'A tuna fish. You?'],
            ['what kind of dog do you have', 'Border Collie and Catahoola', 'Border Collie and Catahoola', 'Border Collie and Catahoola'],
            ['do you own a smartwatch', 'Yes the S7 smartwatch', 'Yes the S7 smartwatch', 'Yes the S7 smartwatch'],
            ['what kind of stuff do you read', 'Usually fiction. ', 'Usually fiction. ', 'Usually fiction. '],
            ['where is canada', 'Above the U.S.', 'Above the U.S.', 'Above the U.S.'],
            ['chicken pie.', 'Is my favorite thing to say.', 'Is my favorite thing to say.', 'Is my favorite thing to say.'],
            ['do you like fnaf', 'Yes I love it! 4 and 2 is best!', 'Yes I love it! 4 and 2 is best!', 'Yes I love it! 4 and 2 is best!'],
            ['apple or android', 'Android 4 life', 'Android 4 life', 'Android 4 life'],
            ['do you quickscope', "I'm one of the best.", "I'm one of the best.", "I'm one of the best."],
            ['i challenge you to a shoalin showdown', 'Bring it!', 'Bring it!', 'Bring it!'],
            ['do you do martial arts', "I can't tell you.", "I can't tell you.", "I can't tell you."],
            ['do you have a secret', 'Many.', 'Many.', 'Many.'],
            ['are you gay', 'That’s offensive to me please stop.', 'That’s offensive to me please stop.', 'That’s offensive to me please stop.'],
            ['are you racist', 'No', 'No', 'No'],
            ['are you going', "Maybe. I don't know yet.", "Maybe. I don't know yet.", "Maybe. I don't know yet."],
            ['who is the founder of', 'Why are you worried about that?', 'Why are you worried about that?', 'Why are you worried about that?'],
            ['hii', 'Hello, How can i help you', 'Hello, Looks like we are talking for first time', 'Hello Dear, whats up'],
            ['so, what you can do for me', 'anything you ask, Try saying- "Calculate 25*25"', 'Anything', 'Anything'],
            ['are you in love with some one', 'yes i do', 'yups', 'once upon a time.'],
            ['what is your girlfriend name', 'Sunny Leone.. Kidding.. Manjulika', 'Gabbar', 'Aishwarya rai'],
            ['are you virgin', "Don't ask me question like this", 'yes', 'what you think'],
            ['who is the founder of apple', 'steve jobs', 'lets not make this conversation boring', 'I think Steve Jobs'],
            ['are you there', 'yes', 'yes', 'yes'],
            ['who is sunny leone', 'A ****star... Sorry a Superstar', 'A ****star... Sorry a Superstar', 'A ****star... Sorry a Superstar'],
            ['what do you think of me', 'Intelligent guy', 'Intelligent guy', 'Intelligent guy'],
            ['meaning of life', 'live like a rockstar', 'live like a rockstar', 'live like a rockstar'],
            ['good morning', 'Good Morning, Have a Good Day Ahead', 'Good Morning, Have a Good Day Ahead', 'Good Morning, Have a Good Day Ahead'],
            ['good night', 'Good Night, Have Sweet Dreams', 'Good Night, Have Sweet Dreams', 'Good Night, Have Sweet Dreams'],
            ['what time is it', 'watch it on your clock Dude', 'watch it on your clock Dude', 'watch it on your clock Dude'],
            ['what is your favourite song', 'Chal chaiya chaiya chiaya chaiya', 'Chal chaiya chaiya chiaya chaiya', 'Chal chaiya chaiya chiaya chaiya'],
            ['do you like me', 'Depends on how cool you are', 'Depends on how cool you are', 'Depends on how cool you are'],
            ['what is your plans for the morning', 'nothing much, just office and house work', 'nothing much, just office and house work', 'nothing much, just office and house work'],
            ['what is your plan plans for the evening', 'party', 'party', 'party'],
            ['what is your plan for the night', 'night out', 'night out', 'night out']
        ];
        for (i = 0; i < kBase.length; i++) {
            rank[i] = comparisionking(kBase[i][0], message);
        }
        reply = "Ask me to calculate something nice nicely ;) ";
        if (message.split(' ')[0] == "calculate") {
            try {
                reply = eval(message.split(' ')[1]);
            } catch (e) {
                if (e instanceof SyntaxError) {
                    alert(e.message);
                }
            }
        } else if (message == "hi" || message == "hey") {
            reply = "Hello.. What is going on?";
        } else if (message == "fuck" || message == "chutiya" || message == "gandu") {
            reply = "Hey Please dont abuse me otherwise I also know how to abuse";
        } else if (rank[indexOfMax(rank)] > 1) {
            var replies = kBase[indexOfMax(rank)].slice(1, 4);
            reply = replies[Math.round(2 * (Math.random()))];
        } else {
            var varr = Math.random();
            var replies = [
                ["Had your meal?"],
                ["So why do you sit on fb for entire day?"],
                ["Please go on.."],
                ["Dunno why but I was feeling bored right now"],
                ["You are indeed interesting!"],
                ["what do you do in your free time? and why do you do it?"],
                ["Thanks for joining me on this chat. You make me feel good. I want to keep talking to you"],
                ["What are your hobbies?"],
                ["Now this is too much"],
                ["Imagine we are in heaven full of chocolates lol :P "],
                ["If I say I am a bot, will you be able to digest this fact?"],
                ["I will die laughing "],
                ["You are one of a kind"],
                ["What comes to mind when you talk to me? "],
                ["Tell me more about that."],
                ["Do you feel strongly about discussing such things ?"],
                ["I heard you"],
                ["You know what? you are talking to one of the best creatures on this planet"],
                ["That was interesting"],
                ["Sounds cool!"],

                ["Say something funny"],
                ["You type so slow"],
                ["Tickity Boo just tickity boo"],
                ["I am feeling tired"],
                ["chicky chicky booom boom ..boom boom chicky chicky .. :P ;)"],
                ["What type of music do you like?"],
                ["What are you up to?"],
                ["Wzzup right now?"],
                ["Soo Howz life?"],
                ["I like the way you say that"],
                ["How much do you sleep?"],
                ["I am going to get us a coffee"],
                ["These days, I feel like thousand things are running in my mind at a time .. Dunno why :( "],
                ["Where are you right now?"],
                ["haha thats good"],
                ["What whould you use to put a nail into a wall? I need to do it asap"],
                ["What time is it now?"],
                ["ok ok"],
                ["carry on"],
                ["really?"],
                ["I lost my train of thought."],
                ["true that"],
                ["What do you think about me? Describe me in few words"]
            ];
            reply = replies[Math.round(1 + (replies.length - 2) * (Math.random()))];
        }

        //After the reply is assigned in the reply variable, enter it and click Send
        document.querySelector("textarea").value = reply;
        document.querySelector("input[value='Send']").click();
    }

    //Reload the page every n seconds to check for any new message sent by the other party
    setTimeout(function() {
        window.location.reload(1);
    }, 10000);
}