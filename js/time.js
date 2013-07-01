/**
* This script manipulate the date and time so it gets displayed
* with am/pm, with 0s in the minutes, etc.
* Feel free to change this according to how tou want
* your time displayed :)
*
* @todo: change pictures according to the time
* ex: dark picture at night, drunk on friday, etc.
*/

var twelve_hour_format = true;
var lang = "fr";

var weekdayArr = new Array(8);
var monthArr = new Array(13);

if (lang === "fr")
{
	weekdayArr[0] = "Dimanche";
	weekdayArr[1] = "Lundi";
	weekdayArr[2] = "Mardi";
	weekdayArr[3] = "Mercredi";
	weekdayArr[4] = "Jeudi";
	weekdayArr[5] = "Vendredi";
	weekdayArr[6] = "Samedi";

	monthArr[0] = "Janvier";
	monthArr[1] = "F&eacute;vrier";
	monthArr[2] = "Mars";
	monthArr[3] = "Avril";
	monthArr[4] = "Mai";
	monthArr[5] = "Juin";
	monthArr[6] = "Juillet";
	monthArr[7] = "Ao&ucirc;t";
	monthArr[8] = "Septembre";
	monthArr[9] = "Octobre";
	monthArr[10] = "Novembre";
	monthArr[11] = "D&eacute;cembre";
}
else if (lang === "en")
{
	weekdayArr[0] = "Sunday";
	weekdayArr[1] = "Monday";
	weekdayArr[2] = "Tuesday";
	weekdayArr[3] = "Wednesday";
	weekdayArr[4] = "Thursday";
	weekdayArr[5] = "Friday";
	weekdayArr[6] = "Saturday";

	monthArr[0] = "January";
	monthArr[1] = "February";
	monthArr[2] = "March";
	monthArr[3] = "April";
	monthArr[4] = "May";
	monthArr[5] = "June";
	monthArr[6] = "July";
	monthArr[7] = "August";
	monthArr[8] = "September";
	monthArr[9] = "October";
	monthArr[10] = "November";
	monthArr[11] = "December";
}


var currentTime = new Date()

var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var ampm;
var date = currentTime.getDate();
var weekday = weekdayArr[currentTime.getDay()];
var month = monthArr[currentTime.getMonth()];

$(document).ready(function()
{
	setBackgroundImage();
	checkTime();
})

/**
* Called after checkTime()
*/
function refreshTimeout()
{
	setTimeout("checkTime()", 5000);
	setTimeout("setBackgroundImage()", 5000);
}

function checkTime()
{
	currentTime = new Date()
	hours = currentTime.getHours();
	minutes = currentTime.getMinutes();
	date = currentTime.getDate();
	weekday = weekdayArr[currentTime.getDay()];
	month = monthArr[currentTime.getMonth()];
	
	if (minutes < 10)
	{
		minutes = "0" + minutes;
	}

	updateTime();
}


function updateTime()
{
	if (twelve_hour_format)
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
		// 23h
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

	if (date == 1)
		if (lang == "fr")
			date = 1 + "er"
		else if (lang == "en")
			date = 1 + "st"

	if (lang == "fr")
		$("#date").html(weekday + " " + date + " " + month);
	else if (lang == "en")
		$("#date").html(weekday + ", " + month + " " + date);
	refreshTimeout();
}

function setBackgroundImage()
{
	// Monday morning between 8h00 and noon included
	if (currentTime.getDay() == 1 && currentTime.getHours() >= 8 && currentTime.getHours() <= 12)
	{
		// Desactivate other Characters
		$("#wallpaper .jake").removeClass("active");
		$("#wallpaper .zzz-container").removeClass("active");

		// Sad BMO
		$("#wallpaper .BMO").addClass("active");
		$("#wallpaper .BMO .face").addClass("sadface animated");
	}
	// Sunday to Thursday at night between 23h00 and 7h59 included
	else if (currentTime.getDay() >= 0 && currentTime.getDay() <= 5 && (currentTime.getHours() >= 23 || currentTime.getHours() <= 7))
	{
		// Desactivate other Characters
		$("#wallpaper .jake").removeClass("active");
		
		// Sleeping BMO :)
		$("#wallpaper .BMO").addClass("active");
		$("#wallpaper .zzz-container").addClass("active");
		$("#wallpaper .BMO .face").addClass("blink");
	}
	// Rest of the time
	else
	{
		// Desactivate other Characters
		$("#wallpaper .zzz-container").removeClass("active");
		$("#wallpaper .BMO").removeClass("active");
		
		// Super Duper Jake the Dog!
		$("#wallpaper .jake").addClass("active");
		$(".eyes").addClass("active");
	}
}
