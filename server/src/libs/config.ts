const baseHosts = {
  // development
  development: {
    baseHost: 'http://localhost:3000/',
    uploadPath: './',
    domain: 'www.giibee.com',
  },

  // production
  production: {
    baseHost: 'http://app.api',
    uploadPath: './',
    domain: 'www.giibee.com',
  },
};

export { baseHosts };
