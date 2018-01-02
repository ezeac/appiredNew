import { Component, Input } from "@angular/core";
import { PeticionesService } from '../services/peticiones.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

declare var jquery:any;
declare var $:any;
declare var TweenMax:any;
declare var ScrollMagic:any;
declare var TweenMax:any;

@Component({
	selector: "contacto",
	templateUrl: "./contacto.component.html",
	providers: [PeticionesService]
})


export class ContactoComponent{
	public titulo = "Página contacto";
	public parametro;

	public nombreForm; public dniForm; public emailForm; public mensajeForm;

	public sedes = [
		{
			sede: "cordoba",
			lat: -31.406895,
			lon: -64.210399
		}, 
		{
			sede: "bsas",
			lat: -34.592543,
			lon: -58.401983
		}, 
		{
			sede: "tucuman", 
			lat: -26.821326,
			lon: -65.205705
		},
		{
			sede: "mendoza", 
			lat: -32.910373,
			lon: -68.837979
		},
		{
			sede: "mendoza2", 
			lat: -32.890974,
			lon: -68.849726
		}, 
		{
			sede: "sanLuis", 
			lat: -33.299282,
			lon: -66.329299
		}, 
		{
			sede: "sanJuan", 
			lat: -31.531559,
			lon: -68.521884
		}
	];
	public lat = -31.406895; 
	public lon = -64.210399;

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
	//Luego se llama al parametro1 desde el html: <contacto [parametro1]="valor"></contacto>
	@Input() parametro1:string;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router
	){}

	ngOnInit(){
		this._route.params.forEach((params: Params) =>{
			this.parametro = params['page'];
		})
		$("#mapaSucursales .texto3").each(function(index){
			$(this).slideUp();
			//$(this).prev().addClass("sliderOff");
			if (index == 0){
				$(this).slideDown();
				//$("#home4 .texto3").prev().removeClass("sliderOff");
			}
		})

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
		this._router.navigate(['/contacto','valorPage']);
	}

	slideDown(event, idMap){
		//resetear style slide
		$("#mapaSucursales .texto3").each(function(){
			$(this).slideUp();
			// $(this).prev().addClass("sliderOffContacto");
		})

		//setear style slide
		if ($(event.srcElement).next().css("display") == "none"){
			$(event.srcElement).next().slideDown();
			// $(event.srcElement).removeClass("sliderOffContacto");
		}
		
		//actualizar mapa
		for (var i = 0; i < this.sedes.length; ++i) {
			if (this.sedes[i].sede == idMap) {
				this.lat = this.sedes[i].lat;
				this.lon = this.sedes[i].lon;
			}
		}
	}

	mostrarItemContacto(event, itemId) {
		$(".slideItemContacto").each(function(){
			new TweenMax.to($(this), 0.3, {scale: .90, opacity: 0});
			$(this).css({"display":"none"});
			setTimeout(function(){$(this).css({"display":"none"});},"500");
		})
		
		$("#"+itemId).fadeIn(0);
		new TweenMax.fromTo($("#"+itemId), 0.5, {scale: .95, opacity: 0}, {scale: 1, opacity: 1});

		$(".itemSliderContacto").each(function(){
			$(this).css({"color":"black"});
		})
		$(event.srcElement).css({"color":"white"});

		$("html, body").animate({"scrollTop":"0px"},"2000");
	}


	onSubmit(nombreForm) {
		if (nombreForm == "form1") {

		}
	}

}