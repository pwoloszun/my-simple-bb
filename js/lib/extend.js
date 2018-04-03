function extend(BaseClassConstructor, classPrototype) {
  function ClassConstructor() {
    BaseClassConstructor.apply(this, arguments);
    if (classPrototype.hasOwnProperty('constructor')) {
      classPrototype.constructor.apply(this, arguments);
    }
  }

  ClassConstructor.prototype = new BaseClassConstructor();
  for (var propertyName in classPrototype) {
    if (classPrototype.hasOwnProperty(propertyName)) {
      ClassConstructor.prototype[propertyName] = classPrototype[propertyName];
    }
  }
  return ClassConstructor;
}
