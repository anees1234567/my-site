

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}









ScrollReveal({ 
    reset: true ,
    distance:'40px',
    duration:'2000',
    delay:100
});

ScrollReveal().reveal('.heading, .home_content', {origin:'top'});
ScrollReveal().reveal('.service_container,.image', {origin:'bottom'});
ScrollReveal().reveal('.image2,.progress_container_wrapper', {origin:'left'});
ScrollReveal().reveal('.service_container,.image,.submit_btn', {origin:'bottom'});
ScrollReveal().reveal('.about_content', {origin:'right'});



