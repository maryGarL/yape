'use strict';
const Welcome = (update) => {
  const section=$('<secction></secction>')
  const div=$('<div class="owl-carousel owl-theme"></div>');
  const div2=$('<div class="boton"></div>');
  const img1=$('<div class="item"><img class="owl-lazy" data-src="assets/img/icons/icon-people.png" alt=""><div><h2>Paga a tu amigos</h2><p>Paga a quien quieras desde donde quieras, sin usar efectivo</p></div>');
  const img2=$('<div class="item"><img class="owl-lazy" data-src="assets/img/icons/happy-person.png" alt=""><div><h2>Sin numero de cuenta</h2><p>Elige a quien pagar desde tu lista de contactos</p></div>');
  const img3=$('<div class="item"><img class="owl-lazy" data-src="assets/img/icons/group-people.png" alt=""><div><h2>Gratis y Seguro</h2><p>La transferencia es inmediata y gratuita de una cuenta a otra</p></div>');
  const boton =$('<button type="button" class="btn btn-warning boton1">Registrate</button>')
  div.append(img1);
  div.append(img2);
  div.append(img3);
  div2.append(boton);
  section.append(div);
  section.append(div2);

  div.owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
    margin:10
});
boton.on('click',()=>{
		state.selectedPantalla='getNumber';
		update();
	})
  return section

}


/*const div= $('<div class="container"></div>');
const icon=$('<i class="fa fa-search" aria-hidden="true"></i>');
const input= $('<input type="text" name="" value="" placeholder="Ingrese su Distrito">');
const contenedorlistas=$('<div class="buscar"></div>');

div.append(input);
div.prepend(icon);
div.append(contenedorlistas);

state.stations.forEach(station=>{
 contenedorlistas.append(listaStation(station,update));
});

input.on('keyup', (e) => {
  var filtro = filterByDistrict(state.stations,input.val());
  console.log(filtro);
   reRender(contenedorlistas,filtro,update);
});
return div;*/
