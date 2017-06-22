'use strict';
const creditCardRegister = (update) => {
  const div6=$('<div></div>');
  const img11=$('<img src="assets/img/icons/bcp-logo.png"/>');
  const strong=$('<strong>Registra tu tarjeta debito BCP</strong>');
  const parrf5=$('<p>Por ahora solo aceptamos cuentas de ahorro y/o corrientes en soles </p>');
  const divInput4=$('<div></div>');
	const input5=$('<input type="text">');
	const img12=$('<img src="assets/img/icons/card.png" width="60%"/>');
  const divScan=$('<div></div>');
  const img13=$('<img src="assets/img/icons/scan.png"/>');
  const a1=$('<a>Escanear tarjeta</a>');
  const divFecha=$('<div></div>');
  const diVencimiento=$('<div></div>');
  const parrf6=$('<p>Fecha de vencimiento</p>');
  const input6=$('<input id="mes" type="text">');
  const slash=$('<span>/</span>');
  const input7=$('<input type="text">');
  const boton3=$('<button class="btn btn-info" disabled >Continuar</button>');

  div6.append(img11);
  div6.append(strong);
  div6.append(parrf5);
  div6.append(divInput4);
  divInput4.append(img12);
  divInput4.append(input5);
  div6.append(divScan);
  divScan.append(img13);
  divScan.append(a1);
  div6.append(divFecha);
  divFecha.append(parrf6);
  divFecha.append(diVencimiento);
  diVencimiento.append(input6);
  diVencimiento.append(slash);
  diVencimiento.append(input7);
  div6.append(boton3);

  function validar(element){
      if((input5.val().length==16) && (input6.val()>=1 && input6.val()<=12) && (input7.val()>=17 && input6.val()<=24)){
      console.log('hola');
      boton3.prop('disabled','');
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

  input5.on('keypress',number);
  input6.on('keypress',number);
  input7.on('keypress',number);


  boton3.on('click',()=>{
    state.selectedPantalla="validateCreditCard";
    state.creditCard=input5.val();
    update();
  })
  return div6;
}
