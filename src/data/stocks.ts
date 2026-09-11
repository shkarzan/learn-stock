export type StockSignal = "BUY" | "HOLD" | "SELL";

export interface Stock {
  symbol: string;
  companyName: string;
  currentPrice: number;
  changePercent: number;
  signal: StockSignal;
  confidence: number;
  rsi: number;
  macd: number;
  sma50: number;
  ema20: number;
  volume: string;
  tradingViewUrl: string;
}

const stock = (
  symbol: string,
  companyName: string,
  currentPrice: number,
  changePercent: number,
  signal: StockSignal,
  confidence: number,
  rsi: number,
  macd: number,
  sma50: number,
  ema20: number,
  volume: string,
): Stock => ({
  symbol,
  companyName,
  currentPrice,
  changePercent,
  signal,
  confidence,
  rsi,
  macd,
  sma50,
  ema20,
  volume,
  tradingViewUrl: `https://www.tradingview.com/chart/?symbol=NSE%3A${symbol}`,
});

export const stocks: Stock[] = [
  stock("RELIANCE", "Reliance Industries", 2845.3, 1.42, "BUY", 84, 62.4, 12.3, 2780, 2810, "2.4M"),
  stock("TCS", "Tata Consultancy Services", 3890, -0.32, "HOLD", 72, 51.8, 3.2, 3842, 3875, "1.1M"),
  stock("INFY", "Infosys", 1510, 0.81, "BUY", 79, 59.2, 7.8, 1472, 1490, "5.6M"),
  stock("HDFCBANK", "HDFC Bank", 1742, -1.12, "SELL", 81, 38.5, -9.4, 1788, 1764, "8.2M"),
  stock("ICICIBANK", "ICICI Bank", 1268.4, 0.64, "BUY", 82, 64.1, 8.7, 1218, 1245, "9.4M"),
  stock("SBIN", "State Bank of India", 812.6, -0.18, "HOLD", 70, 50.2, 1.1, 798, 806, "12.8M"),
  stock("ITC", "ITC Limited", 468.2, 0.35, "HOLD", 68, 54.7, 2.4, 459, 464, "7.1M"),
  stock("LT", "Larsen & Toubro", 3654.7, 1.08, "BUY", 86, 66.8, 18.5, 3510, 3588, "1.8M"),
  stock("AXISBANK", "Axis Bank", 1178.9, -0.76, "SELL", 77, 41.3, -5.2, 1210, 1196, "6.3M"),
  stock("BHARTIARTL", "Bharti Airtel", 1675.2, 0.92, "BUY", 83, 63.5, 14.2, 1598, 1640, "4.2M"),
  stock("MARUTI", "Maruti Suzuki India", 12450, -0.44, "HOLD", 71, 48.9, -1.8, 12380, 12422, "421K"),
  stock("SUNPHARMA", "Sun Pharmaceutical", 1812.5, 1.24, "BUY", 80, 61.7, 9.6, 1745, 1780, "2.2M"),
  stock("HCLTECH", "HCL Technologies", 1748.6, 0.28, "HOLD", 69, 53.2, 4.1, 1712, 1732, "2.9M"),
  stock("KOTAKBANK", "Kotak Mahindra Bank", 1784.3, -0.91, "SELL", 78, 39.7, -7.2, 1830, 1808, "4.8M"),
  stock("WIPRO", "Wipro", 542.8, 0.47, "BUY", 75, 57.6, 3.9, 520, 534, "6.9M"),
  stock("TITAN", "Titan Company", 3468.5, -0.25, "HOLD", 67, 49.4, 0.8, 3435, 3452, "987K"),
  stock("ASIANPAINT", "Asian Paints", 2895.4, -1.35, "SELL", 84, 35.9, -16.1, 3010, 2950, "1.4M"),
  stock("ADANIENT", "Adani Enterprises", 3124.8, 1.86, "BUY", 81, 67.2, 20.4, 2960, 3045, "3.7M"),
  stock("BAJFINANCE", "Bajaj Finance", 7215.6, -0.68, "SELL", 79, 40.5, -11.3, 7350, 7288, "1.2M"),
  stock("TATASTEEL", "Tata Steel", 156.7, 0.12, "HOLD", 66, 52.1, 0.6, 153, 155, "18.5M"),
];

export const findStock = (symbol: string) =>
  stocks.find((item) => item.symbol === symbol.toUpperCase());

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: value % 1 ? 2 : 0 }).format(value);
