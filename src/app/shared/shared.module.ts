import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// Swiper
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

// component
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { TeamComponent } from './team/team.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PreloaderComponent } from './preloader/preloader.component';

import { ScrollspyDirective } from './scrollspy.directive';

@NgModule({
  declarations: [
    ServiceComponent,
    AboutComponent,
    FeaturesComponent,
    TeamComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
    PreloaderComponent,
    ScrollspyDirective,
  ],
  imports: [
    CommonModule,
    NgxUsefulSwiperModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PreloaderComponent,
    ServiceComponent,
    AboutComponent,
    FeaturesComponent,
    TeamComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
    ScrollspyDirective,
    
  ]
})
export class SharedModule { }
