import { client, urlFor } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import { notFound } from "next/navigation";

import Image from 'next/image';
import Link from "next/link";
import { Footer } from '../../components/footer'

const ALBUM_BY_SLUG_QUERY = defineQuery(`*[
  _type == "album" && slug.current == $slug
][0]{
  _id, 
  name, 
  date,
  camera,
  gallery[] {
    asset -> {
      _id
    }
  }
}`);

interface AlbumPageProps {
  params: {
    slug: string;
  };
}

export default async function AlbumPage({ params }: AlbumPageProps) {
  const { slug } = params;

  const album = await client.fetch(ALBUM_BY_SLUG_QUERY, { slug });
  console.log("Fetched album:", album);

  if (!album) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center h-full gap-10 pt-10 px-4 md:px-24 pb-24 w-full">
    <Link href="/">
        <Image src="/images/logo.png" alt="#linselus" width={400} height={300} priority />
    </Link>

      <div className="flex flex-col items-center p-5 m-5 bg-stone-800 rounded-md w-full max-w-4xl">
      <h3 className="mb-4 text-3xl font-bold text-center text-stone-300">{album.name} </h3>
      <p className="font-medium text-center text-stone-400 mb-2"> 📅 {album.date} </p>
      <p className="font-medium text-center text-stone-400 mb-8"> 📷 {album.camera} </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {album.gallery?.map((image: any) => (
          <div 
            key={image.asset._id} 
            className="flex justify-center items-center">
            <img
              src={urlFor(image).url()}
              alt={album.name}
              className="w-full h-auto max-w-lg"
            />
          </div>
        ))}
      </div>
      </div>
      <Link href="/" className="font-medium text-center text-stone-400 hover:underline hover:text-orange-200">
      /cd ..
      </Link>
      <Footer />
    </main>
  );
}
