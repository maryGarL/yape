'use strict';
const Welcome = (update) => {
  const section=('<secction></secction>')
  const div=$('<div class="owl-carousel owl-theme"></div>');
  const img1=$('<div class="item"><img class="owl-lazy" data-src="assets/img/icons/icon-people.png" alt=""><h2>sss</h2><h2>asss</h2></div>');
  const img2=$('<div class="item"><img class="owl-lazy" data-src="assets/img/icons/happy-person.png" alt=""></div>');
  const img3=$('<div class="item"><img class="owl-lazy" data-src="assets/img/icons/group-people.png" alt=""></div>');

  div.append(img1)
  div.append(img2);
  div.append(img3);


  div.owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
    margin:10
});

  return div

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
