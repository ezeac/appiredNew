import { Component, Input } from "@angular/core";
import { PeticionesService } from '../services/peticiones.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

declare var jquery:any;
declare var $:any;
declare var ScrollMagic:any;
declare var TweenMax:any;

@Component({
	selector: "consultasYServicios",
	templateUrl: "./consultasYServicios.component.html",
	// styleUrls: ['./style.css'],
	providers: [PeticionesService]
})

//PASOS PARA AGREGAR UN NUEVO SERVICIO O CONSULTA:
/*
Crear carpeta y componente donde corresponda con el formato de nombre: obrasocialnombreDelTramite
Agregar componente a module.ts
Agregar la obraSocial al Array "obraSocial" (en el caso de que no exista ya) con el formato ["obrasocial", "Obra Social"]
Agregar condicional en cargarTramite, o agregar item al array si ya existe la obra social, con el formato ["obrasocialnombreDelTramite", "Nombre a mostrar"]
En caso de que necesite campos adicionales, agregar condicional en cargarDetalle (como "encontrar prestadores") y sus variables necesarias de forma ordenada
Agregar en el div ".contenedorResultadoTramite" el selector del componente creado con el *ngIf="vistaResultado == 'obrasocialnombreDelTramite'"
*/

export class ConsultasYServiciosComponent{
	public titulo = "Página consultasYServicios";
	//VARIABLES GENERALES
	//este array guarda primero el value y luego el label para el select de obras sociales
	public obraSocial:Array<any> = [["ospaca", "Ospaca"]]; public seleccionObraSocial;
	public tramite:Array<any> = [];	public seleccionTramite; 
	public detalleTramite = false; public detalleTexto:Array<any> = [false]; public tituloDetalleTramite; 
	public vistaResultado:string = "";

	//variables para campos extras de "Encontrar Provedores"
	public Provincia=false; public Localidad=false; public Rubro=false; 

	constructor(
		private peticionesService:PeticionesService,
		private _route: ActivatedRoute,
		private _router: Router
	){}

	
	//FUNCIONES GENERALES
	ngOnInit(){
		//INICIALIZAR CONTROLLER
		var scrollMagicController = new ScrollMagic.Controller();

		var i = 0;
		var offsetAnterior = 0;
		$(".fadeInAnimation").each(function(index,element){
		    var offset = $(element).offset().top;
		    if (offsetAnterior == offset) {
		        i += 0.2;
		    } else {
		        i = 0;
		    }
		    offsetAnterior = $(element).offset().top;
		    // CREANDO ANIMACIÓN
		    var fadeInGeneral = new TweenMax.fromTo(element, 0.5, {opacity:0, y:50},{y: 0, opacity: 1, delay: i});
		    //ASIGNANDO TRIGGERS
		    var scenefadeInGeneral = new ScrollMagic.Scene({triggerElement: element, offset: -250}).setTween(fadeInGeneral).addTo(scrollMagicController);
		})

		// CREANDO ANIMACIÓN
	    var staggerAnimation = new TweenMax.staggerFromTo($(".staggerAnimation"), 0.5, {opacity:0, y:50},{y: 0, opacity: 1}, 0.15);
	    //ASIGNANDO TRIGGERS
	    var scenestaggerAnimation = new ScrollMagic.Scene({triggerElement: $(".staggerAnimation"), offset: -550}).setTween(staggerAnimation).addTo(scrollMagicController);

	    // CREANDO ANIMACIÓN
	    var staggerAnimation2 = new TweenMax.staggerFromTo($(".staggerAnimation2"), 0.5, {opacity:0, y:50},{y: 0, opacity: 1}, 0.15);
	    //ASIGNANDO TRIGGERS
	    var scenestaggerAnimation2 = new ScrollMagic.Scene({triggerElement: $(".staggerAnimation2"), offset: 150}).setTween(staggerAnimation2).addTo(scrollMagicController);
	}
	redirigir(){
		/*this._router.navigate(['/consultasYServicios','valorPage']);*/
	}
	cargarTramite(obraSocial){
		this.seleccionObraSocial = obraSocial;
		//array de trámites para cada obra social (se recibe el name del selector de obras sociales)
		if (obraSocial == 'ospaca') {
			this.tramite = [["descargarCartillaPrestadores", "Descargar cartilla de prestadores"], ["credencialProvisoria", "Credencial Provisoria"], ["encontrarPrestadores", "Encontrar Prestadores"]];
		} else {
			this.tramite = [];
		}
	}
	cargarDetalle(tramite){
		this.seleccionTramite = tramite;
		//condicional para mostrar campos extras en "encontrar prestradores"
		if (tramite == 'encontrarPrestadores') {
			//activamos el div para campos extras
			this.detalleTramite = true;
			this.vistaResultado =  "completar";
			this.tituloDetalleTramite = "INGRESE LOS DATOS DE BÚSQUEDA";
			//reiniciamos la variable detalleTexto y seteamos en true el campo div a mostrar
			this.detalleTexto = [false];
			this.detalleTexto["encontrarPrestadores"] = true;
		} else {
			this.detalleTramite = false;
			this.actualizarVistaTramite();
		}
	}
	actualizarVistaTramite() {
		this.vistaResultado = this.seleccionObraSocial + this.seleccionTramite;
		$("html, body").animate({"scrollTop":"0px"},"2000");
	}

	//FUNCIONES PARA "ENCONTRAR PRESTADORES"
	actualizarSeleccionEncontrarPrestadores(){
		if (this.Provincia && this.Localidad && this.Rubro) {
			this.actualizarVistaTramite();
		}
	}


}