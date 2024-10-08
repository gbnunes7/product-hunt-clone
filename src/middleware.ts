import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/newproduct(.*)"]);

export default clerkMiddleware((auth, req) => {
	if (isProtectedRoute(req)) {
		const { userId } = auth();

		if (!userId) {
			const signInUrl = new URL("/not-authorized", req.url);
			return NextResponse.redirect(signInUrl);
		}
	}

	return NextResponse.next();
});

export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		"/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
		// Always run for API routes
		"/(api|newproduct)(.*)",
	],
};
