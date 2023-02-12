export interface Response<T> {
    pagina: T[]
    dados: Dados
}

export interface Dados {
    PaginaAtual: number
    TotalPaginas: number
    ResultadosExibidosPagina: number
    ContagemTotalResultados: number
    ExistePaginaAnterior: boolean
    ExistePaginaPosterior: boolean
}