'use strict';
const getNumber=(update)=>{
	const div3=$('<div class="caja1"></div>');
	const div4=$('<div class="cajaInput"></div>');
	const div5=$('<div class="cajaCheck"></div>');
	const imgphone=$('<img src="assets/img/icons/phone.png"/>');
	const title1=$('<h2>Para comenzar validamos tu número</h2>');
	const subTitle1=$('<h3>Recibirás un SMS con un código de validación</h3>');
	const imageInput=$('<img src="assets/img/icons/phoneandnumber.png" />');
	const input1=$('<input type="tel">');
	const check=$('<input type="checkbox" value="1"> <span class="aspa">Acepto los <a>términos y condiciones</a></span>');
	const boton2=$('<button type="button" class="btn btn-info celeste" disabled name="button">Continuar</button>');

	div3.append(imgphone);
	div3.append(title1);
	div3.append(subTitle1);
	div4.append(imageInput);
	div4.append(input1);
	div5.append(check);
	div3.append(div4);
	div3.append(div5);
	div3.append(boton2)

	$(function(){

	  input1.keypress(function(e) {
			if(input1.val().length!=8){
				console.log('no tiene 9 dígitos');
				  check.click(function() {
				if($(this).is(':checked')){
					boton2.attr('disabled', 'disabled');
				}
			})
			}else{
				console.log('tiene 9 dígitos');
				check.click(function() {
				if($(this).is(':checked')) {
	          boton2.removeAttr('disabled');
	      }
			})
			}
			if(isNaN(this.value + String.fromCharCode(e.charCode)))
	     return false;
	  })
	  .on("cut copy paste",function(e){
		e.preventDefault();
	  });
});

boton2.on('click',()=>{
		console.log(state.pantalla);
		console.log(input1.val());
		// let codigo;
		var registro= $.post('api/registerNumber',{phone:input1.val(), terms:true},(response)=>{
			console.log(response);
			console.log(response.message);
			console.log(response.data.phone);
			state.phone=response.data.phone;
			console.log(state.phone);
			$ ('.telefono').text(response.data.phone);
			return response;

		},'json');

	state.selectedPantalla='createUser';
	state.code=registro;
	update();
})
	return div3;

}
