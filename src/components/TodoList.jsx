import TodoCard from "./TodoCard";

function TodoList(props) {

    const { todos, selectedTab, handleDeleteTodo, handleCompleteTodo } = props;
    const filteredTodos = selectedTab === 'All' ? todos :
                            selectedTab === 'Completed' ? todos.filter(todo => todo.complete) :
                                                            todos.filter(todo => !todo.complete);
    
    return (
        <>
            {filteredTodos.map((todo, todoIndex) =>  {

                return (
                    <TodoCard key={todoIndex} todoIndex={todos.findIndex(val => val.input === todo.input)} todo={todo} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo} />
                );
            })}
        </>
    );
}

export default TodoList;