import "./CreateButtom.css"
function CreateButtom() {
    return(
        <button 
        className="CreateTodoButton" 
        name="button"
        onClick={()=>{console.log("listo");}}
        >X</button>
        
    )
}

export{CreateButtom}