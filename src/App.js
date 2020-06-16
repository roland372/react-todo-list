import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuid } from 'uuid';

class App extends Component {
	state = {
		items: [],
		// uuid will generate unique id
		id: uuid(),
		item: '',
		editItem: false,
	};

	// method do handle input change
	// when we're making changes, we also want to change values of item in state
	handleChange = e => {
		this.setState({
			// set state of item, to value of target, that we're clicking on
			item: e.target.value,
		});
	};

	// grab the values that are being passed in an input and place them in new item
	handleSubmit = e => {
		e.preventDefault();
		const newItem = {
			id: this.state.id,
			title: this.state.item,
		};
		// console.log(newItem);

		// pass values of newItem into an items array
		// split values of items array, and place them in new array updatedItems, and add newItem into it
		const updatedItems = [...this.state.items, newItem];
		this.setState({
			// set items to updatedItems array
			items: updatedItems,
			// clear input
			item: '',
			id: uuid(),
			editItem: false,
		});
	};

	// clear todos
	clearList = () => {
		this.setState({
			items: [],
		});
	};

	// delete individual item
	handleDelete = id => {
		// filter the items, and return items based on their id's that do not match id of the item that we're clicking on
		const filteredItems = this.state.items.filter(item => item.id !== id);
		// update items state
		this.setState({
			items: filteredItems,
		});
	};

	// edit todo
	// handleEdit = id => {
	// 	// console.log(id);
	// 	// remove todo from a list, and pass it into a input, so we can edit it
	// 	const filteredItems = this.state.items.filter(item => item.id !== id);

	// 	// look for the item's id that matches the id of element, that we're clicking on
	// 	const selectedItem = this.state.items.find(item => item.id === id);
	// 	// console.log(selectedItem);

	// 	this.setState({
	// 		items: filteredItems,
	// 		// pass title value of selectedItem to input
	// 		item: selectedItem.title,

	// 		editItem: true,
	// 		id: id,
	// 	});
	// };

	// disable another edit, if we're currently editing item
	handleEdit = id => {
		if (!this.state.editItem) {
			const filteredItems = this.state.items.filter(item => item.id !== id);
			const selectedItem = this.state.items.find(item => item.id === id);
			this.setState({
				items: filteredItems,
				item: selectedItem.title,
				editItem: true,
				id: id,
			});
		}
	};

	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-10 mx-auto col-md-8 mt-4'>
						<h3 className='text-capitalize text-center'>todo input</h3>
						{/* pass props */}
						<TodoInput
							item={this.state.item}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
							clearList={this.clearList}
							editItem={this.state.editItem}
						/>
						{/* pass props to display them */}
						<TodoList
							items={this.state.items}
							clearList={this.clearList}
							handleDelete={this.handleDelete}
							handleEdit={this.handleEdit}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
