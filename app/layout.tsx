
//TODO Session
//TODO TRF Listing
//TODO TRF Edit
//TODO Web Services

//import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";

import AllProviders from "@/components/AllProviders";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {

    return (
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Learning</title>

        </head>
        <AllProviders>{children}</AllProviders>
        </html>
);
}
