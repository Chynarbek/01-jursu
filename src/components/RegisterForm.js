import React from 'react';
import { reduxForm,Field } from 'redux-form';

const RegisterForm = ({HandleSubmit}) => {
    return (
            <form onSubmit={HandleSubmit}>
                <div>
                    <label className="form-label" htmlFor="emailField">Email</label>
                    <Field className="form-control" id="emailField" name="email" type="email" component="input" />
                </div>
                <div>
                    <label className="form-label" htmlFor="emailField">UserName</label>
                    <Field className="form-control" id="UserNameField" name="userName" type="UserName" component="input" />
                </div >
                <div>
                    <label className="form-label" htmlFor="emailField">Password</label>
                    <Field className="form-control" id="PasswordField" name="Password" type="Password" component="input" />
                </div >
                <button className="btn btn-primary mb-3" >
                    Register
                </button>
            </form>
        
    );
};


export default reduxForm({form:"Register"}) (RegisterForm);