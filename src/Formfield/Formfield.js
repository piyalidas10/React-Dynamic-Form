
import React from 'react';
import Error from '../Error/Error';

const Formfield = (props) => {
    console.log(props);
    const {ele:{input, key, required, items}, formErrors, handleChange} = props;
    return (
        <div className="form-group" key={key}>
        {
            (input === 'text' || input === 'email' || input === 'password' || input === 'number' || input === 'date') ? (
                <div className="row">
                    <label className="col-md-4">{key}</label>
                        <div className="col-md-8">
                            <input
                            className="form-control"
                            type={input}
                            name={key}
                            placeholder={key}
                            required={required}
                            minLength={3}
                            maxLength={30}
                            onChange={(e) => handleChange(e, props.valids)}/>
                        </div>
                        {
                            Object.keys(formErrors).length > 0 && (
                                <Error name={key} error={formErrors} />
                            )
                        }
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
                        {/* <Error name={key} error={error}>
                        </Error> */}
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
                            {/* <Error name={key} error={error}>
                            </Error> */}
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
