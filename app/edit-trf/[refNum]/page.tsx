'use client'

import {useParams} from "next/navigation";

import Link from 'next/link';
import axios from "axios";
import {useQuery} from "@tanstack/react-query";

export default function Page(){

    const params = useParams();

    const fetchEm =  async () => {

        const url = 'https://ws.comtrans.net/weborderdblookup/CrisisDev.asmx/GetTRF';

        const res = await axios({
            url: url,
            method: 'get',
            params : {
                refNum : params.refNum
            }
        });

        return res.data;

    }

    const { isLoading, error, data} = useQuery({queryKey : ['fetchTRF'], queryFn:fetchEm});

    type ddict = {
        [key: string]: any;
    }

    const flattenData = (data:any,prefix:string,lvl:number) => {

        let dict:any = {};

        const keys:string[] = Object.keys(data);

        keys.forEach((k) => {

            if(typeof data[k] === 'string'){

                dict[prefix + '-' + k] = data[k]

            } else {

                if(data[k] !== null) {
                    const tmp = flattenData(data[k], k,lvl + 1)
                    dict = {...dict, ...tmp}
                } else {
                    dict[prefix + '-' + k] = 'none';
                }
            }

        })

        return dict;

    }

    const formatTable = (sdata : any, lvl=0) => {

        const keys = Object.keys(sdata);

        const stars = "*".repeat(lvl*5);

        //return <tr><td>Hope !</td></tr>

        return keys.map((r:any) => {
            return (<tr key={r.ref_num} className="odd:bg-gray-100 hover:bg-gray-300">
                <td className="text-left w-[200px] text-indent-[20px]">{stars + r}</td>
                {typeof sdata[r] === 'string'
                    ?
                        <td className="text-left w-[350px]">{sdata[r]}</td>
                    :
                        <td className="text-left w-[300px]"><br /></td>
            }
            </tr>)
        })

    }

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    const ndata = data['CrisisTransportRequest'];

    const flatdata = flattenData(ndata,'root',0);

    return (<div>

        <h1>Edit TRF # {params.refNum}</h1>

        <div className="m-5">
            <Link className="text-blue-50 underline" href="../page3">Back to Listing</Link>
        </div>

        <table className="w-full mt-2 border-2 border-black bg-blue-100">
            <thead className="block p-2 border-b-2 border-black">
            <tr>
                <th className="text-left w-[350px]">Field</th>
                <th className="text-left w-[300px]">Value</th>
            </tr>
            </thead>
            <tbody className="block max-h-[500px] p-2 overflow-x-auto overflow-y-auto">
            {formatTable(flatdata)}
            </tbody>
        </table>


    </div>)


}
