import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import * as xml2js from 'xml2js';

declare var jquery:any;
declare var $:any;

@Injectable()
export class PeticionesService{
	public url: string;
	public respuesta: any;

	constructor(private _http:Http){}

	get(id){
		this.url = "https://api.trello.com/1/lists/" + id + "/cards?fields=id&token=5e61f4f5f7f2c22c1d08c6a9fa";
		this.respuesta = this._http.get(this.url).map(res => res.json());
		return this.respuesta;
	}

	post(id, name){
		this.url = "https://api.trello.com/1/cards";
		const req = this._http.post(this.url, {
			idList : id,
			name : name,
			key : "b1691298dac8eacbce129b3672ae023c",
			token : "5e61f4f5f7f2c22c1d08c6a9fa10a0bf31bdd9d7338aa4c90359e5517334748e"
		}).subscribe(
			result => {this.respuesta = result},
			error => {this.respuesta = "Error occured"}
		);
		return this.respuesta;
	}

	checkCaptcha(responseKey){
		this.url = "https://www.google.com/recaptcha/api/siteverify";
		const req = this._http.post(this.url, {
			secret : "6Lcp_TcUAAAAAFYr7U1pc7xFVsb53DByEeaSdony",
			response : responseKey
		}).subscribe(
			result => {this.respuesta = result},
			error => {this.respuesta = "Error occured"}
		);
		return this.respuesta;
	}

	getCredencialOspaca(dni){
		
		this.url = "http://www.appired.com.ar/consultarPadron.php?peticion=301&nrodoc=" + dni + "&fechaNac='01/01/0001'&rnos=101604";

		//CONSULTA AJAX
		var respuesta;
		$.ajax({
			url: this.url, 
			async: false,
			error: function(xhr){
				respuesta = "Ocurrió un error: " + xhr.status + " " + xhr.statusText;
		    },
		    success: function(result){
		        respuesta = result;
		    },
		    dataType: "xml"
		});

		return respuesta;
	}

}