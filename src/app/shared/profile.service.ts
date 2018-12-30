import { Injectable } from '@angular/core';
import { User } from '@models/user.model';
import * as faker from 'faker';

@Injectable({
	providedIn: 'root'
})
export class ProfileService {
	
	private currentUser: User = null;

	constructor(
		
	) {
		
	}
	
	getCurrentUser() {
		
		if(this.currentUser === null) {
			this.currentUser = this.getRandom();
		}
		
		return this.currentUser;
	}
	
	getRandom() {
		
		let user = new User();
		user.avatar = faker.image.avatar();
		user.email = faker.internet.email();
		user.firstName = faker.name.firstName();
		user.lastName = faker.name.lastName();
		user.isDeleted = faker.random.boolean();
		user.createdAt = faker.date.past();
		user.updatedAt = faker.date.recent();
		
		return user;
	}
	
	getAll() {
		
		let users = [];
		for(let i = 0; i < 10; i++) {
			let user = this.getRandom();
			users.push(user);
		}
		
		return users;
	}
}
