import React from 'react';
import { stringToSecs, secsToString } from '../utils/parseTime'

class Task extends React.Component {

	constructor(props) {
		super(props);
		this.state={
			title: ''
		}
	}
	updateTime(event) {
		this.setState({time: event.target.value});
	}

	updateTitle(event) {
		this.setState({title: event.target.value});
	}

	saveTask() {
		let title = this.state.title.trim();
		let secs = stringToSecs(this.state.time);
		this.props.onSave(title, secs);
		this.setState({
			title,
			time: secsToString(secs)
		})
	}

	randomInitTime() {
		return secsToString(parseInt(Math.random()*6000));
	}
	render() {
		return (
			<li onDoubleClick={this.props.onClick}>
				<input
					type="text"
					placeholder="Title"
					value={this.state.title}
					onChange={this.updateTitle.bind(this)}
					onBlur={this.saveTask.bind(this)}
				/>
				<input
					type="text"
					placeholder={this.randomInitTime()}
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
