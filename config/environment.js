/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'project',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' https://cdn.mxpnl.com", // Allow scripts
      'font-src': "'self' https://fonts.gstatic.com", // Allow fonts to be loaded
      'connect-src': "'self' http://dev.manage.fahlo.me https://dev.manage.fahlo.me", // Allow data (ajax/websocket)
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com", // Allow inline styles and loaded CSS
      'media-src': "'self'"
    }
  };

  ENV['simple-auth'] = {
    crossOriginWhitelist: ['https://dev.manage.fahlo.me', 'http://dev.manage.fahlo.me'],
    authorizer: 'authorizer:custom'
  };

  ENV.FIXTURES = {
    enabled: true
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = '/';
    ENV.locationType = 'none';
  }

  return ENV;
};
