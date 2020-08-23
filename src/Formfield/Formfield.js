
import React from 'react';


const Formfield = (props) => {
    console.log(props);
    const {ele:{input, key, required, items}, handleChange} = props;
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
                            onChange={handleChange}/>
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
                            required={required}></textarea>
                        </div>
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
