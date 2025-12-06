import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';

import auth from '../firebase.init';
import { createContext, useEffect, useState } from 'react';


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [loading , setLoaading] = useState(true);
    const [user , setUser] = useState (null);



    const registerWithEmailPAssword = (email, password) => {
        console.log(email, password);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInWithEmailPassword = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const SigninWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged (auth,(currentUser) =>{
            setUser(currentUser);
            setLoaading(false);
        })
        return () =>{
            unsubscribe();
        }
    },[])

    const authData = {
        registerWithEmailPAssword,
        setUser,
        signInWithEmailPassword,
        user,
        SigninWithGoogle,
        loading,
        
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;