// Function that stores user's email in localStorage if "Remember me" input is checked
function handleRememberMe(isRemember: boolean,email: string) {
    if (isRemember) {
        localStorage.setItem("ArgentBank_email",email);
    } else {
        // Else remove email in localStorage if it exists
        localStorage.removeItem("ArgentBank_email");
    }
}

export default handleRememberMe;