

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