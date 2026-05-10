import axios from "axios";

const BASE_URL = "https://www.alphavantage.co/query";
const API_KEY = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY;


const getGlobalQuote = async (symbol) => {
    const url = `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;
    const response = await axios.get(url);
    return response.data["Global Quote"];
};

export const fetchMultipleQuotes = async (symbols = []) => {
    try {
        const results = await Promise.all(
            symbols.map((symbol) => getGlobalQuote(symbol))
        );
        return results;
    } catch (error) {
        console.error("Error fetching quotes:", error);
        throw error;
    }
};