import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        {id: 0, value:0, name:"Ненужная вещь", price: 100},
        {id: 1, value:0, name:"Ложка"},
        {id: 2, value:0, name:"Вилка"},
        {id: 3, value:0, name:"Тарелка"},
        {id: 4, value:0, name:"Набор минималиста"},
    ]

    const [counters, setCounters] = useState(initialState)
    const handleDelete = (id) => {
        const newCounters = counters.filter((c) => c.id !== id)
        console.log(newCounters)
        setCounters(newCounters)
    }
    const handleReset = () => {
        setCounters(initialState)
        console.log('Reset')
    }
    const handleDecrement = (id) => {
        let updateDecrement = Object.assign([], counters)
        updateDecrement[id].value -= 1
        setCounters(updateDecrement)
    }
    const handleIncrement = (id) => {
        const updateIncrement = Object.assign([], counters)
        updateIncrement[id].value += 1
        setCounters(updateIncrement)
    }

    return <>
        <div className='container d-flex flex-column bg-secondary'>
            {counters.map((count) =>(
                <Counter key ={count.id} onDelete = {handleDelete}{...count} onDecrement = {handleDecrement}{...count} onIncrement = {handleIncrement}{...count}/>
            ))}
            <div className='d-flex justify-content-end'>
                <button className="btn btn-primary btn-sm m-2 " onClick={handleReset}>Сброс</button>
            </div>
        </div>
    </>
}
export default CountersList