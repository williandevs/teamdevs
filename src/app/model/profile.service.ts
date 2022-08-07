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
      developer: 'Programador Angular Iniciante',
      responsibility: 'Criação, otimização e desenvolvimento de sites institucionais. Desenvolvedor de Apps Ionic',
      languages: 'Html, Css, Typescript, Angular',
    },
    {
      name: 'Samanta',
      image: 'assets/img/samanta.png',
      developer: 'UI/UX',
      responsibility: 'Designer e responsável pela criação de logotipos, logomarcas e identidade visual.',
      languages: 'UX/UI',
    },
    {
      name: 'Colos',
      image: 'assets/img/carlos.png',
      developer: 'Progamador JAVA',
      responsibility: 'Programador e responsável pelas aréas de softwares e programação para web.',
      languages: 'JAVA, Spring-boot',
    },
    {
      name: 'Jose',
      image: 'assets/img/jose.png',
      developer: 'Marketing Digital',
      responsibility: 'Campanhas Google Ads, Facebook Ads e Instagram Ads. Resultados imediatos.',
      languages: 'Google Ads, Facebook Ads ',
    },
    {
      name: 'Gustavo',
      image: 'assets/img/gustavo.png',
      developer: 'Desenvolvendor Fluter',
      responsibility: 'Criação é desenvolvimento de applicaçãa em angular',
      languages: 'Fluter ',
    },
  ]


  getProfile (): Profile[] {
    return this.profiles;
  }

}
