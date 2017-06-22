const finish=(update)=>{
  const div8=$('<div></div>');
  const div9=$('<div></div>');
  const vineta=$('<img src="assets/img/icons/engine.png"/>');
  const cara=$('<img src="assets/img/icons/happy-face.png"/>');
  const parrafo=$('<p>Hola</p>');
  const soles=$('<div></div>');
  const img15=$('<img src="assets/img/icons/eye.png"/>');
  const span=$('<span>Mostrar Saldos</span>');
  const div10=$('<div></div>');
  const span1=$('<span>ULTIMOS MOVIMIENTOS</span>');
  const img16=$('<img src="assets/img/icons/right-arrow-circular-button.png"/>');
  const div11=$('<div></div>');
  const img19=$('<img src="assets/img/icons/icon.png"/>');
  const div12=$('<div></div>');
  const parraf2=$('<p>¿Aún no realizas tu primer pago?</p>');
  const parraf1=$('<p>Es rápido y sencillo</p>');
  const img17=$('<img src="assets/img/icons/send.png"/>');
  const img18=$('<img src="assets/img/icons/code-qr.png"/>');

  div8.append(div9);
  div9.append(vineta);
  div9.append(cara);
  div9.append(parrafo);
  div9.append(soles);
  soles.append(img15);
  soles.append(span);
  div8.append(div10);
  div10.append(span1);
  div10.append(img16);
  div8.append(div11);
  div11.append(img19);
  div11.append(div12);
  div12.append(parraf2);
  div12.append(parraf1);
  div11.append(img17);
  div11.append(img18);

  return div8;

}
