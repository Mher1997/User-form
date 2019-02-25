import React from 'react';
import './Comp.css'
import {InputName, InputTitle,TextArea,AddComment} from './Components/Inputs';
import {CommentLists} from './Components/CommentLists';

class Comp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr : [{}],
            click : true,
            indexNum : 0
        }
        this.addComment = this.addComment.bind(this);
        this.editComment = this.editComment.bind(this);
        this.removeComment = this.removeComment.bind(this);
        this.saveComment = this.saveComment.bind(this);
        this.changeInput = this.changeInput.bind(this);
        this.addState = this.addState.bind(this);
        this.inputName = React.createRef();
        this.inputTitle = React.createRef();
        this.textArea = React.createRef();
        this.formRef = React.createRef();
    }

    arr = [];
    inputValues = {
      name : '',
      title : '',
      comment : ''
    }

    changeInput(){
      this.inputValues.name = this.inputName.current.value;
      this.inputValues.title = this.inputTitle.current.value;
      this.inputValues.comment = this.textArea.current.value;
    }
    
    addComment(){
        
        let {name,title,comment} = this.inputValues;
        let {arr} = this;
        
        if(name.length > 0 && title.length > 0 && comment.length > 0){
            arr.push({
                name,
                title,
                comment,
            })
            this.setState({arr})
            this.formRef.current.reset();
        } 
    }

    editComment(index){

        this.setState({
            click : false,
            indexNum : index,
        })
        
        let name =  this.inputName.current;
        let title = this.inputTitle.current;
        let comment =  this.textArea.current;
        let currentIndex = this.arr[index];
        
        name.value = currentIndex.name;
        title.value = currentIndex.title;
        comment.value =  currentIndex.comment;

    }

    saveComment(index){
        
        let name =  this.inputName.current;
        let title = this.inputTitle.current;
        let comment =  this.textArea.current;
        let currentIndex = this.arr[index];

        if(name.value.length>0 && title.value.length>0 && comment.value.length>0){
            
            currentIndex.name = name.value;
            currentIndex.title = title.value;
            currentIndex.comment = comment.value;
        
            name.value = '';
            title.value = '';
            comment.value = '';

            this.setState({click : true})
        }

    }

    removeComment(index){
        const arr = this.arr;
        arr.splice(index,1);
        this.addState();
    }

    addState(){
        const {arr} = this;
        this.setState({
            arr,
            click : true
        })
    }

    
    render(){
        const {arr,inputName,inputTitle,changeInput,textArea,addComment,removeComment,editComment,saveComment,formRef} = this;
        const {click,indexNum} = this.state;
        return(
            <div className='parent'>
               <form id = "inputForm" ref={formRef}>
                    < InputName
                        inputName={inputName}
                        changeInput={changeInput}
                    />
                    < InputTitle 
                        inputTitle={inputTitle}
                        changeInput={changeInput}
                    />
                    <TextArea
                        textArea={textArea}
                        changeInput={changeInput}
                    />
                    {click && <AddComment addComment={addComment}/>}
                </form>
                
                {arr.map((elem,index)=>(
                    <CommentLists 
                        elem={elem} 
                        index={index} 
                        removeComment={removeComment} 
                        editComment={editComment} 
                        saveComment={saveComment} 
                        click={click} 
                        indexNum={indexNum}
                    />
                ))}
            </div>
        )
       
    }
}

export default Comp;