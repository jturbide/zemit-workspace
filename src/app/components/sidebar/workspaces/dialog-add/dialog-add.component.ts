import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
	selector: 'zm-sidebar-workspaces-dialog-add',
	templateUrl: './dialog-add.component.html',
	styleUrls: ['./dialog-add.component.scss']
})
export class SidebarWorkspacesDialogAddComponent implements OnInit {

	public data: object;

	constructor(
		private dialogRef: MatDialogRef<SidebarWorkspacesDialogAddComponent>,
		@Inject(MAT_DIALOG_DATA) data: Object
	) {

		this.data = data;
	}

	ngOnInit() {

	}

	create() {
		this.dialogRef.close(this.data);
	}

	update() {
		this.dialogRef.close(this.data);
	}

	cancel() {
		this.dialogRef.close();
	}

}
