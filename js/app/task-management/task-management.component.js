var TaskManagementComponent = extend(BaseComponent, {

  className: 'task-management',

  template: Handlebars.compile(templatesLoader.get('task-management/task-management.component')),

  // TODO: attach events
  events: {
    'click .js-create-btn': 'createTodo',
    'click .js-todos-list li': 'itemClick'
  },

  constructor: function (params) {
    console.log('TaskManagementComponent', params);

    // TODO: render list on todos fetched
  },

  render: function () {
    // TODO: render component

    this.attachEvents();
  },

  itemClick: function (event) {
    console.log('itemClick', event.target.innerText);
  },

  createTodo: function (event) {
    console.log('createTodo', this, event);
  }

});
