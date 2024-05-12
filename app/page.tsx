import Image from 'next/image';
import { Footer } from './components/footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center h-full gap-10 pt-10 px-4 md:px-24 pb-24 w-full">
    <Image src="/images/logo.png" alt="#linselus" width={400} height={300} priority />
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-4 gap-y-3 max-w-2xl">
      <h3 className="text-xl font-bold text-center text-stone-300 col-span-1 sm:col-span-4">
        Finn et fotoalbum:
      </h3>
      <a href="#" className="font-medium text-center text-stone-400 hover:underline hover:text-pink-200">/botfest-v24</a>
      <a href="#" className="font-medium text-center text-stone-400 hover:underline hover:text-pink-200">/bcm-24</a>
      <a href="#" className="font-medium text-center text-stone-400 hover:underline hover:text-pink-200">/sofie-bday</a>
      <a href="#" className="font-medium text-center text-stone-400 hover:underline hover:text-pink-200">/stavanger-24</a>
      <a href="#" className="font-medium text-center text-stone-400 hover:underline hover:text-pink-200">/bday-24</a>
      <a href="#" className="font-medium text-center text-stone-400 hover:underline hover:text-pink-200">/cheer-af-v24</a>
      <a href="#" className="font-medium text-center text-stone-400 hover:underline hover:text-pink-200">/østen</a>
      <a href="#" className="font-medium text-center text-stone-400 hover:underline hover:text-pink-200">/vinterball-24</a>
    </div>
    <div className="flex flex-col items-center p-5 m-5 bg-stone-800 rounded-md max-w-full w-full sm:max-w-2xl">
      <h3 className="text-xl font-bold text-center text-pink-400">
        The star of the show 💖
      </h3>
      <div className="flex flex-col sm:flex-row items-center">
        <Image src="/images/cam.png" alt="kamera" width={300} height={200} layout="intrinsic" />
        <p className="text-base text-pink-300 text-center pb-3 sm:pb-0 sm:px-2">
          Fujifilm Finepix A204 fra 2002. &quot;Kjøpt&#39;n på Tise&quot;, som Mina ville sagt :)
        </p>
      </div> 
    </div>
    <div className="flex flex-col items-center p-5 m-5 bg-stone-800 rounded-md max-w-full w-full sm:max-w-2xl">
      <h3 className="text-xl font-bold text-center text-orange-300">
        Bak kameraet ✌🏽
      </h3>
      <div className="flex flex-col sm:flex-row items-center">
        <Image src="/images/jasmine.png" alt="jasmine" width={300} height={200} layout="intrinsic" />
        <p className="text-base text-orange-200 text-center pb-3 sm:pb-0 sm:px-2">
          Jasmine, 24 år gammel. Studerer informatikk på UiB og økad på NHH. Besøkte NASA i 2023 og kommer aldri til å slutte å snakke om det. Liker å være kreativ, trene, lese bøker, hekle, sy, og spille Sims 2 når jeg har tid (hehe). Her har jeg samlet to av interessene mine: programmering + ta bilder 🤠
        </p>
      </div>
    </div>
    <Footer />
    </main>
  );
}
