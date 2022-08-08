import { nivelService } from './nivel.service';
import { Injectable } from "@angular/core";
import { Profile } from "./profile";


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profiles: Profile[] = [

    {
      name: 'willian Figueiredo',
      image: 'assets/img/willian.png',
      experiencia: 2,
      developer: 'Programador Angular Iniciante',
      responsibility: 'Criação, otimização e desenvolvimento de sites institucionais. Desenvolvedor de Apps Ionic',
      languages: 'Html, Css, Typescript, Angular',
    },
    {
      name: 'Samanta',
      experiencia: 4,
      image: 'assets/img/samanta.png',
      developer: 'UI/UX',
      responsibility: 'Designer e responsável pela criação de logotipos, logomarcas e identidade visual.',
      languages: 'UX/UI',
    },
    {
      name: 'Colos',
      experiencia: 5,
      image: 'assets/img/carlos.png',
      developer: 'Progamador JAVA',
      responsibility: 'Programador e responsável pelas aréas de softwares e programação para web.',
      languages: 'JAVA, Spring-boot',
    },
    {
      name: 'Jose',
      experiencia: 6,
      image: 'assets/img/jose.png',
      developer: 'Marketing Digital',
      responsibility: 'Campanhas Google Ads, Facebook Ads e Instagram Ads. Resultados imediatos.',
      languages: 'Google Ads, Facebook Ads ',
    },
    {
      name: 'Gustavo',
      experiencia: 9,
      image: 'assets/img/gustavo.png',
      developer: 'Desenvolvendor Fluter',
      responsibility: 'Criação é desenvolvimento de applicaçãa em angular',
      languages: 'Fluter ',
    },
  ];

constructor(
  private nivelService: nivelService
){}


  getProfiles (): Profile[] {

   this.profiles =  this.profiles.map(profile => {
      profile.nivel = this.nivelService.NivelExperiencia(profile);
      return profile;
    })

    return this.profiles;
  }

}
