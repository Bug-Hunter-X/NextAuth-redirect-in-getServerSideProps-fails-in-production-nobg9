```javascript
// pages/aboutSolution.js
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

export async function getServerSideProps(context) {
  try {
    const session = await getServerSession(context, authOptions);

    if (!session) {
      return {
        redirect: {
          destination: '/api/auth/signin', // Ensure correct path
          permanent: false,
        },
      };
    }

    return {
      props: { session },
    };
  } catch (error) {
    console.error('Error fetching session:', error);
    return {
      redirect: {
        destination: '/error', // Redirect to an error page
        permanent: false,
      },
    };
  }
}

export default function About({ session }) {
  return (
    <div>
      <h1>About Page</h1>
      {session && <p>Logged in as {session.user.email}</p>}
    </div>
  );
}
```