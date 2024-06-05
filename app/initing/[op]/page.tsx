'use client'

import {useParams} from "next/navigation";
import {redirect,RedirectType}  from "next/navigation";
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
    //const {startActivity, stopActivity} = useContext(ActivityContext);

    useEffect(() => {
        if(params.op === 'start'){
            //startActivity()
            // @ts-ignore
            redirect('/home',RedirectType.replace)
        } else if(params.op === 'stop') {
            //stopActivity() ;
            // @ts-ignore
            redirect('/home',RedirectType.replace)
        } else if(params.op === 'sign-out'){
            // @ts-ignore
            redirect('/sign-out',RedirectType.replace)
        }

    },[])

    return <div>Init</div>

}
