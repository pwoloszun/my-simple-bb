var templatesLoader = (function () {
  var cachedTemplates = {};

  return {
    get: function (templateId) {
      var path = templateId;
      var template = cachedTemplates[path];
      if (!template) {
        throw new Error('Undefined template: ' + path);
      }
      return template;
    },
    load: function () {
      $('head script[type="text/x-handlebars-template"]').each(function () {
        cachedTemplates[this.id] = this.innerText;
      });
    }
  };
})();

// TODO: load templates
templatesLoader.load();
