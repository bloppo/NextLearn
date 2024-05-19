'use client'

import { SignIn } from "@clerk/nextjs";

export default function Page() {

    // @ts-ignore
    return <div className="h-full flex justify-center items-center">
        <div>
            <SignIn routing='virtual' forceRedirectUrl='/initing/start'/>
        </div>
    </div>
}
