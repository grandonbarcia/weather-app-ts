import axios from 'axios';

export default async function Home() {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=dubai&appid=${process.env.NEXT_PUBLIC_API_KEY}`;
  const data = await axios.get(url);
  console.log(data);

  return <main></main>;
}
