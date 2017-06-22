'use strict';
const validateCreditCard = (update) => {
console.log('yeah '+ state.creditCard.substr(-3));

  const div7=$('<div></div>');
  const img13=$('<img src="assets/img/icons/bcp-logo.png"/>');
  const title3=$('<h3>Ingresa la clave de tu tarjeta  </h3>');
  const parrafo=$('<p>Tarjeta 1234</p>');
  const divInput5=$('<div></div>');
	const input8=$('<input type="text" placeholder="****">');
	const img14=$('<img src="assets/img/icons/lock.png"/>');
  const boton4=$('<button class="btn btn-info lg" disabled>Registrar</button>');

  div7.append(img13);
  div7.append(title3);
  div7.append(parrafo);
  div7.append(divInput5);
  divInput5.append(img14);
  divInput5.append(input8);
  div7.append(boton4);

  function validar(element){
    if(input8.val().length==4){
      boton4.prop('disabled','');
    }
  }

  function number(element){
  console.log(element.which);
  var codigoLetra=element.keyCode;
  console.log(codigoLetra);
	var teclas=String.fromCharCode(codigoLetra).toLowerCase();
  console.log(teclas);
  var numeros="0123456789";

  if(numeros.indexOf(teclas)==-1){
			return false;
  }

  $(element.target).on('keyup',validar);
}

  input8.on('keypress',number);

  boton4.on('click',()=>{
    console.log(state.user);
    var fono=state.user.responseJSON.data.phone;
    state.selectedPantalla="finish";
    $.post('api/registerCard',{phone:fono, card:state.card, cardPassword:input8.val()},(response)=>{
			console.log(response)
		},'json');
    update();
  })

  return div7;

}
