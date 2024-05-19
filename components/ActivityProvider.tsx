'use client'

import React, {useState,useCallback,ReactNode} from "react";


// @ts-ignore
export const ActivityContext = React.createContext<ActivityContextValue | undefined>(undefined)

interface ActivityContextValue {
    startActivity: any;
    updateStartActivity: any;
    stopActivity: any;
    updateStopActivity: any;
}

export const ActivityProvider = ({ children } : {children : ReactNode}) : React.JSX.Element => {

    const [stopActivity, setStopActivity] = useState();

    const [startActivity, setStartActivity] = useState();

    const updateStartActivity = (fn: any) => {
        setStartActivity(fn);
    }

    const updateStopActivity = (fn: any) => {
        setStopActivity(fn);
    }

    return <ActivityContext.Provider value={{startActivity,updateStartActivity,stopActivity, updateStopActivity}}>
        {children}
    </ActivityContext.Provider>

}
