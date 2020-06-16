import React, { Component } from 'react';

export default class TodoInput extends Component {
	render() {
		// grab values and destructure them
		const { item, handleChange, handleSubmit, editItem } = this.props;

		return (
			<div className='card card-body my-3'>
				<form onSubmit={handleSubmit}>
					<div className='input-group'>
						<div className='input-group-prepend'>
							<div className='input-group-text bg-primary text-white'>
								<i className='fas fa-book'></i>
							</div>
						</div>
						<input
							type='text'
							className='form-control text-capitalize'
							placeholder='add a todo item'
							value={item}
							onChange={handleChange}
						/>
					</div>
					<button
						type='submit'
						// condition depending if we're adding or editing todo
						// change class name if we're editing or adding
						className={
							editItem
								? 'btn btn-block btn-success mt-3 text-capitalize'
								: 'btn btn-block btn-primary mt-3 text-capitalize'
						}
					>
						{/* change button name if we're editing or adding */}
						{editItem ? 'edit item' : 'add item'}
					</button>
				</form>
			</div>
		);
	}
}
