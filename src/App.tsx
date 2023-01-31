import { Card } from './components/Card';
import './styles/main.css';
import axios from "axios";
import { useEffect, useState } from 'react';

export function App() {
  const [url, setUrl] = useState("https://gateway.marvel.com/v1/public/comics?ts=1&apikey=65c5c74fc8314169844d83bc3e058609&hash=785a7a343970e65e1e745bbb2be3a3c5")
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
      <span className="text-6xl text-[#e62429] font-black mt-15">Brisa Comics</span>
      <h1 className="text-4xl text-white font-black mt-20">
        Seu Quadrinho <span className="text-[#e62429]">Marvel</span> está aqui.
      </h1>

      {
        (!item) ? <p className="text-6xl text-[#e62429] font-black">Carregando Quadrinhos...</p> : <Card data={item} />
      }

    </div>
  )
}
