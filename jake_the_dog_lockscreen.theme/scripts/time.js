var twelvehr = true;
var lang = "fr";

var currentTime = new Date()

var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var ampm;

var weekdayArr = new Array(8);
var monthArr = new Array(13);

if (lang === "fr")
{
	weekdayArr[1] = "Lundi";
	weekdayArr[2] = "Mardi";
	weekdayArr[3] = "Mercredi";
	weekdayArr[4] = "Jeudi";
	weekdayArr[5] = "Vendredi";
	weekdayArr[6] = "Samedi";
	weekdayArr[7] = "Dimanche";

	monthArr[1] = "Janvier";
	monthArr[2] = "Février";
	monthArr[3] = "Mars";
	monthArr[4] = "Avril";
	monthArr[5] = "Mai";
	monthArr[6] = "Juin";
	monthArr[7] = "Juillet";
	monthArr[8] = "Août";
	monthArr[9] = "Septembre";
	monthArr[10] = "Octobre";
	monthArr[11] = "Novembre";
	monthArr[12] = "Décembre";
}
else if (lang === "en")
{
	weekdayArr[1] = "Sunday";
	weekdayArr[2] = "Monday";
	weekdayArr[3] = "Tuesday";
	weekdayArr[4] = "Wednesday";
	weekdayArr[5] = "Thursday";
	weekdayArr[6] = "Friday";
	weekdayArr[7] = "Saturday";

	monthArr[1] = "January";
	monthArr[2] = "February";
	monthArr[3] = "March";
	monthArr[4] = "April";
	monthArr[5] = "May";
	monthArr[6] = "June";
	monthArr[7] = "July";
	monthArr[8] = "August";
	monthArr[9] = "September";
	monthArr[10] = "October";
	monthArr[11] = "November";
	monthArr[12] = "December";
}

var date = currentTime.getDate();
var weekday = weekdayArr[currentTime.getDay()];
var month = monthArr[currentTime.getMonth()];

$(document).ready(function(){
	checkTime();
})

function timedCount(){

	setTimeout("checkTime()", 5000);
}

function checkTime()
{
	currentTime = new Date()
	minutes = currentTime.getMinutes();
	hours = currentTime.getHours();

	console.log(hours);
	if (minutes < 10)
	{
		minutes = "0" + minutes;
		console.log("this works")
	}

	setTime();
}


function setTime()
{
	if (twelvehr)
	{
		// Midnight
		if (hours == 0)
		{
			ampm = "PM";
		}
		// 1h -> 9h
		if (hours < 10)
		{
			ampm = "AM";
			hours = "0" + hours;
		}
		// 10h -> 11h
		else if ((hours >= 10) && (hours <= 11))
		{
			ampm = "AM";
		}
		// Noon
		else if ((hours == 12))
		{
			ampm = "PM";
		}
		// 13h -> 22h
		else if ((hours >= 13) && (hours <= 22))
		{
			ampm = "PM";
			hours = "0" + hours - 12;
		}
		else if ((hours == 23))
		{
			ampm = "PM";
			hours = hours - 12;
		}
		$("#time").html(hours + ":" + minutes + "<span id='ampm' class='ampm'>" + ampm + "</span>");
	}
	else
	{
		// 12h
		if (hours < 10)
		{
			hours = "0" + hours;
		}

		$("#time").html(hours + ":" + minutes);
		
	}
	$("#date").html(weekday + " " + date + " " + month);
}
timedCount();



function blur()
{
	localStorage.setItem('timeFormat', twelvehr);
}
