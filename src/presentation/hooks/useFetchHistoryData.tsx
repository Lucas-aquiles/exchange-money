import {useState, useEffect} from 'react';

interface ExchangeRateOne {
  venta: number;
  fecha: string;
}

export const useFetchHistoryData = (url: string, change: boolean) => {
  const [data, setData] = useState<ExchangeRateOne[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null); // Limpiar el estado de error antes de realizar la solicitud
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const json = await response.json();
        const selectLastArray = json.slice(-30);
        const cleanedData: ExchangeRateOne[] = selectLastArray.map(
          ({venta, fecha}: {fecha: string; venta: number}) => ({
            venta,
            fecha,
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
