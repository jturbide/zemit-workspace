import {ModelDefault} from '@models/model.default';

export class Workspace extends ModelDefault {

	title: string = null;
	desc: string = null;

	sections: Array<Object> = [];
	settings: Object = {};

	isValid(): boolean {

		return this.title && this.title.length > 0;
	}

}
