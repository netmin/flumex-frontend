export type ExchangeType = 'binance' | 'bybit' | 'okx';
export type MarketType = 'spot' | 'linear';

export interface Symbol {
  symbol: string;
  baseAsset: string;
  quoteAsset: string;
  price?: string;
  volume?: string;
  change24h?: string;
  high24h?: string;
  low24h?: string;
  status: 'TRADING' | 'BREAK' | 'HALT';
}

export interface ExchangeData {
  exchange: ExchangeType;
  marketType: MarketType;
  symbols: Symbol[];
  lastUpdated: Date;
}