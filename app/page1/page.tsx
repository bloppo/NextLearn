'use client'

import SignatureCanvas from 'react-signature-canvas';
import {useRef,useEffect, useState} from 'react';
import {Button} from "@/components/vi/button";

export default function Page(){

    const sigCanvasRef = useRef(null);

    useEffect(() => {
        const sig = localStorage.getItem('signature');
        // @ts-ignore
        sigCanvasRef.current?.fromDataURL(sig);
    },[])

    const clear = () => {
            // @ts-ignore
        sigCanvasRef.current?.clear();
    }

    const save = () => {
        console.log('save');
        if(sigCanvasRef.current){
            // @ts-ignore
            const canvas = sigCanvasRef.current.getTrimmedCanvas();
            const sig = canvas.toDataURL();
            localStorage.setItem('signature',sig)
        }
    }

    //            ref={sigCanvas}
    //            width={500}
    //            height={200}
    // @ts-ignore

    // @ts-ignore
    return <div className="text-black h-full flex flex-col space-y-5 items-center justify-center">
        <h1 className="text-2xl font-bold">Signature</h1>
        <SignatureCanvas
            ref={sigCanvasRef}
            minWidth={1}
            maxWidth={1}
            penColor='black'
            canvasProps={{className:'sigCanvas border-[5px] border-black bg-white'}}
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