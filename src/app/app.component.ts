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


profilesSelecionado: Profile | undefined;


profiles: Profile[] | undefined;


constructor(
  private profileService: ProfileService,
){}

  ngOnInit(){
    this.profiles = this.profileService.getProfile()
   }


  clicouNoPerfil(profile: Profile) {
    this.profilesSelecionado = profile;
  }
}
