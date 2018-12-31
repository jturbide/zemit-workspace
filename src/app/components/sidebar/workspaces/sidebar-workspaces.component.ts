import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '@components/sidebar/sidebar-content.component';
import { SidebarWorkspacesDialogAddComponent } from '@components/sidebar/workspaces/dialog-add/dialog-add.component';
import { SidebarWorkspacesDialogRemoveComponent } from '@components/sidebar/workspaces/dialog-remove/dialog-remove.component';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { WorkspaceService } from "@shared/workspace.service";
import { Workspace } from "@models/workspace.model";
import { Router } from "@angular/router"

@Component({
	selector: 'zm-sidebar-workspaces',
	templateUrl: './sidebar-workspaces.component.html',
	styleUrls: ['./sidebar-workspaces.component.scss']
})
export class SidebarWorkspacesComponent implements OnInit, SidebarComponent {

	public workspaces: Array<Workspace> = [];

	constructor(
		private dialog: MatDialog,
		private workspaceService: WorkspaceService,
		private router: Router
	) {
		
	}

	ngOnInit() {
		
		this.workspaces = this.workspaceService.getAll();
	}
	
	loadWorkspace(workspace: Workspace) {
		
		this.router.navigate(['/context', workspace.getId()])
	}
	
	openWorkspaceAddDialog(workspace: Workspace = null) {
		
		const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = true;
        dialogConfig.data = {
        	isNew: workspace === null,
        	workspace: workspace || new Workspace()
        };

        const dialogRef = this.dialog.open(SidebarWorkspacesDialogAddComponent, dialogConfig);
        
        dialogRef.afterClosed().subscribe(data => {
        	
        	if(!data) {
        		return;
        	}
        	
        	if(data.isNew) {
        		this.workspaces.push(data.workspace);
        	}
        });
	}
	
	openWorkspaceRemoveDialog(workspace: Workspace) {
		
		const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = true;
        dialogConfig.data = {
        	workspace: workspace
        };

        const dialogRef = this.dialog.open(SidebarWorkspacesDialogRemoveComponent, dialogConfig);
        
        dialogRef.afterClosed().subscribe(data => {
        	
        	if(!data) {
        		return;
        	}
        });
	}

}
