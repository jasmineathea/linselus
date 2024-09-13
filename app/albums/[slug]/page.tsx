import { client, urlFor } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import { notFound } from "next/navigation";

const ALBUM_BY_SLUG_QUERY = defineQuery(`*[
  _type == "album" && slug.current == $slug
][0]{
  _id, 
  name, 
  date,
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

// formatert dato
const formatDate = (datetime: string) => {
  const date = new Date(datetime);
  return date.toLocaleDateString('no-NO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

export default async function AlbumPage({ params }: AlbumPageProps) {
  const { slug } = params;

  const album = await client.fetch(ALBUM_BY_SLUG_QUERY, { slug });
  console.log("Fetched album:", album);

  if (!album) {
    notFound();
  }

  return (
    <main className="min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center text-pink-500">{album.name}</h1>
      <p className="text-center text-sm text-stone-500">{formatDate(album.date)}</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {album.gallery?.map((image: any) => (
          <div key={image.asset._id}>
            <img
              src={urlFor(image).url()}
              alt={album.name}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
