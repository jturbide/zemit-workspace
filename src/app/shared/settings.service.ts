import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { AppSettings } from "@shared/settings";

@Injectable()
export class AppSettingsService {
    
    public settings: AppSettings = null;
    
    getAll(): Observable<AppSettings> {
        
        if(!this.settings) {
            this.settings = new AppSettings();
        }
        
        return Observable.of<AppSettings>(this.settings);
    }
    
    private extractData(res: Response) {
        
        let body = res.json();
        return body || {};
    }
}