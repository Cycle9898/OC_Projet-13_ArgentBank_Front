import { useEffect,useState } from "react";
import { useDispatch,useSelector,useStore } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLoginService,StoreType } from "../redux/Auth/authentificationServices";
import type { RootState } from "../redux/store";
import * as authentication from "../redux/Auth/authenticationSlice";
import LoadingSpinner from "../components/LoadingSpinner";
import handleRememberMe from "../utils/handleRememberMeFct";

function LoginPage() {
    // Handle all input values and form controls with useState Hooks (local state) and some functions
    const [emailInput,setEmailInput] = useState<string>(localStorage.getItem("ArgentBank_email") || "");
    const [isEmailValid,setEmailValid] = useState<boolean | null>(null);
    const [passwordInput,setPasswordInput] = useState<string>("");
    const [isRememberInput,setRememberInput] = useState<boolean>(!!localStorage.getItem("ArgentBank_email"));

    const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => setEmailInput(event.target.value);

    const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => setPasswordInput(event.target.value);

    const handleRememberInput = () => setRememberInput((previousState) => !previousState);

    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (isEmailValid && passwordInput !== "") {
            // Try to authenticate the user
            authLoginService(reduxStore,emailInput,passwordInput);
            // Save email if "Remember me" is checked
            handleRememberMe(isRememberInput,emailInput);
        } else {
            reduxDispatch(authentication.setErrorStatut(true));
        }
    };

    // Get Redux Store and State to handle auth
    const reduxStore = useStore() as unknown as StoreType;
    const reduxDispatch = useDispatch();
    const errorSelector: boolean = useSelector((state: RootState) => state.authentication.isError);
    const loadingSelector: boolean = useSelector((state: RootState) => state.authentication.isDataLoading);
    const connectedSelector: boolean = useSelector((state: RootState) => state.authentication.isConnected);

    // React-dom hook
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the email is valid and update isEmailValid boolean according to the case
        const checkEmailValid: boolean = /^[\w-.]+@([\w-]+\.)+[\w-]{2,6}$/.test(emailInput);

        if (emailInput === "") {
            setEmailValid(null);
        } else {
            setEmailValid(checkEmailValid);
        }

        // Check if user is already connected to redirect to the Profile Page with useNavigate Hook
        if (connectedSelector) {
            navigate("/profile");
        }
    },[emailInput,connectedSelector,navigate]);

    return (
        <>
            {loadingSelector ? (
                <LoadingSpinner />
            ) : (
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
                                    <span className="input-error">Please enter a valid email</span>}
                            </div>

                            <div className="input-wrapper">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" value={passwordInput}
                                    onChange={(event) => handlePasswordInput(event)} />
                                {errorSelector &&
                                    <span className="input-error">Your email and password don't match, please verify them</span>}
                            </div>

                            <div className="input-remember">
                                <input type="checkbox" id="remember-me" checked={isRememberInput}
                                    onChange={handleRememberInput} />
                                <label htmlFor="remember-me">Remember me</label>
                            </div>

                            <button className="sign-in-content__button">Sign In</button>
                        </form>
                    </section >
                </main >
            )
            }
        </>
    );
}

export default LoginPage;