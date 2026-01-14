import TodoItem from './TodoItem'
import './List.css'

const List = () => {

    return (
        <div className="List">
            <h4>Todo List 🌱 </h4>
        <input placeholder="검색어를 입력하세요"></input>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        </div>
    )
}

export default List;