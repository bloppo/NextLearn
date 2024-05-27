'use client'


import TestDropDownMenu from "@/components/TestDropDownMenu";

import {Button} from "@/components/vi/button";
import {SignedIn, SignedOut} from "@clerk/nextjs";
import {HamburgerMenuIcon} from '@radix-ui/react-icons';
import Image from "next/image";

import hamburger from '@/public/hamburger.svg'

export default function HomePage(){

    return <div className="text-black flex flex-row flex-wrap items-start justify-start space-x-5 overflow-y-auto">
        <div>
            <SignedIn><h1 className="font-bold">Signed In</h1></SignedIn>
            <SignedOut><h1 className="font-bold">Signed Out</h1></SignedOut>
        </div>
    <h1>Demo Menu</h1>  <TestDropDownMenu />
        <div className="leading-[0] basis-full"></div>
        <div className="mt-10 flex flex-col space-y-5 w-3/4">
            <p>
                Greetings.
            </p>
            <p>
                <h1 className="font-bold">Salt River Paddle Boarding</h1>
                Perplexity.ai generated the article. I said write a story about paddle boarding
                on the Salt river and that&apos;s what it churned out.
                <br /><br />
                I took the picture. I was on a path that looked down on the river.
                The sun was rising in the East. So good lighting, good angle, and white water action made an interesting picture.
            </p>
            <p>
                <h1 className="font-bold">Signature</h1>
                Signatures are now reliably collected without using the Signature Capture app.
            </p>
            <p>
                <h1 className="font-bold">Crisis</h1>
                Search TRFs for a date range and select a TRF to edit.
                <br /><br />
                Edit TRF is a listing of the fields that will be edited.
                <br /><br />
                The drop down menu is where you can Send an Emain, Upload a scanned TRF, or View the scanned TRF.
            </p>
            <p>
                <h1 className="font-bold">Sign Out</h1>
            </p>

            <hr className="bg-black h-1" />

            <p>
                The <Image className="inline bg-white ml-2 mr-2" src={hamburger} alt="menu icon"/> icon represents a
                drop down menu.
                Click on it to select from a menu.
            </p>
        </div>
    </div>

}