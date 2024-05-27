'use client'

import {useState,useEffect,useCallback} from 'react';
import {useRouter, usePathname} from "next/navigation";

export default function useTimeOut(timeoutMS = 60000){

    const initIsRunning = localStorage.getItem('isRunning')

    const router = useRouter();

    const pathname = usePathname();

    const [lastActivity,setLastActivity] = useState(new Date().getTime());

    const [isRunning,setIsRunning] = useState(initIsRunning !== 'false' );

    const onUserActivity = useCallback(() => {
       setLastActivity(new Date().getTime());
    },[lastActivity]);

    useEffect(()=>{
        const interval = setInterval(() => {
            if(isRunning) {
                console.log('running')
                const now = new Date().getTime();
                if (now - lastActivity > timeoutMS) {
                    //setIsRunning(false);
                    //localStorage.setItem('isRunning','false')
                        router.push('/initing/sign-out');
                }
            } else {
                console.log('not running')
            }
        },1000);
        return () => clearInterval(interval);

    },[router,lastActivity,timeoutMS,isRunning]);

    const start = () => {
        return () => {
            setLastActivity(new Date().getTime());
            setIsRunning(true);
            localStorage.setItem('isRunning','true')
        }
    }

    const stop = () => {
        return () => {localStorage.setItem('isRunning','false'); setIsRunning(false)};
    }

    return [onUserActivity,start,stop] ;
}
