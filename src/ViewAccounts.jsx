import { useState, useEffect } from "react";
import {db} from './firestore';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"
import { IoIosCreate } from 'react-icons/io';
import {Link} from "react-router-dom"
import { async } from "@firebase/util";
import { ImWarning } from 'react-icons/im';
import Button from '@mui/material/Button';



export const ViewAccounts = () =>{


    const [accounts, setAccounts] = useState([]);
    const accountsCollectionRef = collection(db,  "accounts");

    const deactivateAccount = async (id) => {
        const accountDoc = doc(db, "accounts", id);
        await deleteDoc(accountDoc);

    }
    useEffect(() => {

        const getAccounts = async () => {
            const data = await getDocs(accountsCollectionRef);
            setAccounts(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        };

        getAccounts();
    }, []);

   

    return(
        //Display account info
        <div className="view-accounts-container"> 
            {accounts.map((account) => { 
                return (
                    <>
                    <div className="view-accounts-row">
                        <h3>name</h3>
                        <div id="name" type="name" name="name"><p>{account.name}</p></div>
                        <h3>number</h3>
                        <div><p>{account.number}</p></div>
                        <h3>credit</h3>
                        <div><p>{account.credit}</p></div>
                        <Button  onClick={() => {deactivateAccount(account.id)}}><h4>deactivate</h4><ImWarning size={30}/></Button>
                        <br />
                        <Link to="editaccount">
                            <Button ><h4>Edit Account</h4><IoIosCreate size={30}/></Button>   
                        </Link>
                        
                        
                    </div>
                    <br />
                    </>

                    )
                    
                })}
        </div>

    )
}

//   To Add

//   <div><h1>:Category: {account.category}</h1></div>
//   <div><h1>:Debit: {account.debit}</h1></div>
//   <div><h1>:InitialBalance: {account.initialBalance}</h1></div>
//   <div><h1>:Description: {account.description}</h1></div>

//