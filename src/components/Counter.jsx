import PropTypes from 'prop-types'; // ES6
const Counter = ({ inc, dec, reset, count }) => {
   
    return (
        <div>
            <h1 style={{color: count < 10 ? 'red' : 'green'}}>{count}</h1>
            <button onClick={inc}> +</button>
            <button onClick={dec}>-</button>
            <br />
            <button onClick={reset}>reset</button>
        </div>
    )
}
Counter.propTypes = {
    inc: PropTypes.func,
    dec: PropTypes.func,
    reset: PropTypes.func,
    count: PropTypes.number
}
export default Counter