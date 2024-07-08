import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Protected({ children, authentication = true }) {

    const navigate = useNavigate();
    const selector = useSelector();
    const [loader, setLoader] = useState(true)

    const authStatus = useSelector((state) => { state.auth.status });

    useEffect(() => {
        // todo : make it more easy 
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        }
        else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])



    if (authentication)


        return (
            <div>
                authLayout
            </div>
        )
}