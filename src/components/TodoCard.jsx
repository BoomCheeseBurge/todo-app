import { useState } from 'react';

function TodoCard(props) {

    const { todoIndex, todo, handleDeleteTodo, handleCompleteTodo, handleEditTodo } = props;
    const [isEdit, setIsEdit] = useState(false);
    const [editInput, setEditInput] = useState(todo.input);
    
    return (
        <div className="card todo-item">

            {
                isEdit ? (
                            <input type="text" className='todo-edit' value={editInput} onChange={(e) => setEditInput(e.target.value)} />
                        ) :
                        (
                            <p>{todo.input}</p>
                        )
            }

            <div className="todo-buttons">

                {
                    isEdit ? (
                                <button onClick={() => { handleEditTodo(todoIndex, editInput); setIsEdit(false)}}>
                                    <h6>Save</h6>
                                </button>
                            ) :
                            (
                                <button onClick={() => setIsEdit(true)} disabled={todo.complete}>
                                    <h6>Edit</h6>
                                </button>
                            )
                }

                <button onClick={() => handleCompleteTodo(todoIndex)} disabled={todo.complete}>
                    <h6>Done</h6>
                </button>

                <button onClick={() => {
                    handleDeleteTodo(todoIndex)
                }}>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    );
}

export default TodoCard;