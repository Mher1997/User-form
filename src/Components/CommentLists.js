import React from 'react';
import './CommentLists.css'

export const CommentLists = (props) => {

    const {elem,index,click,indexNum} = props;

    return(
            <div className='list'>
                    <ul>
                        <li>
                            <span>Name : </span>{elem.name} <br/>
                        </li>
                        <li>
                            <span>Title :</span> {elem.title} <br/>
                        </li>
                        <li>
                            <span>Comment :</span> {elem.comment} <br/>
                        </li>
                    </ul>
                    <button 
                        className='list-button'
                        onClick={()=>{props.removeComment(index)}}
                    >
                        Delete comment
                    </button >
                    {click && <button 
                        className='list-button'
                        onClick={()=>props.editComment(index)}
                    > 
                        Edit comment
                    </button>}
                    {!click && index===indexNum && <button
                        onClick={()=>props.saveComment(index)}
                        className='list-button'
                     > 
                        Save
                    </button>}
                </div>
    )
} 