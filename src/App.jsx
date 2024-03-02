import { useEffect, useState } from 'react'
import axios from 'axios';
function App() {
  const [id, setId] = useState(1)

  function handleButton(buttonId){
    setId(buttonId)
  }
  return <div>
    <button onClick={() => handleButton(1)}>1</button>
    <button onClick ={() => handleButton(2)}>2</button>
    <button onClick={() => handleButton(3)}>3</button>
    <button onClick={() => handleButton(4)}>4</button>
    <Todo id = {id}/>
  </div>


}

function Todo({id}){
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
    .then((res) => {
      setTodos(res.data.todo)
    })
  }, [id])
  

  return <div>
    <h2>{todos.title}</h2>
    <h2>{todos.description}</h2>
  </div>
}

export default App
