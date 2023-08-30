import { Component } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent {

  ngOnInit(): void {
    window.onload = function loader() {
      setTimeout(() => {
        document.getElementById("preloader")!.style.visibility = "hidden";
        document.getElementById("preloader")!.style.opacity = "0";
      }, 350);
    };
  }
  
}
