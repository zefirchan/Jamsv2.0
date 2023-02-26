import { useState, useEffect } from "react";
import {db} from './firestore';
import { collection, getDocs, addDoc} from "firebase/firestore"



export const AddAccount = () =>{

    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState(0)
    const [newCategory, setNewCategory] = useState("")
    const [newCredit, setNewCredit] = useState(0)
    const [newDebit, setNewDebit] = useState(0)
    const [newDescription, setNewDescription] = useState("")




    const [accounts, setAccounts] = useState([]);
    const accountsCollectionRef = collection(db,  "accounts");
    const createAccount = async () => {
        await addDoc(accountsCollectionRef, {name: newName, number: newNumber, category: newCategory, credit: newCredit, debit: newDebit, description: newDescription})
    }

   

    return(
        <>
        <div className="aa-form-container">
            <h2>Add Account</h2>
            <form className="addaccount-form" > 
                <input placeholder="Name..." onChange={(event) => {setNewName(event.target.value)}} />
                <input type="number" placeholder="Number..." onChange={(event) => {setNewNumber(event.target.value)}} />
                <input placeholder="category..." onChange={(event) => {setNewCategory(event.target.value)}} />
                <input type="credit" placeholder="0.00" onChange={(event) => {setNewCredit(event.target.value)}}/>
                <input type="debit" placeholder="0.00" onChange={(event) => {setNewDebit(event.target.value)}}/>
                <input type="description" placeholder="enter a description" onChange={(event) => {setNewDescription(event.target.value)}}/>
            </form>
            <button onClick={createAccount}>Add Account</button>
            
        </div>
        
        </>

    )
}