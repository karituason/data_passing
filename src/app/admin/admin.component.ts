import {Component} from '@angular/core'
import { IUser } from '../model/user.interface';

@Component({
    selector:'au-admin',
    templateUrl:'./admin.component.html'
})

export class AdminComponent{
    users:IUser[];
    
}