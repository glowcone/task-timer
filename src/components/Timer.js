import { connect } from 'react-redux';
import { nextTask } from '../actions/actions';
import React from 'react';

const mapStateToProps = (state) => {
	let task = state.tasks[state.timer];
	if(task) {
		return {
			title: task.title,
			time: task.time,
			id: task.id
		}
	}
	else {
		return {
			title: '',
			time: 0,
			id: -1
		}
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		nextTask: (id) => {
			dispatch(nextTask(id));
		}
	}
}

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time: props.time,
			isRunning: false
		};
	}

	tick() {
		if(this.state.isRunning) {
			if(this.props.id < 0)
				this.setState({ isRunning: false });
			else {
				if(this.state.time==0)
					this.nextTask();
				else
					this.setState({ time: this.state.time-1 }); 
			}
		}
	}

	nextTask() {
		this.props.nextTask(this.props.id);
		this.setState({
			time: this.props.time
		}); 
	}

	toggleTimer() {
		this.setState({
			isRunning: !this.state.isRunning
		});
	}

	secsToString(secs) {
		let str = [];
		str.unshift(parseInt(secs % 60));
		str.unshift(parseInt(secs / 60));
		str.unshift(parseInt(secs / 3600));
		return str.join(':');
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ time: nextProps.time });
	}

	render() {
		return (
			<div>
				<p>Current Task: {this.props.title}</p>
				<p onClick={this.toggleTimer.bind(this)}>{this.secsToString(this.state.time)}</p>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
