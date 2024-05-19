'use client'

import {useEffect, useState, ReactNode} from 'react';

export default function CountDownTimer({className,title,duration,onComplete}: {className?: string,title?:(a:number) => ReactNode,duration:number,onComplete?:()=>void}) {

    const [timeLeft, setTimeLeft] = useState(duration)
    const [isRunning,setIsRunning] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            if(timeLeft>0 && isRunning) setTimeLeft(prevState => prevState - 1)
        }, 1000);
        return () => clearTimeout(timer);
    },[timeLeft,isRunning])

    useEffect(() => {

        if(timeLeft === 0 && onComplete && isRunning) onComplete();

    },[timeLeft,onComplete,isRunning]);

    return <div className={className}>
        {title ? title(timeLeft) : `Count Down Timer : ${timeLeft}`}
        <button className="text-sm ml-2 p-2 bg-black text-white border-2"
                onClick={() => {setIsRunning(prevState => ! prevState)}}>
            Stop {isRunning ? 'true' : 'false'}
        </button>
    </div>

}
