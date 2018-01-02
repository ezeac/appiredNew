import { Component, Input } from "@angular/core";
import { PeticionesService } from '../../../../services/peticiones.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

declare var jquery:any;
declare var $:any;

@Component({
	selector: "ospacaencontrarPrestadores",
	templateUrl: "./ospacaencontrarPrestadores.component.html",
	// styleUrls: ['./style.css'],
	providers: [PeticionesService]
})


export class OspacaencontrarPrestadoresComponent{
	public titulo = "Página ospacaencontrarPrestadores";
	public mapStyles = [
		{
			'elementType': 'geometry',
			'stylers': [
				{
					'color': '#f5f5f5'
				}
			]
		},
		{
			'elementType': 'labels.icon',
			'stylers': [
				{
					'visibility': 'off'
				}
			]
		},
		{
			'elementType': 'labels.text.fill',
			'stylers': [
				{
					'color': '#616161'
				}
			]
		},
		{
			'elementType': 'labels.text.stroke',
			'stylers': [
				{
					'color': '#f5f5f5'
				}
			]
		},
		{
			'featureType': 'administrative.land_parcel',
			'elementType': 'labels.text.fill',
			'stylers': [
				{
					'color': '#bdbdbd'
				}
			]
		},
		{
			'featureType': 'poi',
			'elementType': 'geometry',
			'stylers': [
				{
					'color': '#eeeeee'
				}
			]
		},
		{
			'featureType': 'poi',
			'elementType': 'labels.text.fill',
			'stylers': [
				{
					'color': '#757575'
				}
			]
		},
		{
			'featureType': 'poi.park',
			'elementType': 'geometry',
			'stylers': [
				{
					'color': '#e5e5e5'
				}
			]
		},
		{
			'featureType': 'poi.park',
			'elementType': 'labels.text.fill',
			'stylers': [
				{
					'color': '#9e9e9e'
				}
			]
		},
		{
			'featureType': 'road',
			'elementType': 'geometry',
			'stylers': [
				{
					'color': '#ffffff'
				}
			]
		},
		{
			'featureType': 'road.arterial',
			'elementType': 'labels.text.fill',
			'stylers': [
				{
					'color': '#757575'
				}
			]
		},
		{
			'featureType': 'road.highway',
			'elementType': 'geometry',
			'stylers': [
				{
					'color': '#dadada'
				}
			]
		},
		{
			'featureType': 'road.highway',
			'elementType': 'labels.text.fill',
			'stylers': [
				{
					'color': '#616161'
				}
			]
		},
		{
			'featureType': 'road.local',
			'elementType': 'labels.text.fill',
			'stylers': [
				{
					'color': '#9e9e9e'
				}
			]
		},
		{
			'featureType': 'transit.line',
			'elementType': 'geometry',
			'stylers': [
				{
					'color': '#e5e5e5'
				}
			]
		},
		{
			'featureType': 'transit.station',
			'elementType': 'geometry',
			'stylers': [
				{
					'color': '#eeeeee'
				}
			]
		},
		{
			'featureType': 'water',
			'elementType': 'geometry',
			'stylers': [
				{
					'color': '#c9c9c9'
				}
			]
		},
		{
			'featureType': 'water',
			'elementType': 'labels.text.fill',
			'stylers': [
				{
					'color': '#9e9e9e'
				}
			]
		}
	]
	@Input() ObraSocial;
	@Input() Provincia;
	@Input() Localidad;
	@Input() Rubro;

	//variables de muestra para google maps
	public lat: number = -31.406895;
  	public lng: number = -64.210399;

	constructor(
		private peticionesService:PeticionesService,
		private _route: ActivatedRoute,
		private _router: Router
	){}

	ngOnInit(){
	}

	redirigir(){
		// this._router.navigate(['/ospacaencontrarPrestadores','valorPage']);
	}
}