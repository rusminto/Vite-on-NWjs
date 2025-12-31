import router from '../../models/router.js';
import ui from '../../models/ui.js';
import { utils, hDate, hNumber } from '../../helper/index.js';

class PageHome extends HTMLElement {
	constructor(){
		super();
	}

	createWrapper(){
		const self = this;
		const wrapper = document.createElement('div');
		wrapper.classList.add('flex', 'justify-center', 'items-center', 'h-screen', 'flex-col');

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
		wrapper.append(text);

		const button = document.createElement('button');
		button.classList.add('btn', 'btn-wide', 'mt-5');
		button.innerText = 'Do you want to know my feeling ?';
		wrapper.append(button);

		button.addEventListener('click', () => {
			router.go('/about');
		})

		return wrapper;
	}

	checkNotif(){
		const flag = ui.getFlag();
		if(flag?.notification){
			new Notify(flag.notification);
		}
	}

	connectedCallback(){
		const self = this;

		window.onload = async () => {
			self.classList.add('show');
			ui.triggerUpdateScreen();
			await utils.sleep(300);	// to make sure that screen was ready

			self.checkNotif();
		}

		const wrapper = self.createWrapper();

		self.append(wrapper);

		self._listeners = {
			'screen-resize': ({ detail }) => {
			},
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
    'page-home',
    PageHome
)
