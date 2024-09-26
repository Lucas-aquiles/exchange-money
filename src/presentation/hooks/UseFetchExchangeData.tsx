import {useState, useEffect} from 'react';

interface ExchangeRate {
  compra: string;
  venta: string;
  moneda: string;
  nombre: string;
  casa: string;
}

export const useFetchExchangeData = (url: string, change: boolean) => {
  const [data, setData] = useState<ExchangeRate[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const json = await response.json();
        const cleanedData: ExchangeRate[] = json.map(
          ({
            compra,
            venta,
            moneda,
            nombre,
            casa,
          }: {
            compra: string;
            venta: string;
            moneda: string;
            nombre: string;
            casa: string;
          }) => ({
            compra,
            venta,
            moneda,
            nombre,
            casa,
          }),
        );

        setData(cleanedData);
      } catch (err) {
        setError('Error fetching data. Please check your connection.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, change]);

  return {data, isLoading, error};
};
