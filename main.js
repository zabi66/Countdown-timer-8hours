function countdownTimerStart(){

  var today = new Date();
  var countDownDate = today.setHours(today.getHours() + 8);

  var x = setInterval(function() {
 
      var now = new Date().getTime();
 
      var distance = countDownDate - now;

      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById("demo").innerHTML = hours + "h "
      + minutes + "m " + seconds + "s ";
      
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "Done";
      }
  }, 1000);
  }