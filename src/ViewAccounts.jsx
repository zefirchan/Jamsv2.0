import { useState, useEffect } from "react";
import {db} from './firestore';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"
import { IoIosCreate } from 'react-icons/io';
import {Link} from "react-router-dom"
import { async } from "@firebase/util";
import { ImWarning } from 'react-icons/im';
import {EditAccount} from './EditAccount';


export const ViewAccounts = () =>{


    const [accounts, setAccounts] = useState([]);
    const accountsCollectionRef = collection(db,  "accounts");
    const [editbox, seteditbox] = useState(false);

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
                        <h3>Category </h3>
                        <div><p>{account.category}</p> </div>
                        <h3>Debit </h3>
                        <div><p>{account.debit}</p></div>
                        <h3>InitialBalance</h3>
                        <div><p>{account.initialBalance}</p></div>
                        <h3>Description</h3>
                        <div> <p>{account.description}</p></div>
                        <Link onClick={() => {deactivateAccount(account.id)}} className="va-button">
                            <a><h4>deactivate</h4><ImWarning size={30}/></a>
                        </Link>
                        <br />
                        <Link onClick={()=> seteditbox(true)} className="va-button">
                            <li><a><h6>Edit Account</h6><IoIosCreate size={30}/></a></li>
                        </Link>
                        {editbox === true && <EditAccount account = {account} seteditbox={seteditbox}/>}
                        
                        
                    </div>
                    <br />
                    </>

                    )
                    
                })}
        </div>

    )
}
