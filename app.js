//-----------------Home-section----------------//
var homebutton = document.getElementById("btn-1");
homebutton.addEventListener("click", home);

function home() {
  homebutton.setAttribute("href", 'https://play.google.com/store/apps/details?id=com.byjus.thelearningapp&hl=en_IN&gl=US');
}


$(window).on("load", function() {
  //-----------------Preloader----------------//
  $(".preloader").fadeOut("slow");
});


$("document").ready(function() {
  //------------video-popup-------------------//
  const videosrc = $("#player-1").attr("src");
  $(".video-play-btn, .video-popup").on("click", function() {
    if ($(".video-popup").hasClass("open")) {
      $(".video-popup").removeClass("open");
      $("#player-1").attr("src", "");
    } else {
      $(".video-popup").addClass("open");
      if ($("#player-1").attr("src") == "") {
        $("#player-1").attr("src", videosrc);
      }
    }
  });

  //-------------fun-facts section--------------//
  $('.features-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  });

  //-------------fun-facts section--------------//
  $('.screenshots-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4
      }
    }
  });

  //-------------carousel-section--------------//
  $('.testimonials-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  });

  //-------------team-section--------------//
  $('.team-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  });


  //----------------Navbar-collapse----------------//
  $(".nav-link").on("click", function() {
    $(".navbar-collapse").collapse("hide");
  });
});

//---------------contact-section--------------------//
var dark = document.querySelector(".toggle-theme i");

dark.onclick = function() {
  document.body.classList.toggle("dark");
}


//-----------------------contact-section-----------------------//
function myfun() {
  document.getElementById("reaction").innerHTML = "Thankyou!";
  document.getElementById("yourMessage").innerHTML = "Your respone has been recorded.";
  document.getElementById("name").style.display = "none";
  document.getElementById("email").style.display = "none";
  document.getElementById("phone").style.display = "none";
  document.getElementById("subject").style.display = "none";
  document.getElementById("message").style.display = "none";
  document.querySelector(".form-group i").classList.add = "fas fa-check-circle";
}

var appIt = document.querySelector(".value");
appIt.addEventListener("click",press);

function press(){
  appIt.classList.add("type");
}

//-------------------------App-section-----------------------//
//------first-button-----//
var firstElement = document.querySelector('.googleB');
firstElement.addEventListener("click", mybutton1);

function mybutton1() {
  firstElement.setAttribute('href', 'https://play.google.com/store/apps/details?id=com.byjus.thelearningapp&hl=en_IN&gl=US');
  firstElement.style.visibility="visible";
}

//------second-button-----//
var secondElement = document.querySelector(".appleB");
secondElement.addEventListener("click", mybutton2);

function mybutton2() {
  secondElement.setAttribute("href", "https://apps.apple.com/in/app/byjus-the-learning-app/id1015059076");
}

//------third-button------//
var thirdElement = document.querySelector(".microsoftB");
thirdElement.addEventListener("click", mybutton3);

function mybutton3() {
  thirdElement.setAttribute("href", "https://byjus.com/byjus-the-learning-app/");
}

//----------------------------------pricing-section-------------------------------------//
