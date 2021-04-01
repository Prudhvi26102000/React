import React, { useState }  from "react";
import './Form.css';
import AdminSignup from "./AdminSignup";
import FormSuccess from "./FormSuccess";
const Form = () =>
{
    const [isSubmitted,setIsSubmitted]=useState(false);
    function submitForm()
    {
        setIsSubmitted(true);
    }
    return(
            <div>
                {/* <AdminSignup /> */}
                 {!isSubmitted ? <AdminSignup submitForm=
                 {submitForm}/> :<FormSuccess />}
            </div>
);
};
export default Form;
