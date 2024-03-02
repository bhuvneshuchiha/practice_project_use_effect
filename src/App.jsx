import { useEffect, useState } from 'react'
import axios from 'axios';
function App() {

  return <div>
    <Todo id = {1}/>
  </div>


}

function Todo({id}){
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
    .then((res) => {
      setTodos(res.data.todo)
      console.log(res.data)
    })
  }, [])
  
  
  return <div>
    <h2>{todos.title}</h2>
    <h2>{todos.description}</h2>
  </div>
}

export default App
