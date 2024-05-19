import {clerkMiddleware, createRouteMatcher} from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(['/','/home(.*)','/sign-in(.*)', '/sign-out(.*)', '/sign-up(.*)', '/initing(.*)']);

export default clerkMiddleware((auth, req) => {

    //console.log("*** "+req.nextUrl.pathname)

    if (! isPublicRoute(req)) {

        auth().protect();

    }

},{debug:true});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
