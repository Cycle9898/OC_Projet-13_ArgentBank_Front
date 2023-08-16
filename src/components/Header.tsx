import { Link,useLocation,useNavigate } from "react-router-dom";
import argentBankLogo from "../assets/logo/argentBankLogo.png";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import type { RootState,AppDispatch } from "../redux/store";
import { authLogoutService } from "../redux/Auth/authentificationServices";


function Header() {
    // React-router hooks to handle location and redirection
    const { pathname }: { pathname: string } = useLocation();
    const navigate = useNavigate();

    // Get Redux Dispatch and State part to handle Logout
    const reduxDispatch: AppDispatch = useDispatch();
    const connectedSelector: boolean = useSelector((state: RootState) => state.authentication.isConnected);

    const handleLogout = () => {
        // Redirect to Home Page
        navigate("/");
        // Disconnect current user with a thunk
        reduxDispatch(authLogoutService);
    }

    useEffect(() => {
        // Rename document title according to the Page name (useLocation Hook to determine the Page name)
        let pageName: string = "";

        switch (pathname) {
            case "/":
                pageName = "Home";
                break;
            case "/login":
                pageName = "Login";
                break;
            case "/profile":
                pageName = "Profile";
                break;
            default:
                pageName = "Error";
        }

        document.title = `Argent Bank - ${pageName} Page`;
    },[pathname]);

    return (
        <header>
            <nav className="main-nav">
                <Link className="main-nav__logo" to="/">
                    <img className="main-nav__logo__image" src={argentBankLogo} alt="ArgentBank's logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>

                {
                    connectedSelector ? (
                        <div>
                            <Link className="main-nav__item" to="/profile">
                                <span className="fa fa-user-circle"></span>
                                <span style={{ color: "red" }}> TODO fetch first name</span>
                            </Link>

                            <button
                                className="main-nav__item main-nav__item--btn"
                                onClick={handleLogout}
                            >
                                <span className="fa fa-sign-out"></span>
                                <span> Sign Out</span>
                            </button>
                        </div>
                    ) : (
                        <Link className="main-nav__item" to="/login">
                            <span className="fa fa-user-circle"></span>
                            <span> Sign In</span>
                        </Link>
                    )
                }
            </nav >
        </header >
    );
}

export default Header;