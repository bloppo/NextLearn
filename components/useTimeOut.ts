'use client'

import {useState,useEffect,useCallback} from 'react';
import {useRouter} from "next/navigation";

export default function useTimeOut(timeoutMS = 60000){

    const router = useRouter();

    const [lastActivity,setLastActivity] = useState(new Date().getTime());

    const [isRunning,setIsRunning] = useState(false);

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
                    router.push('/sign-out');
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
        }
    }

    const stop = () => {
        return () => { setIsRunning(false)};
    }

    return [onUserActivity,start,stop] ;
}
