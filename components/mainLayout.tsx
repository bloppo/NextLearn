import MyLink from "@/components/MyLink";
import {SignedIn, SignedOut} from "@clerk/nextjs";
import { Inter } from "next/font/google";
import useTimeOut from "@/components/useTimeOut";
import {usePathname} from "next/navigation";
import {ReactNode, useContext, useEffect} from "react";
import {ActivityContext} from "@/components/ActivityProvider";;

const inter = Inter({ subsets: ["latin"] });

export default function MainLayout({children}:{children?:ReactNode}){

    const LEFT_SIDE = "bg-gray-500 h-[calc(100vh-20px)] w-3/12 p-5 border-black border-2 mr-1"
    const RIGHT_SIDE = "bg-gray-500 h-[calc(100vh-20px)]  w-3/4  p-5 border-2 border-black"

    const [activity ,startCheck,stopCheck] = useTimeOut(1000 * 60 * 2);

    // @ts-ignore
    const {updateStartActivity,updateStopActivity} = useContext(ActivityContext);

    useEffect(() => {
        updateStartActivity(startCheck)
        updateStopActivity(stopCheck);
    },[]);

    const pathname = usePathname();

    const activeLink = (r:string) : string => {
        return pathname === r ? "bg-red-100" : "bg-gray-100";
    }

    return (
        <body className={inter.className} onMouseMove={(e) => activity()} onKeyDown={() => activity()}>
        <div className="flex flex-row m-2 pb-0">
            <div className={LEFT_SIDE}>
                <h1 className="mb-5">Sidebar</h1>
                <div className="flex flex-col space-y-2">
                    <MyLink path="/" title='Root' activeLink={activeLink('/')}/>
                    <MyLink path="/home" title='Home' activeLink={activeLink('/home')}/>
                    <MyLink path="/page1" title="Page 1" activeLink={activeLink('/page1')}/>
                    <MyLink path="/page2" title="Page 2" activeLink={activeLink('/page2')}/>
                    <MyLink path="/page3" title="Page 3" activeLink={activeLink('/page3')}/>
                    <SignedOut>
                        <MyLink path="/sign-in" title="Sign In" activeLink={activeLink('/sign-in')}/>
                    </SignedOut>
                    <SignedIn>
                        <MyLink path="/sign-out" title="Sign Out" activeLink={activeLink('/sign-out')}/>
                    </SignedIn>
                </div>
            </div>
            <div className={RIGHT_SIDE}>
                {children}
            </div>
        </div>
        </body>
    )
}