import { useState } from "react";

function LoginPage() {
    // Handle all input values and form control with useState Hook (local state) and some functions
    const [emailInput,setEmailInput] = useState<string>("");
    const [isEmailValid,setEmailValid] = useState<boolean | null>(null);
    const [passwordInput,setPasswordInput] = useState<string>("");
    const [isRememberInput,setRememberInput] = useState<boolean>(false);

    const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmailInput(event.target.value);

        // Check if email is valid and store it value in local state
        const checkEmailValid: boolean = /^[\w-.]+@([\w-]+\.)+[\w-]{2,6}$/.test(event.target.value);
        if (event.target.value === "") {
            setEmailValid(null);
        } else {
            setEmailValid(checkEmailValid);
        }
    };

    const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => setPasswordInput(event.target.value);

    const handleRememberInput = () => setRememberInput((previousState) => !previousState);

    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (isEmailValid) {
            //TODO
        }
    }

    return (
        <main className="bg-dark">
            <section className="sign-in-content">
                <span className="fa fa-user-circle sign-in-content__icon"></span>
                <h1>Sign In</h1>

                <form onSubmit={(event) => handleForm(event)}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={emailInput}
                            onChange={(event) => handleEmailInput(event)} />
                        {!isEmailValid && isEmailValid !== null &&
                            <span className="input-error">Veuillez entrer une adresse email valide</span>}
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={passwordInput}
                            onChange={(event) => handlePasswordInput(event)} />
                    </div>

                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" checked={isRememberInput}
                            onChange={handleRememberInput} />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    <button className="sign-in-content__button">Sign In</button>
                </form>
            </section>
        </main>
    );
}

export default LoginPage;