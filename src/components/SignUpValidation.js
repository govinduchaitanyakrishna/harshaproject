function Validation(values) {
    let errors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    const phone_pattern = /^[0-9]$/;

    if (values.firstname === "") {
        errors.firstname = "First name should not be empty";
    } else {
        errors.firstname = "";
    }

    if (values.lastname === "") {
        errors.lastname = "Last name should not be empty";
    } else {
        errors.lastname = "";
    }

    if (values.email === "") {
        errors.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        errors.email = "Invalid email format";
    } else {
        errors.email = "";
    }

    // if (values.password === "") {
    //     errors.password = "Password should not be empty";
    // } else if (!password_pattern.test(values.password)) {
    //     errors.password = "Password should contain at least 8 characters, one lowercase letter, one uppercase letter, and one number";
    // } else {
    //     errors.password = "";
    // }

    if(values.phone === ""){
        errors.phone = "phone number should not be empty";
    }else if (phone_pattern.test(values.phone)){
       errors.phone = "phone should contain a valid phone number"
    }else{
        errors.phone =""
    }

    if (values.role === "") {
        errors.role = "Role should not be empty";
    } else {
        errors.firstname = "";
    }

    return errors;
}

export default Validation;
