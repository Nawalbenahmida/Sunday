import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  listMenu: any;
  iconMenuClose: any;
  iconMenuOpen: any;

  constructor() { }

  ngOnInit() {
  }

  burgerMenuClick() {
    this.listMenu = document.getElementsByClassName('navList',) as HTMLCollectionOf<HTMLElement>;
    this.iconMenuClose = document.querySelector('.closeMenu') as HTMLElement | null;
    this.iconMenuOpen = document.querySelector('.openMenu') as HTMLElement | null;

    for (let i = 0; i < this.listMenu.length; i++) {
      if (this.listMenu[i].style.display == "none") {
        this.listMenu[i].style.display = 'block';
        this.iconMenuClose.style.display = 'block';
        this.iconMenuOpen.style.display = 'none';
      } else {
        this.closeBurgerMenuClick()
      }
    }
  }


  closeBurgerMenuClick() {
    for (let i = 0; i < this.listMenu.length; i++) {
      this.iconMenuClose.style.display = "none";
      this.iconMenuOpen.style.display = "block";
      this.listMenu[i].style.display = 'none';

    }
  }








}
