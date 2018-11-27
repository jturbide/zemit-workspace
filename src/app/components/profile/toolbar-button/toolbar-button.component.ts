import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from "@angular/material";
import { AppSettings } from '@shared/settings';
import { AppSettingsService } from '@shared/settings.service';
import { environment } from '@env/environment';

@Component({
	selector: 'we-profile-toolbar-button',
	templateUrl: './toolbar-button.component.html',
	styleUrls: ['./toolbar-button.component.scss']
})
export class ProfileToolbarButtonComponent implements OnInit {
	
	public settings: AppSettings;
	
	constructor(
		private dialog: MatDialog,
		private appSettingsService: AppSettingsService
	) {
		
	}
	
	ngOnInit() {
		
		console.log(environment);
		
		this.appSettingsService.getAll().subscribe(settings => {
			this.settings = settings;
		});
	}
	
	openSignInDialog() {
		
		const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
        	id: 1
        };

        const dialogRef = this.dialog.open(ProfileToolbarButtonDialogSignInComponent, dialogConfig);
        
        dialogRef.afterClosed().subscribe(data => {
        	this.settings.isConnected = true;
        	console.log(data);
        });
	}

}

@Component({
	selector: 'we-profile-toolbar-button-dialog-sign-in',
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
        	value: 'test'
        });
    }

    close() {
        this.dialogRef.close();
    }

}