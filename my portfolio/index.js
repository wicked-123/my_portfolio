const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden1 , .hidden2');
  hiddenElements.forEach((el) => observer.observe(el));
  function github()
  {
    location.href="https://github.com/wicked-123";
  }
  function leetcode()
  {
    location.href="https://leetcode.com/Dasari_Vignan";
  }
  function LinkedIn()
  {
    location.href="https://www.linkedin.com/in/dasari-vignan-bb3500223";
  }
  function insta()
  {
    location.href="https://github.com/wicked-123";
  }
  
  function prev()
{
  var a=document.getElementById("first");
  console.log(a);
  a.classList.remove("mystyle2");
}
function next()
{
  var a=document.getElementById("first");
  console.log(a);
  a.classList.add("mystyle2");
}
document.getElementById('projects').addEventListener('click', function() {
  const targetDiv = document.getElementById('pro');
  targetDiv.scrollIntoView({ behavior: 'smooth' }); 
});
document.getElementById('skills').addEventListener('click', function() {
  const targetDiv = document.getElementById('ski');
  targetDiv.scrollIntoView({ behavior: 'smooth' }); 
});
document.getElementById('contact').addEventListener('click', function() {
  const targetDiv = document.getElementById('contactme');
  targetDiv.scrollIntoView({ behavior: 'smooth' }); 
});

const windowWidth = window.innerWidth;
const myDiv = document.getElementById('songs');
if (windowWidth <= 1200) {
  myDiv.src=" ";
} else {
  // If window width is greater than 1200px and the div is not present, recreate it
myDiv.src="songs.png";
}


