
import comtransLogo from "@/public/comtrans-logo.gif";

import Image from "next/image";


const SearchTRFs = () => {
    return <div className="w-full h-[300px] border-2 border-black">
        <div className="bg-gray-200 p-5 w-[175px]">
            <Image className="m-1 w-[100px]"  src={comtransLogo} alt="logo"/>
        </div>
    </div>
}

export default SearchTRFs;