import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

export const useRedirectOnSignIn = () => {
  const router = useRouter();
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (!isSignedIn) {
      // Save the current URL to session storage
      sessionStorage.setItem('redirect_after_sign_in', window.location.pathname);
      router.push('/sign-in');
    }
  }, [isSignedIn, router]);
};
