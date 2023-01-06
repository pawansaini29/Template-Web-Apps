var entry = document.querySelector('.googleB');
firstElement.addEventListener("click",mybutton1);

function credit(){
   document.getElementById("one").innerHTML = "Thankyou!";
   document.getElementById("yourMessage").innerHTML = "Your respone has been recorded";
   document.getElementById("cc-number").style.display="none";
   document.getElementById("cc-exp").style.display="none";
   document.getElementById("cc-cvc").style.display="none";
   document.getElementById("name").style.display="none";
   return false;
}



//--------------toggle-section (black & white)---//

function toggleTheme(){
  if(localStorage.getItem("shala-theme")!==null){
    if(localStorage.getItem("shala-theme") === "dark"){
      $("body").addClass("dark");
    }
    else{
      $("body").removeClass("dark");
    }
  }
  updateIcon();
}
toggleTheme();

$("toggle-theme").on("click",function(){
  $("body").toggleClass("dark");
  if($("body").hasClass("dark")){
    localStorage.setItem("shala-theme","dark");
  }
  else{
    localStorage.setItem("shala-theme","light");
  }
});

function updateIcon(){
    if($("body").hasClass("dark")){
      $(".toggle-theme i").removeClass("fa-moon");
      $("toggle-theme i").addClass("fa-sun");
    }
    else{
      $(".toggle-theme i").removeClass("fa-sun");
      $(".toggle-theme i ").addClass("fa-moon");
    }
}
