import React,{useState, useEffect} from 'react'

function Counter() {
    const [counter, setCounter] = useState({
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    const [timer, setTimer] = useState(null)

    const startTimer = () => {
        const countDownDate = new Date("April 1, 2023 00:00:00").getTime()
        
        const timer = setInterval(() => {
            const now = new Date().getTime()
            const distance = countDownDate - now
            
            const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30))
            const days = Math.floor(distance % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24))
            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60))
            const seconds = Math.floor(distance % (1000 * 60) / 1000)

            setCounter({
                months,
                days,
                hours,
                minutes,
                seconds
            })
        }, 1000)

        setTimer(timer)
    }

    useEffect(() => {
        startTimer()
        return () => {
            clearInterval(timer)
        }
    }, [])

    const { months, days, hours, minutes, seconds } = counter

    return (
        <div className="counter">
            <div className="counter__item">
                <div className="counter__item__number">{months}</div>
                <div className="counter__item__text">Months</div>
            </div>
            <div className="counter__item">
                <div className="counter__item__number">{days}</div>
                <div className="counter__item__text">Days</div>
            </div>
            <div className="counter__item">
                <div className="counter__item__number">{hours}</div>
                <div className="counter__item__text">Hours</div>
            </div>
            <div className="counter__item">
                <div className="counter__item__number">{minutes}</div>
                <div className="counter__item__text">Minutes</div>
            </div>
            <div className="counter__item">
                <div className="counter__item__number">{seconds}</div>
                <div className="counter__item__text">Seconds</div>
            </div>
        </div>
    )
}

export default Counter