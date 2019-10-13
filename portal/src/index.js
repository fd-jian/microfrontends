import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));

window.createMount = (name, tagName) => {
	if (window[name]) {
		console.log(`mount function already created for ${name}`);
		return;
	}

	window[name] = {
		mount: (id, attributes = {}) => {
			const container = document.getElementById(id);

			if (!container) {
				console.error(`no container element with id '${id}' was found`)
				return;
			}

			const app = document.createElement(tagName);

			Object.keys(attributes).forEach(key => {
				app.setAttribute(key, attributes[key]);
			});

			container.appendChild(app);
		}
	}
}