function timedCount(){setTimeout("checkTime()",5e3)}function checkTime(){currentTime=new Date;minutes=currentTime.getMinutes();hours=currentTime.getHours();console.log(hours);if(minutes<10){minutes="0"+minutes;console.log("this works")}setTime()}function setTime(){switch(twelvehr){case!0:if(hours>=12){ampm="PM";if(hours>=13&&hours<22){hours-=12;hours="0"+hours}else hours-=12}else if(hours<=11){hours==0?hours+=12:hours="0"+hours;ampm="AM"}$(".time").html(hours+":"+minutes+" "+"<span id='ampm' class='ampm'>"+ampm+"</span>");console.log("12hr");break;case!1:hours<10&&(hours="0"+hours);$(".time").html(hours+":"+minutes)}timedCount()}function blur(){localStorage.setItem("timeFormat",twelvehr)}var twelvehr=!1,currentTime=new Date,hours=currentTime.getHours(),minutes=currentTime.getMinutes(),ampm;$(document).ready(function(){var a=document.getElementsByTagName("audio")[0];$(".seq").click(function(){$("#seq").removeClass().addClass("seqani");a.play()});$("#seq").bind("animationend webkitAnimationEnd",function(){$(".wrap").after("<div id='experiment'><div class='cubeCont'><div id='cube'><div class='face one'></div><div class='face two'></div><div class='face three'></div><div class='face four'></div><div class='face five'></div><div class='face six'></div></div></div></div>");$(".light").css("opacity","1")});checkTime();var b=!0;$("#time").click(function(){if(b){$("#time").removeClass().addClass("feztime");$("#ampm").removeClass().addClass("fezam");b=!1}else if(!b){$("#time").removeClass().addClass("time");$("#ampm").removeClass().addClass("ampm");b=!0}checkTime()})});