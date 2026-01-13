import ui from '../../models/ui.js';

class ELEMENT extends HTMLElement {
    constructor(){
        super();
	}

	createWrapper(){
		const self = this;

		const text = document.createElement('div');
		text.classList.add('text-3xl');

		text.innerHTML = `
		<span>
  		  Are you feeling 
  		  <span class="text-rotate">
    		<span>
      		  <span class="bg-teal-400 text-teal-800 px-2">good</span>
      		  <span class="bg-red-400 text-red-800 px-2">awful</span>
      		  <span class="bg-yellow-400 text-yellow-800 px-2">lucky</span>
      		  <span class="bg-blue-400 text-blue-800 px-2">sad</span>
    		</span>
  		  </span>
  		  today ?
		</span>
		`;

		return text;
	}

	connectedCallback(){
        const self = this;

		self.append(self.createWrapper());

		self._listeners = {
			'screen-resize': () => {
			}
		}

		for(let key in self._listeners){
			ui.addEventListener(key, self._listeners[key]);
		}
    }

    disconnectedCallback(){
        const self = this;

		for(let key in self._listeners){
			ui.removeEventListener(key, self._listeners[key]);
		}
    }
}

export default window.customElements.define(
    'text-rotate', ELEMENT
)
