import {useState} from 'react'
import {validateEmail} from "./utils"

const PasswordErrorMessage = () => {
    return (
        <p className='FieldError'>Pasword should have at least 8 characters</p>
    )
}


function SignIn(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [role, setRole] = useState("role");

    const getIsFormValid = (e) => {
        //This has to be implemented

        return true;
    };

    const clearForm = () => {
        // This has to be implemented
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(e.password.length < 8){
            alert("Bonjour bonjour bonjour")
        }
        alert("Account created!");
        clearForm();
    };

    return (
        <div className='App'>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Sign Up</h2>
                <div className='Field'>
                    <label>
                        First name : <sup>*</sup>
                    </label>    
                    <input placeholder='First name' />
                </div>
                <div className='Field'>
                    <label>
                        Email address <sup>*</sup>
                    </label>
                    <input placeholder='Email address' />
                </div>
                <div className="Field">
                    <label>
                        Password <sup>*</sup>
                    </label>
                    <input placeholder='Password' />
                </div>
                <div className='Field'>
                    <label>
                        Role <sup>*</sup>
                    </label>
                    <select>
                        <option value="role">Role</option>
                        <option value="individual">Individual</option>
                        <option value="business">Business</option>
                    </select>
                </div>
                <button type='submit' disabled={!getIsFormValid()}>
                    Create account
                </button>
                </fieldset>
            </form> 

        </div>
    )
}
export default SignIn;