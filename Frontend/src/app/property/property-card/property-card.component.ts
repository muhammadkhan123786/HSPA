import {Component} from '@angular/core';

@Component({
selector:'app-property-card',
//template: '',
templateUrl:'property-card.component.html',
//styles:['']
styleUrls:[
  'property-card.component.css'
]
})

export class PropertyCardComponent{
   Property: any = {
     "id":1,
     "Type":"House",
     "Price":120000,
     "Name":"Khan House Lahore. "

   }


}
