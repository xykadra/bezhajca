

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



  document.querySelectorAll('.dropdown-content a').forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
// Prevent the default behavior of the anchor tag
   event.preventDefault();

// Get the data-name attribute value
   var itemName = anchor.getAttribute('data-name');

// Show a confirmation pop-up
  var isConfirmed = confirm('Are you sure to contact bezhajca regarding ' + itemName + ' ?');

// Perform further actions based on user's confirmation
   if (isConfirmed) {
     window.location.reload();
     // Your code to handle the submission goes here
     console.log('Item submitted:', itemName);
   } else {
     console.log('Submission cancelled.');
    }
   });
 });


function toggleBorder(image) {
  image.classList.toggle('selected');
  
}

function toggleBorder(image, galleryId) {
  const counter = document.getElementById('heart-counter');
  const globalCounter = parseInt(counter.textContent);

  const imageElement = image;
  const gallery = document.getElementById(galleryId);

  if (imageElement.classList.contains('selected')) {
      imageElement.classList.remove('selected');
      counter.textContent = globalCounter - 1;
  } else {
      imageElement.classList.add('selected');
      counter.textContent = globalCounter + 1;
  }
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}




//show hide heart and counter
window.onscroll = function() {
  const backToTopButton = document.querySelector('.hearth-icon');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = 'block';
  } else {
      backToTopButton.style.display = 'none';
  }
};
// Show/hide back-to-top button based on scroll position
window.onscroll = function() {
  const backToTopButton = document.querySelector('.back-to-top');
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTopButton.style.display = 'block';
  } else {
      backToTopButton.style.display = 'none';
  }
};
