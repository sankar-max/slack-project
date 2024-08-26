import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  isAuthenticatedNextjs,
  nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";
const isSignInPage = createRouteMatcher(["/auth"]);

export default convexAuthNextjsMiddleware((req) => {
  if (!isSignInPage(req) && !isAuthenticatedNextjs())
    return nextjsMiddlewareRedirect(req, "/auth");
  if (isSignInPage(req) && isAuthenticatedNextjs())
    return nextjsMiddlewareRedirect(req, "/");
});

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
