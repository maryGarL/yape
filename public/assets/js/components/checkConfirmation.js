'use strict';
const checkConfirmation = (update) => {
    const div5=$('<div class="yape"></div>');
    const img10=$('<img src="assets/img/icons/check.png"/>');
    const parrf3=$('<p class="fuent6">¡Bien!</p>');
    const parrf4=$('<p class="fuent5">Ahora puedes usar Yape</p>');
    div5.append(img10);
    div5.append(parrf3);
    div5.append(parrf4);

    setTimeout(function(){
      state.selectedPantalla="creditCardRegister";
      update();
    },3000);

    return div5;
};
