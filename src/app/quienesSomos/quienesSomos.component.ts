import { Component, Input } from "@angular/core";
import { PeticionesService } from '../services/peticiones.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

declare var jquery:any;
declare var $:any;
declare var ScrollMagic:any;
declare var TweenMax:any;

@Component({
	selector: "quienesSomos",
	templateUrl: "./quienesSomos.component.html",
	providers: [PeticionesService]
})


export class QuienesSomosComponent{
	public titulo = "Página quienesSomos";
	public parametro;
	//Luego se llama al parametro1 desde el html: <quienesSomos [parametro1]="valor"></quienesSomos>
	@Input() parametro1:string;
  	

	constructor(
		private _route: ActivatedRoute,
		private _router: Router
	){}

	ngOnInit(){
		this._route.params.forEach((params: Params) =>{
			this.parametro = params['page'];
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
		this._router.navigate(['/quienesSomos','valorPage']);
	}

	mostrarItemSlide(nombre){
		$(".textoItemQuienesSomos").stop().fadeOut(0);
		$("#"+nombre).fadeIn();
		$(".tituloQuienesSomosSlide").removeAttr("style");
		$("#titulo"+nombre).css({"color":"white"});
	}

}