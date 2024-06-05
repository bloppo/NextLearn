'use client'

import SignatureCanvas from 'react-signature-canvas';
import {useRef,useEffect, useState} from 'react';
import {Button} from "@/components/vi/button";

export default function Page(){

    const sigCanvasRef = useRef<SignatureCanvas>(null);

    useEffect(() => {
        const sig = localStorage.getItem('signature');
        if(sig && sigCanvasRef.current) {
            sigCanvasRef.current.fromDataURL(sig,{width:300,height:100 });
        }
    },[])

    const clear = () => {
        sigCanvasRef.current?.clear();
    }

    const save = () => {
        if(sigCanvasRef.current){
            const canvas = sigCanvasRef.current.getCanvas();
            const sig = canvas.toDataURL();
            localStorage.setItem('signature',sig)
        }
    }

    // @ts-ignore
    return <div className="text-black h-full flex flex-col space-y-5 items-center justify-center">
        <h1 className="text-2xl font-bold">Signature</h1>
        <div className="border-[5px] border-black bg-white">
            <SignatureCanvas
                ref={sigCanvasRef}
                penColor='black'
                dotSize={1}
                canvasProps={{width:300,height:100,className:'signature-canvas'}}
            />
        </div>
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