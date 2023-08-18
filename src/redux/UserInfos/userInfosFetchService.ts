import type { AppGetState,AppDispatch } from "../store";
import * as userInfos from "./userInfosSlice";

// Thunk for fetch current user's data
async function userInfosFetchService(dispatch: AppDispatch,getState: AppGetState) {
    // Get isDataLoading from Redux State (userInfos part)
    const loadingStatus: boolean = getState().userInfos.isDataLoading;

    if (!loadingStatus) {
        dispatch(userInfos.setErrorStatut(false));
        dispatch(userInfos.setLoadingStatut(true));

        const apiURL: string = "http://localhost:3001/api/v1/user/profile";
        const authToken: string | null = sessionStorage.getItem("ArgentBank_JWT");

        if (authToken) {
            try {
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
}

export default userInfosFetchService;