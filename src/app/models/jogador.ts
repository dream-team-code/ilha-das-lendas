import { Nacionalidade } from "./nacionalidade"
import { Role } from "./role"

export interface Jogador {
    id: string
    roleId: string
    nacionalidadeId: string
    nome: string
    nick: string
    pontuacao: number
    ultimaPontuacao: number
    MVP: number
    bagre: number
    time: string
    categoriaJogador: category
    status: string
    caminhoRelativo: string
    caminhoAbsoluto: string
    role: Role
    nacionalidade: Nacionalidade
}

export type category = 'God' | 'Bom' | 'Mediano' | 'Bagre' | 'Academy'