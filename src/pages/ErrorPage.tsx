import { Link } from "react-router-dom";

type Props = {
    errorCode: string
}

function ErrorPage({ errorCode }: Props) {

    return (
        <main className="error-main">
            <div className="error-ring">
                <h2>{errorCode}</h2>

                {errorCode === "404" &&
                    <>
                        <h3>Not Found !</h3>
                        <p>The page you are trying to reach does not exist !</p>
                        <Link to="/">Return to the home page</Link>
                    </>}

                {errorCode === "401" &&
                    <>
                        <h3>Unauthorized !</h3>
                        <p>You must be logged in to access this page !</p>
                        <Link to="/login">Sign In</Link>
                    </>}
            </div>
        </main>
    );
}

export default ErrorPage;