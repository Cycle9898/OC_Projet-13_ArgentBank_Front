import * as authentication from "./authenticationSlice";
import type { AppDispatch } from "../store";

// Thunk Creator for try to sign in an user
export function authLoginService(email: string,password: string) {
    return async function (dispatch: AppDispatch) {
        dispatch(authentication.setErrorStatut(false));
        dispatch(authentication.setLoadingStatut(true));

        const apiURL: string = (import.meta.env.VITE_API_URI && `${import.meta.env.VITE_API_URI}/api/v1/user/login`)
            || "http://localhost:3001/api/v1/user/login";

        try {
            // API call to authenticate user
            const response = await fetch(apiURL,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email,password })
            });

            // Create sessionStorage item if user is authenticated
            if (response.status === 200) {
                const fetchedAuthToken = await response.json();

                sessionStorage.setItem("ArgentBank_JWT",fetchedAuthToken.body.token);
                dispatch(authentication.setAuthStatut(true));
            } else {
                dispatch(authentication.setErrorStatut(true));
            }
        }

        catch (error: unknown) {
            dispatch(authentication.setErrorStatut(true));
            console.log(error);
        }

        finally {
            dispatch(authentication.setLoadingStatut(false));
        }
    }
}

// Thunk for disconnect the current user
export function authLogoutService(dispatch: AppDispatch) {
    // Remove JWT from sessionStorage and set isConnected from redux global State to false
    sessionStorage.removeItem("ArgentBank_JWT");
    dispatch(authentication.setAuthStatut(false));
}