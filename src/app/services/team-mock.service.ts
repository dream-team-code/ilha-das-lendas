
import { Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";
import { Dados, Response } from "../models/response";
import { Time } from "../models/time";

@Injectable({
    providedIn: 'root'
})
export class TeamMockService {

    private teams: Response<Time> = {
        pagina: [
            {
                id: "1",
                nome: "Los Grandes",
                alias: 'los-grandes',
                media: 87,               
                jogadores: [],
                caminhoRelativo: "los-grandes.png",
                caminhoAbsoluto: "los-grandes.png",
                status: "Ativo"
            },
            {
                id: "2",
                nome: "Fluxo",
                alias: 'fluxo',
                media: 86,               
                jogadores: [],
                caminhoRelativo: "fluxo.png",
                caminhoAbsoluto: "fluxo.png",
                status: "Ativo"
            },
            {
                id: "3",
                nome: "Red Canids",
                alias: 'red-canids',
                media: 85,               
                jogadores: [],
                caminhoRelativo: "red-canids.png",
                caminhoAbsoluto: "red-canids.png",
                status: "Ativo"
            },
            {
                id: "4",
                nome: "Kabum",
                alias: 'kabum',
                media: 80,               
                jogadores: [],
                caminhoRelativo: "kabum.png",
                caminhoAbsoluto: "kabum.png",
                status: "Ativo"
            },
            {
                id: "5",
                nome: "Pain Gaming",
                alias: 'pain',
                media: 79,               
                jogadores: [],
                caminhoRelativo: "pain.png",
                caminhoAbsoluto: "pain.png",
                status: "Ativo"
            },
            {
                id: "6",
                nome: "Liberty",
                alias: 'liberty',
                media: 78,               
                jogadores: [],
                caminhoRelativo: "liberty.png",
                caminhoAbsoluto: "liberty.png",
                status: "Ativo"
            },
            {
                id: "7",
                nome: "LOUD",
                alias: 'loud',
                media: 78,               
                jogadores: [],
                caminhoRelativo: "loud.png",
                caminhoAbsoluto: "loud.png",
                status: "Ativo"
            },
            {
                id: "8",
                nome: "INTZ",
                alias: 'intz',
                media: 76,               
                jogadores: [],
                caminhoRelativo: "intz.png",
                caminhoAbsoluto: "intz.png",
                status: "Ativo"
            },
            {
                id: "9",
                nome: "FURIA",
                alias: 'furia',
                media: 76,               
                jogadores: [],
                caminhoRelativo: "furia.png",
                caminhoAbsoluto: "furia.png",
                status: "Ativo"
            },
            {
                id: "10",
                nome: "Vivo Keyd",
                alias: 'keyd',
                media: 71,               
                jogadores: [],
                caminhoRelativo: "keyd.png",
                caminhoAbsoluto: "keyd.png",
                status: "Ativo"
            },
        ],
        dados: {} as Dados
    }

    getAll(): Observable<Time[]> {
        return of(this.teams)
            .pipe(map(({pagina}) => pagina))
    }

    getByAlias(teamAlias: string): Observable<Time> {
        return of(this.teams)
            .pipe(map(({pagina}) => pagina.filter(pag => pag.alias === teamAlias)[0]))
    }
}