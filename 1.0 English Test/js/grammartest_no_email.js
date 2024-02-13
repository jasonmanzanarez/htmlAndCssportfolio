var answers = [];

var useranswers = [];
var instructions = '';
var totaltime = '';
var resultsmessage = '';

var lev = '';
var textlist = [];
var choicelist = [];
var choicelist1 = [];
var feedbacklist = [];
var correctlist = [];
var correctlist2 = [];
var textlist2 = [];

var choicelist2 = [];
var feedbacklist2 = [];

var imagelist = [];
var imagelist2 = [];
var audiolist = [];
var audiolist1 = [];
var audiolist1b = [];
var audiolist2 = [];
var audiolist2b = [];
var audiolist3 = [];
var audiolist3b = [];
var audiolist4 = [];
var audiolist4b = [];
var audiolist5 = [];
var audiolist5b = [];
var testlevel = 3;
var textlist2 = [];
var textlist2a = [];
var correctlist = [];
var choicelist2 = [];
var textlist1 = [];
var correctlist1 = [];
var choicelist1 = [];
var textlist5 = [];
correctlist5 = [];
var choicelist5 = [];
var textlist1b = [];
var correctlist1b = [];
var choicelist1b = [];
var textlist5b = [];
var choicelist5b = [];
var correctlist5b = [];

var textlist3 = [];
var correctlist3 = [];
var choicelist3 = [];
var textlist4 = [];
var correctlist4 = [];
var choicelist4 = [];
var textlist2b = [];
var correctlist2b = [];
var choicelist2b = [];
var textlist3b = [];
var correctlist3b = [];
var choicelist3b = [];
var textlist4b = [];
var correctlist4b = [];
var choicelist4b = [];
var feedbacklist = [];
var feedbacklist1 = [];
var feedbacklist1b = [];
var feedbacklist2 = [];
var feedbacklist2b = [];
var feedbacklist3 = [];
var feedbacklist3b = [];
var feedbacklist4 = [];
var feedbacklist4b = [];
var feedbacklist5 = [];
var feedbacklist5b = [];
var part1score = 0;
var part2score = 0;
var part3score = 0;
var feedback3 = '';


var levellist = [];
var numberofchoices = 4;
var questionnumber = 0;
var score = 0;
var part1score = 0;
var part2score = 0;
var part3score = 0;
var correct = 0;

var numberofquestions = 15;
var timerStarted = false;
var startTime = 0, stopTime = 0, timeTaken = 0;

