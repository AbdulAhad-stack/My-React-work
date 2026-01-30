
import React from 'react'
import {Bookmark} from 'lucide-react'


const App = (props) => {
  return (
   <div className="main">
     <div className="card">
      <div className="top">
        <img src={props.pic}></img>
        <button>Saved <Bookmark size={22} color="#181616" /></button>
      </div>
      <div className="center">
        <h1>{props.name}<span>{props.date} </span></h1>
        <h2>{props.postofferred}</h2>
        <div className="btn-center">
          <button>{props.tag1}</button>
          <button>{props.tag2}</button>
        </div>
      </div>
      <div className="footer">
        <div className="right-part">
           <p>{props.payoffer}</p>
          <span>{props.location}</span>
        </div>
        <button>Apply now</button>

      </div>
    </div>
   </div>
     
     

  )
}
export default App