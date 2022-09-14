import React, {useRef} from "react";

const Counter=(props)=> {
    const {value} = props

    const formatValue = () => {
        return value === 0  ? "empty" : value
    }
    const getBadgeClasses = () => {
        let classes = 'badge m-2 '
        classes += value === 0 ? 'bg-warning' : 'bg-primary'
        return classes
    }

    return (
        <div className='d-flex align-items-center justify-content-between border-bottom'>
            <span className='container text-white '>{props.name}</span>
            <span className={`p-2 ${getBadgeClasses()}`}>{formatValue()}</span>
            <button
                className='btn btn-primary btn-sm m-2'
                onClick={() => props.onIncrement(props.id)}
            >
                +
            </button>
            <button
                className='btn btn-primary btn-sm m-2'
                onClick={() => props.onDecrement(props.id)}
            >
                -
            </button>

            <button
                className='btn btn-danger btn-sm m-2'
                onClick={() => props.onDelete(props.id)}
            >
                Delete
            </button>
        </div>
    )
}

export default Counter