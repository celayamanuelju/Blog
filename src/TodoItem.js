import "./TodoItem.css"
function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}` }
        onClick={props.onCompleted}
            >V</span>
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
            >{props.text}</p>
            <span className= {`Icon Icon-delete ${props.completed && "Icon-delete:hover"}`}
             onClick={props.onDelete}
            >x</span>
        </li>
    );
}


export {TodoItem}