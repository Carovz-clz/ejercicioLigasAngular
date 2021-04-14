import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({ providedIn: 'root' })
export class ObtencionDatosService {

    constructor(private http: HttpClient) { }

    obtenerLigas() {

        const headers = {
            "x-rapidapi-key": "674ca3eec4msh0b12e4d1512aa2bp155cb5jsn0ac096a0badc",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
        }

        const requestOptions = {
            headers: new HttpHeaders(headers)
        };

        return this.http.get<any>('https://api-football-v1.p.rapidapi.com/v2/leagues/type/league', requestOptions);
    }

    obtenerEventos() {
        const headers = {
            "x-rapidapi-key": "674ca3eec4msh0b12e4d1512aa2bp155cb5jsn0ac096a0badc",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
        }

        const requestOptions = {
            headers: new HttpHeaders(headers)
        };

        return this.http.get<any>('https://api-football-v1.p.rapidapi.com/v2/events/214226', requestOptions);
    }

    obtenerEquipos(idLiga) {
        const headers = {
            "x-rapidapi-key": "674ca3eec4msh0b12e4d1512aa2bp155cb5jsn0ac096a0badc",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
        }

        const requestOptions = {
            headers: new HttpHeaders(headers)
        };

        return this.http.get<any>('https://api-football-v1.p.rapidapi.com/v2/teams/league/'+idLiga, requestOptions);
            
    }

    obtenerJugadores(idEquipo) {
        const headers = {
            "x-rapidapi-key": "674ca3eec4msh0b12e4d1512aa2bp155cb5jsn0ac096a0badc",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
        }

        const requestOptions = {
            headers: new HttpHeaders(headers)
        };

        return this.http.get<any>('https://api-football-v1.p.rapidapi.com/v2/players/team/' + idEquipo, requestOptions);
    }

    
    agregarJugador(jugador, idEquipo){
        
        const headers = {
            "x-rapidapi-key": "674ca3eec4msh0b12e4d1512aa2bp155cb5jsn0ac096a0badc",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
        }

        const requestOptions = {
            headers: new HttpHeaders(headers)
        };

        
        // this.http.post('https://api-football-v1.p.rapidapi.com/v2/players/team/' + idEquipo, jugador, requestOptions);

    }

    eliminarJugador(idJugador){
        let estado = false;
       
        const headers = {
            "x-rapidapi-key": "674ca3eec4msh0b12e4d1512aa2bp155cb5jsn0ac096a0badc",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
        }

        const requestOptions = {
            headers: new HttpHeaders(headers)
        };

        // this.http.delete('https://api-football-v1.p.rapidapi.com/v2/players/player/' + idJugador, requestOptions);
        //    

    }
}