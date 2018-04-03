function Eventable() {
  this._eventsMap = {};
}

Eventable.prototype.on = function (eventName, listenerFn) {
  if (!this._eventsMap[eventName]) {
    this._eventsMap[eventName] = [];
  }
  this._eventsMap[eventName].push(listenerFn);
};

Eventable.prototype.trigger = function (eventName, args, context) {
  var listeners = this._eventsMap[eventName];
  if (!listeners) {
    return;
  }
  var ctx = this;
  if (arguments.length > 2) {
    ctx = context;
  }
  for (var i = 0; i < listeners.length; i++) {
    var listener = listeners[i];
    listener.apply(ctx, args);
  }
};

Eventable.prototype.off = function (eventName, listenerFn) {
  this._eventsMap[eventName] = [];
};
