import React, { Component } from 'react';
import Formfield from '../Formfield/Formfield';

class Form extends Component { 
    constructor(props) {
        super(props);
        this.state= {
        formData: {},
        allFormErrorsCount: 0,
        allFormErrorTxt: '',
        isSubmit: false,
        isFormInvalid: false
      }
    }

    formSubmit = (e) => {
        e.preventDefault();
        console.log('formData after submit => ', this.state.formData);
        const isFormInvalid = Object.values(this.state.formData).some(field => field === '');
        console.log(isFormInvalid);
        if (isFormInvalid) {
            this.setState({
                isFormInvalid: isFormInvalid,
                allFormErrorTxt : 'Please fillup required fields',
                isSubmit: true
            });
        } else {
            this.setState({
                isFormInvalid: isFormInvalid,
                allFormErrorTxt : '',
                isSubmit: true
            });
        }   
    }

    inputHandler = (fieldName, fieldValue) => {
        const updatedForm = {
            ...this.state.formData
        };
        updatedForm[fieldName] = fieldValue;
        console.log('updatedForm => ', updatedForm);
        this.setState({
            formData: updatedForm
        });
        console.log('formData => ', this.state.formData);
    }

    render() 
    { 
        const formFieldsArray = this.props.formFields;
        formFieldsArray.forEach(ele => {
            Object.assign(this.state.formData, {[ele.key]: ''});
        });
        return (
            <div>
                {
                    this.state.isFormInvalid && this.state.isSubmit &&
                        <div className="alert alert-danger" role="alert">
                            {this.state.allFormErrorTxt}
                        </div>
                }
                <form className="mt-4" name={this.props.formName} onSubmit={this.formSubmit} noValidate>
                    {
                        formFieldsArray.map(ele => {
                            return (
                                <Formfield
                                ele={ele}
                                key={ele.key}
                                valids={ele.valids}
                                onInputHandler={this.inputHandler}
                                ></Formfield>
                            )
                        })
                    }
                    <div className="form-group text-center">
                        <button className="btn btn-primary" type="submit">{this.props.btnName}</button>
                    </div>
                </form>
            </div>
        )
    } 
} 

export default Form;