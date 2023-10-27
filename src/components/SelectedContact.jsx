import React from "react";
import { useState, useEffect } from "react";

//create new component for SelectedContact
const SelectedContact = ({selectedContactId, setSelectedContactId}) => {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function getContact = () =>{
            try{
                const response = await fetch('https://jsonplace-univclone.herokuapp.com/users/${selectedContactId}');
                const result = await response.json();
                setContact(result); 
            } catch (err){
                console.error(err);
            } 
            getContact();

        }
    },[])

    console.log(contact);

    return(

    );

}

export default SelectedContact;