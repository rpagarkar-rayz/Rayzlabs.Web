import { Component } from '@angular/core';

@Component({
  selector: 'app-index4',
  templateUrl: './index4.component.html',
  styleUrls: ['./index4.component.scss']
})
export class Index4Component {
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
}
