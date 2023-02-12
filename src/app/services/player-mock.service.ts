
import { Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";
import { Jogador } from "../models/jogador";
import { Dados, Response } from "../models/response";

@Injectable({
    providedIn: 'root'
})
export class PlayerMockService {

    private players: Response<Jogador> = {
        pagina: [
            {
                id: "1",
                MVP: 0,
                role: {
                    descricao: "top",
                    id: 'a',
                    nome: "top",
                    status: "Ativo"
                },
                pontuacao: 91,
                ultimaPontuacao: 93,
                time: "losgrandes",
                categoriaJogador: "God",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "SHIN TAE-MIN",
                nick: "HiRit",
                nacionalidade: { 
                    id: "1",
                    nome: "kr",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/hirit.png",
                caminhoAbsoluto: "./assets/img/players/hirit.png",
                bagre: 0,
                status: "Ativo"
            },
            {
                id: "2",
                MVP: 2,
                role: {
                    descricao: "jg",
                    id: 'b',
                    nome: "jg",
                    status: "Ativo"
                },
                pontuacao: 90,
                ultimaPontuacao: 89,
                time: "losgrandes",
                categoriaJogador: "God",
                nacionalidadeId: "2",
                roleId: "b",
                nome: "FILIPE BROMBILLA",
                nick: "Ranger",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/ranger.png",
                caminhoAbsoluto: "./assets/img/players/ranger.png",
                bagre: 1,
                status: "Ativo"
            },
            {
                id: "3",
                MVP: 1,
                role: {
                    descricao: "mid",
                    id: 'c',
                    nome: "mid",
                    status: "Ativo"
                },
                pontuacao: 90,
                ultimaPontuacao: 92,
                time: "losgrandes",
                categoriaJogador: "God",
                nacionalidadeId: "1",
                roleId: "c",
                nome: "TAEHUN KIM",
                nick: "Lava",
                nacionalidade: { 
                    id: "1",
                    nome: "kr",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/lava.png",
                caminhoAbsoluto: "./assets/img/players/lava.png",
                bagre: 0,
                status: "Ativo"
            },
            {
                id: "4",
                MVP: 2,
                role: {
                    descricao: "adc",
                    id: 'd',
                    nome: "adc",
                    status: "Ativo"
                },
                pontuacao: 89,
                ultimaPontuacao: 80,
                time: "losgrandes",
                categoriaJogador: "Bom",
                nacionalidadeId: "",
                roleId: "",
                nome: "LUCAS FENSTERSEIFER",
                nick: "Netuno",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/netuno.png",
                caminhoAbsoluto: "./assets/img/players/netuno.png",
                bagre: 1,
                status: "Ativo"
            },
            {
                id: "5",
                MVP: 0,
                role: {
                    descricao: "sup",
                    id: "e",
                    nome: "sup",
                    status: "Ativo"
                },
                pontuacao: 82,
                ultimaPontuacao: 71,
                time: "losgrandes",
                categoriaJogador: "Bom",
                nacionalidadeId: "2",
                roleId: "e",
                nome: "VINICIUS VIANA",
                nick: "zay",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/zay.png",
                caminhoAbsoluto: "./assets/img/players/zay.png",
                bagre: 1,
                status: "Ativo"
            },
            {
                id: "6",
                MVP: 0,
                role: {
                    descricao: "coach",
                    id: "f",
                    nome: "coach",
                    status: "Ativo"
                },
                pontuacao: 92,
                ultimaPontuacao: 92,
                time: "losgrandes",
                categoriaJogador: "God",
                nacionalidadeId: "1",
                roleId: "f",
                nome: "Son Seok-hee",
                nick: "StarDust",
                nacionalidade: { 
                    id: "1",
                    nome: "kr",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/stardust.png",
                caminhoAbsoluto: "./assets/img/players/stardust.png",
                bagre: 0,
                status: "Ativo"
            }
        ],
        dados: {} as Dados
    }

    private dreamTeam: Response<Jogador> = {
        pagina: [
            {
                id: "1",
                MVP: 0,
                role: {
                    descricao: "top",
                    id: 'a',
                    nome: "top",
                    status: "Ativo"
                },
                pontuacao: 94,
                ultimaPontuacao: 94,
                time: "kabum",
                categoriaJogador: "God",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "GYUJUN HAN",
                nick: "Lonely",
                nacionalidade: { 
                    id: "1",
                    nome: "kr",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/lonely.png",
                caminhoAbsoluto: "./assets/img/players/lonely.png",
                bagre: 0,
                status: "Ativo"
            },
            {
                id: "2",
                MVP: 2,
                role: {
                    descricao: "jg",
                    id: 'b',
                    nome: "jg",
                    status: "Ativo"
                },
                pontuacao: 91,
                ultimaPontuacao: 91,
                time: "red",
                categoriaJogador: "God",
                nacionalidadeId: "2",
                roleId: "b",
                nome: "GABRIEL LEMOS",
                nick: "Aegis",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/aegis.png",
                caminhoAbsoluto: "./assets/img/players/aegis.png",
                bagre: 1,
                status: "Ativo"
            },
            {
                id: "3",
                MVP: 1,
                role: {
                    descricao: "mid",
                    id: 'c',
                    nome: "mid",
                    status: "Ativo"
                },
                pontuacao: 90,
                ultimaPontuacao: 92,
                time: "losgrandes",
                categoriaJogador: "God",
                nacionalidadeId: "1",
                roleId: "c",
                nome: "TAEHUN KIM",
                nick: "Lava",
                nacionalidade: { 
                    id: "1",
                    nome: "kr",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/lava.png",
                caminhoAbsoluto: "./assets/img/players/lava.png",
                bagre: 0,
                status: "Ativo"
            },
            {
                id: "4",
                MVP: 2,
                role: {
                    descricao: "adc",
                    id: 'd',
                    nome: "adc",
                    status: "Ativo"
                },
                pontuacao: 93,
                ultimaPontuacao: 93,
                time: "red",
                categoriaJogador: "God",
                nacionalidadeId: "",
                roleId: "",
                nome: "ALEXANDRE DOS SANTOS",
                nick: "TitaN",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/titan.png",
                caminhoAbsoluto: "./assets/img/players/titan.png",
                bagre: 1,
                status: "Ativo"
            },
            {
                id: "5",
                MVP: 0,
                role: {
                    descricao: "sup",
                    id: "e",
                    nome: "sup",
                    status: "Ativo"
                },
                pontuacao: 91,
                ultimaPontuacao: 91,
                time: "red",
                categoriaJogador: "God",
                nacionalidadeId: "2",
                roleId: "e",
                nome: "WONYOUNG CHOI",
                nick: "Kuri",
                nacionalidade: { 
                    id: "1",
                    nome: "kr",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/kuri.png",
                caminhoAbsoluto: "./assets/img/players/kuri.png",
                bagre: 1,
                status: "Ativo"
            },
            {
                id: "6",
                MVP: 0,
                role: {
                    descricao: "coach",
                    id: "f",
                    nome: "coach",
                    status: "Ativo"
                },
                pontuacao: 92,
                ultimaPontuacao: 92,
                time: "losgrandes",
                categoriaJogador: "God",
                nacionalidadeId: "1",
                roleId: "f",
                nome: "Son Seok-hee",
                nick: "StarDust",
                nacionalidade: { 
                    id: "1",
                    nome: "kr",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/stardust.png",
                caminhoAbsoluto: "./assets/img/players/stardust.png",
                bagre: 0,
                status: "Ativo"
            }
        ],
        dados: {} as Dados
    }

    getTeamPlayers(teamAlias: string): Observable<Jogador[]> {
        return of(this.players)
            .pipe(map(({pagina}) => pagina))
    }

    getDreamTeam(): Observable<Jogador[]> {
        return of(this.dreamTeam)
            .pipe(map(({pagina}) => pagina))
    }
}