var Model = {
  inherited: function(){},
  created: function(){},
  
  prototype: {
    init: function(){}
  },
  
  // Returns a new object, inherited from the Model object
  create: function(){
    var object = Object.create(this);
    object.parent = this;
    object.protoype = object.fn = Object.create(this.prototype);
    
    object.created();
    this.inherited(object);
    return object;
  },
  
  // Returns a new object, inhereted from Model.prototype, an instance of the Model object
  init: function(){
    var instance = Object.create(this.prototype);
    instance.parent = this;
    instance.init.apply(instance, arguments);
    return instance;
  }
};

// Object.create() permet de créer un objet héritant du protoype en argument.