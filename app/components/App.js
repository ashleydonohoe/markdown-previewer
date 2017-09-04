var React = require('react');
var marked = require('marked');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'"
    };
  }

  componentDidMount() {
    const newOutput = this.convertText();
    this.setState({convertedText: newOutput});
  }

  handleInput(event) {
    const newOutput = this.convertText();
    this.setState({text: event.target.value, convertedText: newOutput});
  }

  convertText() {
    const markedUpText = marked(this.state.text);
    console.log(markedUpText);
    return markedUpText;
  }

  renderToHtml() {
    return <div dangerouslySetInnerHTML={{__html: this.state.convertedText}}/>
  }

	render() {
		return (
			<div className="container">
        <div className="row">
          <div className="col-md-12">
             <h1 className="text-center">Markdown Previewer</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
             <textarea value={this.state.text} onChange={this.handleInput.bind(this)} className="input-area"></textarea>
          </div>
          <div className="col-md-6">
             <div className="output-area">
              {this.renderToHtml()}
             </div>
          </div>
        </div>

			</div>
		)
	}
}

module.exports = App;
