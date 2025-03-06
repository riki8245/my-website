import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations:[
    trigger('isVisibleChanged', [
      state('1' , style({ right: '-1px' })),
      state('0', style({ right: '-450px' })),
      transition('1 => 0', animate('300ms ease-in')),
      transition('0 => 1', animate('300ms ease-out'))
    ])
  ]
})
export class NavbarComponent {
  public ham_state: boolean = false;

  ToggleHamburgerMenu(closed?: boolean): void {
    this.ham_state = closed != undefined ? false : !this.ham_state;
  }
}
