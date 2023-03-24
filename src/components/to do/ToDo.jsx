import { useState } from "react";
import '../to do/ToDo.css'


const ToDo = () => {
    // const [value, setValue] = useState('');

    // const handleInputValue = (e) => {
    //     console.log(e.target.value)
    // }

    const [todo, setTodos] = useState( () => {
        const storedTodos = localStorage.getItem('todos');
        return storedTodos? JSON.parse(storedTodos) : []
    })


    const [newTodo, setNewTOdo] = useState('');

    const handleChangeEvent = (event) => {
        setNewTOdo(event.target.value);
    }

    const handleChangeSubmit = (event) => {
        event.preventDefault();

        if(!newTodo.trim()) return;
        setTodos([...todo, {
            id: Date.now(),
            text: newTodo,


        }])
        setNewTOdo('')
    }

    localStorage.setItem('todos', JSON.stringify(todo))


    const handleDelete = (id) => {
        const updateToDo = todo.filter((item) => item.id !== id)
        setTodos(updateToDo);
    }

  return (
    //  <input type="text" value={value} onChange={handleInputValue} />

        <div className="all">
            <h1>TO DO LIST</h1>

            <form onSubmit={handleChangeSubmit}>
                <input placeholder="I am gonna do..." type="text" value={newTodo} onChange={handleChangeEvent} />
                <button className="add" type="submit">Add</button>
                <ol>
                    {
                        todo.map((element) => (
                            <li className="line" key={element.id}>
                               <span>{element.text}</span> 
                               <button className="deletebtn" onClick={ () => handleDelete(element.id)}>Delete</button>
                            </li>
                        ))
                    }
                </ol>
            </form>
        </div>
    )
}

export default ToDo