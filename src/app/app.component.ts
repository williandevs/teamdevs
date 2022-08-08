import { ProfileService } from './model/profile.service';
import { Profile } from './model/profile';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Teamdevs';


  profilesSelecionado!: Profile;


  profiles!: Profile[];


constructor(
  private profileService: ProfileService,
){}

  ngOnInit(){
    this.profiles = this.profileService.getProfiles()
   }


  clicouNoPerfil(profile: Profile) {
    this.profilesSelecionado = profile;
  }
}
