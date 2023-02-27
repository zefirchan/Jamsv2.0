import React, {useState} from 'react'
import { doc, updateDoc } from "firebase/firestore";
import {accountsCollectionRef } from './AddAccount'



export function EditAccount(account, seteditbox){

    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState(0)
    const [newCategory, setNewCategory] = useState("")
    const [newCredit, setNewCredit] = useState(0)
    const [newDebit, setNewDebit] = useState(0)
    const [newIB, setNewIB] = useState("")
    const [newDescription, setNewDescription] = useState("")

  function editDoc(updatedDoc){
    accountsCollectionRef
        .doc(updatedDoc.id)
        .update(updatedDoc)
        .catch((err)=>{
        alert(err)
        console.error(err);
    })
    
  }

    return (

        <div>
            <p>edit box</p>
            <input placeholder="Name..." onChange={(event) => {setNewName(event.target.value)}} />
            <input type="number" placeholder="Number..." onChange={(event) => {setNewNumber(event.target.value)}} />
            <input placeholder="category..." onChange={(event) => {setNewCategory(event.target.value)}} />
            <input type="number" placeholder="credit amount..." onChange={(event) => {setNewCredit(event.target.value)}}/>
            <input type="number" placeholder="debit amount..." onChange={(event) => {setNewDebit(event.target.value)}}/>
            <input type="text" placeholder="initial balance..." onChange={(event) => {setNewIB(event.target.value)}}/>
            <input type="text" placeholder="description" onChange={(event) => {setNewDescription(event.target.value)}}/>
            <button onClick={()=> {
                editDoc({name: newName, number: newNumber, id: account.id})
            }}>update</button>
        </div>

    )
}

