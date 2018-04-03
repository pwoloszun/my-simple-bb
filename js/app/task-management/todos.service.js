var todosService = (function () {
  var inMemoryDb = [
    { title: 'chleb', description: 'kup 2 bochenki' },
    { title: 'mleko' },
    { title: 'ser', description: '20deg' }
  ];

  var TodosService = extend(Eventable, {

    fetchAll: function () {
      var that = this;
      setTimeout(function () {
        var copy = inMemoryDb.slice(0);

        // TODO: trigger 'fetched' event
      }, 2000);
    }
  });

  return new TodosService();

})();

