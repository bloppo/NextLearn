'use client'

//import * as Table from '@radix-ui/react-primitive';

import Link from 'next/link';

import {TRFListingRow}  from "@/types";

const TRFListing = ({trf,closed}:{trf:TRFListingRow[], closed:boolean}) => {

    const c = "text-blue-500 font-bold underline"; // p-2 border-2 border-black rounded-lg shadow-lg hover:bg-blue-100";

    // @ts-ignore
    // @ts-ignore
    return <div>
        <table className="w-full text-sm mt-2 border-2 border-black bg-blue-100">
            <thead className="block p-2 border-b-2 border-black">
            <tr>
                <th className="text-left w-[100px]">TRF #</th>
                <th className="text-left w-[50px]">First Last</th>
                <th className="text-left w-[100px]">Transport Date</th>
                <th className="text-left w-[100px]">Team</th>
            </tr>
            </thead>
            <tbody className={"block p-2 overflow-y-auto "  + `${closed ? "h-[78vh]" : "h-[40vh]"}`}>
                    {trf.map((r)=> {
                        return (<tr key={r.ref_num} className="odd:bg-gray-100 hover:bg-gray-300">
                            <td className="text-left w-[100px]"><Link className={c}
                                                                      href={`/edit-trf/${r.ref_num}`}>{r.ref_num}</Link>
                            </td>
                            <td className="text-left w-[50px] blur-lg">{r.First} {r.Last}</td>
                            <td className="text-left w-[100px]">{r.TransportDate}</td>
                            <td className="text-left w-[100px]">{r.Team}</td>
                        </tr>)
                    })}
            </tbody>
        </table>
    </div>
}

export default TRFListing;