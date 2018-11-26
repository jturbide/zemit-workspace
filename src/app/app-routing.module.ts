import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { DashboardPageComponent } from './pages/dashboard/dashboard.component';
import { AboutPageComponent } from './pages/about/about.component';
import { SettingsPageComponent } from './components/settings/settings.page.component';
import { DocsPageComponent } from './pages/docs/docs.component';
import { NotFoundPageComponent } from './pages/not-found/not-found.component';
import { ContextPageComponent } from './components/context/context.component';
import { ContextStructurePageComponent } from './components/context/structure/context-structure.component';
import { ContextStylePageComponent } from './components/context/style/context-style.component';
import { ContextEventsPageComponent } from './components/context/events/context-events.component';
import { ContextPreviewPageComponent } from './components/context/preview/context-preview.component';

const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'dashboard', component: DashboardPageComponent },
	{ path: 'about', component: AboutPageComponent },
	{ path: 'settings', component: SettingsPageComponent },
	{ path: 'docs', component: DocsPageComponent },
	{ path: 'context', component: ContextPageComponent },
	{ path: 'context/structure', component: ContextStructurePageComponent },
	{ path: 'context/style', component: ContextStylePageComponent },
	{ path: 'context/events', component: ContextEventsPageComponent },
	{ path: 'context/preview', component: ContextPreviewPageComponent },
	{ path: '**', component: NotFoundPageComponent }	
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
