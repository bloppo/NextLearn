import MyLink from "@/components/MyLink";
import {SignedIn, SignedOut} from "@clerk/nextjs";
import { Inter } from "next/font/google";
import useTimeOut from "@/components/useTimeOut";
import {usePathname} from "next/navigation";
import {ReactNode, useContext, useEffect} from "react";
import {ActivityContext} from "@/components/ActivityProvider";
import Image from 'next/image';
import nextjsLogo from '../public/next.svg'
import vercelLogo from '../public/vercel.svg'

const inter = Inter({ subsets: ["latin"] });

export default function MainLayout({children}:{children?:ReactNode}){

    const LEFT_SIDE = "bg-gray-300 md:h-[calc(100vh-20px)] w-full md:w-3/12 p-5 border-black border-2 mb-1 md:mr-1"
    const RIGHT_SIDE = "bg-gray-300 md:h-[calc(100vh-20px)] w-full md:w-3/4  p-5 border-2 border-black"

    //const [activity ,startCheck,stopCheck] = useTimeOut(1000 * 60 * 1);

    // @ts-ignore
    const {updateStartActivity,updateStopActivity} = useContext(ActivityContext);

    // useEffect(() => {
    //     updateStartActivity(startCheck)
    //     updateStopActivity(stopCheck);
    // },[]);

    const pathname = usePathname();

    const activeLink = (r:string) : string => {
        return pathname === r ? "bg-red-100" : "bg-gray-100";
    }

    //onMouseMove={(e) => activity()} onKeyDown={() => activity()}

    return (
        <body className={inter.className}>
        <div className="flex flex-col md:flex-row m-2 pb-0">
            <div className={LEFT_SIDE}>
                <div className="w-1/2 md:w-full">
                    <div className="flex flex-row justify-between bg-gray-200 p-3 mb-5 shadow-gray-500 shadow-lg">
                        <Image className="mb-5" src={nextjsLogo} width={75} h-auto max-h-full alt="logo"/>
                        <Image className="mb-5" src={vercelLogo} width={75} h-auto max-h-full alt="logo"/>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <MyLink path="/home" title='Home' activeLink={activeLink('/home')}/>
                        <MyLink path="/page2" title="Salt River Paddle Boarding" activeLink={activeLink('/page2')}/>
                        <MyLink path="/page1" title="Signature" activeLink={activeLink('/page1')}/>
                        <MyLink path="/page3" title="Crisis" activeLink={activeLink('/page3')}/>
                        <SignedOut>
                            <MyLink path="/sign-in" title="Sign In" activeLink={activeLink('/sign-in')}/>
                        </SignedOut>
                        <SignedIn>
                            <MyLink path="/sign-out" title="Sign Out" activeLink={activeLink('/sign-out')}/>
                        </SignedIn>
                    </div>
                </div>
            </div>
            <div className={RIGHT_SIDE}>
                {children}
            </div>
        </div>
        </body>
    )
}