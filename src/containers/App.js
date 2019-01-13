import React, { Component } from 'react';
import { Counter } from '../components/Counter';
import './app.css';
import Facts from '../components/Facts';
import axios from 'axios';

class App extends Component {
	state = {
		count: 0,
		fact: ''
	};
	handleAddOne = () => {
		this.setState({ count: this.state.count + 1 });
	};
	handleMinusOne = () => {
		this.setState({ count: this.state.count - 1 });
	};
	handleGetFact = () => {
		console.log('get fact');
		axios
			.get(`http://numbersapi.com/${this.state.count}`)
			.then(res => {
				console.log(res);
				this.setState({
					fact: res.data
				});
				console.log(this.state.fact);
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	render() {
		return (
			<div>
				<h1>Facts about Numbers!</h1>
				<Counter
					count={this.state.count}
					addOne={this.handleAddOne}
					minusOne={this.handleMinusOne}
					getFact={this.handleGetFact}
				/>
				{!!this.state.fact && <Facts fact={this.state.fact} />}
			</div>
		);
	}
}

export default App;
