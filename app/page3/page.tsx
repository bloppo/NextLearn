'use client'

import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import TRFListing from "@/components/TRFListing";
import SearchTRFs from "@/components/SearchTRFs";
import {useState,useEffect} from "react";
import CollapseWithTitle from "@/components/CollapseWithTitle";

const Page = () => {

    let initSDate:string | null = new Date().toDateString();
    let initEDate : string | null = new Date().toDateString();

    /*
    if(typeof window !== 'undefined' && typeof localStorage !== 'undefined') {

        if (localStorage.getItem('transportSDate')) {
        initSDate = localStorage.getItem('transportSDate');
    }
        // @ts-ignore
        if (localStorage.getItem('transportEDate')) {
            initEDate = localStorage.getItem('transportEDate');
        }

    }
*/

    const [transportSDate,setTransportSDate] = useState<string>(initSDate);

    const [transportEDate,setTransportEDate] = useState<string>(initEDate);

    const [closed,setClosed] = useState<boolean>(false);

    const toggleClosed= () => {

        setClosed((p) => !p);

    }

    const updateTransportDate = (sdate:string,edate:string) => {
        setTransportSDate(sdate);
        setTransportEDate(edate);
    }

    // @ts-ignore
    const fetchEm =  async ({queryKey}) => {

        const url = 'https://ws.comtrans.net/weborderdblookup/CrisisDev.asmx/GetTRFListing';

        const [_,sdate,edate] = queryKey;

        const res = await axios({
            url: url,
            method: 'get',
            params : {
                trfSDate : sdate,
                trfEDate : edate
            }
        });

    return res.data;

    }

    const plus =  String.fromCodePoint(0x2795)
    const minus =  String.fromCodePoint(0x2796);

    const { isLoading, error, data} = useQuery({queryKey : ['fetchTRFListing',transportSDate,transportEDate], queryFn:fetchEm});

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    return <>
        <CollapseWithTitle toggleClosed={toggleClosed}
                           closed={closed}
                           title="Transportation Requests">
            <SearchTRFs closed={closed}
                        updateTransportDate={updateTransportDate}
            />
        </CollapseWithTitle>
        <TRFListing trf={data}
                    closed={closed}/>
    </>
}


export default Page;
