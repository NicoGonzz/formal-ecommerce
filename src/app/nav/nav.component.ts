import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

      activeMenu = false;

      private sub$!: Subscription;


      constructor (

      ){}

      ngOnInit(): void{
        /*this.storeService.myCart$.subscribe(products => {
            this.counter = products.length;
        })*/
      }

      toggleMenu() {
        this.activeMenu = !this.activeMenu;
      }





}
