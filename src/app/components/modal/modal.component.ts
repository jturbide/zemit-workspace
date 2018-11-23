// import { Component, OnInit, Inject, Input } from '@angular/core';
// import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';

// @Component({
// 	selector: 'de-modal',
// 	templateUrl: './modal.component.html',
// 	styleUrls: ['./modal.component.scss']
// })
// export class ModalComponent implements OnInit {

// 	constructor(
// 		public component: Component,
// 		public config: MatDialogConfig,
// 	) {
		
// 		// this.dialog = MatDialog<component>;
// 	}
	
// 	ngOnInit() {
		
// 	}
	
// 	open() {
// 		this.dialogRef = this.dialog.open(ProfileToolbarButtonDialogSignIn, this.config);

// 		dialogRef.afterClosed().subscribe(result => {
// 			console.log('The dialog was closed');
// 			this.animal = result;
// 		});
// 	}
	
// 	close() {
// 		this.dialogRef.close();
// 	}
	
// 	onNoClick(): void {
// 		this.dialogRef.close();
// 	}

// }
