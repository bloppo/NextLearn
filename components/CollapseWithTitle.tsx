'use client'

import {ReactNode} from "react";
import {Collapse} from 'react-collapse';

const CollapseWithTitle = ({toggleClosed,closed,children,title}:{toggleClosed:()=>void,closed:boolean,children:ReactNode,title:string | null}) => {

    const plus =  String.fromCodePoint(0x2795)
    const minus =  String.fromCodePoint(0x2796);

    return (
        <div className="flex flex-col">

            <div className="flex h-10 flex-row bg-blue-300 mb-2 z-10">
                <button className="text-center p-2 hover:bg-blue-500 mr-5" type='button' onClick={toggleClosed}><span className="text-xl">{closed ? plus : minus}</span></button>
                <div className="flex w-full justify-start items-center z-20">
                    <h1 className="font-bold">{title !== null ? title : ""}</h1>
                </div>
            </div>

            {/*
                <div className="relative bg-blue-300 mb-2 z-10">
                <button className="text-center p-2 hover:bg-blue-500 mr-5" type='button' onClick={toggleClosed}><span
                    className="text-xl">{closed ? plus : minus}</span></button>
                <div className="inline-block z-20">
                    <h1 className="font-bold">{title !== null ? title : ""}</h1>
                </div>
            </div>
*/}
            <Collapse isOpened={!closed}>
                {children}
            </Collapse>
        </div>
    )

}

export default CollapseWithTitle
