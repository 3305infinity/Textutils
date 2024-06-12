import React from 'react'
export default function Alert(props) {
    const capitalize=(word)=>{
        let str=word.toLowerCase()
        let newstr=str.charAt(0).toUpperCase()+str.slice(1);
        return newstr
    }
  return (
    // so that the props.alert is not null bcoz type of null cant be defined
    <>
    <div className="container" style={{height:'70px'}}>{props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong> :{props.alert.msg}
    </div>}</div>
    
    </>
  )
}




