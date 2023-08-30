import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-index5',
  templateUrl: './index5.component.html',
  styleUrls: ['./index5.component.scss']
})
export class Index5Component {
  currentSection = 'home';

  ngOnInit(): void {
  }

  toggleMenu() {
    document.getElementById('navbarCollapse')?.classList.toggle('show');
  }

  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      navbar?.classList.add('nav-sticky');
      (document.getElementById('back-to-top') as HTMLElement).style.display = "block";
      document.getElementById('page-topbar')?.classList.add('topbar-shadow')
    }
    else {
      navbar?.classList.remove('nav-sticky');
      (document.getElementById('back-to-top') as HTMLElement).style.display = "none";
      document.getElementById('page-topbar')?.classList.remove('topbar-shadow')
    }
  }

  /**
* Section changed method
* @param sectionId specify the current sectionID
*/
  onSectionChange(sectionId: string) {
    console.log(sectionId)
    if (sectionId == 'undefined') {
      this.currentSection = 'home';
    } else {
      this.currentSection = sectionId;
    }
  }

  config: SwiperOptions = {
    pagination: true,
    effect: 'cube',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1,
    direction: 'vertical'
  };

}
