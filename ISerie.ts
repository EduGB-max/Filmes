/* eslint-disable eol-last */
export interface Iserie{
  nome: string;
  lancamento: string;
  temporada: number;
  classificacao: number;
  cartaz: string;
  streaming:string;
  generos: string[];
  pagina?: string; //** a ? indica que o campo nao é obrigatorio*/
  favorito: boolean;
}
