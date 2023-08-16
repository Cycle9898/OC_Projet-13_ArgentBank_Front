import * as authentication from "./authenticationSlice";
import type { RootState,AppDispatch } from "../store";

export type StoreType = {
    state: RootState,
    dispatch: AppDispatch
}

// Function that try to sign in an user
export async function authLoginService(store: StoreType,email: string,password: string) {
    store.dispatch(authentication.setErrorStatut(false));
    store.dispatch(authentication.setLoadingStatut(true));

    const apiURL: string = "http://localhost:3001/api/v1/user/login";

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
            const authToken = await response.json();

            sessionStorage.setItem("ArgentBank_JWT",authToken.body.token);
            store.dispatch(authentication.setAuthStatut(true));
        } else {
            store.dispatch(authentication.setErrorStatut(true));
        }
    }

    catch (error: unknown) {
        store.dispatch(authentication.setErrorStatut(true));
        console.log(error);
    }

    finally {
        store.dispatch(authentication.setLoadingStatut(false));
    }
}

// Function that disconnect the current user
export function authLogoutService(store: StoreType) {
    // Remove JWT from sessionStorage and set isConnected from redux global State to false
    sessionStorage.removeItem("ArgentBank_JWT");
    store.dispatch(authentication.setAuthStatut(false));
}