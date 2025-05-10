import { useEffect, useState } from 'react';

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/CLTowson/AnimalAdoption/refs/heads/main/src/backend/package-lock.json')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => console.error('Failed to load JSON:', err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>JSON Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
