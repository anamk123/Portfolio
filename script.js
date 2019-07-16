// my teams/interests

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// hover function

// button calls
$( ".hcGit" ).click(function() {
  window.open ('https://github.com/erindhoxha/happyCentro' , '_blank')
  
});

$( ".jsPro" ).click(function() {
  window.open('http://anam.khan.yoobee.net.nz/summative/summative.htm', '_blank')
  
});

$( ".jaanPro" ).click(function() {
  window.open ('http://anam.khan.yoobee.net.nz/jaan/cuisine.html', '_blank')
  
});

$( ".hcSite" ).click(function() {
  window.open('https://erindhoxha.github.io/happyCentro/', '_blank')
  
});

$(".linkicon").click(function() {
  
  window.open("https://www.linkedin.com/in/anam-khan-71ba87140","_blank")
});

$(".githubicon").click(function() {
  
  window.open("https://anamk123.github.io/Portfolio/","_blank")
});

$(".resume").click(function() {
  
  window.open("docs/anam-cv.pdf","_blank")
});

$(".hcDoc").click(function() {
  
  window.open("docs/hcDoc.pdf","_blank")
});

// scroll to work

$(".works").click(function() {
  $('html, body').animate({
      scrollTop: $(".myWork").offset().top
  }, 700);
});

$(".downImg").click(function() {
  $('html, body').animate({
      scrollTop: $(".myWork").offset().top
  }, 700);
});