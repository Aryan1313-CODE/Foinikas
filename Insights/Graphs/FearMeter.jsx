import React, { useEffect, useState } from "react";

const FearMeter = () => {
    const [indexValue, setIndexValue] = useState(null);
    const [classification, setClassification] = useState("");
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFearGreedData = async () => {
            try {
                const response = await fetch("https://api.alternative.me/fng/?limit=30");
                const data = await response.json();
                const latestData = data.data[0];
                setIndexValue(parseInt(latestData.value));
                setClassification(latestData.value_classification);
                setHistory(data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching Fear & Greed Index:", error);
                setLoading(false);
            }
        };

        fetchFearGreedData();
    }, []);

    const angle = indexValue !== null ? (indexValue / 100) * 180 - 90 : -90;

    const getColor = (text) => {
        if (text.toLowerCase().includes("greed")) return "text-green-400";
        if (text.toLowerCase().includes("fear")) return "text-red-400";
        return "text-yellow-400";
    };

    const getLabelColor = (value) => {
        if (value >= 75) return "text-green-500";
        if (value >= 50) return "text-green-400";
        if (value >= 25) return "text-yellow-500";
        return "text-red-400";
    };

    const getHistoryValue = (daysAgo) =>
        history[daysAgo] ? parseInt(history[daysAgo].value) : null;

    const renderTicks = () => {
        const tickAngles = [0, 25, 50, 75, 100].map((val) => (val / 100) * 180 - 90);
        return tickAngles.map((tickAngle, index) => {
            const length = 10; // length of the tick
            const innerRadius = 80;
            const outerRadius = innerRadius - length;

            // Convert angle to radians
            const rad = (tickAngle * Math.PI) / 180;
            const x1 = 100 + innerRadius * Math.cos(rad);
            const y1 = 90 + innerRadius * Math.sin(rad);
            const x2 = 100 + outerRadius * Math.cos(rad);
            const y2 = 90 + outerRadius * Math.sin(rad);

            return (
                <line
                    key={index}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#ffffff"
                    strokeWidth="2"
                />
            );
        });
    };

    return (
        <div className="flex flex-col p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-purple-800 text-white w-full h-full  mx-auto shadow-xl">
            <div className="flex justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold">Fear & Greed Index</h2>
                    <p className="text-sm text-gray-300">What emotion is driving the market now?</p>
                </div>
                <div className="text-right">
                    {!loading && (
                        <div className="md:block hidden">
                            <p className="text-5xl font-bold">{indexValue}</p>
                            <p className={`text-xl font-semibold ${getColor(classification)}`}>
                                {classification.toUpperCase()}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="relative  h-[200px] ">
                    <svg viewBox="-20 0 550 100" className="w-full h-full hidden md:block">
                        {/* Gauge arcs */}
                        <path
                            d="M10 90 A90 90 0 0 1 190 90"
                            fill="none"
                            stroke="#ccc"
                            strokeWidth="15"
                        />
                        <path
                            d="M10 90 A90 90 0 0 1 190 90"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="15"
                        />
                        <defs>
                            <linearGradient id="gradient" gradientTransform="rotate(90)">
                                <stop offset="0%" stopColor="#ff4d4d" />
                                <stop offset="50%" stopColor="#f9d423" />
                                <stop offset="100%" stopColor="#4cd137" />
                            </linearGradient>
                        </defs>

                        {/* Needle */}
                        <g transform={`rotate(${angle}, 100, 90)`}>
                            <rect
                                x="98"
                                y="30"
                                width="4"
                                height="60"
                                fill="#ffffff"
                            />
                        </g>

                        {/* Center pin */}
                        <circle cx="100" cy="90" r="6" fill="#ffffff" />

                        {[0, 25, 50, 75, 100].map((value) => {
                            const angleDeg = 180 - (value / 100) * 180;
                            const angleRad = (angleDeg * Math.PI) / 180;
                            const radius = 100; // place labels just outside the arc
                            const x = 100 + radius * Math.cos(angleRad);
                            const y = 90 - radius * Math.sin(angleRad); // invert Y to fit SVG's coordinate system
                            return (
                                <text
                                    key={value}
                                    x={x}
                                    y={y}
                                    textAnchor="middle"
                                    alignmentBaseline="middle"
                                    fontSize="10"
                                    fill="#ffffff"
                                >
                                    {value}
                                </text>
                            );
                        })}

                    </svg>
                    {!loading && (
                        <div className="block md:hidden relative left-[50px] top-[20%]">
                            <p className="text-5xl font-bold">{indexValue}</p>
                            <p className={`text-xl font-semibold ${getColor(classification)}`}>
                                {classification.toUpperCase()}
                            </p>
                        </div>
                    )}
                </div>

                {/* Historical values */}
                <div className="flex flex-col gap-[20px] text-sm ">
                    <div className="flex justify-between w-40 flex-col items-end">
                        <span className={`${getLabelColor(getHistoryValue(1))} text-[18px]`}>
                            {history[1]?.value_classification} {getHistoryValue(1)}
                        </span>
                        <span className="text-gray-400 text-[12px]">Previous close</span>

                    </div>
                    <div className="flex justify-between w-40 flex-col items-end">
                        <span className={`${getLabelColor(getHistoryValue(7))} text-[18px]`}>
                            {history[7]?.value_classification} {getHistoryValue(7)}
                        </span>
                        <span className="text-gray-400 text-[12px]">1 week ago</span>

                    </div>
                    {/* <div className="flex justify-between w-40">
                        <span className="text-gray-400">1 month ago</span>
                        <span className={getLabelColor(getHistoryValue(30))}>
                            {history[30]?.value_classification} {getHistoryValue(30)}
                        </span>
                    </div>
                    <div className="flex justify-between w-40">
                        <span className="text-gray-400">1 year ago</span>
                        <span className="text-yellow-400">Neutral 52</span>
                    </div> */}
                </div>
            </div>

            <div className="text-xs text-gray-400 mt-6">
                Last updated {new Date().toLocaleDateString("en-GB")} at{" "}
                {new Date().toLocaleTimeString("en-GB")}
            </div>
        </div>
    );
};

export default FearMeter;
