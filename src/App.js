import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContact from "./component/AddContact.js"
import ContactList from './ContactList';
import React, {useState, useEffect} from "react";


function App() {
let initContact;
if( localStorage.getItem("addContact") === null)
{
  initContact= [];
}
else {
  initContact = JSON.parse(localStorage.getItem("addContact"))
}

const onDelete = (object) => {
  // console.log("I am on Delete", object)

  setobj(obj.filter((e)=> {
    return e !== object
  }))
  console.log("Delete", obj)

  localStorage.setItem("addContact", JSON.stringify(obj))
}


const addContact = (contact) => {
  console.log("I am adding the contact", contact)
 const myContact = [...obj]
 myContact.push(contact)
 setobj(myContact)
 obj.push(contact)
 console.log(myContact)

}

const [obj, setobj] = useState(initContact)

useEffect(() => {
  localStorage.setItem("addContact", JSON.stringify(obj));
},[obj])


  return (
    <>
    <h1 >My Address Book</h1>
    <div className=" App container">
    < AddContact addContact={addContact}/>
    <div className ="list">
    <ContactList obj ={obj} onDelete ={onDelete}/>  
    </div>  
    </div>
    </>
  );
}

export default App;
