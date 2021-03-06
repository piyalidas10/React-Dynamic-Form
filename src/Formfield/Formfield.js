
import React, { useState } from 'react';
import Error from '../Error/Error';

const Formfield = (props) => {
    const {ele:{input, key, required, items}, onInputHandler} = props;
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState({});
    let formClasses = ['form-control'];

    const handleChange = (event, param) => {
        const { name } = event.target;
        console.log('event => ', event);
        let checkValidationReturn = checkValidation(event, param);
        setCount(checkValidationReturn.error);
        onInputHandler(name, checkValidationReturn.value);
    };

    const checkValidation = (event, param) => {
        console.log(param);
        const { name, value } = event.target;
        console.log('----------------------------------------------', value);
        let error = {};
        let requiredCheck, patternCheck, minlengthCheck, emailIdCheck;
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if (param) {
            requiredCheck = param.find(ele => ele.valid === 'required');
            patternCheck = param.find(ele => ele.valid === 'pattern');
            minlengthCheck = param.find(ele => ele.valid === 'minlength');
            emailIdCheck = param.find(ele => ele.valid === 'emailId');
        }
        if (requiredCheck && Object.keys(requiredCheck).length > 0 && value.length === 0) {
            error = {errorTxt: requiredCheck.error};
        } else if (minlengthCheck && value.length < minlengthCheck.length) {
            error = {errorTxt: minlengthCheck.error};
        } else if (patternCheck && Object.keys(patternCheck).length > 0) {
            if (!value.match(patternCheck.validator)) {
                error = {errorTxt: patternCheck.error};
            } else {
                error = {};
            }
        } else if (emailIdCheck && !value.match(emailPattern)) {
            error = {errorTxt: emailIdCheck.error};
        } else {
            error = {};
        }
        return {error, value};
    };

    if (Object.keys(count).length > 0)  {
        formClasses.push('error');
    }

    return (
        <div className="form-group" key={key}>
        {
            (input === 'text' || input === 'email' || input === 'password' || input === 'number' || input === 'date') ? (
                <div className="row">
                    <label className="col-md-4">{key}</label>
                        <div className="col-md-8">
                            <input
                            className={formClasses.join(' ')}
                            type={input}
                            name={key}
                            placeholder={key}
                            minLength={3}
                            maxLength={30}
                            onChange={(e) => handleChange(e, props.valids)}/>
                            {
                                Object.keys(count).length > 0 && (
                                    <Error name={key} error={count} />
                                )
                            }
                        </div>
                </div> 
            ) : (
                <React.Fragment>
                  {
                     (input === 'radio')? (
                        <div className="row">
                        <label className="col-md-4">{key}</label>
                        {
                            items.map(eleRadio => (
                                <div className="form-check-inline" key={eleRadio.name}>
                                    <label className="form-check-label">
                                        <input
                                        type={input}
                                        className="form-check-input"
                                        name={key}
                                        placeholder={eleRadio.name}
                                        required={required}
                                        value={eleRadio.name}
                                        onChange={handleChange}/>
                                        {eleRadio.name}
                                    </label>
                                </div>
                            ))
                        }
                        {
                                Object.keys(count).length > 0 && (
                                    <Error name={key} error={count} />
                                )
                        }
                        </div>
                     ) : (
                        <div className="row">
                            <label className="col-md-4">{key}</label>
                            <div className="col-md-8">
                                <textarea 
                                className="form-control"
                                name={key}
                                placeholder={key}
                                onChange={handleChange}
                                minLength={3}
                                maxLength={100}
                                required={required}></textarea>
                            </div>
                            {
                                Object.keys(count).length > 0 && (
                                    <Error name={key} error={count} />
                                )
                            }
                        </div>
                     )
                  }
                </React.Fragment>
            )
               
        }
        </div>                  
    )
}
export default Formfield;
