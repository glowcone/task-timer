import React from 'react';

class Task extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			time: '00:00:00'
		}
	}

	stringToSecs(string) {
		let tarr = string.split(':');
		let secs = 0, mul = 1;
		for(let i=tarr.length-1; i>=0; i--) {
			secs += tarr[i] * mul;
			mul *= 60;
		}
		return secs;
	}
	
	updateTime(event) {
		this.setState({time: event.target.value});
	}

	updateTitle(event) {
		this.setState({title: event.target.value});
	}

	saveTask() {
		this.props.onSave(this.state.title.trim(), this.stringToSecs(this.state.time));
	}

	render() {
		return (
			<li onDoubleClick={this.props.onClick}>
				<input
					type="text"
					value={this.state.title}
					onChange={this.updateTitle.bind(this)}
					onBlur={this.saveTask.bind(this)}
				/>
				<input
					type="text"
					value={this.state.time}
					onChange={this.updateTime.bind(this)}
					onBlur={this.saveTask.bind(this)}
				/>
				<button onClick={(e) => {
					e.preventDefault();
					this.props.onRemove();
				}}
			>
				X
			</button>
		</li>

		)
	}
}

export default Task;
