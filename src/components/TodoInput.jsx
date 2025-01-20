import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function TodoInput(props) {

    const { handleAddTodo } = props;
    const [inputTodo, setInputTodo] = useState('');
    
    return (
        <div className="input-container">
            <input type="text" placeholder="Add Task" value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} />
            
            <button type="button" onClick={() => {if(!inputTodo) return; handleAddTodo(inputTodo); setInputTodo('')}}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
}

export default TodoInput;