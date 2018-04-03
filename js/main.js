$(function () {
  var appComponent = new AppComponent();
  $('.js-app').html(appComponent.$el);
  appComponent.render();
});
