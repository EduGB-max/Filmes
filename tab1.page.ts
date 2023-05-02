import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },

    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    },

    {
      nome: 'O show de Truman',
      lancamento: '30/10/98 (BR)',
      duracao: '1h43',
      classificacao: 9,
      cartaz: 'https://upload.wikimedia.org/wikipedia/pt/thumb/8/85/TheTrumanShow.jpg/245px-TheTrumanShow.jpg',
      generos: ['Drama', 'Comédia'],
      pagina: '/truman',
      favorito: false
    },

    {
      nome: 'Requiem for a dream',
      lancamento: '2/11/2001 (BR)',
      duracao: '1h42',
      classificacao: 10,
      cartaz: 'https://m.media-amazon.com/images/I/71-b2P2qoeL._AC_SY879_.jpg',
      generos: ['Drama', 'Psicológico'],
      pagina: '/requiem',
      favorito: true
    },

    {
      nome: 'Matrix',
      lancamento: '21/5/99 (BR)',
      duracao: '2h16',
      classificacao: 10,
      cartaz: 'https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG',
      generos: ['Acão', 'Ficção Científica'],
      pagina: '/requiem',
      favorito: true
    }

  ];

}
