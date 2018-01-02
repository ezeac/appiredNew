import { Component, Input } from "@angular/core";
import { PeticionesService } from '../../../../services/peticiones.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

declare var jquery:any;
declare var $:any;

@Component({
	selector: "ospacadescargarCartillaPrestadores",
	templateUrl: "./ospacadescargarCartillaPrestadores.component.html",
	// styleUrls: ['./style.css'],
	providers: [PeticionesService]
})


export class OspacadescargarCartillaPrestadoresComponent{
	public titulo = "Descargar cartilla de prestadores";
	public parametro;
	//Luego se llama al parametro1 desde el html: <ospacadescargarCartillaPrestadores [parametro1]="valor"></ospacadescargarCartillaPrestadores>
	@Input() parametro1:string;

	constructor(
		private peticionesService:PeticionesService,
		private _route: ActivatedRoute,
		private _router: Router
	){}

	ngOnInit(){
		this._route.params.forEach((params: Params) =>{
			this.parametro = params['page'];
		})
	}

	redirigir(){
		this._router.navigate(['/ospacadescargarCartillaPrestadores','valorPage']);
	}

	resetForm(item){
		$("#formDescargarPlantilla select, #formDescargarPlantilla input").each(function(index, element){
			$(element).prop('checked', false);
		})
		$("#"+item).prop('checked', true);
		if (item != "mendoza") {
			$("#selectMendoza").val("");
		} else {
			$("#checkMendoza").prop('checked', true);
		}
	}

	descargarPlantilla() {
		for (var i = 0; i < $("#formDescargarPlantilla").serializeArray().length; ++i) {
			if ($("#formDescargarPlantilla").serializeArray()[i].value != "") {
				window.open($("#formDescargarPlantilla").serializeArray()[i].value);
			}
		}
	}

	abrirSelect(e, itemId) {
		e.preventDefault();
		console.log("asd");
		// var event = new MouseEvent('mousedown');
		// document.getElementById(itemId).dispatchEvent(event);

		// var event;
		// event = document.createEvent('MouseEvents');
		// event.initMouseEvent('mousedown', true, true, window);
		// document.getElementById(itemId).dispatchEvent(event);
	}
}