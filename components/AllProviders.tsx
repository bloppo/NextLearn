'use client'

import {ClerkProvider} from "@clerk/nextjs";
import {ActivityProvider} from "@/components/ActivityProvider";
import {QueryClientProvider} from "@tanstack/react-query";
import queryClient from "@/data/queryClient";
import MainLayout from "@/components/mainLayout";
import {ReactNode} from "react";

const AllProviders = ({children}: {children:ReactNode})  => {
    return (<ClerkProvider>
        <ActivityProvider>
            <QueryClientProvider client={queryClient}>
                <MainLayout>{children}</MainLayout>
            </QueryClientProvider>
        </ActivityProvider>
    </ClerkProvider>)
}

export default AllProviders;