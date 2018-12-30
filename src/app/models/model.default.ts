export class ModelDefault {
	
	id: number = null;
	
	isDeleted: boolean = false;
	createdAt: Date;
	updatedAt: Date;
	
	getId() {
		
		return this.id;
	};
	
	setId(id: number) {
		
		this.id = id;
	};
	
	isValid() {
		
		return true;
	};
	
	save() {
		
		return new Promise((resolve, reject) => {
			resolve();
		});
	};
	
	delete() {
		
		return new Promise((resolve, reject) => {
			this.isDeleted = true;
			resolve();
		});
	};
}