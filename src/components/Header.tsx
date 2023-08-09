import { Link,useLocation } from "react-router-dom";
import argentBankLogo from "../assets/logo/argentBankLogo.png";
import { useEffect } from "react";

function Header() {
    const { pathname }: { pathname: string } = useLocation();

    useEffect(() => {
        // Rename document title according to the Page name (useLocation Hook to determine the Page name)
        let pageName: string = "";

        switch (pathname) {
            case "/login":
                pageName = "Login";
                break;
            case "/profile":
                pageName = "Profile";
                break;
            case "/error":
                pageName = "Error";
                break;
            default:
                pageName = "Home";
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
                    pathname === "/profile" ? (
                        <span className="error-msg">TODO</span>
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