///////////////
function makerandomlists() {

var i = 0;
var totalquestions = levellist.length;

var questions = totalquestions;
while (i < totalquestions) {
var	x = Math.floor(Math.random() * questions);

var nextquestion = textlist[x];



		var r = Math.floor(Math.random() * numberofchoices);


		if (r === 0) {
			choice1 = choicelist[x * numberofchoices];
			choice2 = choicelist[x * numberofchoices + 1];
			choice3 = choicelist[x * numberofchoices + 2];
			choice4 = choicelist[x * numberofchoices + 3];



			correct1 = correctlist[x * numberofchoices];
			correct2 = correctlist[x * numberofchoices + 1];
			correct3 = correctlist[x * numberofchoices + 2];
			correct4 = correctlist[x * numberofchoices + 3];




		}
		if (r === 1) {
			choice1 = choicelist[x * numberofchoices + 1];
			choice2 = choicelist[x * numberofchoices];
			choice3 = choicelist[x * numberofchoices + 2];
			choice4 = choicelist[x * numberofchoices + 3];



			correct1 = correctlist[x * numberofchoices + 1];
			correct2 = correctlist[x * numberofchoices];
			correct3 = correctlist[x * numberofchoices + 2];
				correct4 = correctlist[x * numberofchoices + 3];


		}
		if (r === 2) {
			choice1 = choicelist[x * numberofchoices + 1];
			choice2 = choicelist[x * numberofchoices + 2];
			choice3 = choicelist[x * numberofchoices];
			choice4 = choicelist[x * numberofchoices + 3];



			correct1 = correctlist[x * numberofchoices + 1];
			correct2 = correctlist[x * numberofchoices + 2];
			correct3 = correctlist[x * numberofchoices];
				correct4 = correctlist[x * numberofchoices + 3];


		}
		if (r === 3) {
			choice1 = choicelist[x * numberofchoices + 1];
			choice2 = choicelist[x * numberofchoices + 2];
			choice3 = choicelist[x * numberofchoices + 3];
			choice4 = choicelist[x * numberofchoices];



			correct1 = correctlist[x * numberofchoices + 1];
			correct2 = correctlist[x * numberofchoices + 2];
			correct3 = correctlist[x * numberofchoices + 3];
				correct4 = correctlist[x * numberofchoices];


		}

		// adds selected question to new array

			eval('textlist'+ levellist[x] + 'b').push(nextquestion);



		eval('choicelist'+ levellist[x] + 'b').push(choice1);
		eval('choicelist'+ levellist[x] + 'b').push(choice2);
		eval('choicelist'+ levellist[x] + 'b').push(choice3);
		eval('choicelist'+ levellist[x] + 'b').push(choice4);
		eval('correctlist'+ levellist[x] + 'b').push(correct1);
		eval('correctlist'+ levellist[x] + 'b').push(correct2);
	eval('correctlist'+ levellist[x] + 'b').push(correct3);
			eval('correctlist'+ levellist[x] + 'b').push(correct4);

		// deletes selected item from list of available question
		textlist.splice(x, 1);


		levellist.splice(x, 1);
		choicelist.splice(x * numberofchoices, numberofchoices);
		correctlist.splice(x * numberofchoices, numberofchoices);
		i++;
		questions = questions - 1;
	}

	textlist1b = textlist1b.concat(textlist1b);

	choicelist1b = choicelist1b.concat(choicelist1b);
	feedbacklist1b = feedbacklist1b.concat(feedbacklist1b);
	audiolist1b = audiolist1b.concat(audiolist1b);
	textlist5b = textlist5b.concat(textlist5b);
	choicelist5b = choicelist5b.concat(choicelist5b);
	feedbacklist5b = feedbacklist5b.concat(feedbacklist5b);
	audiolist5b = audiolist5b.concat(audiolist5b);
	correctlist5b = correctlist5b.concat(correctlist5b);
	correctlist1b = correctlist1b.concat(correctlist1b);
	textlist2b = textlist2b.concat(textlist2b);
	choicelist2b = choicelist2b.concat(choicelist2b);
	feedbacklist2b = feedbacklist2b.concat(feedbacklist2b);
	audiolist2b = audiolist2b.concat(audiolist2b);
	correctlist2b = correctlist2b.concat(correctlist2b);

}



	function testSetUp() {

	txt = '';

	questionnumber = 0;
	score = 0;
	questionanswered = 0;
	answered = 0;
	correct = 0;
	numberofquestions = 15;
part1score = 0;
part2score = 0;
part3score = 0;


	if (window.XMLHttpRequest)
	  {
	  xhttp = new XMLHttpRequest();
	  }
	else
	  {
	  xhttp = new ActiveXObject('Microsoft.XMLHTTP');
	  }

	xhttp.open('GET', testfile, false);
	xhttp.send('');
	xmlDoc = xhttp.responseXML;


var rand = xmlDoc.getElementsByTagName('random')[0].childNodes[0].nodeValue;
instructions = xmlDoc.getElementsByTagName('instructions')[0].childNodes[0].nodeValue;


document.getElementById('instructions').innerHTML = instructions;
	//document.getElementById("title").innerHTML=xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;

	var x = xmlDoc.getElementsByTagName('item');


	var qnum = 0;

 for (i = 0; i < x.length; i++)
 {

				levellist.push(x[i].getElementsByTagName('level')[0].childNodes[0].nodeValue);
				//audiolist.push(x[i].getElementsByTagName("audio")[0].childNodes[0].nodeValue)  ;
 textlist.push(x[i].getElementsByTagName('text')[0].childNodes[0].nodeValue);

    for (j = 0; j < 4; j++)
	{

  choicelist.push(x[i].getElementsByTagName('choice')[j].childNodes[0].nodeValue);
var feedback = x[i].getElementsByTagName('choice')[j].getAttribute('feedback');
var correctitem = x[i].getElementsByTagName('choice')[j].getAttribute('correct');

	correctlist.push(correctitem);


feedbacklist.push(feedback);

 }




 }

StartTimer();
makerandomlists();


	showQuestion();

}




