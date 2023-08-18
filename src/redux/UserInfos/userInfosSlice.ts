import { createSlice } from '@reduxjs/toolkit'

// Redux Tool Kit Slice to handle user infos storing in global state
const { actions,reducer } = createSlice({
    name: 'userInfos',
    initialState: {
        data: {
            firstName: "",
            lastName: ""
        },
        isError: false,
        isDataLoading: false,
    },
    reducers: {
        setData: (draft,action) => {
            draft.data = action.payload;
        },
        setErrorStatut: (draft,action) => {
            draft.isError = action.payload;
        },
        setLoadingStatut: (draft,action) => {
            draft.isDataLoading = action.payload;
        }
    }
});

export const {
    setData,
    setErrorStatut,
    setLoadingStatut,
} = actions;

export default reducer;