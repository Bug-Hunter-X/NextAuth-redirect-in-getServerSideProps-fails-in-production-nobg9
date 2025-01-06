# NextAuth redirect in getServerSideProps fails in production

This repository demonstrates a bug where using `unstable_getServerSession` within `getServerSideProps` and redirecting to a NextAuth sign-in route works in development but fails silently in production. The user is not redirected to the login page as expected. 

## Problem Description

The `about.js` file contains a Next.js page that requires authentication.  `getServerSideProps` fetches the session using `unstable_getServerSession`. If no session is found, the code attempts to redirect the user to the NextAuth sign-in page. This works correctly in the development environment, but fails in production; the user remains on the `/about` page without seeing a login prompt.  There's no error in the console or logs. 

## Solution

The solution in `aboutSolution.js` addresses the issue by ensuring that the redirect URL in `getServerSideProps` correctly points to the login route that NextAuth uses. The solution includes error handling for improved robustness.  It also avoids using the unstable `unstable_getServerSession` method in favour of the recommended `getServerSession` method.