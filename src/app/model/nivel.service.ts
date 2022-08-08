import { Expression } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Profile } from "./profile";


@Injectable({
  providedIn: 'root'
})
export class nivelService {

  NivelExperiencia(profile: Profile): string {

    if (profile.experiencia <= 2) {

      return 'Júnior';
    } if (profile.experiencia  < 5) {
      return 'Pleno'
    } else {
      return 'Sênior'
    }


  }
}
