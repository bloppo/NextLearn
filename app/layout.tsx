'use client'

//import type { Metadata } from "next";
import { ClerkProvider , SignedIn, SignedOut} from '@clerk/nextjs';
import {usePathname} from "next/navigation";
import MyLink from "@/components/MyLink"
import { Inter } from "next/font/google";
import "./globals.css";
import useTimeOut from "@/components/useTimeOut";
import {useContext} from "react";
import {ActivityContext, ActivityProvider} from "@/components/ActivityProvider";
import {QueryClientProvider} from "@tanstack/react-query";

import MainLayout from "@/app/mainLayout";
import queryClient from "@/data/queryClient";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {

    return (
<ClerkProvider>
    <ActivityProvider>
        <QueryClientProvider client={queryClient}>
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Learning</title>
        </head>
        <MainLayout>{children}</MainLayout>
        </html>
        </QueryClientProvider>
    </ActivityProvider>
</ClerkProvider>
);
}
