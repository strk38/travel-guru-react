import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../firebase/firebase_config";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); //to prevent auto loading on login

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    })

    const authInfo = { user, loading, createUser, signInUser, logOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;

// 1. Create Context
// 2. Set Provider with value
// 3. Use AuthProvider in main.js and put RouterProvider inside it as child.
// 4.Pass the child/ children as parameter in AuthProviders
// 5. export AuthContext to use it in other component. make sure not to use default; as default can be declared once in a component