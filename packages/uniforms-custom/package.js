Package.describe({
  name: 'janmp:uniforms-custom',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('2.5.3');
  api.use('ecmascript');
  api.use('typescript');
  api.mainModule('uniforms-custom.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('uniforms-custom');
  api.mainModule('uniforms-custom-tests.js');
});
