import { useRouter } from 'expo-router';
import { useUser } from '../../hooks/use-user';
import { useEffect } from 'react';
import ThemedLoader from '../themed-loader';

export default function GuestOnly({ children }) {
  const { user, authChecked } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (authChecked && user) {
      router.replace('/profile');
    }
  }, [authChecked, user]);

  if (!authChecked || user) {
    return <ThemedLoader />;
  }

  return children;
}
