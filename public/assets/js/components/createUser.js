const createUser=(update)=>{

  const div3=$('<div class="caja3"></div>');
  const img4=$('<img src="assets/img/icons/message.png"/>');
  const title2=$('<h3>Ahora ingresa tu código</h3>');
  const parrafo=$('<p>Enviamos un SMS con el código de validación al número </p>');
  const codex=$('<span class="telefono"></span>');
  const divInput=$('<div class="input2"></div>');
	const input2=$('<input type="text">');
	const img5=$('<img src="assets/img/icons/lock.png"/>');
  const parrf1=$('<p>Reintentar en <img src="assets/img/icons/clock.png" /> 21 segundos</p>');

  div3.append(img4);
  div3.append(title2);
  div3.append(parrafo);
  parrafo.append(codex);
  div3.append(divInput);
  divInput.append(img5);
  divInput.append(input2);
  div3.append(parrf1);

  function verificacion(elem){
    console.log('Tu codigo es '+elem);
          console.log(input2.val());
      if(input2.val().length>1 && input2.val()==elem){
        setTimeout(function(){
          state.selectedPantalla="newUser";
          update();
        },5000);
      }

      if(input2.val().length>=0 && input2.val()!=elem){
        var fono=codex.text();
        var nuevoCodigo;
        $.post('api/resendCode',{phone:fono} ,(resp) =>{
            console.log(resp);
            console.log(resp.data);
            return nuevoCodigo=resp.data;
          })

        setTimeout(function(){
          console.log(nuevoCodigo);
          verificacion(nuevoCodigo);
        },10000);
      }}

      var generateCode;
      setTimeout(function(){
        var codigo=state.code;
       generateCode=codigo.responseJSON.data.code;
        console.log(generateCode);
        verificacion(generateCode);},10000);
  return div3
}
