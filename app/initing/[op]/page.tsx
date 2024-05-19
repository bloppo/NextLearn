'use client'

import {useParams} from "next/navigation";
import {redirect}  from "next/navigation";
import {useContext, useEffect} from "react";
import {ActivityContext} from "@/components/ActivityProvider";

interface PageProps {
    params : {
        op : string
    }
}

export default function Page(){

    const params = useParams();

    // @ts-ignore
    const {startActivity, stopActivity} = useContext(ActivityContext);

    useEffect(() => {
        params.op === 'start' ? startActivity() : stopActivity() ;
        // @ts-ignore
        redirect('/home','replace')
    },[])

    return <div>Init</div>

}
