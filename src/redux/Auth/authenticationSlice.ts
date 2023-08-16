import { createSlice } from '@reduxjs/toolkit'

// Redux Tool Kit Slice to handle auth statuses in global state
const { actions,reducer } = createSlice({
    name: 'authentication',
    initialState: {
        isConnected: !!sessionStorage.getItem("ArgentBank_JWT"),
        isError: false,
        isDataLoading: false
    },
    reducers: {
        setAuthStatut: (draft,action) => {
            draft.isConnected = action.payload;
        },
        setLoadingStatut: (draft,action) => {
            draft.isDataLoading = action.payload;
        },
        setErrorStatut: (draft,action) => {
            draft.isError = action.payload;
        }
    }
});

export const {
    setAuthStatut,
    setLoadingStatut,
    setErrorStatut
} = actions;

export default reducer;