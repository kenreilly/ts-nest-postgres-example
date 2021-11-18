import { Net } from './net.js'

export class App {

	static name_input: HTMLInputElement
	static desc_input: HTMLInputElement
	static save_button: HTMLButtonElement
	static item_list: HTMLElement

	static init() {

		this.name_input = document.querySelector('#item_name')
		this.desc_input = document.querySelector('#item_description')
		this.save_button = document.querySelector('#save')
		this.item_list = document.querySelector('main > output')

		this.save_button.onclick = () => App.save_item()
		App.load_items()
	}

	static save_item() {

		let name = this.name_input.value
		let desc = this.desc_input.value
		let data = { name: name, description: desc }

		Net.post('/service/add-item', data).then((res) => {

			this.name_input.value = null
			this.desc_input.value = null
			App.load_items()
		})
	}
	
	static load_items() {

		Net.get('/service/get-items').then((res) => {

			this.item_list.innerHTML = null
			res.forEach(item => { App.insert_item(item) });
		})
	}

	static insert_item(item: { id: string, name:string, description: string }) {

		let div = document.createElement('div')
		let id = document.createElement('span')
		let name = document.createElement('span')
		let desc = document.createElement('span')

		id.innerText = item.id
		name.innerText = item.name
		desc.innerText = item.description 

		div.appendChild(id)
		div.appendChild(name)
		div.appendChild(desc)

		this.item_list.appendChild(div)
	}
}

App.init()