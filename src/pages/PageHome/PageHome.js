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

		const textRotate = document.createElement("text-rotate");

		wrapper.append(textRotate);

		const button = document.createElement('button');
		button.classList.add('btn', 'btn-wide', 'mt-5');
		button.innerText = 'Do you want to know my feeling ?';
		wrapper.append(button);

		button.addEventListener('click', () => {
			router.go('/about');
		})

		const apiButton = document.createElement('button');
		apiButton.classList.add('btn', 'btn-wide', 'mt-5');
		apiButton.innerText = 'Ping API';
		wrapper.append(apiButton);

		const apiResponse = document.createElement('pre');
		apiResponse.setAttribute('id', 'api-response');
		apiResponse.classList.add('mt-5', 'p-4', 'bg-gray-100', 'rounded');
		wrapper.append(apiResponse);

		apiButton.addEventListener('click', async () => {
			const responseEl = document.getElementById('api-response');
			responseEl.innerText = 'Loading...';
			try {
				const response = await fetch('/api/ping');
				const data = await response.json();
				responseEl.innerText = JSON.stringify(data, null, 2);
			} catch (error) {
				responseEl.innerText = `Error: ${error.message}`;
				console.error(error);
			}
		});

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
