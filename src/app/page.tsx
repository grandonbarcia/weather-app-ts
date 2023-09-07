'use client';

import Image from 'next/image';
import axios from 'axios';
import { useState } from 'react';

export default function Home() {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=dubai&appid=${process.env.NEXT_PUBLIC_API_KEY}`;

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  async function fetchWeather() {
    setLoading(true);
    try {
      const data = await axios.get(url);
      console.log(data.data);
    } catch (error) {}
  }
  return (
    <main>
      <button onClick={fetchWeather}>Click Me!</button>
    </main>
  );
}
