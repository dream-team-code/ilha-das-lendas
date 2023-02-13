
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
                pontuacao: 90,
                ultimaPontuacao: 89,
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
                ultimaPontuacao: 92,
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
                pontuacao: 89,
                ultimaPontuacao: 80,
                time: "los-grandes",
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
                pontuacao: 92,
                ultimaPontuacao: 92,
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
            {
                id: "1",
                MVP: 0,
                role: {
                    descricao: "top",
                    id: 'a',
                    nome: "top",
                    status: "Ativo"
                },
                pontuacao: 74,
                ultimaPontuacao: 70,
                time: "keyd",
                categoriaJogador: "Mediano",
                nacionalidadeId: "2",
                roleId: "a",
                nome: "GUILHERME RUIZ",
                nick: "GUIGO",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/guigo.png",
                caminhoAbsoluto: "./assets/img/players/guigo.png",
                bagre: 2,
                status: "Ativo"
            },
            {
                id: "2",
                MVP: 0,
                role: {
                    descricao: "jg",
                    id: 'b',
                    nome: "jg",
                    status: "Ativo"
                },
                pontuacao: 58,
                ultimaPontuacao: 50,
                time: "keyd",
                categoriaJogador: "Academy",
                nacionalidadeId: "2",
                roleId: "b",
                nome: "LUIS GUSTAVO DIRAM",
                nick: "Sting",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/sting.png",
                caminhoAbsoluto: "./assets/img/players/sting.png",
                bagre: 0,
                status: "Ativo"
            },
            {
                id: "3",
                MVP: 0,
                role: {
                    descricao: "mid",
                    id: 'c',
                    nome: "mid",
                    status: "Ativo"
                },
                pontuacao: 70,
                ultimaPontuacao: 71,
                time: "keyd",
                categoriaJogador: "Mediano",
                nacionalidadeId: "2",
                roleId: "c",
                nome: "DANIEL FERREIRA",
                nick: "Grevthar",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/grevthar.png",
                caminhoAbsoluto: "./assets/img/players/grevthar.png",
                bagre: 1,
                status: "Ativo"
            },
            {
                id: "4",
                MVP: 0,
                role: {
                    descricao: "adc",
                    id: 'd',
                    nome: "adc",
                    status: "Ativo"
                },
                pontuacao: 51,
                ultimaPontuacao: 50,
                time: "keyd",
                categoriaJogador: "Academy",
                nacionalidadeId: "",
                roleId: "",
                nome: "MIGUEL REZEK",
                nick: "ST3PZ",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/ST3PZ.png",
                caminhoAbsoluto: "./assets/img/players/ST3PZ.png",
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
                pontuacao: 56,
                ultimaPontuacao: 50,
                time: "keyd",
                categoriaJogador: "Academy",
                nacionalidadeId: "2",
                roleId: "e",
                nome: "MARCOS FERRAZ",
                nick: "Krastyel",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/krastyel.png",
                caminhoAbsoluto: "./assets/img/players/krastyel.png",
                bagre: 0,
                status: "Ativo"
            },
            {
                id: "10",
                MVP: 0,
                role: {
                    descricao: "coach",
                    id: "f",
                    nome: "coach",
                    status: "Ativo"
                },
                pontuacao: 64,
                ultimaPontuacao: 64,
                time: "keyd",
                categoriaJogador: "Bagre",
                nacionalidadeId: "2",
                roleId: "f",
                nome: "Rodrigo Rodrigues",
                nick: "Kalec",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/kalec.png",
                caminhoAbsoluto: "./assets/img/players/kalec.png",
                bagre: 0,
                status: "Ativo"
            },
            {
                id: "1",
                MVP: 2,
                role: {
                    descricao: "top",
                    id: 'a',
                    nome: "top",
                    status: "Ativo"
                },
                pontuacao: 72,
                ultimaPontuacao: 70,
                time: "pain",
                categoriaJogador: "Mediano",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "CHOI EUISEOK",
                nick: "Wizer",
                nacionalidade: { 
                    id: "1",
                    nome: "kr",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/wizer.png",
                caminhoAbsoluto: "./assets/img/players/wizer.png",
                bagre: 0,
                status: "Ativo"
            },
            {
                id: "2",
                MVP: 0,
                role: {
                    descricao: "jg",
                    id: 'b',
                    nome: "jg",
                    status: "Ativo"
                },
                pontuacao: 66,
                ultimaPontuacao: 64,
                time: "pain",
                categoriaJogador: "Bagre",
                nacionalidadeId: "2",
                roleId: "b",
                nome: "MARCOS OLIVEIRA",
                nick: "CarioK",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/cariok.png",
                caminhoAbsoluto: "./assets/img/players/cariok.png",
                bagre: 4,
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
                pontuacao: 79,
                ultimaPontuacao: 80,
                time: "pain",
                categoriaJogador: "Mediano",
                nacionalidadeId: "2",
                roleId: "c",
                nome: "MATHEUS ROSSINI",
                nick: "dyNquedo",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/dyNquedo.png",
                caminhoAbsoluto: "./assets/img/players/dyNquedo.png",
                bagre: 0,
                status: "Ativo"
            },
            {
                id: "4",
                MVP: 0,
                role: {
                    descricao: "adc",
                    id: 'd',
                    nome: "adc",
                    status: "Ativo"
                },
                pontuacao: 80,
                ultimaPontuacao: 82,
                time: "pain",
                categoriaJogador: "Bom",
                nacionalidadeId: "1",
                roleId: "d",
                nome: "YOUNGHOON JOO",
                nick: "Bvoy",
                nacionalidade: { 
                    id: "1",
                    nome: "kr",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/bvoy.png",
                caminhoAbsoluto: "./assets/img/players/bvoy.png",
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
                pontuacao: 65,
                ultimaPontuacao: 67,
                time: "pain",
                categoriaJogador: "Bagre",
                nacionalidadeId: "2",
                roleId: "e",
                nome: "YAN SALES",
                nick: "Damage",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/damage.png",
                caminhoAbsoluto: "./assets/img/players/damage.png",
                bagre: 0,
                status: "Ativo"
            },
            {
                id: "10",
                MVP: 0,
                role: {
                    descricao: "coach",
                    id: "f",
                    nome: "coach",
                    status: "Ativo"
                },
                pontuacao: 71,
                ultimaPontuacao: 71,
                time: "pain",
                categoriaJogador: "Mediano",
                nacionalidadeId: "2",
                roleId: "f",
                nome: "SIN HYEOK",
                nick: "Xero",
                nacionalidade: { 
                    id: "1",
                    nome: "kr",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/xero.png",
                caminhoAbsoluto: "./assets/img/players/xero.png",
                bagre: 0,
                status: "Ativo"
            },
            {
                id: "1",
                MVP: 2,
                role: {
                    descricao: "top",
                    id: 'a',
                    nome: "top",
                    status: "Ativo"
                },
                pontuacao: 73,
                ultimaPontuacao: 71,
                time: "liberty",
                categoriaJogador: "Mediano",
                nacionalidadeId: "2",
                roleId: "a",
                nome: "THIAGO CAMPOS",
                nick: "Kiari",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/kiari.png",
                caminhoAbsoluto: "./assets/img/players/kiari.png",
                bagre: 1,
                status: "Ativo"
            },
            {
                id: "2",
                MVP: 1,
                role: {
                    descricao: "jg",
                    id: 'b',
                    nome: "jg",
                    status: "Ativo"
                },
                pontuacao: 79,
                ultimaPontuacao: 78,
                time: "liberty",
                categoriaJogador: "Mediano",
                nacionalidadeId: "2",
                roleId: "b",
                nome: "LUCAS MIRANDA",
                nick: "accez",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/accez.png",
                caminhoAbsoluto: "./assets/img/players/accez.png",
                bagre: 0,
                status: "Ativo"
            },
            {
                id: "3",
                MVP: 0,
                role: {
                    descricao: "mid",
                    id: 'c',
                    nome: "mid",
                    status: "Ativo"
                },
                pontuacao: 70,
                ultimaPontuacao: 66,
                time: "liberty",
                categoriaJogador: "Mediano",
                nacionalidadeId: "2",
                roleId: "c",
                nome: "ELVIS VERGARA",
                nick: "Piloto",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/piloto.png",
                caminhoAbsoluto: "./assets/img/players/piloto.png",
                bagre: 2,
                status: "Ativo"
            },
            {
                id: "4",
                MVP: 1,
                role: {
                    descricao: "adc",
                    id: 'd',
                    nome: "adc",
                    status: "Ativo"
                },
                pontuacao: 76,
                ultimaPontuacao: 75,
                time: "liberty",
                categoriaJogador: "Mediano",
                nacionalidadeId: "2",
                roleId: "d",
                nome: "JULIO HENRIQUE",
                nick: "Juliera",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/juliera.png",
                caminhoAbsoluto: "./assets/img/players/juliera.png",
                bagre: 0,
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
                pontuacao: 74,
                ultimaPontuacao: 70,
                time: "liberty",
                categoriaJogador: "Mediano",
                nacionalidadeId: "2",
                roleId: "e",
                nome: "ALEXANDRE FERNANDES",
                nick: "Cavalo",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/cavalo.png",
                caminhoAbsoluto: "./assets/img/players/cavalo.png",
                bagre: 1,
                status: "Ativo"
            },
            {
                id: "10",
                MVP: 0,
                role: {
                    descricao: "coach",
                    id: "f",
                    nome: "coach",
                    status: "Ativo"
                },
                pontuacao: 85,
                ultimaPontuacao: 85,
                time: "liberty",
                categoriaJogador: "Bom",
                nacionalidadeId: "2",
                roleId: "f",
                nome: "SIN HYEOK",
                nick: "Alocs",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/alocs.png",
                caminhoAbsoluto: "./assets/img/players/alocs.png",
                bagre: 0,
                status: "Ativo"
            },
            {
                id: "1",
                MVP: 0,
                role: {
                    descricao: "top",
                    id: 'a',
                    nome: "top",
                    status: "Ativo"
                },
                pontuacao: 72,
                ultimaPontuacao: 69,
                time: "furia",
                categoriaJogador: "Mediano",
                nacionalidadeId: "2",
                roleId: "a",
                nome: "NATAN BRAZ",
                nick: "fNb",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/fnb.png",
                caminhoAbsoluto: "./assets/img/players/fnb.png",
                bagre: 3,
                status: "Ativo"
            },
            {
                id: "2",
                MVP: 0,
                role: {
                    descricao: "jg",
                    id: 'b',
                    nome: "jg",
                    status: "Ativo"
                },
                pontuacao: 70,
                ultimaPontuacao: 66,
                time: "furia",
                categoriaJogador: "Mediano",
                nacionalidadeId: "2",
                roleId: "b",
                nome: "GABRIEL DA LUZ",
                nick: "Goot",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/goot.png",
                caminhoAbsoluto: "./assets/img/players/goot.png",
                bagre: 3,
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
                pontuacao: 79,
                ultimaPontuacao: 80,
                time: "furia",
                categoriaJogador: "Mediano",
                nacionalidadeId: "2",
                roleId: "c",
                nome: "BRUNO FARIAS",
                nick: "Envy",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/envy.png",
                caminhoAbsoluto: "./assets/img/players/envy.png",
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
                pontuacao: 83,
                ultimaPontuacao: 81,
                time: "furia",
                categoriaJogador: "Bom",
                nacionalidadeId: "2",
                roleId: "d",
                nome: "JULIO HENRIQUE",
                nick: "Trigo",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/trigo.png",
                caminhoAbsoluto: "./assets/img/players/trigo.png",
                bagre: 0,
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
                pontuacao: 77,
                ultimaPontuacao: 79,
                time: "furia",
                categoriaJogador: "Mediano",
                nacionalidadeId: "2",
                roleId: "e",
                nome: "YGOR FREITAS",
                nick: "RedBert",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/redBert.png",
                caminhoAbsoluto: "./assets/img/players/redBert.png",
                bagre: 1,
                status: "Ativo"
            },
            {
                id: "10",
                MVP: 0,
                role: {
                    descricao: "coach",
                    id: "f",
                    nome: "coach",
                    status: "Ativo"
                },
                pontuacao: 70,
                ultimaPontuacao: 70,
                time: "furia",
                categoriaJogador: "Mediano",
                nacionalidadeId: "2",
                roleId: "f",
                nome: "LUCAS PIERRE",
                nick: "Maestro",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/maestro.png",
                caminhoAbsoluto: "./assets/img/players/maestro.png",
                bagre: 0,
                status: "Ativo"
            },
            {
                id: "1",
                MVP: 1,
                role: {
                    descricao: "top",
                    id: 'a',
                    nome: "top",
                    status: "Ativo"
                },
                pontuacao: 77,
                ultimaPontuacao: 83,
                time: "intz",
                categoriaJogador: "Mediano",
                nacionalidadeId: "1",
                roleId: "a",
                nome: "WON KWEN HEE",
                nick: "Zzk",
                nacionalidade: { 
                    id: "1",
                    nome: "kr",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/zzk.png",
                caminhoAbsoluto: "./assets/img/players/zzk.png",
                bagre: 1,
                status: "Ativo"
            },
            {
                id: "2",
                MVP: 0,
                role: {
                    descricao: "jg",
                    id: 'b',
                    nome: "jg",
                    status: "Ativo"
                },
                pontuacao: 77,
                ultimaPontuacao: 78,
                time: "intz",
                categoriaJogador: "Mediano",
                nacionalidadeId: "2",
                roleId: "b",
                nome: "YAN PETERMANN",
                nick: "Yampi",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/yampi.png",
                caminhoAbsoluto: "./assets/img/players/yampi.png",
                bagre: 1,
                status: "Ativo"
            },
            {
                id: "3",
                MVP: 2,
                role: {
                    descricao: "mid",
                    id: 'c',
                    nome: "mid",
                    status: "Ativo"
                },
                pontuacao: 76,
                ultimaPontuacao: 83,
                time: "intz",
                categoriaJogador: "Mediano",
                nacionalidadeId: "2",
                roleId: "c",
                nome: "JÚLIO CRUZ",
                nick: "NOsFerus",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/nOsFerus.png",
                caminhoAbsoluto: "./assets/img/players/nOsFerus.png",
                bagre: 1,
                status: "Ativo"
            },
            {
                id: "4",
                MVP: 0,
                role: {
                    descricao: "adc",
                    id: 'd',
                    nome: "adc",
                    status: "Ativo"
                },
                pontuacao: 76,
                ultimaPontuacao: 70,
                time: "intz",
                categoriaJogador: "Mediano",
                nacionalidadeId: "2",
                roleId: "d",
                nome: "YUDI MIYASHIRO",
                nick: "NinjaKiwi",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/ninjaKiwi.png",
                caminhoAbsoluto: "./assets/img/players/ninjaKiwi.png",
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
                pontuacao: 73,
                ultimaPontuacao: 74,
                time: "intz",
                categoriaJogador: "Mediano",
                nacionalidadeId: "1",
                roleId: "e",
                nome: "WOO JUN SUNG",
                nick: "Nia",
                nacionalidade: { 
                    id: "1",
                    nome: "kr",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/nia.png",
                caminhoAbsoluto: "./assets/img/players/nia.png",
                bagre: 0,
                status: "Ativo"
            },
            {
                id: "10",
                MVP: 0,
                role: {
                    descricao: "coach",
                    id: "f",
                    nome: "coach",
                    status: "Ativo"
                },
                pontuacao: 76,
                ultimaPontuacao: 76,
                time: "intz",
                categoriaJogador: "Mediano",
                nacionalidadeId: "2",
                roleId: "f",
                nome: "FRANKLIN COUTINHO",
                nick: "Aoshi",
                nacionalidade: { 
                    id: "2",
                    nome: "br",
                    status: "Ativo"
                },
                caminhoRelativo: "./assets/img/players/aoshi.png",
                caminhoAbsoluto: "./assets/img/players/aoshi.png",
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