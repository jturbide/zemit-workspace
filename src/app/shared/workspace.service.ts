import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { Workspace } from "@models/workspace.model";
import * as faker from 'faker';

@Injectable({
	providedIn: 'root'
})
export class WorkspaceService {
	
	constructor(
		
	) {
		
	}
	
	getRandom() {
		
		let workspace = new Workspace();
		workspace.id = faker.random.number();
		workspace.title = faker.company.companyName();
		workspace.desc = faker.lorem.paragraph();
		workspace.isDeleted = faker.random.boolean();
		workspace.createdAt = faker.date.past();
		workspace.updatedAt = faker.date.recent();
		workspace.sections = [];
		workspace.settings = {};
		
		return workspace;
	}
	
	getAll() {
		
		let workspaces = [];
		for(let i = 0; i < 10; i++) {
			let workspace = this.getRandom();
			workspaces.push(workspace);
		}
		
		return workspaces;
	}
	
	findById(id: number) {
		
		return this.getRandom();
	}
}
