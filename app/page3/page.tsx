'use client'

import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import TRFListing from "@/components/TRFListing";
import SearchTRFs from "@/components/SearchTRFs";

const Page = () => {

    // @ts-ignore
    const fetchEm =  async () => {

        const url = 'https://ws.comtrans.net/weborderdblookup/CrisisDev.asmx/GetTRFListing';

        const res = await axios({
            url: url,
            method: 'get',
            params : {
                trfDate : "2024-05-22"
            }
        });

    return res.data;

    }

    console.log('Page 3');

    const { isLoading, error, data} = useQuery({queryKey : ['fetchTRFListing'], queryFn:fetchEm});

    console.log(data);

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    return <div>
        <SearchTRFs />
        <TRFListing trf={data}/>
    </div>
}


export default Page;
