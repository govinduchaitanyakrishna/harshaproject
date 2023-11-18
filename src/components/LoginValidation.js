function Validation(values){
    let errors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(values.email === ""){
        errors.email = "Email should not be empty";
    }
    else if(!email_pattern.test(values.email)){
        errors.email = "Invalid email format";
    }
    else {
        errors.email = "";
    }

    if(values.password === ""){
        errors.password = "Password should not be empty";
    }
    else if(!password_pattern.test(values.password)){
        errors.password = "Password should contain at least 8 characters, one lowercase letter, one uppercase letter, and one number";
    }
    else {
        errors.password = "";
    }

    return errors;
}

export default Validation;
