import { useState, createContext, useContext } from "react";

const MyConext = createContext(null);

export default function ChangeNameParent () {
    const [userName, setUserName] = useState('Minyu');

    return (    
        <MyConext.Provider value={{userName, setUserName}}>
            <ChangeNameChild1/>
            <ChangeNameChild2/>
        </MyConext.Provider>
    )
};

function ChangeNameChild1 () {
const {userName} = useContext(MyConext)

    return <h2>{userName}</h2>
};

function ChangeNameChild2 (){
    const {setUserName} = useContext(MyConext)

    return (
        <>
        <button onClick={()=>setUserName('minyu zhang')}>
         change name
        </button>
        </>
    )

}