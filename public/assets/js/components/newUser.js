'use strict';
const newUser=(update)=>{

  const div4=$('<div class="pantalla4"></div>');
  const img6=$('<img src="assets/img/icons/lockone.png"/>');
  const h2=$('<h2>Crea tu usuario Yape</h2>');
  const title3=$('<h3>Ingresa un nombre, email y clave de usuario </p>');
  const divInput1=$('<div ></div>');
  const input3=$('<input type="text" placeholder="Nombre">');
  const img7=$('<img src="assets/img/icons/user.png" width="40%"/>');
  const divInput2=$('<div></div>');
  const input4=$('<input type="email" placeholder="correo@ejemplo.com">');
  const img8=$('<img src="assets/img/icons/message-gray.png" width="40%"/>');
  const divInput3=$('<div></div>');
  const input5=$('<input type="password" placeholder="Ingresa clave de 6 dígitos">');
  const img9=$('<img src="assets/img/icons/lock.png" width="40%"/>');
  const parrf2=$('<p>Cuida esta clave como oro, es tu acceso a Yape.</p>');
  const boton2=$('<button  class="btn btn-warning" disabled>Continuar</button>');
  const emailRegex=/[\w]+@{1}[\w]+\.[a-z]{2,3}/;

  div4.append(img6);
  div4.append(h2);
  div4.append(title3);
  div4.append(divInput1);
  divInput1.append(img7);
  divInput1.append(input3);
  div4.append(divInput2);
  divInput2.append(img8);
  divInput2.append(input4);
  div4.append(divInput3);
  divInput3.append(img9);
  divInput3.append(input5);
  div4.append(parrf2);
  div4.append(boton2);

  function texter(element){
    if(element.target.getAttribute("type")=="text"){
      var texto="";
      var subString=element.target.value.split(" ");
    	subString.forEach(function(element){
        return texto = texto + element.charAt(0).toUpperCase() + element.slice(1) + " ";});
      var print=texto.trim();
    	return element.target.value=print;
    }
  }

  function email(element){
    var mail=element.target.value;
  console.log(mail);
  if(!(emailRegex.test(mail)) || mail==""){
    console.log("no válido");
  }else{
    console.log("válido");
  }
}

  function passW(element){
    console.log(element.target);
    var password=$(element.target).val();
    console.log(password);
    console.log(input4.val().length);
    if(password.length==6 && input3.val().length!=0 && input4.val().length != 0){
      console.log('todo completado...Enhorabuena');
      boton2.prop('disabled','');
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

  input5.on('keyup',passW);
}

  input3.on('blur',texter);
  input4.on('blur',email);
  input5.on('keypress',number);

  boton2.on('click',()=>{
    state.selectedPantalla="checkConfirmation";
    var savedCode=state.code;
    console.log(savedCode);
    console.log(savedCode.responseJSON.data.phone);
    console.log(input3.val());
    console.log(input4.val());
    console.log(input5.val());
    var usuario=$.post('api/createUser',{phone:savedCode.responseJSON.data.phone, name:input3.val(),
                             email:input4.val(), password:input5.val()},(response)=>{
			console.log(response);
		},'json');

    update();
    state.user=usuario;
  })

  return div4;
}
