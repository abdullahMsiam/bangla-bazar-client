import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/Firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);


// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    //create user with email password
    const createUser = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password);
    }

    // login with email password
    const userLogin = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password);
    }

    const logout = async () => {
        return await signOut(auth).then(() => setUser(null));
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
                console.log(currentUser);
            }
            else {
                setLoading(false)
            }
        });

        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = { user, loading, googleLogin, createUser, userLogin, logout, };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )



};

export default AuthProvider;

