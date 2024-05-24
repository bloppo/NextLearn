
import comtransLogo from "@/public/comtrans-logo.gif";
import comtransVan from '@/public/comtrans-van.jpg';

import Image from "next/image";
import SearchForm from "@/components/SearchForm";


const SearchTRFs = () => {
    return <div className="w-full h-[300px] border-2 border-black">
        <div className="flex flex-row">
            <div className="flex flex-row w-[400px] justify-between bg-gray-200 p-5">
                <Image className="m-1 w-[100px] h-[50px]"  src={comtransLogo} alt="logo"/>
                <Image className="m-1 w-[200px] h-[75px]"  src={comtransVan} alt="comtrans van"/>
            </div>
            <div>
                <SearchForm />
            </div>
        </div>
    </div>
}

export default SearchTRFs;