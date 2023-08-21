import type { AppGetState,AppDispatch } from "../store";
import * as userInfos from "./userInfosSlice";

// Thunk creator for fetch or update current user's data
function userInfosFetchOrUpdateService(firstName?: string,lastName?: string) {
    return function (dispatch: AppDispatch,getState: AppGetState) {
        // Get isDataLoading from Redux State (userInfos part)
        const loadingStatus: boolean = getState().userInfos.isDataLoading;

        if (!loadingStatus) {
            dispatch(userInfos.setErrorStatut(false));
            dispatch(userInfos.setLoadingStatut(true));

            const apiURL: string = "http://localhost:3001/api/v1/user/profile";
            const authToken: string | null = sessionStorage.getItem("ArgentBank_JWT");

            if (authToken) {
                try {
                    if (firstName && lastName) {
                        //// API call to update user's full name
                        userInfosFetchPut(apiURL,authToken,firstName,lastName,dispatch);
                    } else {
                        // API call to fetch user's data
                        userInfosFetchPost(apiURL,authToken,dispatch);
                    }
                }

                catch (error: unknown) {
                    dispatch(userInfos.setErrorStatut(true));
                    console.log(error);
                }

                finally {
                    dispatch(userInfos.setLoadingStatut(false));
                }
            }
        }
        return;
    };
}

export default userInfosFetchOrUpdateService;

//function to fetch user's data(call API with a POST method)
async function userInfosFetchPost(apiURL: string,authToken: string,dispatch: AppDispatch) {
    // API call to fetch user's data
    const response = await fetch(apiURL,{
        method: "POST",
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    });

    if (response.status === 200) {
        const data = await response.json();
        // Store fetched data in global state
        dispatch(userInfos.setData(data.body));
    } else {
        dispatch(userInfos.setErrorStatut(true));
    }
}

//function to update user's data(call API with a PUT method)
async function userInfosFetchPut(apiURL: string,authToken: string,firstName: string,lastName: string,dispatch: AppDispatch) {
    // API call to update user's full name
    const response = await fetch(apiURL,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}`
        },
        body: JSON.stringify({ firstName,lastName })
    });

    if (response.status === 200) {
        //Store updated first name and last name in global state
        dispatch(userInfos.editUserName({ firstName,lastName }));
    } else {
        dispatch(userInfos.setErrorStatut(true));
    }
}