function choosequestion() {


	//if (feedback3 == "Correct"){
		if (correct === 1) {

		score++;
		if (questionnumber < 5) {
			part1score++;
		}
		if ((questionnumber > 4) && (questionnumber < 10)) {
			part2score++;
		}
		if (questionnumber > 9) {
			part3score++;
		}
	}
questionnumber++;
	if (questionnumber === 5) {
		if (part1score > 2) {
			testlevel++;
		}else {
testlevel--;
		}
		part1score = score;
	}
	if (questionnumber === 10) {
		part2score = score - part1score;
		if (testlevel === 4) {
			if (part2score > 2) {
				testlevel++;
			}
			else {
		testlevel--;
			}
		}
		if (testlevel === 2) {
			if (part2score > 2) {
				testlevel++;
			}
			else {
				testlevel--;
			}
		}
	}
	if (questionnumber === 15) {
		part3score = score - part1score - part2score;
		if (testlevel === 5) {
			if (part3score < 3) {

				testlevel = 4;
			}
		}
		if (testlevel === 3) {
			if (part3score < 3) {

				testlevel = 2;
			}
		}
		if (testlevel === 1) {
			if (part3score < 3) {

			testlevel = 0;
			}
		}
		resultspage();
	}
			else {
			showQuestion();
			}




	// }

}

function showQuestion() {




document.getElementById('instructions').innerHTML = instructions;
questionanswered = 0;
txt = "<form id ='form1' name ='form1'>";
txt = txt + '<p class = "question">Question ' + (questionnumber + 1) + ' of 15 <span id = "result_' + questionnumber + '"><img src= "../images/blank.gif" style = "border:0" alt = "" /></span><span id = "feedback"></span></p>';
	txt = txt + '<p class = "question">' + eval('textlist'+ testlevel + 'b'+ '[questionnumber]') + '</p>';

	//audiofile = "audio/"+eval("audiolist"+testlevel+"b"+"[questionnumber]");




	 for (j = 0; j < numberofchoices; j++) {

		txt = txt + '<input type = "radio" name = "choices' + questionnumber + '"' + 'value = "' + j + '" onClick= "submitAnswer(' + questionnumber + ',' + j + ')">&nbsp;<span class = "achoice" onClick= "submitAnswer(' + questionnumber + ',' + j + ')" id = "' + questionnumber + '_' + j + '">&nbsp;' + eval('choicelist' + testlevel + 'b'+ '[(numberofchoices*questionnumber)+j]') + '</span><br> ';


				 }




	 var footer = '<p><span id = "nextbutton"></span></p><p style = "display:none"><img src= "correct.gif" style = "border:0" alt = "Correct!" /><img src= "incorrect.gif" style = "border:0" alt = "Incorrect!" /></p>';
	  txt = txt + '</form>';

	document.getElementById('text').innerHTML = txt;
	//document.getElementById("choices").innerHTML=choices;
	document.getElementById('testfooter').innerHTML = footer;
	document.getElementById('nextbutton').innerHTML = '';






//changeAudio();




}

