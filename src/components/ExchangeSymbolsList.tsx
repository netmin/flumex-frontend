import { useEffect, useState } from 'react';
import { ExchangeType, MarketType, Symbol } from '@/types';
import { fetchExchangeData, filterSymbols } from '@/services/exchangeService';
import { Button } from './ui/button';

interface ExchangeSymbolsListProps {
  exchange: ExchangeType;
  marketType: MarketType;
  searchQuery: string;
}

export default function ExchangeSymbolsList({
  exchange,
  marketType,
  searchQuery,
}: ExchangeSymbolsListProps) {
  const [symbols, setSymbols] = useState<Symbol[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchExchangeData(exchange, marketType);
        setSymbols(data.symbols);
      } catch (err) {
        setError('Failed to load exchange data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [exchange, marketType]);

  const filteredSymbols = filterSymbols(symbols, searchQuery);

  if (loading) {
    return (
      <div className="py-4 text-center">
        <div className="inline-block w-6 h-6 border-2 border-primary-blue/50 border-t-accent-green rounded-full animate-spin"></div>
        <p className="mt-2 text-sm text-muted-foreground">Loading symbols...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-4 text-center">
        <p className="text-destructive mb-2">{error}</p>
        <Button 
          variant="outline" 
          onClick={() => window.location.reload()}
          className="border-primary-blue/20 hover:border-accent-green hover:bg-accent-green/10"
        >
          Retry
        </Button>
      </div>
    );
  }

  if (filteredSymbols.length === 0) {
    return (
      <div className="py-4 text-center text-muted-foreground">
        <p>No symbols found matching "{searchQuery}"</p>
      </div>
    );
  }

  // For sidebar view, we'll use a more compact list format
  return (
    <div className="overflow-y-auto max-h-[400px] -mx-2">
      <div className="space-y-1">
        {filteredSymbols.map((symbol) => (
          <div 
            key={symbol.symbol} 
            className="p-2 rounded-md hover:bg-primary-blue/10 cursor-pointer transition-colors"
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium text-sm">{symbol.symbol}</div>
                <div className="text-xs text-muted-foreground">
                  {symbol.baseAsset}/{symbol.quoteAsset}
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono text-sm">{symbol.price}</div>
                <div className={`text-xs ${symbol.change24h?.startsWith('+') ? 'text-accent-green' : symbol.change24h?.startsWith('-') ? 'text-destructive' : 'text-muted-foreground'}`}>
                  {symbol.change24h}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
