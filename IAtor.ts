/* eslint-disable eol-last */
export interface IAtor{
  nome: string;
  idade: string;
  classificacao: number;
  foto: string;
  pagina?: string; //** a ? indica que o campo nao é obrigatorio*/
  favorito: boolean;
}
