import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Page Route
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

// Swiper
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

// Scroll To
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { NgParticlesModule } from "ng-particles";
import { ModalModule } from 'ngx-bootstrap/modal';

// Component
import { IndexComponent } from './index/index.component';
import { Index2Component } from './index2/index2.component';
import { Index3Component } from './index3/index3.component';
import { Index4Component } from './index4/index4.component';
import { Index5Component } from './index5/index5.component';
import { Index6Component } from './index6/index6.component';


@NgModule({
  declarations: [
    IndexComponent,
    Index2Component,
    Index3Component,
    Index4Component,
    Index5Component,
    Index6Component
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ScrollToModule.forRoot(),
    NgxUsefulSwiperModule,
    NgParticlesModule,
    ModalModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
