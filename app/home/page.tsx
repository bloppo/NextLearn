'use client'


import TestDropDownMenu from "@/components/TestDropDownMenu";

import {SignedIn, SignedOut} from "@clerk/nextjs";

import Image from "next/image";

import hamburger from '@/public/hamburger.svg'

export default function HomePage(){

    return <div className="text-black flex flex-col items-start justify-start space-y-5 pl-10">
        <h1 className="w-full text-center m-5 text-2xl font-bold">Welcome To The Demo</h1>
        <div className="flex flex-row justify-between space-x-10">
            <SignedIn><h1 className="font-bold">Signed In</h1></SignedIn>
            <SignedOut><h1 className="font-bold">Signed Out</h1></SignedOut>
            <h1>Demo Menu</h1>  <TestDropDownMenu/>
        </div>
        {/*<div className="leading-[0] basis-full"></div>*/}
        <div className="mt-10 flex flex-col space-y-5 w-3/4">
            <div>
                Greetings.
                <br/><br/>
                <b>Please read this page.</b>
                <br/><br/>
                This demo shows off some of the features available in todays web apps.
                <br/><br/>
                Responsive web pages means the layout changes a little depending on if the
                pages are being viewed on a cell phone vs. a tablet or desktop browser.
            </div>
            <div>
            <div className="font-bold">Salt River Paddle Boarding</div>
                Perplexity.ai generated the article. I said write a story about paddle boarding
                on the Salt river and that&apos;s what it churned out.
                <br/><br/>
                I took the picture. I was on a path that looked down on the river.
                The sun was rising in the East. So good lighting, good angle, and white water action made an interesting
                picture.
            </div>
            <div>
                <div className="font-bold">Signature</div>
                Signatures are now reliably collected without using the Signature Capture app.
            </div>
            <div>
                <div className="font-bold">Crisis</div>
                Client information is blurred out for this demo.
                <br/><br/>
                Search TRFs for a date range and select a TRF to edit.
                <br/><br/>
                Edit TRF is a listing of the fields that will be edited.
                <br/><br/>
                The drop down menu is where you can Send an Email, Upload a scanned TRF, or View the scanned TRF.
                <br/><br/>
                Click on the <b>View Scanned TRF</b> menu item to view a random scanned TRF not related to the selected
                TRF.
            </div>
            <div>
                <div className="font-bold">Sign Up</div>
                <div className="font-bold">Sign In</div>
                <div className="font-bold">Sign Out</div>
                <br/>
                Two Factor Authentication is available.
                <br/><br/>
                You need to sign up to access the Crisis features. The Crisis App will only allow ComTrans drivers to
                sign up.
                <br/><br/>
                You are automatically signed out on an activity timeout.
            </div>

            <hr className="bg-black h-1"/>

            <div>
                The <Image className="inline bg-white ml-2 mr-2 w-7 h-7 rounded-full" src={hamburger} alt="menu icon"/> icon represents a
                drop down menu.
                Click on it to select from a menu.
            </div>
        </div>
    </div>

}