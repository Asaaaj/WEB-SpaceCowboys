window.onload = function() {
  var nav = document.getElementById('nav');

  window.onscroll = () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } 
    else {
      nav.classList.remove('scrolled');
    }
    if (window.scrollY > 700 && window.scrollY < 1500){
      document.getElementById('aboutuslink').classList.add('active');
    }
    else{
      document.getElementById('aboutuslink').classList.remove('active');
    }
    if (window.scrollY > 1500 && window.scrollY < 2300){
      document.getElementById('theteamlink').classList.add('active');
    }
    else{
      document.getElementById('theteamlink').classList.remove('active');
    }
    if (window.scrollY > 2300 && window.scrollY < 3100){
      document.getElementById('impressionslink').classList.add('active');
    }
    else{
      document.getElementById('impressionslink').classList.remove('active');
    }
    if (window.scrollY > 3100 && window.scrollY < 3900){
      document.getElementById('contactlink').classList.add('active');
    }
    else{
      document.getElementById('contactlink').classList.remove('active');
    }
  }

  
}

function swapCard(value){
  if(document.getElementById(value).classList.contains('card-flipper')){
    document.getElementById(value).classList.remove('card-flipper');
  }
  else{
    document.getElementById(value).classList.add('card-flipper');
  }
}