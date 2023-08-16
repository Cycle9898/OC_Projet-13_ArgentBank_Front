import { Link,useLocation,useNavigate } from "react-router-dom";
import argentBankLogo from "../assets/logo/argentBankLogo.png";
import { useEffect } from "react";
import { useSelector,useStore } from "react-redux";
import type { RootState } from "../redux/store";
import { authLogoutService,StoreType } from "../redux/Auth/authentificationServices";


function Header() {
    // React-router hooks to handle location and redirection
    const { pathname }: { pathname: string } = useLocation();
    const navigate = useNavigate();

    // Get Redux Store and State to handle Logout
    const reduxStore = useStore() as unknown as StoreType;
    const connectedSelector: boolean = useSelector((state: RootState) => state.authentication.isConnected);

    const handleLogout = () => {
        // Redirect to Home Page
        navigate("/");
        // Disconnect user
        authLogoutService(reduxStore);
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
                                <span> Todo</span>
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