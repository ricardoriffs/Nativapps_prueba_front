
export interface Response {
    exitoso:   boolean;
    codigo:    number;
    mensaje:   string;
    resultado: Resultado;
    novedad:   null;
}

export interface Resultado {
    consulta:        Search[];
    totalResults?:  string;
    Response?:      string;
    exitoso?:       boolean;
    elementInPage?: number;
    totalPage:     number;
}

export interface Search {
    movie_id: number;
    movieType_id: number;
    Title:  string;
    Year:   string;
    imdbID: string;
    Type:   Type;
    Poster: string;
    moviesType: {
        
        movieType: string
    }
}

export enum Type {
    Movie = "movie",
}


export interface Filter {
    title: string,
    year?: number,
    type?: string,
    page?: number 
}