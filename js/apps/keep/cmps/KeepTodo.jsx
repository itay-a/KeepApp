export function KeepTodo(props) {
    
    const { keep } = props

    return (
        <div className="keep-preview">{keep.info.lable}{keep.info.todos.map((todo)=>{
            return  todo.txt
        })}</div>
    )
}