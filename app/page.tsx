'use client'
import {redirect,RedirectType}  from "next/navigation";
import {useEffect} from "react";

export default function RootPage(){

    useEffect(() => {
        redirect('/home',RedirectType.replace);

    },[])

    return <div className="text-black h-full flex flex-col items-center justify-center">
            <h1>Root</h1>
    </div>

}