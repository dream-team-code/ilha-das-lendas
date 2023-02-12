
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
                nome: "Red Canids",
                media: 94,               
                jogadores: [],
                caminhoRelativo: "red.png",
                caminhoAbsoluto: "red.png",
                status: "Ativo"
            },
            {
                id: "2",
                nome: "Pain Gaming",
                media: 88,               
                jogadores: [],
                caminhoRelativo: "pain.png",
                caminhoAbsoluto: "pain.png",
                status: "Ativo"
            },
            {
                id: "3",
                nome: "Los Grandes",
                media: 83,               
                jogadores: [],
                caminhoRelativo: "losgrandes.png",
                caminhoAbsoluto: "losgrandes.png",
                status: "Ativo"
            },
            {
                id: "4",
                nome: "INTZ",
                media: 80,               
                jogadores: [],
                caminhoRelativo: "intz.png",
                caminhoAbsoluto: "intz.png",
                status: "Ativo"
            },
            {
                id: "5",
                nome: "LOUD",
                media: 78,               
                jogadores: [],
                caminhoRelativo: "loud.png",
                caminhoAbsoluto: "loud.png",
                status: "Ativo"
            },
            {
                id: "6",
                nome: "Vivo Keyd",
                media: 76,               
                jogadores: [],
                caminhoRelativo: "keyd.png",
                caminhoAbsoluto: "keyd.png",
                status: "Ativo"
            },
            {
                id: "7",
                nome: "Fluxo",
                media: 70,               
                jogadores: [],
                caminhoRelativo: "fluxo.png",
                caminhoAbsoluto: "fluxo.png",
                status: "Ativo"
            },
            {
                id: "8",
                nome: "Liberty",
                media: 68,               
                jogadores: [],
                caminhoRelativo: "liberty.png",
                caminhoAbsoluto: "liberty.png",
                status: "Ativo"
            },
            {
                id: "9",
                nome: "Kabum",
                media: 65,               
                jogadores: [],
                caminhoRelativo: "kabum.png",
                caminhoAbsoluto: "kabum.png",
                status: "Ativo"
            },
            {
                id: "10",
                nome: "FURIA",
                media: 63,               
                jogadores: [],
                caminhoRelativo: "furia.png",
                caminhoAbsoluto: "furia.png",
                status: "Ativo"
            },
        ],
        dados: {} as Dados
    }

    getAll(): Observable<Time[]> {
        return of(this.teams)
            .pipe(map(({pagina}) => pagina))
    }
}