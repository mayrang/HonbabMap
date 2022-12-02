import React, { useEffect } from "react";
import Header from "../components/Header";

import { useAppDispatch } from "../redux/store";

const Register = () => {
    const dispatch = useAppDispatch();

    
    
    return (
        <>
        <Header />
        <div className="bg-gray-200 w-full h-screen flex justify-center items-center">
            
            <div className="bg-white border rounded shadow-lg p-5">
                
            </div>
        </div>
        </>
    )
   
};

export default Register;