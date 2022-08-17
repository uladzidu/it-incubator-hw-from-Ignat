import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        clearInterval(timerId)
    }

    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        // show
        setShow(true)
    }
    const onMouseLeave = () => {
        // close
        setShow(false)
    }

    const correctTimeString = (value : any) => {
        return value < 10 ? `0${value}`: value
    }

    const seconds = correctTimeString(date.getSeconds())
    const minutes = correctTimeString(date.getMinutes())
    const hours = correctTimeString(date.getHours())

    // const day = correctTimeString(date.getDate())
    // const month = correctTimeString(date.getMonth())
    // const year = correctTimeString(date.getFullYear())


    const stringTime = `${hours}:${minutes}:${seconds}` // fix with date
    const stringDate = date.toDateString() // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
