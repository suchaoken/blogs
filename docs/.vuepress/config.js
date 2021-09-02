const moment =require('moment')
module.exports = {
  base:'/blogs/',
  title:'苏钞垦的blogs',
  description:'苏钞垦的博客',
  head:[
    ['link',{rel:'icon',href:'favicon.ico'}],
    ['meta',{name:'author',content:'苏钞垦'}],
  ],
   themeConfig: {
      // navbar: false
        lastUpdated: 'Last Updated', // string | boolean
        logo: '/assets/img/logo.png',
            nav: [
              { text: 'Home', link: '/' },
              { text: 'About', link: '/about' },
              { text: 'External', link: 'https://google.com' },
              {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                  { text: 'Chinese', link: '/language/chinese/' },
                  { text: 'Japanese', link: '/language/japanese/' }
                ]
              }
            ]
          
      },
      plugins: [
        [
          '@vuepress/last-updated',
          {
            transformer: (timestamp, lang) => {
              // 不要忘了安装 moment
              moment.locale(lang)
              return moment(timestamp).format('LLLL')
            }
          }
        ]
      ]
       
  }