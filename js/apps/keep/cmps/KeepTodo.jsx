// import { keepService } from '../services/keep.service.js'
import { utilService } from "../../../services/util.service.js";
export function KeepTodo(props) {

    const { keep } = props

console.log(keep.id);
    return (
        <div className="keep-todo keep-preview" >{keep.info.label} <br/>{keep.info.todos.map((todo) => {
            return <p className="todo-p" key={utilService.makeId()}> {todo.txt} </p>
        })}
        </div>
    )
}