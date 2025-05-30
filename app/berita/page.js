"use client";
import { useState, useEffect } from "react";

const portals = [
  { name: "TechCrunch", source: "techcrunch" },
  { name: "The Verge", source: "the-verge" },
  { name: "Al Jazeera", source: "al-jazeera-english" },
];

async function fetchBeritaBySource(source) {
  const apiKey = "e1b550255d0e4ef7852d1f038c28571c";
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`
    );
    const data = await res.json();
    return data.articles ?? [];
  } catch (error) {
    console.error(`Gagal fetch dari ${source}:`, error);
    return [];
  }
}

export default function BeritaPage() {
  const [beritaPerPortal, setBeritaPerPortal] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function loadAll() {
      const all = await Promise.all(
        portals.map(async (portal) => {
          const berita = await fetchBeritaBySource(portal.source);
          return { name: portal.name, berita };
        })
      );
      setBeritaPerPortal(all);
    }
    loadAll();
  }, []);

  const filteredBerita = (berita) =>
    berita.filter((item) =>
      item.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-10 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
          Berita Utama Hari Ini
        </h1>

        <div className="mb-12">
          <input
            type="text"
            placeholder="Cari berita..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {beritaPerPortal.map((portal, i) => {
          const beritaTersaring = filteredBerita(portal.berita);
          return (
            <section key={i} className="mb-16">
              <h2 className="text-2xl font-semibold text-blue-600 mb-6">
                {portal.name}
              </h2>
              {beritaTersaring.length === 0 ? (
                <p className="text-sm text-gray-500">
                  Tidak ada berita yang cocok.
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {beritaTersaring.slice(0, 6).map((item, idx) => (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-200 flex flex-col"
                    >
                      {item.urlToImage && (
                        <img
                          src={item.urlToImage}
                          alt={item.title}
                          className="w-full h-48 object-cover"
                        />
                      )}
                      <div className="p-4 flex flex-col justify-between h-full">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:underline">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-700 mb-2">
                          {item.description}
                        </p>
                        <p className="text-xs text-gray-500 mt-auto">
                          {new Date(item.publishedAt).toLocaleString()}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </main>
  );
}
