import {UserType} from "../HW8";

export type homeWorkReducerAT =
    ReturnType<typeof sortAC>
    | ReturnType<typeof checkAC>

const initialState: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

export const homeWorkReducer = (state: UserType[] = initialState, action: homeWorkReducerAT): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {

            if (action.payload === 'up') {
                let copyState = [...state]
                return copyState.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
            }

            if (action.payload === 'down') {
                let copyState = [...state]
                return copyState.sort((a,b) => (a.name > b.name) ? -1 : ((b.name > a.name) ? 1 : 0))
            }
            return state
        }
        case 'check': {
            let copy = [...state]
            return copy.filter( elem => elem.age > 18 )
        }
        default:
            return state
    }
}

export const sortAC = (value : string) => {
    return {
        type: 'sort',
        payload : value
    } as const
}

export const checkAC = (age : number) => {
    return {
        type: 'check',
        payload : age
    } as const
}