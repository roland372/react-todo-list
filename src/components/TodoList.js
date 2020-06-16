import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
	render() {
		// destructure
		const { items, clearList, handleDelete, handleEdit } = this.props;

		return (
			<ul className='list-group my-5'>
				<h3 className='text-capitalize text-center'>todo list</h3>
				{/* loop through items, pass props, and display them on a page */}
				{items.map(item => {
					return (
						<TodoItem
							key={item.id}
							title={item.title}
							// pass handleDelete with item id
							handleDelete={() => handleDelete(item.id)}
							handleEdit={() => handleEdit(item.id)}
						/>
					);
				})}

				<button
					type='button'
					className='btn btn-danger btn-block text-capitalize mt-5'
					onClick={clearList}
				>
					clear list
				</button>
			</ul>
		);
	}
}
