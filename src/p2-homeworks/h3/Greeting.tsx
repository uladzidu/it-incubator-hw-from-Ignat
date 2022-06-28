import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

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
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span> <button onClick={addUser}>add</button> </span>
            <span> {totalUsers} </span>
            <div className={s.errormessage}><span>{error}</span></div>
        </div>
    )
}

export default Greeting
