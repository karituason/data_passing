import {Component} from '@angular/core'
import { IUser } from '../model/user.interface';

@Component({
    selector:'au-user',
    templateUrl:'user.component.html'
})

export class UserComponent{
    user:IUser;
    username:string;

}