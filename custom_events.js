var exports = this; // exports is the Window Object

// We create an object "Events" and append it to the Window global object

(function($){
  exports.Events = {
    // Define a customized event
    bind: function(ev, callback) {
      // "ev" is the name of the customized event (String)
      // "callback" is the function to execute when "ev" is invoked
      var evs   = ev.split(" "); // Append the String value in the Array "evs"
      // Define/Create "_callbacks" object, unless it already exists, then
      var calls = this._callbacks || (this._callbacks = {});
      // append the "callback" function to the array
      for (var i=0; i < evs.length; i++)
        (this._callbacks[evs[i]] || (this._callbacks[evs[i]] = [])).push(callback);
      // Return the object (export.Events)
      return this;
    },
    
    // Execute the customized event linked by "bind" method
    trigger: function() {
      // Turn arguments object into a real array
      var args = $.makeArray(arguments);
      // Extract the first argument, the event name
      var ev   = args.shift();

      var list, calls, i, l;
      
      // Return if there isn't a _callbacks object, or
      // if it doesn't contain an array for the given event
      if (!(calls = this._callbacks)) return this;
      if (!(list  = this._callbacks[ev])) return this;
      
      // Invoke the callbacks
      // In JS, apply: functionName.apply(object, arguments) <=> object.functionName();
      for (i = 0, l = list.length; i < l; i++)
        if (list[i].apply(this, args) === false)
          return false;
      // Return the object (export.Events)
      return this;
    }
  };

})(jQuery);

var Asset = {};
jQuery.extend(Asset, Events);
var Nono = function(){
  this.nom = "";  
};
Nono.prototype = new jQuery;
//for(var key in jQuery){
//  console.log(jQuery[key]);
//}
console.log(Nono);

var igor = Asset;
igor.bind("createFn", function(msg){
  console.log(msg);
})
igor.trigger("createFn", "I am an object called Igor");

//console.log(igor.__proto__);