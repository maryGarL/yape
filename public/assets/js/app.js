'use strict';

const render = (clase) => {
  clase.empty();
  const wrapper = $('<div class="wrapper"></div>');
  const div = $('<div class="div"></div>');
  wrapper.append(Welcome(_ => render(clase)));
  clase.append(wrapper);
  }

const state = {
  stations: null,
  selectedStation: null
};

const root = $('.root');
  render(root);
