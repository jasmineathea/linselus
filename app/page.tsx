import Image from 'next/image';
import Link from "next/link";
import { Footer } from './components/footer'

import { defineQuery } from "next-sanity";
import { client } from "@/sanity/lib//client";

const options = { next: { revalidate: 60 } };

// hente ut album fra Sanity
const ALBUM_QUERY = defineQuery(`*[
  _type == "album"
]{
  _id, 
  name, 
  slug, 
  date
} | order(date desc)`);

export default async function Home() {
  const albums = await client.fetch(ALBUM_QUERY, {}, options);
  console.log("Fetched albums:", albums); // Se i terminalen hvilke fotoalbum som lastes inn

  return (
    <main className="flex min-h-screen flex-col items-center h-full gap-10 pt-10 px-4 md:px-24 pb-24 w-full">
    <Image src="/images/logo.png" alt="#linselus" width={400} height={300} priority />
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-4 gap-y-3 max-w-2xl">
      <h3 className="text-xl font-bold text-center text-stone-300 col-span-1 sm:col-span-4">
        Finn et fotoalbum:
      </h3>
        {/* Generere lenker dynamisk fra Sanity */}
        {albums.map((album: any) => (
        <Link key={album._id} href={`/albums/${album.slug.current}`} className="font-medium text-center text-stone-400 hover:underline hover:text-pink-200">
          {`/${album.slug.current}`}
        </Link>
      ))}
    </div>
    <div className="flex flex-col items-center p-5 m-5 bg-stone-800 rounded-md max-w-full w-full sm:max-w-2xl">
      <h3 className="text-xl font-bold text-center text-pink-400">
        The star of the show 💖
      </h3>
      <div className="flex flex-col sm:flex-row items-center">
        <Image src="/images/cam.png" alt="kamera" width={300} height={200} layout="intrinsic" />
        <div className="text-base text-pink-300 text-center pb-3 sm:pb-0 sm:px-2">
          <p className="mb-4">Fujifilm Finepix A204 fra 2002. &quot;Kjøpt&#39;n på Tise&quot;, som Mina ville sagt :)</p>
          <p>Dersom du tilfeldigvis selger et fungerende xd-minnekort til Fujifilm eller Olympus, gi meg en lyd asap 😭</p>
        </div>
      </div> 
    </div>
    <div className="flex flex-col items-center p-5 m-5 bg-stone-800 rounded-md max-w-full w-full sm:max-w-2xl">
      <h3 className="text-xl font-bold text-center text-orange-300">
        Bak kameraet 😎
      </h3>
      <div className="flex flex-col sm:flex-row items-center">
        <Image src="/images/jasmine.png" alt="jasmine" width={300} height={200} layout="intrinsic" />
        <p className="text-base text-orange-200 text-center pb-3 sm:pb-0 sm:px-2">
        Hei og velkommen! 👋🏽 Jeg heter Jasmine og studerer datateknologi på UiB og økad på NHH. Jeg liker å være kreativ, trene, lese bøker, hekle, sy, og spille Sims 2 når jeg har tid (hehe). Her har jeg samlet to av interessene mine: programmering + ta bilder
        </p>
      </div>
    </div>
    <Footer />
    </main>
  );
}
