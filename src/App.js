import React from 'react';
import ReactJson from 'react-json-view';
import './App.css';
import Header from './components/Header.js';
import Form from './components/Form.js';
import './design/app.scss';
import Footer from './components/Footer.js';

import {useState} from 'react';

export default function App(){
  const [urlValue, setURL] = setState({urlValue:''});
  const [selectedMethod, setMethod] = useState({selectedMethod:''})
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  handleForm = data => {
    this.setState({ data });
  };

  render() {
    return (
      <>
        <Header />
        <Form
          prompt="go"
          handle={this.handleForm}
          history={this.handleHistory}
        />
        <div className="apiData">
          <ReactJson src={this.state.data} />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
