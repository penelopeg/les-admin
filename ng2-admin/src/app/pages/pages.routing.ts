import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'pages',
    component: Pages,
    children: [
      {
        path: 'news/add',
        loadChildren: 'app/pages/news/add/addnew.module#AddnewModule'
      },
      {
        path: 'news/edit/:id',
        loadChildren: 'app/pages/news/edit/editnews.module#EditnewsModule'
      },
      {
        path: 'events/add',
        loadChildren: 'app/pages/events/add/addevent.module#AddeventModule'
      },
      {
        path: 'events/edit/:id',
        loadChildren: 'app/pages/events/edit/editevent.module#EditeventModule'
      },
      {
        path: 'projectservice/add',
        loadChildren: 'app/pages/projectservice/add/addservice.module#AddserviceModule'
      },
      {
        path: 'projectservice/edit/:id',
        loadChildren: 'app/pages/projectservice/edit/editservice.module#EditserviceModule'
      },
      {
        path: 'modules/add',
        loadChildren: 'app/pages/modules/add/addmodules.module#AddmodulesModule'
      },
      {
        path: 'modules/edit/:id',
        loadChildren: 'app/pages/modules/edit/editmodules.module#EditmodulesModule'
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'visits', loadChildren: 'app/pages/visits/visits.module#VisitsModule' },
      { path: 'modules', loadChildren: 'app/pages/modules/modules.module#ModulesModule' },
      { path: 'themes', loadChildren: 'app/pages/themes/themes.module#ThemesModule' },
      { path: 'projectservice', loadChildren: 'app/pages/projectservice/projectservice.module#ProjectserviceModule' },
      { path: 'feedback', loadChildren: 'app/pages/feedback/feedback.module#FeedbackModule' },
      { path: 'social', loadChildren: 'app/pages/social/social.module#SocialModule' },
      { path: 'pricing', loadChildren: 'app/pages/pricing/pricing.module#PricingModule' },
      { path: 'centerinfo', loadChildren: 'app/pages/centerinfo/centerinfo.module#CenterinfoModule' },
      { path: 'timeschedule', loadChildren: 'app/pages/timeschedule/timeschedule.module#TimescheduleModule' },
      { path: 'events', loadChildren: 'app/pages/events/events.module#EventsModule' },
      { path: 'news', loadChildren: 'app/pages/news/news.module#NewsModule' },
      { path: 'activities', loadChildren: 'app/pages/activities/activities.module#ActivitiesModule' },
      { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' },
      { path: 'editors', loadChildren: 'app/pages/editors/editors.module#EditorsModule' },
      { path: 'components', loadChildren: 'app/pages/components/components.module#ComponentsModule' },
      { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule' },
      { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule' },
      { path: 'forms', loadChildren: 'app/pages/forms/forms.module#FormsModule' },
      { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule' },
      { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
