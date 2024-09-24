import {useState, useEffect} from 'react';

interface ExchangeRate {
  compra: string;
  venta: string;
  moneda: string;
  nombre: string;
  casa: string;
}

export const useFetchExchangeData = (url: string) => {
  const [data, setData] = useState<ExchangeRate[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
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
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {data, isLoading, error};
};
