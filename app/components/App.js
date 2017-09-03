var React = require('react');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleInput(text) {
    this.setState({text: text});
  }

	render() {
		return (
			<div className="container">
        <h1>Test</h1>
			</div>
		)
	}
}

module.exports = App;
