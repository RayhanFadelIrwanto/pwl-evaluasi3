import Link from 'next/link';

export default function NewsCard({ data }) {
  const title = data.title;
  const imageUrl = data.urlToImage;
  const slug = encodeURIComponent(title.slice(0, 30));

  return (
    <Link href={`/berita/${slug}`}>
      <div className="card border p-3 rounded shadow hover:shadow-lg transition">
        <img
          src={imageUrl}
          alt={`Gambar untuk ${title}`}
          className="w-full h-48 object-cover mb-2"
        />
        <h2 className="text-xl font-semibold mt-2">
          {title.length > 100 ? title.slice(0, 100) + '...' : title}
        </h2>
        <p className="text-sm text-gray-500">
          {new Date(data.publishedAt).toLocaleString()}
        </p>
      </div>
    </Link>
  );
}
