'use strict';

const render = (clase) => {
  clase.empty();
  const wrapper = $('<div class="wrapper"></div>');


  const update = function() {
    render(clase);
  }

  if(state.selectedPantalla==null){
   wrapper.append(Welcome(update));
 }

 if(state.selectedPantalla=='getNumber'){
 wrapper.append(getNumber(update));
 }

 if(state.selectedPantalla=='createUser'){
 wrapper.append(createUser(update));
 }

  clase.append(wrapper);
  }

const state = {
    selectedPantalla: null
};


  $(_=>{

        const root = $('.root');
        render(root);


  });
