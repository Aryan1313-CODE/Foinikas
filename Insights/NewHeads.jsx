import React, { useEffect, useState } from 'react';

const NewHeads = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  const apiKey = "cc4a2cdc16ac2f084a4f4dfe90d1f160"; // Ideally move to .env

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
           `https://gnews.io/api/v4/search?q=finance&lang=en&token=${apiKey}`
        );

        const data = await response.json();

        // if (data.status !== "ok") {
        //   throw new Error(data.message || "Failed to fetch news.");
        // }

        setNews(data.articles || []);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [apiKey]);

  if (loading) return <p className="text-sm text-gray-400">Loading market news...</p>;
  if (error) return <p className="text-red-400 text-sm">{error}</p>;
  if (!news.length) return <p className="text-sm text-gray-400">No news articles found.</p>;

  return (
    <div className="h-[80%] w-full overflow-y-scroll pr-2 hidden md:block">
      <ul className="space-y-4 py-[12px]">
        {news.map((article, index) => (
          <li key={index}
          style={{transition:"0.5s"}}
          className="text-white py-[12px] px-[25px] rounded-[24px] hover:bg-[#c8bdf45c]">
            <p className="text-[1rem] font-medium">{article.title}</p>
            <div className="text-sm text-purple-400">
              {article.source.name} &bull; {new Date(article.publishedAt).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewHeads;
