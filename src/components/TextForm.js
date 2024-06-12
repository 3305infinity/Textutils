import React ,{useState} from 'react'
export default function TextForm(props) {
    const handleupclick =()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showalert("Converted to upper case","success")
    }
    const handleloclick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showalert("Converted to lower case","success")
    }
    const handleonChange=(event)=>{
        setText(event.target.value)
    }
    const eraseemail=(event)=>{
        let ele=document.getElementById('email')
        ele.innerHTML=` `
        props.showalert("text erased","success")

    }
    const handleclear=()=>{
        setText("");
        props.showalert("Clerared text","success")

    }
    const handleemail=()=>{
        console.log(text)
        let newtext=text.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}/g)
        let ele=document.getElementById('email')
        let ans=""
        if(newtext)
        {
               ans=newtext.join(", ");
        }
        else
        {
               ans="not found "
        }
        ele.innerHTML=`<h4>the emails were </h4> <p>${ans}</p>`
        props.showalert("check email status shown","success")

    }
    const copytext=()=>{
        navigator.clipboard.writeText(text)
        props.showalert("Copied to clipboard","success")


    }
    const extraspace=()=>{
        let newtext=text.split(/[ ]+/)
        let nowtext=newtext.join(" ")
        setText(nowtext)
        props.showalert("removed extra space","success")

    }
    const [text,setText]=useState(''); 
    const [border,setborder]=useState({
        border:'solid 1px grey',
        borderRadius:'5px'
    }); 

    return (
    <>
      <div className={`container  ${props.mode=='light'?'text-dark':'text-light'}`}>
      <h2>Enter Your Fucking Text Here</h2>
      <div className={ `mb-3 ${props.mode==='light'?'text-dark':'text-light'} `}>
      <textarea className={ `form-control  ${props.mode=='light'?'text-dark bg-light':'text-light bg-dark'} `}
      // here bg-#232425 claass is not working you will only have to define bg-dark class only 
       style={{...border }}  value={text} onChange={handleonChange}  id="myBox" rows="8"></textarea>
      </div>
      {/*  this didnt work if i put bracketinside text also like this disabled={{text}.length==0} */}
      <button disabled={text.length==0} onClick={handleupclick} className="btn btn-primary  my-3" >Upper case conversion</button>
      <button disabled={text.length==0} onClick={handleloclick} className="btn btn-primary mx-3 my-3" >Lower case conversion</button>
      <button disabled={text.length==0} className="btn btn-primary mx-3 my-3" onClick={(handleclear)}> clear text </button><br />
      <button disabled={text.length==0} className="btn btn-primary  my-3" onClick={(handleemail)}> Find Email </button>
      <button disabled={text.length==0} className="btn btn-primary mx-3 my-3" onClick={(eraseemail)}>Clear Email </button>
      <button disabled={text.length==0} className="btn btn-primary mx-3 my-3" onClick={(copytext)}>Copy text </button>
      <button disabled={text.length==0} className="btn btn-primary mx-3 my-3" onClick={(extraspace)}>remove extra spaces </button>
      </div>
      <div className={`container ${props.mode=='light'?'text-dark bg-light':'text-light bg-blue'} `} 
      //here the bg-#232425is working but didnt look good so didnt put
     >
      <h1>Your Text Summary</h1>
      <p> {text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words and {text.length} characters </p>
      <p> {0.008 * text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} minutes read</p>
      {/* here we used regex expressions so that we get new word after new line also */}
      <p id="email"></p>

      <h3>Preview</h3>
      <p>{text.length>0?text:"No Text found to Preview it"}</p>
      </div>
      </>
  )
}

