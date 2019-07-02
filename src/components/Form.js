import React from 'react';
import superagent from 'superagent';
import {useState} from 'react';

const Form = props => {
  const [userInput, handleInput] useState({
    urlValue: '',
      selectedMethod: '',
      checked: '',
      manipulateData: '',
  })
  const handleSubmit = event => {
    event.preventDefault();
    let URL = this.state.urlValue;
    let manipulateData = this.state.manipulateData;
    switch (this.state.selectedMethod) {
      case 'get':
        superagent.get(URL).then(result => {
          props.handle(result.body);
        });
        break;
      case 'post':
        superagent
          .post(URL)
          .set('Content-Type', 'application/json')
          .send(manipulateData)
          .then(result => {
            console.log(result);
            superagent.get(URL).then(result => {
              props.handle(result.body);
            });
          })
          .catch(err => console.error(err));
        break;
      case 'put':
        superagent
          .put(URL)
          .set('Content-Type', 'application/json')
          .send(manipulateData)
          .then(result => {
            console.log(result);
            let regex = /([^/]+$)/g;
            URL = URL.replace(regex, '');
            superagent.get(URL).then(result => {
              props.handle(result.body);
            });
          })
          .catch(err => console.error(err));
        break;
      case 'delete':
        superagent
          .delete(URL)
          .set('Content-Type', 'application/json')
          .then(result => {
            console.log(result);
            let regex = /([^/]+$)/g;
            URL = URL.replace(regex, '');
            superagent.get(URL).then(result => {
              props.handle(result.body);
            });
          })
          .catch(err => console.error(err));
        break;
      default:
        superagent.get(URL).then(result => {
          props.handle(result.body);
        });
    }
  };

  onChangeUrl = event => {
    this.setState({ urlValue: event.target.value });
  };

  handleTextArea = event => {
    this.setState({ manipulateData: event.target.value });
  };

  handleOptionChange = event => {
    this.setState({ selectedMethod: event.target.value, checked: true });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} id="form">
          <input id="url" type="text" onChange={this.onChangeUrl} />
          <div>
            <input
              type="radio"
              value="get"
              checked={this.state.selectedMethod === 'get'}
              onChange={this.handleOptionChange}
              className="get"
            />
            <label>GET</label>
            <input
              type="radio"
              value="post"
              checked={this.state.selectedMethod === 'post'}
              onChange={this.handleOptionChange}
            />
            <label>POST</label>
            <input
              type="radio"
              value="put"
              checked={this.state.selectedMethod === 'put'}
              onChange={this.handleOptionChange}
            />
            <label>PUT</label>
            <input
              type="radio"
              value="delete"
              checked={this.state.selectedMethod === 'delete'}
              onChange={this.handleOptionChange}
            />
            <label>DELETE</label>
          </div>
          <button>{this.props.prompt}</button>
          <textarea rows="6" cols="70" onChange={this.handleTextArea} />
        </form>
      </>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlValue: '',
      selectedMethod: '',
      checked: '',
      manipulateData: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    let URL = this.state.urlValue;
    let manipulateData = this.state.manipulateData;
    switch (this.state.selectedMethod) {
      case 'get':
        superagent.get(URL).then(result => {
          this.props.handle(result.body);
        });
        break;
      case 'post':
        superagent
          .post(URL)
          .set('Content-Type', 'application/json')
          .send(manipulateData)
          .then(result => {
            console.log(result);
            superagent.get(URL).then(result => {
              this.props.handle(result.body);
            });
          })
          .catch(err => console.error(err));
        break;
      case 'put':
        superagent
          .put(URL)
          .set('Content-Type', 'application/json')
          .send(manipulateData)
          .then(result => {
            console.log(result);
            let regex = /([^/]+$)/g;
            URL = URL.replace(regex, '');
            superagent.get(URL).then(result => {
              this.props.handle(result.body);
            });
          })
          .catch(err => console.error(err));
        break;
      case 'delete':
        superagent
          .delete(URL)
          .set('Content-Type', 'application/json')
          .then(result => {
            console.log(result);
            let regex = /([^/]+$)/g;
            URL = URL.replace(regex, '');
            superagent.get(URL).then(result => {
              this.props.handle(result.body);
            });
          })
          .catch(err => console.error(err));
        break;
      default:
        superagent.get(URL).then(result => {
          this.props.handle(result.body);
        });
    }
  };

  onChangeUrl = event => {
    this.setState({ urlValue: event.target.value });
  };

  handleTextArea = event => {
    this.setState({ manipulateData: event.target.value });
  };

  handleOptionChange = event => {
    this.setState({ selectedMethod: event.target.value, checked: true });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} id="form">
          <input id="url" type="text" onChange={this.onChangeUrl} />
          <div>
            <input
              type="radio"
              value="get"
              checked={this.state.selectedMethod === 'get'}
              onChange={this.handleOptionChange}
              className="get"
            />
            <label>GET</label>
            <input
              type="radio"
              value="post"
              checked={this.state.selectedMethod === 'post'}
              onChange={this.handleOptionChange}
            />
            <label>POST</label>
            <input
              type="radio"
              value="put"
              checked={this.state.selectedMethod === 'put'}
              onChange={this.handleOptionChange}
            />
            <label>PUT</label>
            <input
              type="radio"
              value="delete"
              checked={this.state.selectedMethod === 'delete'}
              onChange={this.handleOptionChange}
            />
            <label>DELETE</label>
          </div>
          <button>{this.props.prompt}</button>
          <textarea rows="6" cols="70" onChange={this.handleTextArea} />
        </form>
      </>
    );
  }
}

export default Form;
