import { Card } from './components/Card';
import './styles/main.css';

import axios from "axios";
import { useEffect, useState } from 'react';

export function App() {
  const [url, setUrl] = useState(process.env.MARVEL_ENDPOINT_KEY)
  const [item, setItem] = useState();

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url)
      setItem(res.data.data.results);
    }
    fetch();
  }, [url])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-clip-text">Quadrinho</span> está aqui.
      </h1>

      {
        (!item) ? <p>Não encontrado</p> : <Card data={item} />
      }

    </div>
  )
}
