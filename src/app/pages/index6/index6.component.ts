import { Component } from '@angular/core';
import { MoveDirection, ClickMode, HoverMode, OutMode } from "tsparticles-engine";
import { IParticlesProps } from 'ng-particles';
import { Container,Engine  } from 'tsparticles';

@Component({
  selector: 'app-index6',
  templateUrl: './index6.component.html',
  styleUrls: ['./index6.component.scss']
})
export class Index6Component {
  currentSection = 'home';
  id = "tsparticles";
  particlesOptions: Partial<IParticlesProps> | undefined;
  private particlesContainer!: Container;
  
  ngOnInit(): void {

    this.initParticles();
  }

  ngOnDestroy(): void {
    this.destroyParticles();
  }

  private initParticles(): void { 

    this.particlesOptions = {
      background: {
        color: {
          value: "#0d47a1",
        },
      },
      fpsLimit: 120,
      interactivity: {
        detect_on: "canvas",
        events: {
          onClick: {
            enable: true,
            mode: ClickMode.push,
          },
          onHover: {
            enable: true,
            mode: HoverMode.repulse,
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
          },
          push: {
            particles_nb: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 2,
          straight: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 30,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
          stroke: {
           width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100
          }
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    config_demo: {
      hide_card: false,
      background_color: "#b61924",
      background_image: "",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover"
    }
    };
    const engine = new Engine();

    this.particlesContainer = new Container(engine,'home', this.particlesOptions);
  }

  private destroyParticles(): void {
    if (this.particlesContainer) {
      this.particlesContainer.destroy();
    }
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

  particlesUrl = "http://foo.bar/particles.json";



}

