import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit { 
 @Input() visible: boolean =false;
 @Input()  notFoundmessage:string= "Nothing Found";
 @Input()  resetLinkMessage:string="Reset";
 @Input()  resetRouterLink:string="/";
  constructor(){}
   ngOnInit(): void {
       
   }

}
