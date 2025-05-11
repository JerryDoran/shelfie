import { useRouter } from 'expo-router';
import { useUser } from '../../hooks/use-user';
import { useEffect } from 'react';
import ThemedLoader from '../themed-loader';

export default function UserOnly({ children }) {
  const { user, authChecked } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (authChecked && !user) {
      router.replace('/login');
    }
  }, [authChecked, user]);

  if (!authChecked || !user) {
    return <ThemedLoader />;
  }

  return children;
}
