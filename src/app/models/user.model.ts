import { ModelDefault } from '@models/model.default';

export class User extends ModelDefault {
    
    avatar: string = null;
    firstName: string = null;
    lastName: string = null;
    email: string = null;
    
    role: string = 'General user';
    
    getCompleteName() : string {
        
        return (this.firstName + ' ' + this.lastName).trim() || this.email;
    };
    
    isValid() : boolean {
        
        return this.email && this.email.length > 0;
    };
}
