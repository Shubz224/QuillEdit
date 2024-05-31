import React, { useCallback , useEffect,useState} from 'react'
import Quill from 'quill'
import "quill/dist/quill.snow.css"
import {io} from 'socket.io-client'


//setting up toolbar 
const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
]

export default function TextEditor() {

const [socket,setSocket] = useState();
const [quill ,setQuill] = useState();


//creating socket and disconnecting on its own after text editor unmount
  useEffect(()=>{
    const s= io("http://localhost:3001")
    setSocket(s) ;
    return ()=>{
      s.disconnect()
    }
  },[]);

  useEffect(()=>{

    // making sure we are having socket and qill before updating any delta
    if(socket == null || quill == null )return 
  
    const handler = (delta)=>{
      quill.updateContents(delta)
    }
  
    //eventlistner for whenever qill  has  text that changes  we will send  it to or emit it to client side
    socket.on('receive-changes',handler)
  
    return ()=>{
      socket.off('receive-changes',handler)
    }
  },[socket,quill])













// function to track text change


useEffect(()=>{

  // making sure we are having socket and qill before updating any delta
  if(socket == null || quill == null )return 

  const handler = (delta,oldDelta,source)=>{
    if(source !== 'user')return 
    socket.emit('send-changes',delta);
  }

  //eventlistner for whenever qill  has  text that changes  we will send  it to or emit it to client side
  quill.on('text-change',handler)

  return ()=>{
    quill.off('text-change',handler)
  }
},[socket,quill])


  //setting up quill 
const wrapperRef  = useCallback(wrapper =>{

  if(wrapper == null) return ;
  wrapper.innerHtml = ""
  const editor = document.createElement('div');
  wrapper.append(editor)
  const q = new Quill (editor,{theme :'snow', modules: {toolbar:
    TOOLBAR_OPTIONS}})

    setQuill(q);
},[])
return <div className = "container"  ref = {wrapperRef}></div>

}