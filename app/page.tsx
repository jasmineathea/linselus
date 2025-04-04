import Image from 'next/image';
import Link from "next/link";
import Logo from './components/logo'
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

  // Se i terminalen hvilke fotoalbum som lastes inn
  // console.log("Fetched albums:", albums);

  return (
    <main className="flex min-h-screen flex-col items-center h-full gap-10 pt-10 px-4 md:px-24 pb-24 w-full">
    <Logo />
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-4 gap-y-3 max-w-2xl">
      <h3 className="text-xl font-bold text-center text-stone-300 col-span-2 sm:col-span-4">
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
      <h3 className="text-xl font-bold text-center text-pink-300">
        I hovedrollen
      </h3>
      <div className="flex flex-col sm:flex-row items-center">
        <Image src="/images/cam.png" alt="kamera" width={300} height={200} layout="intrinsic" />
        <div className="text-base text-pink-200 text-center pb-3 sm:pb-0 sm:px-2 mb-2">
          <p className="mb-4">Fujifilm Finepix A204 fra 2002. &quot;Kjøpt&#39;n på Tise&quot;, som Mina ville sagt :)</p>
          <p> I mars 2025 tok dette flotte kameraet sitt siste bilde. Vi minnes hennes gode farger, ustabile blits og lekne ånd. Rest in peace 🥺</p>
        </div>
      </div> 
    </div>
    <div className="flex flex-col items-center p-5 m-5 bg-stone-800 rounded-md max-w-full w-full sm:max-w-2xl">
      <h3 className="text-xl font-bold text-center text-pink-400">
        Bak kameraet
      </h3>
      <div className="flex flex-col sm:flex-row items-center">
        <Image src="/images/me.png" alt="jasmine" width={300} height={200} layout="intrinsic" />
        <div className="text-base text-pink-300 text-center pb-3 sm:pb-0 sm:px-2 mb-2">
          <p className="mb-4"> Hei og velkommen 👋🏽 </p>
          <p> Jeg heter Jasmine og har en bachelorgrad i informatikk: datateknologi fra UiB. Dette var mitt aller første hobbyprosjekt, hvor jeg fikk samlet flere av interessene mine: programmering, design, og foto. Enjoy! 🎞️</p>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center p-5 m-5 bg-stone-800 rounded-md max-w-full w-full sm:max-w-2xl">
      <h3 className="text-xl font-bold text-center text-pink-500 mb-4">
        Bak nettsiden
      </h3>
      <p className="text-base text-pink-400 text-center pb-3 sm:pb-0 sm:px-2 mb-2">
        Den hellige treenighet +1 🚀: Next.js, TypeScript, Vercel og Sanity
      </p>
    </div>
    <Footer />
    </main>
  );
}
