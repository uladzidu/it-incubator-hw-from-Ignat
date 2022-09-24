import React, {ChangeEvent, useState} from 'react';
import {instance} from "./requestApi";
import './hw13.css'

export const Request = () => {

    const [error, setError] = useState('')
    const [checked, setChecked] = useState(false)
    const [errorClass, setErrorClass] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }

    const onClickHandler = () => {
        instance.post('', {success: checked})
            .then((res) => {
                console.log(res)
                if (res.status === 200) setErrorClass('success')
                setError(res.data.errorText)
            })
            .catch((res) => {
                if (res.response.status !== 200) setErrorClass('unSuccess')
                setError(res.message)
            })
    }

    return (
        <div>
            <button onClick={onClickHandler}>Button</button>
            <input onChange={onChangeHandler} checked={checked} type="checkbox"/>
            <div className={errorClass}>{error}</div>
        </div>
    );
};
