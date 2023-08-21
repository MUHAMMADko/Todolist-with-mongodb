

import { useState } from "react";
import { addNewTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const TodoForm = () =>{
    const [text , setText] = useState("");
    
    const dispatch = useDispatch();
    const onFormSubmit = (e) => {
         e.preventDefault();
         dispatch(addNewTodo(text));
         setText('');
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }
    return (
        <form className="form" onSubmit={onFormSubmit} onChange={onInputChange}>
            <input className="input"
               placeholder="Enter todo..."
               value={text}
            />
        </form>
    )
}
export default TodoForm;