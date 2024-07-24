// CREAR UNA INTERFAZ DE USUARIO
export interface IUser {
    name: string;
    lastname: string;
    email: string;
    birthady: string;
    dni: number;
    password: string;
    city: string;
    isActive: boolean;
    subscription: boolean;
}

export interface IForm {
    name: string;
    email: string;
    password: string;
}