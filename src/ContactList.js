import React from 'react'
import {Item} from "./component/Item.js"

export default function ContactList(props) {
    
    return (<div>
        {/* <h1>{props.obj[0].name}</h1>
        <h1>{props.obj[0].title}</h1> */}
            {props.obj.length===0?"No Address to Display":
            props.obj.map((item, i) => {
              return (<Item item={item} key={i} onDelete={props.onDelete} />

              )
            })}
        

        
        </div>
    )
}