import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string
    setNameCallback: (e : ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ''

    return (
        <div>
            {/*<input value={name} onChange={setNameCallback} className={inputClass}/>*/}
            <SuperInputText value={name} onChange={setNameCallback} className={inputClass}/>
            {/*<button onClick={addUser}>add</button>*/}
            <SuperButton onClick={addUser}>Add</SuperButton>
            <span> {totalUsers} </span>
            <div className={s.errormessage}><span>{error}</span></div>
        </div>
    )
}

export default Greeting
