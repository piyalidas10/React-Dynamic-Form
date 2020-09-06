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

    handleChange = (event, param) => {
        event.preventDefault();
        console.log('param => ', param);
        const { name, value, required } = event.target;
        console.log(name, value, value.length, required);
        let error = {};
        if (required && value.length < 3) {
            console.log(param.find(ele => ele.valid === 'required'));
            error = {errorTxt: name + param.find(ele => ele.valid === 'required').error};
        }
        this.setState({
            formErrors: error
        });
        console.log(this.setState.formErrors);
    };

    formSubmit = e => {
        // e.preventDefault();    
    
        // if(this.handleValidation()){
        //     alert("Form submitted");
        //  }else{
        //     alert("Form has errors.")
        //  }
    }

    render() 
    { 
        this.setState.errors = this.props.formFields.map(ele => ele.key);
        console.log(this.setState.errors);
        return (
            <form className="mt-4" name={this.form} ref={form => this.form = form} onClick={this.formSubmit} autoComplete="off">
                {
                    this.props.formFields.map(ele => {
                        return (
                            <Formfield
                            ele={ele}
                            key={ele.key}
                            handleChange={this.handleChange}
                            valids={ele.valids}
                            formErrors={this.state.formErrors}
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