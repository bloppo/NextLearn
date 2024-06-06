'use client'

import {redirect, RedirectType, useParams} from "next/navigation";
//import {useRouter} from "next/router";
import Link from 'next/link';
import axios from "axios";
import {useQuery} from "@tanstack/react-query";

import {CrisisDropDownMenu} from "@/components/TestDropDownMenu";
import {useState,useEffect} from "react";

export default function Page(){

    const [open,setOpen] = useState(false);

    const params = useParams();

    //const router = useRouter();

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

    const capitalizeWord = (str:string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const splitCamelCase = (str: string) => {
        // @ts-ignore
        const words = str.match(/[A-Z][a-z]+|[^A-Z]+/g)
                                  .map(word => capitalizeWord(word));
        return words.join(' ');
    }

    const flattenData = (data:any,prefix:string,lvl:number) => {

        let dict:any = {};

        const keys:string[] = Object.keys(data);

        keys.forEach((k) => {

            if(typeof data[k] === 'string'){

                dict[prefix + ' ' + k] = data[k]

            } else {

                if(data[k] !== null) {
                    const tmp = flattenData(data[k], k,lvl + 1)
                    dict = {...dict, ...tmp}
                } else {
                    dict[prefix + ' ' + k] = 'none';
                }
            }

        })

        return dict;

    }

    const blurText = (r:string) => {

        let retVal = "";

        if(r.substring(0,6) === 'Client') {
            retVal =  "blur-md"
        } else if(r.substring(0,14) === 'root Narrative'){
            retVal =  "blur-md"
        }

        return retVal;

    }

    const formatTable = (sdata : any, lvl=0) => {

        const keys = Object.keys(sdata);

        return keys.map((r:any,index) => {
            return (<tr key={index} className="odd:bg-gray-100 hover:bg-gray-300">
                <td className="text-left break-words w-[175px] md:w-[350px] text-indent-[20px]">{splitCamelCase(r)}</td>
                {typeof sdata[r] === 'string'
                    ?
                        <td className = {`ext-left break-words w-[200px] md:w-[300px] ${blurText(r)}`}>{sdata[r]}</td>
                    :
                        <td className="text-left break-words  w-[200px] md:w-[300px]"><br /></td>
            }
            </tr>)
        })

    }

    const [doRedirect,setDoRedirect] = useState(false);

    useEffect(() =>{
        if(doRedirect) {redirect(`/scanned-trf/dr1070628.pdf/${params.refNum}`,RedirectType.push);}
    },[doRedirect])

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    const ndata = data['CrisisTransportRequest'];

    const flatdata = flattenData(ndata,'root',0);

//'/scanned-trf/dr1070628.pdf'
    const openScannedTRF = () => {
        if(0){ //window.innerWidth > 760) {
            setOpen(true)
        } else {
            console.log('redirect')
            try {
                setDoRedirect(true)
            } catch(err){
                console.log(err)
            }
        }
    }

    return (<div>

        <div className="flex flex-row justify-between mr-5">
            <Link className={`text-blue-500 underline ${open ? 'z-1' : 'z-50'}`} href="../page3">Back to Listing</Link>
            <CrisisDropDownMenu openViewScannedTRFDialog={()=>openScannedTRF()}/>
        </div>

        <h1 className="text-black text-lg">Edit TRF # {params.refNum}</h1>

        <table className="w-full mt-2 border-2 border-black bg-blue-100">
            <thead className="block p-2 border-b-2 border-black">
            <tr>
                <th className="text-left w-[175px] md:w-[350px]">Field</th>
                <th className="text-left w-[200px] md:w-[300px]">Value</th>
            </tr>
            </thead>
            <tbody className="block max-h-[78vh] p-2 overflow-x-auto overflow-y-auto">
            {formatTable(flatdata)}
            </tbody>
        </table>

        {/*<ViewScannedTRFDialog open={open} setOpen={setOpen} />*/}

    </div>)


}
