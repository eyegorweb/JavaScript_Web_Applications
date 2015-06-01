var exports = this;
    
(function($){

  exports.Events = {
    bind: function(ev, callback) {
      var evs   = ev.split(" ");
      var calls = this._callbacks || (this._callbacks = {});

      for (var i=0; i < evs.length; i++)
        (this._callbacks[evs[i]] || (this._callbacks[evs[i]] = [])).push(callback);

      return this;
    },

    trigger: function() {
      var args = $.makeArray(arguments);
      var ev   = args.shift();

      var list, calls, i, l;
      if (!(calls = this._callbacks)) return this;
      if (!(list  = this._callbacks[ev])) return this;

      for (i = 0, l = list.length; i < l; i++)
        if (list[i].apply(this, args) === false)
          return false;
      return this;
    }
  };

})(jQuery);

Events.bind("hail", function(type){
  alert("Long live the " + type)
});

Events.trigger("hail", "Users");
