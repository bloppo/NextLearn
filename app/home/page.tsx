'use client'

import {useContext, useEffect} from "react";
import {ActivityContext} from "@/components/ActivityProvider";

import {Button} from "@/components/vi/button";
import {SignedIn, SignedOut} from "@clerk/nextjs";

export default function HomePage(){

    return <div className="text-white h-full flex flex-col items-center justify-center">
        <div>
            <Button className="text-white bg-transparent" onClick={(e) => {console.log('click')}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </Button>
            <h1>Wow !</h1>
        </div>
        <div>
            <SignedIn><h1>Signed In</h1></SignedIn>
            <SignedOut><h1>Signed Out</h1></SignedOut>
        </div>
    </div>

}