var wakeuptime = 7;
var noon = 12;
var lunchtime =12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

function showTime() {
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var session ="AM";


if (hours == 0){
    hours = 12;
}

if(hours > 12) {
    hours = hours - 12;
    session ="PM";
}


if (hours < 10)
{

    hours ="0" + hours;
}

if (minutes < 10)
{

    minutes ="0" + minutes;
}


if (seconds < 10)
{

    seconds ="0" + seconds;
}





var time =hours + ":" + minutes + ":" + seconds + " " + session;


document.getElementById("MyClock").innerText = time;


setTimeout(showTime, 1000);

}

showTime();

var updateClock = function()
{

    var time = new Date().getHours();
    var messageText;
    var image ="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";


    var timeEventJS = document.getElementById("timeEvent");

    var lolcatImageJS = document.getElementById('lolcatImage');

    if (time == partytime)
    {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
        messageText = "Let's party!";
    }
    else if (time == wakeuptime)
    {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        messageText = "Wake up!";
      }
      else if (time == lunchtime)
      {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "Let's have some lunch!";
      }
      else if (time == naptime)
      {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "Sleep tight!";
      }
      else if (time < noon)
      {
        image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
        messageText = "Good morning!";
      }
      else if (time >= evening)
      {
        image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
        messageText = "Good evening!";
      }
      else
      {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
        messageText = "Good afternoon!";
      }
      document.getElementById("lolcatImage").style.width = "50%";
      document.getElementById("lolcatImage").style.height = "auto";


      console.log(messageText);
      timeEventJS.innerText = messageText;
      lolcatImage.src = image;


      showCurrentTime();

    };
    updateClock();









