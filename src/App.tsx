import React, {useState} from 'react';
import {Navbar} from "./components/Navbar";
import {TodoForm} from "./components/TodoForm";
import {TodoList} from "./components/TodoList";
import {ITodo} from "./interfaces";

const App: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    const addHandler = (title: string) => {
        let newTodo: ITodo = {
            id: Date.now(),
            title,
            completed: false
        }
        setTodos(prev => [newTodo, ...prev])
    }

    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) todo.completed = !todo.completed
            return todo
        }))
    }
    const removeHandler = (id: number) => {
        // eslint-disable-next-line no-restricted-globals
        let shoudRemove = confirm('Are you shore?')
        if (shoudRemove) setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    return (
        <>
            <Navbar/>
            <div className="container">
              <TodoForm onAdd={addHandler}/>
              <TodoList
                  todos={todos}
                  onToggle={toggleHandler}
                  onRemove={removeHandler}
                  />
            </div>
        </>
    );
}

export default App;
