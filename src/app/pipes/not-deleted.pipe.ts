import { Pipe, PipeTransform } from '@angular/core';
import { ModelDefault } from '@models/model.default';

@Pipe({
	name: 'notDeleted'
})
export class NotDeletedPipe implements PipeTransform {

	transform(list: Array<ModelDefault>, args?: any): Array<ModelDefault> {

		list = list.filter(item => {
			return item.isDeleted !== true;
		});

		return list;
	}

}
