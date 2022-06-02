


export const validateUserLoginForm = (values) => {
    const errors={};

    if (!values.username) {
        errors.username = 'Username is Required.';
    } else if (values.username.length < 6) {
        errors.username = "Username must be at least 6 characters.";
    } else if (values.username.length > 15) {
        errors.username = "Username must not exceed 15 characters.";
    }

    if (!values.username) {
        errors.password = 'Password is Required.';
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 8 characters.";
    }

    return errors;
};