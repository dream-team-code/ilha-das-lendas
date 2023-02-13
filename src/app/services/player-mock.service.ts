
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
                MVP: 1,
                role: {
                    descricao: "top",
                    id: 'a',
                    nome: "top",
                    status: "Ativo"
                },
                pontuacao: 93,
                ultimaPontuacao: 91,
                time: "los-grandes",
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
                pontuacao: 91,
                ultimaPontuacao: 90,
                time: "los-grandes",
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
                ultimaPontuacao: 90,
                time: "los-grandes",
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
                MVP: 3,
                role: {
                    descricao: "adc",
                    id: 'd',
                    nome: "adc",
                    status: "Ativo"
                },
                pontuacao: 91,
                ultimaPontuacao: 89,
                time: "los-grandes",
                categoriaJogador: "God",
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
                pontuacao: 86,
                ultimaPontuacao: 82,
                time: "los-grandes",
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
                pontuacao: 94,
                ultimaPontuacao: 94,
                time: "los-grandes",
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
            },
            //Red
            {
                id: "1",
                MVP: 1,
                role: {
                    descricao: "top",
                    id: 'a',
                    nome: "top",
                    status: "Ativo"
                },
                pontuacao: 85,
                ultimaPontuacao: 85,
                time: "red-canids",
                categoriaJogador: "Bom",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "Felipe Boal",
                nick: "Boal",
                nacionalidade: { 
                    id: "1",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/Boal.png",
                caminhoAbsoluto: "./assets/img/players/Boal.png",
                bagre: 0,
                status: "Ativo"
            },
            {
                id: "1",
                MVP: 1,
                role: {
                    descricao: "jg",
                    id: 'a',
                    nome: "jg",
                    status: "Ativo"
                },
                pontuacao: 91,
                ultimaPontuacao: 91,
                time: "red-canids",
                categoriaJogador: "God",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "GABRIEL LEMOS",
                nick: "Aegis",
                nacionalidade: { 
                    id: "1",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/aegis.png",
                caminhoAbsoluto: "./assets/img/players/aegis.png",
                bagre: 0,
                status: "Ativo"
            },
            {
                id: "1",
                MVP: 1,
                role: {
                    descricao: "mid",
                    id: 'a',
                    nome: "mid",
                    status: "Ativo"
                },
                pontuacao: 82,
                ultimaPontuacao: 84,
                time: "red-canids",
                categoriaJogador: "Bom",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "Adriano Perassoli",
                nick: "Avenger",
                nacionalidade: { 
                    id: "1",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/Avenger.png",
                caminhoAbsoluto: "./assets/img/players/Avenger.png",
                bagre: 1,
                status: "Ativo"
            },
            {
                id: "1",
                MVP: 3,
                role: {
                    descricao: "adc",
                    id: 'a',
                    nome: "adc",
                    status: "Ativo"
                },
                pontuacao: 92,
                ultimaPontuacao: 93,
                time: "red-canids",
                categoriaJogador: "God",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "Alexandre Santos",
                nick: "Titan",
                nacionalidade: { 
                    id: "1",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/titan.png",
                caminhoAbsoluto: "./assets/img/players/titan.png",
                bagre: 1,
                status: "Ativo"
            },
            {
                id: "1",
                MVP: 0,
                role: {
                    descricao: "sup",
                    id: 'a',
                    nome: "sup",
                    status: "Ativo"
                },
                pontuacao: 91,
                ultimaPontuacao: 91,
                time: "red-canids",
                categoriaJogador: "God",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "Wonyoung Choi",
                nick: "Kuri",
                nacionalidade: { 
                    id: "1",
                    nome: "kr",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/kuri.png",
                caminhoAbsoluto: "./assets/img/players/kuri.png",
                bagre: 0,
                status: "Ativo"
            },
            {
                id: "1",
                MVP: 0,
                role: {
                    descricao: "coach",
                    id: 'a',
                    nome: "coach",
                    status: "Ativo"
                },
                pontuacao: 86,
                ultimaPontuacao: 86,
                time: "red-canids",
                categoriaJogador: "Bom",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "Calisto Coelho",
                nick: "Coelho",
                nacionalidade: { 
                    id: "1",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/coelho.png",
                caminhoAbsoluto: "./assets/img/players/coelho.png",
                bagre: 0,
                status: "Ativo"
            },
            //KABUM
            {
                id: "1",
                MVP: 2,
                role: {
                    descricao: "top",
                    id: 'a',
                    nome: "top",
                    status: "Ativo"
                },
                pontuacao: 92,
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
                id: "1",
                MVP: 0,
                role: {
                    descricao: "jg",
                    id: 'a',
                    nome: "jg",
                    status: "Ativo"
                },
                pontuacao: 85,
                ultimaPontuacao: 82,
                time: "kabum",
                categoriaJogador: "Bom",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "Artur Scalabrin",
                nick: "Scary",
                nacionalidade: { 
                    id: "1",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/scary.png",
                caminhoAbsoluto: "./assets/img/players/scary.png",
                bagre: 1,
                status: "Ativo"
            },
            {
                id: "1",
                MVP: 0,
                role: {
                    descricao: "mid",
                    id: 'a',
                    nome: "mid",
                    status: "Ativo"
                },
                pontuacao: 85,
                ultimaPontuacao: 86,
                time: "kabum",
                categoriaJogador: "Bom",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "GYUJUN HAN",
                nick: "Yuri",
                nacionalidade: { 
                    id: "1",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/yuri.png",
                caminhoAbsoluto: "./assets/img/players/yuri.png",
                bagre: 1,
                status: "Ativo"
            },
            {
                id: "1",
                MVP: 2,
                role: {
                    descricao: "adc",
                    id: 'a',
                    nome: "adc",
                    status: "Ativo"
                },
                pontuacao: 83,
                ultimaPontuacao: 83,
                time: "kabum",
                categoriaJogador: "Bom",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "Igor Homem",
                nick: "Dudstheboy",
                nacionalidade: { 
                    id: "1",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/dudstheboy.png",
                caminhoAbsoluto: "./assets/img/players/dudstheboy.png",
                bagre: 1,
                status: "Ativo"
            },
            {
                id: "1",
                MVP: 1,
                role: {
                    descricao: "sup",
                    id: 'a',
                    nome: "sup",
                    status: "Ativo"
                },
                pontuacao: 84,
                ultimaPontuacao: 81,
                time: "kabum",
                categoriaJogador: "Bom",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "Gabriel Scuro",
                nick: "Scuro",
                nacionalidade: { 
                    id: "1",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/scuro.png",
                caminhoAbsoluto: "./assets/img/players/scuro.png",
                bagre: 0,
                status: "Ativo"
            },
            {
                id: "1",
                MVP: 1,
                role: {
                    descricao: "coach",
                    id: 'a',
                    nome: "coach",
                    status: "Ativo"
                },
                pontuacao: 88,
                ultimaPontuacao: 88,
                time: "kabum",
                categoriaJogador: "Bom",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "",
                nick: "Ti0ben",
                nacionalidade: { 
                    id: "1",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/ti0ben.png",
                caminhoAbsoluto: "./assets/img/players/ti0ben.png",
                bagre: 0,
                status: "Ativo"
            },
            //Fluxo
            {
                id: "1",
                MVP: 1,
                role: {
                    descricao: "top",
                    id: 'a',
                    nome: "top",
                    status: "Ativo"
                },
                pontuacao: 78,
                ultimaPontuacao: 73,
                time: "fluxo",
                categoriaJogador: "Mediano",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "Rodrigo Panisa",
                nick: "Tay",
                nacionalidade: { 
                    id: "1",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/tay.png",
                caminhoAbsoluto: "./assets/img/players/tay.png",
                bagre: 0,
                status: "Ativo"
            },
            {
                id: "1",
                MVP: 1,
                role: {
                    descricao: "jg",
                    id: 'a',
                    nome: "jg",
                    status: "Ativo"
                },
                pontuacao: 83,
                ultimaPontuacao: 76,
                time: "fluxo",
                categoriaJogador: "Bom",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "Pedro Cavalcante",
                nick: "Disamis",
                nacionalidade: { 
                    id: "1",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/disamis.png",
                caminhoAbsoluto: "./assets/img/players/disamis.png",
                bagre: 0,
                status: "Ativo"
            },
            {
                id: "1",
                MVP: 2,
                role: {
                    descricao: "mid",
                    id: 'a',
                    nome: "mid",
                    status: "Ativo"
                },
                pontuacao: 86,
                ultimaPontuacao: 81,
                time: "fluxo",
                categoriaJogador: "Bom",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "Bruno Felbergue",
                nick: "Hauz",
                nacionalidade: { 
                    id: "1",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/hauz.png",
                caminhoAbsoluto: "./assets/img/players/hauz.png",
                bagre: 1,
                status: "Ativo"
            },
            {
                id: "1",
                MVP: 0,
                role: {
                    descricao: "adc",
                    id: 'a',
                    nome: "adc",
                    status: "Ativo"
                },
                pontuacao: 82,
                ultimaPontuacao: 82,
                time: "fluxo",
                categoriaJogador: "Bom",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "Diego Amaral",
                nick: "Brance",
                nacionalidade: { 
                    id: "1",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/brance.png",
                caminhoAbsoluto: "./assets/img/players/brance.png",
                bagre: 2,
                status: "Ativo"
            },
            {
                id: "1",
                MVP: 0,
                role: {
                    descricao: "sup",
                    id: 'a',
                    nome: "sup",
                    status: "Ativo"
                },
                pontuacao: 81,
                ultimaPontuacao: 81,
                time: "fluxo",
                categoriaJogador: "Bom",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "Gabriel Dzelme",
                nick: "Jojo",
                nacionalidade: { 
                    id: "1",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/jojo.png",
                caminhoAbsoluto: "./assets/img/players/jojo.png",
                bagre: 1,
                status: "Ativo"
            },
            {
                id: "1",
                MVP: 0,
                role: {
                    descricao: "coach",
                    id: 'a',
                    nome: "coach",
                    status: "Ativo"
                },
                pontuacao: 75,
                ultimaPontuacao: 75,
                time: "fluxo",
                categoriaJogador: "Bom",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "",
                nick: "Turtle",
                nacionalidade: { 
                    id: "1",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/turtle.png",
                caminhoAbsoluto: "./assets/img/players/turtle.png",
                bagre: 1,
                status: "Ativo"
            },
            //loud
            {
                id: "1",
                MVP: 0,
                role: {
                    descricao: "top",
                    id: 'a',
                    nome: "top",
                    status: "Ativo"
                },
                pontuacao: 77,
                ultimaPontuacao: 82,
                time: "loud",
                categoriaJogador: "Mediano",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "Leonardo Souza",
                nick: "Robo",
                nacionalidade: { 
                    id: "1",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/Robo.png",
                caminhoAbsoluto: "./assets/img/players/Robo.png",
                bagre: 2,
                status: "Ativo"
            },
            {
                id: "1",
                MVP: 1,
                role: {
                    descricao: "jg",
                    id: 'a',
                    nome: "jg",
                    status: "Ativo"
                },
                pontuacao: 76,
                ultimaPontuacao: 82,
                time: "loud",
                categoriaJogador: "Mediano",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "Park Jong-hoon",
                nick: "Croc",
                nacionalidade: { 
                    id: "1",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/Croc.png",
                caminhoAbsoluto: "./assets/img/players/Croc.png",
                bagre: 2,
                status: "Ativo"
            },
            {
                id: "1",
                MVP: 2,
                role: {
                    descricao: "mid",
                    id: 'a',
                    nome: "mid",
                    status: "Ativo"
                },
                pontuacao: 85,
                ultimaPontuacao: 89,
                time: "loud",
                categoriaJogador: "Bom",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "Thiago Sartori",
                nick: "Tinows",
                nacionalidade: { 
                    id: "1",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/tinowns.png",
                caminhoAbsoluto: "./assets/img/players/tinowns.png",
                bagre: 2,
                status: "Ativo"
            },
            {
                id: "1",
                MVP: 1,
                role: {
                    descricao: "adc",
                    id: 'a',
                    nome: "adc",
                    status: "Ativo"
                },
                pontuacao: 91,
                ultimaPontuacao: 88,
                time: "loud",
                categoriaJogador: "Bom",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "Geomsoo Mun",
                nick: "Route",
                nacionalidade: { 
                    id: "1",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/Route.png",
                caminhoAbsoluto: "./assets/img/players/Route.png",
                bagre: 0,
                status: "Ativo"
            },
            {
                id: "1",
                MVP: 1,
                role: {
                    descricao: "sup",
                    id: 'a',
                    nome: "sup",
                    status: "Ativo"
                },
                pontuacao: 84,
                ultimaPontuacao: 90,
                time: "loud",
                categoriaJogador: "Bom",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "Denilson Oliveira",
                nick: "Ceos",
                nacionalidade: { 
                    id: "1",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/Ceos.png",
                caminhoAbsoluto: "./assets/img/players/Ceos.png",
                bagre: 0,
                status: "Ativo"
            },
            {
                id: "1",
                MVP: 0,
                role: {
                    descricao: "coach",
                    id: 'a',
                    nome: "coach",
                    status: "Ativo"
                },
                pontuacao: 68,
                ultimaPontuacao: 68,
                time: "loud",
                categoriaJogador: "Bagre",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "",
                nick: "Beellzy",
                nacionalidade: { 
                    id: "1",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/beellzy.png",
                caminhoAbsoluto: "./assets/img/players/beellzy.png",
                bagre: 0,
                status: "Ativo"
            },



        ],
        dados: {} as Dados
    }

    private dreamTeam: Response<Jogador> = {
        pagina: [
            {
                id: "1",
                MVP: 1,
                role: {
                    descricao: "top",
                    id: 'a',
                    nome: "top",
                    status: "Ativo"
                },
                pontuacao: 93,
                ultimaPontuacao: 91,
                time: "los-grandes",
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
                pontuacao: 91,
                ultimaPontuacao: 90,
                time: "los-grandes",
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
                ultimaPontuacao: 90,
                time: "los-grandes",
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
                pontuacao: 92,
                ultimaPontuacao: 92,
                time: "red-canids",
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
                time: "red-canids",
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
                pontuacao: 94,
                ultimaPontuacao: 94,
                time: "los-grandes",
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
            .pipe(map(({pagina}) => pagina.filter(pag => pag.time === teamAlias)))
    }

    getDreamTeam(): Observable<Jogador[]> {
        return of(this.dreamTeam)
            .pipe(map(({pagina}) => pagina))
    }
}