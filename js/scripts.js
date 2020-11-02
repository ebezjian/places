$(document).ready(function()  {
  $("#clickableParis").submit(function(event)  {
    event.preventDefault();

    paris.userClick();

    // let inputtedLocation = $("ABC!@#").val();
    // let inputtedLandmark = $("ABC123").val();
    // let inputtedTimeOfYear = $("ABC123").val();
    // let inputtedNotes = $("ABC123").val();

  });
});

  // Business Logic for Destinations ----------
  function Destinations(){
    this.locations = [];
}

  Destinations.prototype.addLocation = function(location) {
    this.locations.push(location);
}


// Business Logic for Locations ---------
function Location(landmark, timeOfYear, notes) {
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

Location.prototype.userClick = function() {
  location.forEach(function(element) {
    $("#paris").append('<li>' + element + '</li>');
  })
}

let location = new Location();
let paris = new Location("Eiffle Tower", "Fall", "This is a lovely place with great wine");
let rome = new Location("Leaning Tower of Pisa", "Summer", "This is a charming place with great pizza");
let portland = new Location("Powell's Books", "Summer", "Beautiful city in the spring and summer, outdoor activites abound.");





//     console.log("Popular landmark: " + this.landmark)
//     console.log("Best time of year to visit: " + this.timeOfYear)
//     console.log("Here is what visitors are saying: " + this.notes)
// };











/*
// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = [];
}

AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
}

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}



function A(B)
add function B + 5


function B()
adds 1 + 1
