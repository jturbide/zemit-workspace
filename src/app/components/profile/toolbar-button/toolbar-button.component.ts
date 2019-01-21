import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {AppSettings} from '@shared/settings';
import {AppSettingsService} from '@shared/settings.service';
import {environment} from '@env/environment';
import {ProfileService} from '@shared/profile.service';
import {User} from '@models/user.model';

@Component({
	selector: 'zm-profile-toolbar-button',
	templateUrl: './toolbar-button.component.html',
	styleUrls: ['./toolbar-button.component.scss']
})
export class ProfileToolbarButtonComponent implements OnInit {

	public settings: AppSettings;
	public currentUser: User = null;

	constructor(
		private dialog: MatDialog,
		private appSettingsService: AppSettingsService,
		private profileService: ProfileService
	) {

	}

	ngOnInit() {

		console.log(environment);

		this.currentUser = this.profileService.getCurrentUser();

		this.appSettingsService.getAll().subscribe(settings => {
			this.settings = settings;
		});
	}

	openSignInDialog() {

		const dialogConfig = new MatDialogConfig();

		dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;
		dialogConfig.data = {};

		const dialogRef = this.dialog.open(ProfileToolbarButtonDialogSignInComponent, dialogConfig);

		dialogRef.afterClosed().subscribe(data => {

			if (!data) {
				return;
			}

			if (data.signIn) {
				this.settings.isConnected = true;
			}
		});
	}

	openSignOutDialog() {

		const dialogConfig = new MatDialogConfig();

		dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;
		dialogConfig.data = {};

		const dialogRef = this.dialog.open(ProfileToolbarButtonDialogSignOutComponent, dialogConfig);

		dialogRef.afterClosed().subscribe(data => {

			if (!data) {
				return;
			}

			if (data.signOut) {
				this.signOut();
			}
		});
	}

	signOut() {

		this.settings.isConnected = false;
	}

}

@Component({
	selector: 'zm-profile-toolbar-button-dialog-sign-in',
	templateUrl: './dialog-sign-in/dialog.sign-in.html',
	styleUrls: ['./dialog-sign-in/dialog.sign-in.scss']
})
export class ProfileToolbarButtonDialogSignInComponent implements OnInit {

	constructor(
		private dialogRef: MatDialogRef<ProfileToolbarButtonDialogSignInComponent>,
		@Inject(MAT_DIALOG_DATA) data
	) {

	}

	ngOnInit() {

	}

	connect() {
		this.dialogRef.close({
			signIn: true
		});
	}

	close() {
		this.dialogRef.close();
	}

}

@Component({
	selector: 'zm-profile-toolbar-button-dialog-sign-out',
	templateUrl: './dialog-sign-out/dialog.sign-out.html',
	styleUrls: ['./dialog-sign-out/dialog.sign-out.scss']
})
export class ProfileToolbarButtonDialogSignOutComponent implements OnInit {

	constructor(
		private dialogRef: MatDialogRef<ProfileToolbarButtonDialogSignOutComponent>,
		@Inject(MAT_DIALOG_DATA) data
	) {

	}

	ngOnInit() {

	}

	signOut() {
		this.dialogRef.close({
			signOut: true
		});
	}

	cancel() {

		this.dialogRef.close();
	}

}
