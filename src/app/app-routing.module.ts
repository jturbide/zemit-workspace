import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DocsComponent } from './pages/docs/docs.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContextStructureComponent } from './components/context/structure/context-structure.component';
import { ContextStyleComponent } from './components/context/style/context-style.component';
import { ContextEventsComponent } from './components/context/events/context-events.component';
import { ContextPreviewComponent } from './components/context/preview/context-preview.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'settings', component: SettingsComponent },
	{ path: 'docs', component: DocsComponent },
	{ path: 'context/structure', component: ContextStructureComponent },
	{ path: 'context/style', component: ContextStyleComponent },
	{ path: 'context/events', component: ContextEventsComponent },
	{ path: 'context/preview', component: ContextPreviewComponent },
	{ path: '**', component: PageNotFoundComponent }	
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
