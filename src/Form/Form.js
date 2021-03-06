import React, { Component } from 'react';
import Formfield from '../Formfield/Formfield';

class Form extends Component { 
    constructor(props) {
        super(props);
        this.state= {
        formData: {},
        allFormErrorsCount: 0,
        allFormErrorTxt: '',
        allFormSuccessTxt: '',
        isSubmit: false,
        isFormInvalid: false
      };
    }

    formSubmit = (e) => {
        e.preventDefault();
        const {formFields} = this.props;
        console.log('formData after submit => ', this.state.formData);
        let valuesOfRequiredFields = [];
        formFields.forEach(formElem => {
            if ((formElem.valids.filter(ele => ele.valid === 'required')).length > 0) {
                valuesOfRequiredFields.push(this.state.formData[formElem.key]);
            }
        });
        console.log('valuesOfRequiredFields => ', valuesOfRequiredFields);
        const isFormInvalid = valuesOfRequiredFields.some(field => field === '');
        console.log(isFormInvalid);
        if (isFormInvalid) {
            this.setState({
                isFormInvalid: isFormInvalid,
                allFormErrorTxt : 'Please fillup required fields'
            });
        } else {
            this.setState({
                isFormInvalid: isFormInvalid,
                allFormErrorTxt : '',
                allFormSuccessTxt: 'Registration is successfull',
                isSubmit: true
            });
        }   
    }

    inputHandler = (fieldName, fieldValue) => {
        console.log([fieldName], fieldValue);
        this.setState({
            formData: {
                ...this.state.formData,
                [fieldName]: fieldValue
            }
        },() => {
            console.log('Callback => ', this.state.formData);
        });
    }

    componentDidMount() {
        const {formFields} = this.props;
        formFields.forEach(ele => {
            Object.assign(this.state.formData, {[ele.key]: ''});
        });
    }

    render() 
    { 
        const {formFields} = this.props;
        return (
            <div>
                {
                    this.state.isFormInvalid && 
                        <div className="alert alert-danger" role="alert">
                            {this.state.allFormErrorTxt}
                        </div>
                }
                {
                    !this.state.isFormInvalid && this.state.isSubmit &&
                        <div className="alert alert-success" role="alert">
                            {this.state.allFormSuccessTxt}
                        </div>
                }
                <form className="mt-4" name={this.props.formName} onSubmit={this.formSubmit} noValidate>
                    {
                        formFields.map(ele => {
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
                        <button className="btn btn-primary" type="submit" disabled={this.state.isSubmit}>{this.props.btnName}</button>
                    </div>
                </form>
            </div>
        )
    } 
} 

export default Form;