'use client'

//import * as Table from '@radix-ui/react-primitive';

import Link from 'next/link';

import {TRFListingRow}  from "@/types";

const TRFListing = ({trf}:{trf:TRFListingRow[]}) => {

    const c = "text-blue-500 font-bold underline"; // p-2 border-2 border-black rounded-lg shadow-lg hover:bg-blue-100";

    // @ts-ignore
    // @ts-ignore
    return <div>
        <table className="w-full mt-2 border-2 border-black bg-blue-100">
            <thead className="block p-2 border-b-2 border-black">
            <tr>
                <th className="text-left w-[100px]">TRF #</th>
                <th className="text-left w-[100px]">First</th>
                <th className="text-left w-[100px]">Last</th>
                <th className="text-left w-[100px]">Transport Date</th>
                <th className="text-left w-[100px]">Team</th>
                <th className="bg-amber-200"><br/></th>
            </tr>
            </thead>
            <tbody className="block max-h-80 p-2 overflow-y-auto">
                    {trf.map((r)=> {
                        return (<tr key={r.ref_num} className="odd:bg-gray-100 hover:bg-gray-300">
                            <td className="text-left w-[100px]"><Link className={c}
                                                                      href={`/edit-trf/${r.ref_num}`}>{r.ref_num}</Link>
                            </td>
                            <td className="text-left w-[100px] blur-lg">{r.First}</td>
                            <td className="text-left w-[100px] blur-md">{r.Last}</td>
                            <td className="text-left w-[100px]">{r.TransportDate}</td>
                            <td className="text-left w-[100px]">{r.Team}</td>
                            {/*<td className="w-full"><br /></td>*/}
                        </tr>)
                    })}
            </tbody>
        </table>
    </div>
}

export default TRFListing;