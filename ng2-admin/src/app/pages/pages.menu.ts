export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'activities',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Atividades', // menu title
            icon: 'ion-bookmark', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'news',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Notícias', // menu title
            icon: 'ion-compose', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'events',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Eventos', // menu title
            icon: 'ion-calendar', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'centerinfo',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Informação', // menu title
            icon: 'ion-settings', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'timeschedule',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Horários', // menu title
            icon: 'ion-clock', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'pricing',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Preçário', // menu title
            icon: 'ion-cash', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'social',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Redes Sociais', // menu title
            icon: 'ion-person-stalker', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'projectservice',
        data: {
          menu: {
            title: 'Projetos e Serviços',
            icon: 'ion-briefcase',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'visits',
        data: {
          menu: {
            title: 'Marcação de Visitas',
            icon: 'ion-clipboard',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'feedback',
        data: {
          menu: {
            title: 'Formulário',
            icon: 'ion-chatbox',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
            {
        path: 'feedbackanswer',
        data: {
          menu: {
            title: 'Feedback de Visitas',
            icon: 'ion-chatbubble-working',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'themes',
        data: {
          menu: {
            title: 'Temas',
            icon: 'ion-lightbulb',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'modules',
        data: {
          menu: {
            title: 'Módulos',
            icon: 'ion-eye',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      // {
      //   path: 'editors',
      //   data: {
      //     menu: {
      //       title: 'Editors',
      //       icon: 'ion-edit',
      //       selected: false,
      //       expanded: false,
      //       order: 100,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'ckeditor',
      //       data: {
      //         menu: {
      //           title: 'CKEditor',
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: 'components',
      //   data: {
      //     menu: {
      //       title: 'Components',
      //       icon: 'ion-gear-a',
      //       selected: false,
      //       expanded: false,
      //       order: 250,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'treeview',
      //       data: {
      //         menu: {
      //           title: 'Tree View',
      //         }
      //       }
      //     }
      //   ]
      // },
      /**{
        path: 'charts',
        data: {
          menu: {
            title: 'Charts',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'chartist-js',
            data: {
              menu: {
                title: 'Chartist.Js',
              }
            }
          }
        ]
      },**/
      // {
      //   path: 'ui',
      //   data: {
      //     menu: {
      //       title: 'UI Features',
      //       icon: 'ion-android-laptop',
      //       selected: false,
      //       expanded: false,
      //       order: 300,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'typography',
      //       data: {
      //         menu: {
      //           title: 'Typography',
      //         }
      //       }
      //     },
      //     {
      //       path: 'buttons',
      //       data: {
      //         menu: {
      //           title: 'Buttons',
      //         }
      //       }
      //     },
      //     {
      //       path: 'icons',
      //       data: {
      //         menu: {
      //           title: 'Icons',
      //         }
      //       }
      //     },
      //     {
      //       path: 'modals',
      //       data: {
      //         menu: {
      //           title: 'Modals',
      //         }
      //       }
      //     },
      //     {
      //       path: 'grid',
      //       data: {
      //         menu: {
      //           title: 'Grid',
      //         }
      //       }
      //     },
      //   ]
      // },
      // {
      //   path: 'forms',
      //   data: {
      //     menu: {
      //       title: 'Form Elements',
      //       icon: 'ion-compose',
      //       selected: false,
      //       expanded: false,
      //       order: 400,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'inputs',
      //       data: {
      //         menu: {
      //           title: 'Form Inputs',
      //         }
      //       }
      //     },
      //     {
      //       path: 'layouts',
      //       data: {
      //         menu: {
      //           title: 'Form Layouts',
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: 'tables',
      //   data: {
      //     menu: {
      //       title: 'Tables',
      //       icon: 'ion-grid',
      //       selected: false,
      //       expanded: false,
      //       order: 500,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'basictables',
      //       data: {
      //         menu: {
      //           title: 'Basic Tables',
      //         }
      //       }
      //     },
      //     {
      //       path: 'smarttables',
      //       data: {
      //         menu: {
      //           title: 'Smart Tables',
      //         }
      //       }
      //     }
      //   ]
      // },
      /** {
         path: 'maps',
         data: {
           menu: {
             title: 'Maps',
             icon: 'ion-ios-location-outline',
             selected: false,
             expanded: false,
             order: 600,
           }
         },
         children: [
           {
             path: 'googlemaps',
             data: {
               menu: {
                 title: 'Google Maps',
               }
             }
           },
           {
             path: 'leafletmaps',
             data: {
               menu: {
                 title: 'Leaflet Maps',
               }
             }
           },
           {
             path: 'bubblemaps',
             data: {
               menu: {
                 title: 'Bubble Maps',
               }
             }
           },
           {
             path: 'linemaps',
             data: {
               menu: {
                 title: 'Line Maps',
               }
             }
           }
         ]
       },*/
      // {
      //   path: '',
      //   data: {
      //     menu: {
      //       title: 'Pages',
      //       icon: 'ion-document',
      //       selected: false,
      //       expanded: false,
      //       order: 650,
      //     }
      //   },
      //   children: [
      //     {
      //       path: ['/login'],
      //       data: {
      //         menu: {
      //           title: 'Login'
      //         }
      //       }
      //     },
      //     {
      //       path: ['/register'],
      //       data: {
      //         menu: {
      //           title: 'Register'
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: '',
      //   data: {
      //     menu: {
      //       title: 'Menu Level 1',
      //       icon: 'ion-ios-more',
      //       selected: false,
      //       expanded: false,
      //       order: 700,
      //     }
      //   },
      //   children: [
      //     {
      //       path: '',
      //       data: {
      //         menu: {
      //           title: 'Menu Level 1.1',
      //           url: '#'
      //         }
      //       }
      //     },
      //     {
      //       path: '',
      //       data: {
      //         menu: {
      //           title: 'Menu Level 1.2',
      //           url: '#'
      //         }
      //       },
      //       children: [
      //         {
      //           path: '',
      //           data: {
      //             menu: {
      //               title: 'Menu Level 1.2.1',
      //               url: '#'
      //             }
      //           }
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   path: '',
      //   data: {
      //     menu: {
      //       title: 'External Link',
      //       url: 'http://akveo.com',
      //       icon: 'ion-android-exit',
      //       order: 800,
      //       target: '_blank'
      //     }
      //   }
      // }
    ]
  }
];
