function Destinations(){
  this.location = [];
}

function Location(location, landmark, timeOfYear, notes) {
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

Destinations.prototype.addLocation = function (Locations) {

}












/*
function AddressBook() {        ****like "Destinations"****
  this.contacts = [];
}

function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}


AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);