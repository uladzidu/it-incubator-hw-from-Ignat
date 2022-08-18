
export type loadingReducerAT = ReturnType<typeof loadingAC>
export type initStateType = {
    isLoading : boolean
}

const initState = {
    isLoading : false
}

export const loadingReducer = (state : initStateType = initState, action: loadingReducerAT) : initStateType => { // fix any
    switch (action.type) {
        case 'loading': {
            return {
                ...state,
                isLoading : action.value
            }
        }
        default:
            return state
    }
}

export const loadingAC = (value : boolean) => {
return {
    type : 'loading',
    value
}
} // fix any