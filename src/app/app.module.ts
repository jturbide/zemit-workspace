import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {AppSettingsService} from '@shared/settings.service';
import {PageService} from '@shared/page.service';
// Angular Material Components
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
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
import {FlexLayoutModule} from '@angular/flex-layout';

import {HomePageComponent} from './pages/home/home.component';
import {NotFoundPageComponent} from './pages/not-found/not-found.component';
import {ContextStructurePageComponent} from '@components/context/structure/context-structure.component';
import {ContextStructureToolbarComponent} from '@components/context/structure/toolbar/toolbar.component';
import {ContextStylePageComponent} from '@components/context/style/context-style.component';
import {ContextEventsPageComponent} from '@components/context/events/context-events.component';
import {ContextPreviewPageComponent} from '@components/context/preview/context-preview.component';
import {ProfileAccountComponent, ProfileAccountPageComponent} from '@components/profile/account/profile-account.component';
import {AboutPageComponent} from './pages/about/about.component';
import {DocsPageComponent} from './pages/docs/docs.component';
import {SettingsPageComponent} from '@components/settings/settings.page.component';

import {ContextTogglerComponent} from '@components/context/context-toggler.component';
import {ToolbarComponent} from '@components/toolbar/toolbar.component';
import {SidebarTogglerComponent} from '@components/sidebar/sidebar-toggler.component';
import {SidebarContentComponent} from '@components/sidebar/sidebar-content.component';
import {SidebarWorkspacesComponent} from '@components/sidebar/workspaces/sidebar-workspaces.component';
import {SidebarWidgetsComponent} from '@components/sidebar/widgets/sidebar-widgets.component';
import {SidebarMediasComponent} from '@components/sidebar/medias/sidebar-medias.component';
import {SidebarDebugComponent} from '@components/sidebar/debug/sidebar-debug.component';
import {SettingsComponent} from '@components/settings/settings.component';
import {BgMoveComponent} from '@components/bg-move/bg-move.component';
import {
	ProfileToolbarButtonComponent,
	ProfileToolbarButtonDialogSignInComponent,
	ProfileToolbarButtonDialogSignOutComponent
} from '@components/profile/toolbar-button/toolbar-button.component';
// import { ModalComponent } from '@components/modal/modal.component';
import {PageComponent} from '@components/page/page.component';
import {DocsComponent} from '@components/docs/docs.component';
import {SidebarDirective} from '@components/sidebar/sidebar.directive';
import {ContextPageComponent} from '@components/context/context.component';
import {DashboardPageComponent} from './pages/dashboard/dashboard.component';
import {SidebarWorkspacesDialogAddComponent} from '@components/sidebar/workspaces/dialog-add/dialog-add.component';
import {SidebarWorkspacesDialogRemoveComponent} from '@components/sidebar/workspaces/dialog-remove/dialog-remove.component';
import {NotDeletedPipe} from './pipes/not-deleted.pipe';
import {OrgchartComponent} from '@components/orgchart/orgchart.component';
import {ToolbarContextComponent} from '@components/toolbar/context/context.component';
import {ContextToolbarContextComponent} from '@components/context/toolbar-context/toolbar-context.component';

@NgModule({
	declarations: [
		AppComponent,

		// Pages
		HomePageComponent,
		NotFoundPageComponent,
		ContextStructurePageComponent,
		ContextStylePageComponent,
		ContextEventsPageComponent,
		ContextPreviewPageComponent,
		AboutPageComponent,
		SettingsPageComponent,
		DocsPageComponent,
		ProfileAccountPageComponent,

		// Components
		ContextTogglerComponent,
		ProfileAccountComponent,
		ToolbarComponent,
		SidebarTogglerComponent,
		SidebarContentComponent,
		SidebarWorkspacesComponent,
		SidebarWidgetsComponent,
		SidebarMediasComponent,
		SidebarDebugComponent,
		SettingsComponent,
		DocsComponent,
		BgMoveComponent,
		PageComponent,
		ProfileToolbarButtonComponent,
		ProfileToolbarButtonDialogSignInComponent,
		ProfileToolbarButtonDialogSignOutComponent,
		SidebarDirective,
		ContextPageComponent,
		DashboardPageComponent,
		SidebarWorkspacesDialogAddComponent,
		SidebarWorkspacesDialogRemoveComponent,
		NotDeletedPipe,
		OrgchartComponent,
		ToolbarContextComponent,
		ContextToolbarContextComponent,
		ContextStructureToolbarComponent
		// ModalComponent
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
		FlexLayoutModule,
		FormsModule
	],
	entryComponents: [
		SidebarWorkspacesComponent,
		SidebarMediasComponent,
		SidebarWidgetsComponent,
		ProfileToolbarButtonDialogSignInComponent,
		ProfileToolbarButtonDialogSignOutComponent,
		SidebarWorkspacesDialogAddComponent,
		SidebarWorkspacesDialogRemoveComponent,
		ContextToolbarContextComponent,
		ContextStructureToolbarComponent
	],
	providers: [
		AppSettingsService,
		PageService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
