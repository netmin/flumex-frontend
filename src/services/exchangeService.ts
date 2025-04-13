import { ExchangeData, ExchangeType, MarketType, Symbol } from '@/types';

// Mock data for different exchanges and market types
const mockData: Record<ExchangeType, Record<MarketType, Symbol[]>> = {
  binance: {
    spot: [
      { symbol: 'BTCUSDT', baseAsset: 'BTC', quoteAsset: 'USDT', price: '65432.10', volume: '1234.56', change24h: '+2.5%', high24h: '65800.00', low24h: '64200.00', status: 'TRADING' },
      { symbol: 'ETHUSDT', baseAsset: 'ETH', quoteAsset: 'USDT', price: '3456.78', volume: '5678.90', change24h: '+1.8%', high24h: '3500.00', low24h: '3400.00', status: 'TRADING' },
      { symbol: 'BNBUSDT', baseAsset: 'BNB', quoteAsset: 'USDT', price: '567.89', volume: '9876.54', change24h: '-0.5%', high24h: '570.00', low24h: '560.00', status: 'TRADING' },
      { symbol: 'SOLUSDT', baseAsset: 'SOL', quoteAsset: 'USDT', price: '123.45', volume: '4321.09', change24h: '+3.2%', high24h: '125.00', low24h: '120.00', status: 'TRADING' },
      { symbol: 'ADAUSDT', baseAsset: 'ADA', quoteAsset: 'USDT', price: '0.45', volume: '8765.43', change24h: '-1.2%', high24h: '0.46', low24h: '0.44', status: 'TRADING' },
      { symbol: 'DOGEUSDT', baseAsset: 'DOGE', quoteAsset: 'USDT', price: '0.12', volume: '5432.10', change24h: '+5.0%', high24h: '0.13', low24h: '0.11', status: 'TRADING' },
    ],
    linear: [
      { symbol: 'BTCUSDT_PERP', baseAsset: 'BTC', quoteAsset: 'USDT', price: '65450.20', volume: '5678.90', change24h: '+2.6%', high24h: '65900.00', low24h: '64100.00', status: 'TRADING' },
      { symbol: 'ETHUSDT_PERP', baseAsset: 'ETH', quoteAsset: 'USDT', price: '3460.78', volume: '9876.54', change24h: '+1.9%', high24h: '3510.00', low24h: '3390.00', status: 'TRADING' },
      { symbol: 'BNBUSDT_PERP', baseAsset: 'BNB', quoteAsset: 'USDT', price: '568.90', volume: '4321.09', change24h: '-0.4%', high24h: '572.00', low24h: '558.00', status: 'TRADING' },
      { symbol: 'SOLUSDT_PERP', baseAsset: 'SOL', quoteAsset: 'USDT', price: '124.56', volume: '8765.43', change24h: '+3.3%', high24h: '126.00', low24h: '119.00', status: 'TRADING' },
    ],
  },
  bybit: {
    spot: [
      { symbol: 'BTCUSDT', baseAsset: 'BTC', quoteAsset: 'USDT', price: '65430.20', volume: '2345.67', change24h: '+2.4%', high24h: '65790.00', low24h: '64210.00', status: 'TRADING' },
      { symbol: 'ETHUSDT', baseAsset: 'ETH', quoteAsset: 'USDT', price: '3455.67', volume: '6789.01', change24h: '+1.7%', high24h: '3499.00', low24h: '3401.00', status: 'TRADING' },
      { symbol: 'XRPUSDT', baseAsset: 'XRP', quoteAsset: 'USDT', price: '0.56', volume: '7654.32', change24h: '+0.8%', high24h: '0.57', low24h: '0.55', status: 'TRADING' },
      { symbol: 'DOGEUSDT', baseAsset: 'DOGE', quoteAsset: 'USDT', price: '0.13', volume: '3456.78', change24h: '+5.1%', high24h: '0.14', low24h: '0.12', status: 'TRADING' },
    ],
    linear: [
      { symbol: 'BTCUSDT', baseAsset: 'BTC', quoteAsset: 'USDT', price: '65449.30', volume: '6789.01', change24h: '+2.5%', high24h: '65899.00', low24h: '64101.00', status: 'TRADING' },
      { symbol: 'ETHUSDT', baseAsset: 'ETH', quoteAsset: 'USDT', price: '3459.67', volume: '8901.23', change24h: '+1.8%', high24h: '3509.00', low24h: '3391.00', status: 'TRADING' },
      { symbol: 'XRPUSDT', baseAsset: 'XRP', quoteAsset: 'USDT', price: '0.57', volume: '5678.90', change24h: '+0.9%', high24h: '0.58', low24h: '0.56', status: 'TRADING' },
    ],
  },
  okx: {
    spot: [
      { symbol: 'BTC-USDT', baseAsset: 'BTC', quoteAsset: 'USDT', price: '65431.30', volume: '3456.78', change24h: '+2.3%', high24h: '65795.00', low24h: '64205.00', status: 'TRADING' },
      { symbol: 'ETH-USDT', baseAsset: 'ETH', quoteAsset: 'USDT', price: '3454.56', volume: '7890.12', change24h: '+1.6%', high24h: '3498.00', low24h: '3402.00', status: 'TRADING' },
      { symbol: 'LTC-USDT', baseAsset: 'LTC', quoteAsset: 'USDT', price: '78.90', volume: '2345.67', change24h: '+0.7%', high24h: '79.50', low24h: '77.80', status: 'TRADING' },
      { symbol: 'DOT-USDT', baseAsset: 'DOT', quoteAsset: 'USDT', price: '6.78', volume: '6543.21', change24h: '-0.9%', high24h: '6.85', low24h: '6.70', status: 'TRADING' },
    ],
    linear: [
      { symbol: 'BTC-USDT-SWAP', baseAsset: 'BTC', quoteAsset: 'USDT', price: '65448.40', volume: '7890.12', change24h: '+2.4%', high24h: '65898.00', low24h: '64102.00', status: 'TRADING' },
      { symbol: 'ETH-USDT-SWAP', baseAsset: 'ETH', quoteAsset: 'USDT', price: '3458.56', volume: '9012.34', change24h: '+1.7%', high24h: '3508.00', low24h: '3392.00', status: 'TRADING' },
      { symbol: 'LTC-USDT-SWAP', baseAsset: 'LTC', quoteAsset: 'USDT', price: '79.01', volume: '3456.78', change24h: '+0.8%', high24h: '79.60', low24h: '77.70', status: 'TRADING' },
    ],
  },
};

// Function to fetch exchange data
export const fetchExchangeData = async (
  exchange: ExchangeType,
  marketType: MarketType
): Promise<ExchangeData> => {
  // In a real application, this would make an API call to the exchange
  // For this demo, we'll return mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        exchange,
        marketType,
        symbols: mockData[exchange][marketType],
        lastUpdated: new Date(),
      });
    }, 500); // Simulate network delay
  });
};

// Function to filter symbols by search query
export const filterSymbols = (symbols: Symbol[], searchQuery: string): Symbol[] => {
  if (!searchQuery) return symbols;
  
  const query = searchQuery.toLowerCase();
  return symbols.filter(
    (symbol) =>
      symbol.symbol.toLowerCase().includes(query) ||
      symbol.baseAsset.toLowerCase().includes(query) ||
      symbol.quoteAsset.toLowerCase().includes(query)
  );
};