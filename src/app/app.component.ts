import { Component } from '@angular/core';

declare var jquery:any;
declare var $:any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
  	title = 'APPIRED';
  	
  	ngOnInit(){
  		//CONSULTA AJAX
  		$.ajax({
  			url: "./assets/img/logoAppi.svg", 
  		    error: function(xhr){
  		        console.log("Ocurrió un error: " + xhr.status + " " + xhr.statusText);
  		    },
  			success: function(result){
  		        $(".logoAppi").each(function(){
  		        	$(this).html(result);
  		        });
  		    },
  		    dataType: "text"
  		});
  	}

    subirScroll(){
      $("html, body").animate({"scrollTop":"0"},0);
    }
}
