'use client'

import {ClerkProvider} from "@clerk/nextjs";
import {ActivityProvider} from "@/components/ActivityProvider";
import {QueryClientProvider} from "@tanstack/react-query";
import queryClient from "@/data/queryClient";
import MainLayout from "@/components/MainLayout";
import {ReactNode,useEffect,useState} from "react";

//import io from 'socket.io-client';

const AllProviders = ({children}: {children:ReactNode})  => {

    type funcType = (msg:string) => void;

//    const [sendMsg,setSendMsg]  = useState(null);

/*
    useEffect(() => {

        console.log('loaded');

        const socket = io('ws://localhost:3010');

        socket.on('connect', () => {
            console.log('connected');

            socket.on('message',(data) => {
                console.log(data);
            })

            const func : funcType = (msg) => {socket.emit('message',msg)}


            //setSendMsg(func);

        });

        console.log(sendMsg);

            // @ts-ignore
        //sendMsg('lklklkll')
          //  console.log('sent message');

        return () => { socket.disconnect();}

        },[])
*/

    return (<ClerkProvider>
        <ActivityProvider>
            <QueryClientProvider client={queryClient}>
                <MainLayout>{children}</MainLayout>
            </QueryClientProvider>
        </ActivityProvider>
    </ClerkProvider>)
}

export default AllProviders;