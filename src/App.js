import { Component } from 'react';
import './App.css';
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  state = {
    fields: {}
  };

  onSubmit = fields => {
    this.setState({fields})
    console.log("Fields recieved from form: ", fields);
  };

  render(){
    return (
    <div className="App">
        <Form onSubmit={fields => this.onSubmit(fields)}/>

        {/* Displays JSON of the text submited in the form  */}
        <p><pre>
          {JSON.stringify(this.state.fields, null, 2)}
          </pre>
        </p>
    </div>
    );
  }
}

export default App;
