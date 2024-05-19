'use client'

import {useEffect, useState} from "react";
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import https from 'https';

export default function Page(){

    // Using a query key and a fetch function
    // @ts-ignore

    const [rs,setRs] = useState();

    // @ts-ignore
    const fetchEm = async () => {

        const agent = new https.Agent(
            {rejectUnauthorized: false}
        );

        const url = 'https://ws.comtrans.net/weborderdblookup/CrisisDev.asmx?op=Wowzer';

        //const url = 'http://localhost:3001/data';

        const res = await axios({
            url: url,
            method: 'get'
        })

        return res.data;
    }

    // @ts-ignore

    const { isLoading, error, data} = useQuery({queryKey : ['fetchData'], queryFn:fetchEm});

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    const r = data?.map((item:{id:number,a:string,b:number}) => (<div className='text-white font-bold' key={item.id}>{item.a}&nbsp;{item.b}</div>));

    console.log(r);

    // @ts-ignore
    return (
        <div className="text-white h-full flex flex-col items-center justify-center">
        <h1>Page 2</h1>
            {r}
    </div>);
}

