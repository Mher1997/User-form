import React from 'react'
import './Inputs.css'

export const InputName = (props) =>{
   return(
     <div>
       <input 
        ref={props.inputName} 
        onChange={props.changeInput}
        type = "text" 
        placeholder="Enter your name"
       />
     </div>
   )
 }

 export const InputTitle = (props) =>{
    return(
      <div>
        <input 
         ref={props.inputTitle} 
         onChange={props.changeInput}
         type = "text" 
         placeholder="Enter title"
        />
      </div>
    )
  }

  export const TextArea = (props) =>{
    return(
      <div>
        <textarea 
         ref={props.textArea} 
         onChange={props.changeInput}
         type = "text" 
         placeholder="Write comment"
         rows="8"
         cols="43"
        />
      </div>
    )
  }

  export const AddComment = (props) =>{
    return(
      <div className="button-div">
       <input 
            type="button" 
            value="Add comment" 
            onClick = {(props.addComment)}
            className='button'
        />
      </div>
    )
  }
  

