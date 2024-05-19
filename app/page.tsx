'use client'

import {SignedOut,SignedIn} from '@clerk/nextjs';
import {Button} from "@/components/vi/button";

export default function RootPage(){
    return <div className="text-white h-full flex flex-col items-center justify-center">
        <div>
            <Button className="text-white bg-transparent" onClick={(e) => {console.log('click')}}>
                Yowza
            </Button>
            <h1>Wow !</h1>
        </div>
        <div>
            <SignedIn><h1>Signed In</h1></SignedIn>
            <SignedOut><h1>Signed Out</h1></SignedOut>
        </div>
    </div>

}