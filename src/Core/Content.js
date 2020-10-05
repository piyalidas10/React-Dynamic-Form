import React, { Component } from 'react';
import Form from '../Form/Form';
import data from '../assets/data.json';

class Content extends Component {
    state = {
      selected: 'register',
      formValues: data['register']
    };
  
    clickFunction = (option) => {
      this.setState({ //method allow to update special property state nad make sure reacts know about update and update DOM
        formValues: data[option.ele]
      })
    };
  
    render() {
      return (
        <div className="container">
          <div className="row justify-content-md-center">
          
            <div className="col-md-auto FormSection">
                <h4 className="text-center">{this.state.selected}</h4>
                  <Form
                      formFields={this.state.formValues.formFields}
                      formName={this.state.formValues.pageTitle}
                      formSection={this.state.formSection}
                      btnName={this.state.formValues.btn}
                  ></Form>
            </div>

          </div>
        </div>
      );
    }
  }

  export default Content;