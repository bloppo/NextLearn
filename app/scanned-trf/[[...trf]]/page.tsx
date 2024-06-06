'use client'

import {useParams} from "next/navigation";
import Link from "next/link";

const ViewScannedTRF = () => {

    const params = useParams();

    console.log(params);

    return (
        <div className="flex flex-col w-full h-full space-y-5">
            <h1 className="text-center text-2xl mt-[20px]">View Scanned TRF</h1>
            <Link className="text-blue-500 underline" href={`/edit-trf/${params.trf[1]}`}>Back To Edit TRF</Link>
            <embed type='application/pdf' className="w-[80%] md:w-[80%] h-[40%] md:h-[80%] ml-auto mr-auto mb-3"
                   src={`/${params.trf[0]}/`} />
        </div>
);

}

export default ViewScannedTRF;