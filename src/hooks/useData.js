import { useEffect, useState, useContext } from 'react';
import TokenContext from '../context/TokenContext';
import getData from '../services/getData';

export function useData(props) {
  const { token } = useContext(TokenContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    getData({ token }).then((data) => {
      setData(data);
      setLoading(false);
    });
  }, [token, props]);

  return { loading, data };
}