function submitAnswer(id,labelId) {

var choice = 'choices' + id;
	correct = 0;


	var last_char = labelId;

	//var feedback3 = feedbacklist2[(id*3)+1*last_char];
	  feedback3 = eval('correctlist'+ testlevel + 'b'+ '[(id*numberofchoices)+1*last_char]');



	setCheckedValue(document.forms.form1.elements[choice], labelId);


	if (feedback3 === '1') {



	if (questionanswered == 0) {

		//score++;
		correct = 1;


		answered++;




	}




	}
	else
	{
		if (questionanswered === 0) {

		answered++;
	}


	}
	if (questionnumber < numberofquestions - 1) {

		document.getElementById('nextbutton').innerHTML = '<button type="submit" class="btn-u btn-u-default" onClick="javascript:choosequestion()">Next</button>';

		//questionnumber++;

		}else {
			document.getElementById('nextbutton').innerHTML = '<button type="submit" class="btn-u btn-u-default" onClick="javascript:choosequestion()">Finish</button>';

		}



  //document.getElementById("score").innerHTML = ' &nbsp;&nbsp;&nbsp;Score: ' + score + '/' + (id+1) ;
   //document.getElementById("feedback").innerHTML = feedback3;
	questionanswered = 1;

}
function reloadpage() {
	window.location.href = window.location.href;
}
function showResults() {
	if (correct === 1) {

		score++;
		if (questionnumber < 5) {
			part1score++;
		}
		if ((questionnumber > 4) && (questionnumber < 10)) {
			part2score++;
		}
		if (questionnumber > 9) {
			part3score++;
		}
	}
document.getElementById('instructions').innerHTML = '';
txt = '';
	txt = txt + "<div id ='results'><ul>";

if ((score / numberofquestions) > 0.5) {
	resultsmessage = '<p>Congratulations! You have completed the test.</p><p> Do you wish to do another test with different questions?</p>';
}else {
	resultsmessage = '<p>You have completed the test.</p><p> Do you wish to do another test with different questions?</p>';
}



		txt = txt + '<li><label id = "results"><p>' + resultsmessage + '</label></li><p><span id = "score">Score: ' + score + '/' + questionnumber + '</span></p></ul>';




	 txt = txt + '<p><a  href= "#" onclick= "javascript:testSetUp()" class = "flip whiteButton">New test</a></p>';

	document.getElementById('text').innerHTML = txt;
}

function resultspage() {
	StopTimer();
document.getElementById('instructions').innerHTML = 'You have completed the English Level Test';

lev = '';


if (testlevel == 1){
testlevelresult = 'Your level is A2 (elementary)';
			testresults = 'This is approximately equivalent to the KET exam. ';

			lev = 'A2';
}
if (testlevel == 2){
testlevelresult = 'Your level is B1 (intermediate)';
			testresults = 'This is approximately equivalent to the PET exam or an IELTS band score of 4.5. ';

			lev = 'B1';
}
if (testlevel == 3){
testlevelresult = 'Congratulations! Your level is B2 (upper intermediate)';
			testresults = 'This is approximately equivalent to a pass at FCE, an IELTS band score of 6 or 85 at TOEFL iBT';

			lev = 'B2';
}
if (testlevel == 4){
testlevelresult = 'Congratulations! Your level is C1 (advanced)';
			testresults = 'This is approximately equivalent to a pass at CAE, an IELTS band score of 7.5 or 100 at TOEFL iBT';

			lev = 'C1';
}
if (testlevel == 5){
  testlevelresult = 'Congratulations! Your level is C2 (advanced/mastery)';
			testresults = 'This is approximately equivalent to CPE, an IELTS band score of 9 or 120 at TOEFL iBT';

			lev = 'C2';
}
if (testlevel == 0){
testlevelresult = 'Level: 0';
			testresults = 'We were not able to assess your level. The questions were too difficult.';

			lev = '';
}


resultsmessage = testlevelresult + '<span class = "titleheading"><h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + lev + '</h1></span>' + testresults + '<p>Time taken: ' + totaltime + '</p>';
txt = '';
var choices = '';


txt = txt + '<label id = "results"><p>' + resultsmessage + '</p></label>';
	document.getElementById('text').innerHTML = txt;
	document.getElementById('choices').innerHTML = choices;


	document.getElementById('nextbutton').innerHTML = '<button type="submit" class="btn-u btn-u-default" onClick="javascript:reloadpage()">Restart</button>&nbsp;&nbsp;';


activityscore=lev;
		
		
	
		
		savescores();
		
		showscores();






}


