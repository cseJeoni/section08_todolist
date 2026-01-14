import './TodoItem.css'


const TodoItem = () => {

    return (
        <div className="TodoItem">
            <input type="checkbox"></input>
            <div className="content">React 공부하기</div>
            <div className="date">2026.1.14</div>
            <button>삭제</button>
        </div>
    )
}

export default TodoItem;