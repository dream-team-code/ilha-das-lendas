import { Jogador } from "./jogador"

export interface Time {
    id: string
    nome: string
    media: number
    caminhoRelativo: string
    caminhoAbsoluto: string
    status: string
    jogadores: Jogador[]
    alias: string
}