function Tabs(props) {

    const { todos, selectedTab, setSelectedTab } = props;

    const tabs = ['All', 'Open', 'Completed'];
    
    return (
        <nav className="tabs-container">
            {tabs.map((tab, tabIndex) => {
                
                    const todosNum = tab === 'All' ? todos.length :
                                            tab === 'Open' ? todos.filter(todo => !todo.complete).length : 
                                                            todos.filter(todo => todo.complete).length;

                    return (
                            <button key={tabIndex} className={"tab-button " + (selectedTab === tab ? "tab-selected" : "")} onClick={() => {setSelectedTab(tab)}}>
                                <h4>
                                    {tab}
                                    <span>({todosNum})</span>
                                </h4>
                            </button>
                    )
                }
            )}
            
            <hr />
        </nav>
    );
}

export default Tabs;