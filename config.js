module.exports = {
  siteTitle: 'Eric - Portfolio', // <title>
  manifestName: 'Portfolio',
  manifestShortName: 'Portfolio', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/images/logo.png',
  pathPrefix: `/portfolio/`, // This path is subpath of your hosting https://domain/portfolio
  authorName: 'Eric Conde',
  headings: [
    {
      title: 'Technical Architect'
    },
    {
      title: 'Web Developer'
    },
  ],
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/eaconde',
    },
    {
      icon: 'fa-twitter',
      name: 'Linkedin',
      url: 'https://twitter.com/condelights/',
    },
    {
      icon: 'fa-linkedin',
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/condeeric/',
    },
    {
      icon: 'fa-facebook',
      name: 'Facebook',
      url: 'https://facebook.com/condelights',
    },
    {
      icon: 'fa-envelope-o',
      name: 'Email',
      url: 'mailto:condeeric.dev@gmail.com',
    },
  ],
};
