import React from 'react';
import Formfield from '../Formfield/Formfield';

class Form extends React.Component { 
    constructor(props) { 
        console.log(props);
        super(props);
        this.state = {
            formErrors: {},
            errors: this.props.formFields.map(ele => ele.key)
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value, required } = event.target;
        console.log(name, value, value.length, required);
        if (required && value.length < 3) {
            this.setState.formErrors = {name: name + ' should have minimum 3 characters'};
        } else {
            this.setState.formErrors = {};
        }
        console.log(this.setState.formErrors);
    };

    formSubmit = e => {
        e.preventDefault();    
    
        if (!this.form.isValid()) {
          console.log('form is invalid: do not submit');
        } else {
          console.log('form is valid: submit');
        }
    }

    render() 
    { 
        this.setState.errors = this.props.formFields.map(ele => ele.key);
        console.log(this.setState.errors);
        return (
            <form className="mt-4" ref={form => this.form = form} onSubmit={this.formSubmit}>
                {
                    this.props.formFields.map(ele => {
                        return (
                            <Formfield
                            ele={ele}
                            key={ele.key}
                            handleChange={this.handleChange}
                            ></Formfield>
                        )
                    })
                }
                <div className="form-group text-center">
                    <button className="btn btn-primary" type="submit">{this.props.btnName}</button>
                </div>
            </form>
        )
    } 
} 

export default Form;