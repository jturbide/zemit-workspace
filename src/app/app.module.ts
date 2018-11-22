import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Angular Material Components
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';

// Other libraries
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContextTogglerComponent } from './components/context/context-toggler.component';
import { ContextStructureComponent } from './components/context/structure/context-structure.component';
import { ContextStyleComponent } from './components/context/style/context-style.component';
import { ContextEventsComponent } from './components/context/events/context-events.component';
import { ContextPreviewComponent } from './components/context/preview/context-preview.component';
import { ProfileAccountComponent } from './components/profile/account/profile-account.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarTogglerComponent } from './components/sidebar/sidebar-toggler.component';
import { SidebarContentComponent } from './components/sidebar/sidebar-content.component';
import { SidebarWorkspacesComponent } from './components/sidebar/workspaces/sidebar-workspaces.component';
import { SidebarWidgetsComponent } from './components/sidebar/widgets/sidebar-widgets.component';
import { SidebarMediasComponent } from './components/sidebar/medias/sidebar-medias.component';
import { SidebarDebugComponent } from './components/sidebar/debug/sidebar-debug.component';
import { AboutComponent } from './pages/about/about.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DocsComponent } from './pages/docs/docs.component';
import { BgMoveComponent } from './components/bg-move/bg-move.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		PageNotFoundComponent,
		ContextTogglerComponent,
		ContextStructureComponent,
		ContextStyleComponent,
		ContextEventsComponent,
		ContextPreviewComponent,
		ProfileAccountComponent,
		ToolbarComponent,
		SidebarTogglerComponent,
		SidebarContentComponent,
		SidebarWorkspacesComponent,
		SidebarWidgetsComponent,
		SidebarMediasComponent,
		SidebarDebugComponent,
		AboutComponent,
		SettingsComponent,
		DocsComponent,
		BgMoveComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		MatCheckboxModule,
		MatCheckboxModule,
		MatButtonModule,
		MatInputModule,
		MatAutocompleteModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatRadioModule,
		MatSelectModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatMenuModule,
		MatSidenavModule,
		MatToolbarModule,
		MatListModule,
		MatGridListModule,
		MatCardModule,
		MatStepperModule,
		MatTabsModule,
		MatExpansionModule,
		MatButtonToggleModule,
		MatChipsModule,
		MatIconModule,
		MatProgressSpinnerModule,
		MatProgressBarModule,
		MatDialogModule,
		MatTooltipModule,
		MatSnackBarModule,
		MatTableModule,
		MatSortModule,
		MatPaginatorModule,
		FlexLayoutModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
