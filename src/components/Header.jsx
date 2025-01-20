function Header(props) {

    const { todos } = props;
    const todosCount = todos.length;
    const isManyTodos = todosCount > 1;
    
    return (
        <header>
            <h1 className="text-gradient">You currently have #{todosCount} {isManyTodos ? 'Todos' : 'Todo'}.</h1>
        </header>
    );
}

export default Header;