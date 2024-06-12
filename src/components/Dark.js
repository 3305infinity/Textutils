        import React ,{useState} from 'react'
        export default function Dark(props) {
        // const [mystyle,setmystyle]=useState({
        //     backgroundColor:"white",
        //     color:"black"
        // })
        // const [text,setText]=useState("Enable Dark Mode")
        const [border,setborder]=useState({
            
            border: '1px solid black'
        })
    
        // const togglebtn=()=>{
        //     if(mystyle.backgroundColor=='white')
        //         {
        //             setmystyle({
        //                 backgroundColor:"black",
        //                 color:"white"
        //             })
        //             setText("Enable Light Mode")
        //             setborder({
        //                 border: '1px solid white'
        //             })
        //         }
        //     else{
        //         setmystyle({
        //             backgroundColor:"white",
        //             color:"black"
        //         })
        //         setText("Enable Dark Mode")
        //         setborder({
        //             border: '1px solid gray'
        //         })
        //     }
        // }
        const mystyle={
            color:props.mode=='light'?'black':'white',
            backgroundColor:props.mode=='light'?'white':' rgb(3 21 41)',
            border:props.mode=='light'?'1px solid black':'1px solid white',
            // borderRadius:'10px'
        }
        const accordionstyle={
            color:props.mode=='light'?'black':'white',
            backgroundColor:props.mode=='light'?'#acbdce':' #20354b'
            // border:props.mode=='light'?'':'1px solid white'
        }
        return (
            <>
            <div style={{ padding:'20px', display:'flex',justifyContent:'center'}}>  
            <div className={ `card mx-3 my-3   `} style={{  width: '18rem',  ...border }}>
            
        <div className={ `card-body  ${props.mode==='light'?'bg-light text-dark':'bg-dark text-light'}`}>
            <h5 className="card-title">Card title</h5>
            {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
        </div>
        </div>
        <div className="card mx-3 my-3" style={{ width: '18rem' ,  ...border }}>

    
        <div className={ `card-body  ${props.mode==='light'?'bg-light text-dark':'bg-dark text-light'}`}>
            <h5 className="card-title">Card title</h5>
            {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
        </div>
        </div> <div className="card mx-3 my-3" style={{ width: '18rem', ...border  }}>
    
        <div className={ `card-body  ${props.mode==='light'?'bg-light text-dark':'bg-dark text-light'}`}>
            <h5 className="card-title">Card title</h5>
            {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
        </div>
        </div>
        </div>
        {/* <button onClick={togglebtn} className="btn btn-primary mx-3 my-3">{text}</button> */}
        <div className="accordion" id="accordionExample" style={{width:'80%',...mystyle, margin:'auto', padding:'40px',marginTop:'40px'}}>
    <div className="accordion-item" style={{...mystyle}}>
        <h2 className="accordion-header">
        <button style={{...accordionstyle}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={{...mystyle}}>
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin 
            adds the appropriate classes that we use to style each element. These classes control the overall appearance,
             as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just about any HTML can go within the 
              <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item" style={{...mystyle}}>
        <h2 className="accordion-header">
        <button style={{...accordionstyle}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
        <div className="accordion-body" style={{...mystyle}}>
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin 
            adds the appropriate classes that we use to style each element. These classes control the overall appearance,
             as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just about any HTML can go within the
               <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
        {/* // if you are not able to use here filter:invert(1) the use it in index.css which is a globalc css file and do it 
        there not here as u will get  */}
    </div>
    <div className="accordion-item" style={{...mystyle}}>
        <h2 className="accordion-header">
        <button style={{...accordionstyle}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={{...mystyle}}>
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
             collapse plugin adds the appropriate classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of
               this with custom CSS or overriding our default variables. It's also worth noting that just about an
               y HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    </div>
            </>
        )
        }
