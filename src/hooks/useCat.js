import { useEffect, useState } from 'react';
import { fetchRandomCat } from '../api/catApi';

export const useCat = () => {
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadCat = async () => {
    setLoading(true);
    setError('');

    try {
      const data = await fetchRandomCat();
      setCat(data);
    } catch {
      setError('Failed to load cat');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCat = async () => {
      setLoading(true);
      setError('');

      try {
        const data = await fetchRandomCat();
        setCat(data);
      } catch {
        setError('Failed to load cat');
      } finally {
        setLoading(false);
      }
    };

    fetchCat(); // first load
  }, []);

  return { cat, loading, error, loadCat };
};
