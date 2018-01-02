import { Component, Input } from "@angular/core";
import { PeticionesService } from '../services/peticiones.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

declare var jquery:any;
declare var $:any;
declare var TweenMax:any;
declare var Power4:any;
declare var ScrollMagic: any;
declare var TweenMax: any;
var x:any;

@Component({
	selector: "home",
	templateUrl: "./home.component.html",
	providers: [PeticionesService]
})


export class HomeComponent{
	public titulo = "Página home";
	public parametro;
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
	public slider1Slides = [{margin: 0}];
	public sliderActual = 0;
	public flagAutoSlider = true;
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
	//Luego se llama al parametro1 desde el html: <home [parametro1]="valor"></home>
	@Input() parametro1:string;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router
	){}

	ngOnInit(){
		this._route.params.forEach((params: Params) =>{
			this.parametro = params['page'];
		})

		$("#home4 .texto3").each(function(index){
			$(this).slideUp();
			$(this).prev().addClass("sliderOff");
			if (index == 0){
				$(this).slideDown();
				$("#home4 .texto3").prev().removeClass("sliderOff");
			}
		})

		clearInterval(x);

		this.incializarAutoSlider();

		this.incializarSlider();

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


	incializarSlider() {
		var totalItems = $("#sliderHome .sliderItem").length;
		var itemPorPantalla = 3;
		if ($(window).width() < 768) {
			itemPorPantalla = 1;
		}
		var widthCoeficiente = totalItems / itemPorPantalla;
		var widthActual = $("#sliderHome .sliderContainer").outerWidth();
		$("#sliderHome .sliderContainer").width(widthActual * widthCoeficiente);
		$("#sliderHome .sliderItem").each(function(index, element){
			$(element).outerWidth(widthActual / itemPorPantalla);
		});

		this.slider1Slides = [];
		for (var i = 0; i < widthCoeficiente; ++i) {
			if (i+1 > widthCoeficiente) {
				this.slider1Slides.push({margin: -(widthCoeficiente-1)*widthActual});
			} else {
				this.slider1Slides.push({margin: -i*widthActual});
			}
		}
	}

	moverSlider(posicion) {
		if (posicion == -1) {
			posicion = this.slider1Slides.length-1;
		} else if (posicion == this.slider1Slides.length) {
			posicion = 0;
		}
		new TweenMax.to($("#sliderHome .sliderContainer"), 2, {marginLeft: this.slider1Slides[posicion].margin, ease: Power4.easeOut});
		this.sliderActual = posicion;
	}

	incializarAutoSlider() {
		this.flagAutoSlider = false;
		var slideIndex = 0;
		cambiarSlide();
		x = setInterval(cambiarSlide, 4000);

		function cambiarSlide() {
			$(".imagenSlider").each(function(index, element){
				if ((index == slideIndex-1) || (slideIndex == 0 && index == $(".imagenSlider").length-1)) {
					new TweenMax.fromTo(element, 3, {opacity:1, scale: 1}, {opacity: 0, scale: 1.08, ease: Power4.easeOut});
				} else if (slideIndex == index) {
					new TweenMax.fromTo(element, 3, {opacity: 0, scale: 1.08}, {opacity: 1, scale: 1, ease: Power4.easeOut});
				} else {
					$(element).css({"opacity":"0"});
				}
			})
			slideIndex++;
			if (slideIndex >= $(".imagenSlider").length) {
				slideIndex = 0;
			} 
		}
	}

	redirigir(){
		this._router.navigate(['/home','valorPage']);
	}

	slideDown(event, idMap){
		//resetear style slide
		$("#home4 .texto3").each(function(){
			$(this).slideUp();
			$(this).prev().addClass("sliderOff");
		})

		//setear style slide
		if ($(event.srcElement).next().css("display") == "none"){
			$(event.srcElement).next().slideDown();
			$(event.srcElement).removeClass("sliderOff");
		}
		
		//actualizar mapa
		for (var i = 0; i < this.sedes.length; ++i) {
			if (this.sedes[i].sede == idMap) {
				this.lat = this.sedes[i].lat;
				this.lon = this.sedes[i].lon;
			}
		}
	}

}