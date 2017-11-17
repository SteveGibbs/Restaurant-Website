/**
 * Created by stevegibbs on 16/11/2017.  Code adapted from W3Schools example of modal popup.
 */

// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

$("#myForm").submit(function(e){
    e.preventDefault();
    console.log('my form submitted');
    modal.style.display = "block";

    //The form is not submitted so there is no value for name in this situation.
    //var name = document.getElementById("name").value;
    //console.log(name);
    //alert("Thanks "+ name + " for your enquiry.  Unfortunately the restaurant is fictitious and cannot receive any bookings.");
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
//  if (event.target == modal) {
//    modal.style.display = "none";
// }
//}