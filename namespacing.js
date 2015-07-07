// Namespacing

// In JavaScript, we can namespace functions and variables by making them properties of an object

// Here, User is a plain object
//var User = {
//  records: [],
//  fetchRemote: function(){}
//};

// Here User is a class
var User = function(atts){
  this.attributes = atts || {};
}

// Function related to specific objects instanciated from User
User.prototype.destroy = function(){};

// Function related to global User object. It's a property of User. Each instance will inheret this property.
User.fetchRemote = function(){};

var user = new User();
user.fetchRemote();