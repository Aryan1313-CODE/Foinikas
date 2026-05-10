import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Bg1 from '../../assets/bg1.jpg';
import NewsGraphic from '../../assets/newGraphic.jpg';

const News = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const apiKey = "cc4a2cdc16ac2f084a4f4dfe90d1f160";
    const location = useLocation();

    const fetchNews = async () => {
        setLoading(true);
        try {
            const res = await fetch(
                `https://gnews.io/api/v4/search?q=finance&lang=en&token=${apiKey}`
            );
            const data = await res.json();
            // Ensure we're using the correct format
            setArticles(data.articles || []);
        } catch (err) {
            console.error('Error fetching news:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
            fetchNews();
        }
    }, []);

    return (
        <div
            className="h-auto md:min-h-screen w-full bg-cover bg-center py-10 px-6"
            style={{ backgroundImage: `url("${Bg1}")` }}
        >
            <div className="rounded-xl p-6 w-[90%] mx-auto mt-[50px]">
                <h1 className="titleText text-center mb-[20px]">
                    Global Stock Market & Finance News
                </h1>

                {!isLoggedIn ? (
                    <div className='w-full flex justify-center items-center'>
                        <p className="flex justify-around items-center flex-col gap-[15px] paragraph text-center bg-[rgba(255,255,255,0.3)] w-[50%] py-[15px] rounded-[12px]"
                            style={{ boxShadow: "2px 5px 15px #000" }}
                        >
                            Please login to view the news.
                            <Link to={"/login"} state={{ from: location }} replace className='primary-btn flex justify-center items-center'>Login</Link>
                        </p>
                    </div>
                ) : loading ? (
                    <p className="text-center text-gray-600 text-lg">Loading news...</p>
                ) : articles.length === 0 ? (
                    <p className="text-center text-red-500">No articles found.</p>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articles.map((article, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <img
                                    src={article.image || NewsGraphic}
                                    onError={(e) => { e.target.src = NewsGraphic }}
                                    loading="lazy"
                                    alt="news"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="font-semibold text-lg mb-2 text-gray-800">
                                        {article.title}
                                    </h2>
                                    <p className="text-sm text-gray-600 mb-2">
                                        {article.description?.slice(0, 100)}...
                                    </p>
                                    <div className="text-xs text-gray-400 mb-1">
                                        {article.source?.name} • {new Date(article.publishedAt).toLocaleDateString()}
                                    </div>
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline text-sm"
                                    >
                                        Read More →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default News;
