import { Profile } from './model/profile';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Teamdevs';


  profile: Profile = {
    name: 'willian',
    developer: 'Front-End',
    responsibility: 'Criação, otimização e desenvolvimento de sites institucionais. Desenvolvedor de Apps Ionic',
    languages: 'Html, Css, Typescript, Angular',
  };



  profiles:
  
  
  
  
  ngOnInit(): void { }


  clicouNoPerfil() {
    this.profile.name = "oi";
  }
}
