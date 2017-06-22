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
 if(state.selectedPantalla=='newUser'){
 wrapper.append(newUser(update));
 }
 if(state.selectedPantalla=='checkConfirmation'){
 wrapper.append(checkConfirmation(update));
 }
 if(state.selectedPantalla=='creditCardRegister'){
 wrapper.append(creditCardRegister(update));
 }
 if(state.selectedPantalla=='validateCreditCard'){
 wrapper.append(validateCreditCard(update));
 }
 if(state.selectedPantalla=='finish'){
 wrapper.append(finish(update));
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
