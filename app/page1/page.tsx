'use client'

import SignatureCanvas from 'react-signature-canvas';
import {useRef} from 'react';
import {Button} from "@/components/ui/button";
//import useTimeOut from "@/components/useTimeOut";

export default function Page(){

    //useTimeOut(10000);

    const sigCanvas = useRef({});

    const clear = () => {
        //sigCanvas.current.clear();
    }

    const save = () => {
        console.log('save');
    }

    //            ref={sigCanvas}
    //            width={500}
    //            height={200}
    // @ts-ignore
    return <div className="text-white h-full flex flex-col space-y-5 items-center justify-center">
        <h1>Signature</h1>
        <SignatureCanvas
            penColor='black'
            canvasProps={{className:'sigCanvas border-[10px] border-green-300 bg-white'}}
        />
        <div className="flex flex-row space-x-5">
            <Button className="text-white" onClick={() => clear()}>
                Clear
            </Button>
            <Button className="text-white" onClick={() => save()}>
                Save
            </Button>
        </div>
    </div>
}