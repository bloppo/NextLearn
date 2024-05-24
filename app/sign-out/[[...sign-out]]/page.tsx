'use client'

import {Button} from '@/components/vi/button';

import { useClerk , SignOutButton} from '@clerk/nextjs';
import CountDownTimer from "@/components/CountDownTimer";
import {useContext,useState,useEffect} from "react";
import {ActivityContext} from "@/components/ActivityProvider";

const SignOutButton2 = () => {

    const { signOut } = useClerk();

    // @ts-ignore
    return (
        <div>
            <Button className="text-white" onClick={() => signOut( {redirectUrl: '/home' })}>
                Sign out
            </Button>
        </div>
    );
};

export default function Page(){

    const titlecb = (timeLeft:number) => {
        return <span>You will be signed out in <span className="font-bold text-red-500 text-xl">{timeLeft}</span> seconds.</span>
    }

    // @ts-ignore
    const {stopActivity} = useContext(ActivityContext);

    const { signOut } = useClerk();

    const cb = () => {
        stopActivity();
        signOut( {redirectUrl: '/home' });
    }

    return <div className="h-full w-full flex flex-col items-center justify-center">
        <CountDownTimer className="p-2.5 text-black"
                        title={titlecb}
                        duration={20}
                        onComplete={cb}/>
        <SignOutButton  redirectUrl = {'/initing/stop'} />
    </div>
}