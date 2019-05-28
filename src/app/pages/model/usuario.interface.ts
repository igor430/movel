export interface UsuarioI {
        id?: string,
        //emailUsuario: string,
        role: boolean,
        uid: string,
        nome: string,
        email: string,
        sobre: string
}

export interface UsuarioPost {
        id?: string,
        uid: string,
        nome: string,
        mensagem: string,
        status: boolean
}


      