////////////////


function StartTimer()
{

  if (!timerStarted)
  {
     startTime = new Date();
     startTime = startTime.getTime();// get time in milliseconds
     timerStarted = true; //Timer Enabled


  }
}


function StopTimer()
{
  if (startTime == 0)
   {

   }
  else
   {
     stopTime = new Date();
     stopTime = stopTime.getTime();
     timeTaken = (stopTime - startTime) / (1000);





   }
   splitTime(timeTaken);

   //Reset the Timer
  // ResetTimer();

}
function splitTime(timeTaken) 
{
var hours = Math.floor(timeTaken / 3600);
var minutes = Math.floor(timeTaken / 60) - (hours * 60);
var seconds = timeTaken - (hours * 3600) - (minutes * 60);

var hs = ' hour';var ms = ' minute';var ss = ' second';
if (hours !== 1) {hs = hs + 's'};
if (minutes !== 1) {ms = ms + 's'};
if (seconds !== 1) {ss = ss + 's'};
if (hours > 0) {
	totaltime = hours + hs + ', ' + minutes + ms + ', ' + seconds.toFixed(0) + ss;
}else {
	if (minutes > 0) {
	totaltime = minutes + ms + ', ' + seconds.toFixed(0) + ss;
	}else {
		totaltime = seconds.toFixed(0) + ss;
	}

}




}

/**
 * DHTML email validation script. Courtesy of SmartWebby.com (http://www.smartwebby.com/dhtml/)
 */

function echeck(str) {
valid = 1;
		var at = '@';
		var dot = '.';
		var lat = str.indexOf(at);
		var lstr = str.length;
		var ldot = str.indexOf(dot);
		if (str.indexOf(at) == -1) {

		  valid = 0;
		}

		if (str.indexOf(at) == -1 || str.indexOf(at) == 0 || str.indexOf(at) == lstr) {

		  valid = 0;
		}

		if (str.indexOf(dot) == -1 || str.indexOf(dot) == 0 || str.indexOf(dot) == lstr) {

		   valid = 0;
		}

		 if (str.indexOf(at, (lat + 1)) != -1) {

		   valid = 0;
		 }

		 if (str.substring(lat - 1, lat) == dot || str.substring(lat + 1, lat + 2) == dot) {

		   valid = 0;
		 }

		 if (str.indexOf(dot, (lat + 2)) == -1) {

		   valid = 0;
		 }

		 if (str.indexOf(' ') != -1) {

		   valid = 0;
		 }

 		 if (valid == '1') {
			 emailresults2();
		 }else {
			  alert('Invalid email');
		 }
	}
	var valid = 0;
	function emailresults2() {
		//document.getElementById("form2").submit();
		this.form2.submit();
	}

function ValidateForm() {


	var emailID = document.form2.email.value;

	var nameID = document.form2.name.value;
	if ((nameID == null) || (nameID == '')) {
		alert('Please Enter your name');

		//nameID.focus()
		//return false
	} else {

	if ((emailID == null) || (emailID == '')) {
		alert('Please Enter your email address');

		//emailID.focus()
		//return false
	}
	if (echeck(emailID) == FALSE) {
		//emailID.value = ""
		//emailID.focus()
		//return false
		alert('INvalid');
	} else {
		alert('valid');
	}
	}



 }
 function setCheckedValue(radioObj, newValue) {

	if (!radioObj)
		return;
	var radioLength = radioObj.length;
	if (radioLength == undefined) {
		radioObj.checked = (radioObj.value == newValue.toString());
		return;
	}
	for (var i = 0; i < radioLength; i++) {
		radioObj[i].checked = false;
		if (radioObj[i].value == newValue.toString()) {
			radioObj[i].checked = true;
		}
	}
}
