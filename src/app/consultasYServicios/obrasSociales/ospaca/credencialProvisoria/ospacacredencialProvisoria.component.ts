import { Component, Input } from "@angular/core";
import { PeticionesService } from '../../../../services/peticiones.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

declare var jquery:any;
declare var $:any;

@Component({
	selector: "ospacacredencialProvisoria",
	templateUrl: "./ospacacredencialProvisoria.component.html",
	styleUrls: ['./stylesComprobante.css'],
	providers: [PeticionesService]
})


export class OspacacredencialProvisoriaComponent{
	public titulo = "Credencial provisoria";
	public parametro; public dni; public fechaNacimiento;
	//Luego se llama al parametro1 desde el html: <credencialProvisoria [parametro1]="valor"></credencialProvisoria>
	public datos:any = [];
	public arrayDatos:Array<any> = [];

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
		this._router.navigate(['/credencialProvisoria','valorPage']);
	}

	ngOnChanges(){
		this.arrayDatos = [];
		var x = this.datos.childNodes[0].childNodes[1].childNodes;
		for (var i = 0; i < x.length; i++) {
			if (x[i].nodeName != "#text") {
				this.arrayDatos.push(x[i]);
			}
		}
		// console.log(this.arrayDatos);
	}

	imprimir() {

	    let printContents, popupWin;
	    printContents = document.getElementById('contenedorOuterPrintComprobante').innerHTML;
	    popupWin = window.open('', '_blank', 'top=0,left=0');
	    popupWin.document.open();
	    popupWin.document.write(`
	      <html>
	        <head>
	          <title>Print tab</title>
	          <style>
				@font-face{font-family:openSans;src:url(assets/fonts/OpenSans-Regular.ttf)}@font-face{font-family:openSansBold;src:url(assets/fonts/OpenSans-Bold.ttf)}img{width:100%}.comprobanteFinal div{float:left;font-family:openSans;font-weight:400;box-sizing:border-box}.contenedorCredencial{border:1px solid #000;margin:5px;padding:0 30px}.footerComprobante b{font-size:12px!important}div#fechaVto{font-size:12px;float:left}.datosComprobanteSucursales{margin-bottom:10px}.contenidoComprobante b{float:left;font-family:openSansBold}.firmaComprobante{width:200px;height:110px;margin-top:-20px}.subtituloComprobante,.tituloComprobante{width:100%}#datosComprobante{display:none}.subtituloComprobante2{width:45%;text-align:left;border-bottom:1px solid #000;font-size:18px;padding:5px 5px 10px 0}.contenidoComprobante{width:100%}.separadorColumnasComprobante{width:45%;padding:15px 30px 15px 0}.separadorColumnasComprobante:last-child{width:55%;padding-right:0;padding-left:30px;text-align:left;margin-top:-36px}.datosExportadosComprobante{width:100%;padding:5px 0;font-size:14px}.textoDatosComprobante{text-align:left;font-size:13px!important;margin:20px 0}.firmaNombreComprobante{margin-left:20px;font-size:12px!important}.footerComprobante{position:absolute;bottom:30px;left:30px;font-size:18px!important;margin-top:80px}#fechaEmision,div#fechaVtoComp{float:right;margin-left:5px;margin-top:-5px!important;font-weight:400}.firmasComprobante{margin-top:0}.datosComprobanteSucursales{font-size:13px;width:100%}.textoFooter2Comprobante{margin-top:15px;font-size:14px}.comprobanteFinal{width:1150px;height:600px;background:top right no-repeat;border:1px solid #000;margin:5px 5px 5px 50%;padding:0 40px;background-size:41%;transform:translate(-50%,-5%) scale(.8)}.imagenLogosComprobante{margin-right:60px;width:180px!important;padding-top:40px;padding-bottom:40px;height:auto}.datosExportadosComprobante div{margin-left:3px}.datosComprobanteSucursales b{float:none}.footerComprobante b{font-family:openSansBold;float:left}#poligonos{position:absolute;top:1%;left:1%;margin:0;padding:0;width:98%!important;height:98%;z-index:-1;overflow:hidden;opacity:1}div#fechaVtoComp{float:right;margin-left:5px;margin-top:-5px}.logoObraSocial{width:200px;transition:all .3s}.logoObraSocial img{filter:grayscale(100%);transition:all .3s;opacity:.7}.logoObraSocial:hover img{cursor:pointer;filter:grayscale(0);opacity:1}h2#fechaEmision{font-size:inherit;float:left;margin-top:-3px;margin-left:5px;margin-right:5px}#datosComprobanteSuperior{float:left;width:370px;margin-top:45px}.botonImprimir{margin-top:40px!important;float:left;width:100%;text-align:center}.comprobanteParaImprimir{position:absolute!important;top:-50px!important;box-shadow:1px 1px 0 20000px #fff!important;background:#fff!important;transform:translate(-50%,-5%) scale(.65)!important;z-index:9999!important} .botonesDoc{display: none;}	
			  </style>
	        </head>
	    	<body onload="window.print();window.close()">${printContents}</body>
	      </html>`
	    );
	    popupWin.document.close();
	}

	onSubmitCredencial(form){
		if (form.valid) {
			var respuesta = this.peticionesService.getCredencialOspaca(this.dni);
			var x = respuesta.childNodes[0].childNodes[1].childNodes;
			for (var i = 0; i < x.length; i++) {
				if (x[i].nodeName != "#text") {
					this.datos.push(x[i]);
				}
			}
		}
	}

	resolved(captchaResponse: string) {
        console.log(`Resolved captcha with response ${captchaResponse}:`);
        var respuesta = this.peticionesService.checkCaptcha(captchaResponse);
        console.log(respuesta);
    }
}