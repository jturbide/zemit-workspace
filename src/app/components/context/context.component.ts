import {Component} from '@angular/core';
import {PageComponent} from '@components/page/page.component';
import {PageService} from '@shared/page.service';
import {ActivatedRoute} from '@angular/router';
import {Workspace} from '@models/workspace.model';
import {WorkspaceService} from '@shared/workspace.service';
import {ToolbarService} from '@shared/toolbar.service';
import {ContextToolbarContextComponent} from '@components/context/toolbar-context/toolbar-context.component';

@Component({
	selector: 'zm-context',
	templateUrl: './context.component.html',
	styleUrls: ['./context.component.scss']
})
export class ContextPageComponent implements PageComponent {

	public workspace: Workspace = null;

	constructor(
		private pageService: PageService,
		private route: ActivatedRoute,
		private workspaceService: WorkspaceService,
		private toolbarService: ToolbarService
	) {

	}

	ngOnInit() {

		const workspaceId = parseInt(this.route.snapshot.paramMap.get('workspaceId'));
		if (workspaceId) {
			this.workspace = this.workspaceService.findById(workspaceId);
			this.pageService.setTitle(this.workspace.title);
			this.toolbarService.setTools(ContextToolbarContextComponent);
		} else {
			this.pageService.setTitle('Context');
		}
	}

}
