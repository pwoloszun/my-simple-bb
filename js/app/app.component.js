var tmplTmp = '<div><h3>Hello!</h3></div>';

var AppComponent = extend(BaseComponent, {
  template: Handlebars.compile(tmplTmp),

  render: function () {
    var batman = {
      name: 'batman!!',
      age: 33
    };
    // TODO 1: render template with data

    // TODO 2: handle DOM events

    // TODO 3: compose cmponents

    // IMPORTANT
    this.attachEvents();
  }
});
