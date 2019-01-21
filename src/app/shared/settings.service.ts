import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/of';
import {AppSettings} from '@shared/settings';

@Injectable()
export class AppSettingsService {

	private settings: AppSettings = null;

	getAll(): Observable<AppSettings> {

		if (!this.settings) {
			this.settings = new AppSettings();
		}

		return Observable.of<AppSettings>(this.settings);
	}

	private extractData(res: Response) {

		const body = res.json();
		return body || {};
	}
}
