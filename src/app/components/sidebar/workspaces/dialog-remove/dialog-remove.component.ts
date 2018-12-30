import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
	selector: 'we-sidebar-workspaces-dialog-remove',
	templateUrl: './dialog-remove.component.html',
	styleUrls: ['./dialog-remove.component.scss']
})
export class SidebarWorkspacesDialogRemoveComponent implements OnInit {

	public data: any;

	constructor(
		private dialogRef: MatDialogRef<SidebarWorkspacesDialogRemoveComponent>,
        @Inject(MAT_DIALOG_DATA) data: any
	) {
		
		this.data = data;
	}

	ngOnInit() {
		
	}
	
	remove() {
		
		this.data.workspace.delete().then(() => {
			
        	this.dialogRef.close(this.data);
		});
    }

    cancel() {
    	
        this.dialogRef.close();
    }

}
