import React from 'react'
import './src/App.css'

const Counter = () => {

    const [count, setCount] = React.useState(0)
    const [name] = React.useState('')
    const [color] = React.useState('black','red','green','blue','yellow') 
    const [formData, setFormData] = React.useState({
        name: '',
        color: ''
    })

    function handleIncre() {
        setCount(count + 1)
    }
    function handleDecre() {
        setCount(count - 1)
    }
    function handleReset() {
        setCount(0)
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        }
  return (
    <div>
        <h1 style={{color: `${color[count]}`}}>Counter : {count} - {name[count]}</h1>
        <button onClick={handleIncre} >increment</button>
        <button onClick={handleDecre}>decrement</button>
        <button onClick={handleReset}>reset</button>
        <form action="" onSubmit={handleSubmit}> 
            <input type="text" placeholder='enter name' name='name' onChange={handleChange} />
            <input type="password" placeholder='enter password' name='password' onChange={handleChange} />
            <input type="submit" value="submit" />
        </form>
    </div>
  )
}
export default Counter

// export default Counter