import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import ExchangeSymbolsList from './components/ExchangeSymbolsList';
import { ExchangeType, MarketType } from './types';
import { Button } from './components/ui/button';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExchange, setSelectedExchange] = useState<ExchangeType>('binance');
  const [selectedMarketType, setSelectedMarketType] = useState<MarketType>('spot');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-flow bg-[length:200%_200%] animate-gradient-flow relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-flow-pattern opacity-20 pointer-events-none"></div>

      {/* Header */}
      <header className="border-b border-primary-blue/20 backdrop-blur-sm bg-background/50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/flumex-logo.svg" alt="Flumex Logo" className="w-8 h-8" />
            <h1 className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-accent-turquoise">
              Flumex
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-accent hover:text-accent-green hover:bg-accent-green/10">
              Documentation
            </Button>
            <Button variant="ghost" size="sm" className="text-accent hover:text-accent-green hover:bg-accent-green/10">
              API
            </Button>
            <Button className="bg-accent-green hover:bg-accent-green/90 text-primary-dark">
              Connect
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex h-[calc(100vh-57px)]">
        {/* Sidebar */}
        <div className={`bg-card/80 backdrop-blur-sm border-r border-primary-blue/20 transition-all duration-300 ${isSidebarOpen ? 'w-80' : 'w-0'}`}>
          {isSidebarOpen && (
            <div className="p-4 h-full flex flex-col">
              <h2 className="text-xl font-heading font-bold mb-4">Assets</h2>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-sm font-medium mb-1 block">Search</label>
                  <Input 
                    placeholder="Search symbols..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-background/50 border-primary-blue/20 focus:border-accent-green"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Exchange</label>
                  <Select value={selectedExchange} onValueChange={(value: ExchangeType) => setSelectedExchange(value)}>
                    <SelectTrigger className="bg-background/50 border-primary-blue/20">
                      <SelectValue placeholder="Select exchange" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="binance">Binance</SelectItem>
                      <SelectItem value="bybit">Bybit</SelectItem>
                      <SelectItem value="okx">OKX</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Market Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button 
                      variant={selectedMarketType === 'spot' ? 'default' : 'outline'} 
                      onClick={() => setSelectedMarketType('spot')}
                      className={selectedMarketType === 'spot' ? 'bg-primary-blue hover:bg-primary-blue/90' : 'border-primary-blue/20'}
                    >
                      Spot
                    </Button>
                    <Button 
                      variant={selectedMarketType === 'linear' ? 'default' : 'outline'} 
                      onClick={() => setSelectedMarketType('linear')}
                      className={selectedMarketType === 'linear' ? 'bg-primary-blue hover:bg-primary-blue/90' : 'border-primary-blue/20'}
                    >
                      Linear
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-auto">
                <Card className="bg-background/50 border-primary-blue/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">
                      {selectedMarketType === 'spot' ? 'Spot Markets' : 'Linear Futures'}
                    </CardTitle>
                    <CardDescription>
                      Trading pairs on {selectedExchange}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ExchangeSymbolsList 
                      exchange={selectedExchange} 
                      marketType={selectedMarketType} 
                      searchQuery={searchQuery}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>

        {/* Toggle sidebar button */}
        <button 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-card/80 backdrop-blur-sm border border-primary-blue/20 rounded-r-md p-2 text-primary-blue hover:text-accent-green transition-all z-10"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? '←' : '→'}
        </button>

        {/* Main content area */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-heading font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-accent-turquoise">
                Real-Time Market Data
              </h2>
              <p className="text-lg text-muted-foreground">
                Access comprehensive cryptocurrency exchange data with Flumex
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-card/80 backdrop-blur-sm border-primary-blue/20 hover:border-accent-green/50 transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-accent-green mr-2 animate-pulse-glow"></span>
                    Live Streaming
                  </CardTitle>
                  <CardDescription>Real-time data from multiple exchanges</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Connect to our WebSocket API for instant updates on price changes, order book modifications, and trade executions.</p>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-primary-blue/20 hover:border-accent-green/50 transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-accent-turquoise mr-2 animate-pulse-glow"></span>
                    Historical Data
                  </CardTitle>
                  <CardDescription>Comprehensive market history</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Access historical price data, volume information, and market trends to inform your trading strategies.</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-primary-blue/20 mb-8">
              <CardHeader>
                <CardTitle>Selected Market: {selectedExchange.toUpperCase()} {selectedMarketType.toUpperCase()}</CardTitle>
                <CardDescription>Current market overview and statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border border-dashed border-primary-blue/20 rounded-md">
                  <p className="text-muted-foreground">Market chart visualization will appear here</p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card/80 backdrop-blur-sm border-primary-blue/20 hover:border-accent-green/50 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">API Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Integrate our data directly into your applications</p>
                  <Button variant="outline" className="w-full border-primary-blue/20 hover:bg-primary-blue/10">
                    View Documentation
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-primary-blue/20 hover:border-accent-green/50 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">Data Export</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Download market data in various formats</p>
                  <Button variant="outline" className="w-full border-primary-blue/20 hover:bg-primary-blue/10">
                    Export Options
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-primary-blue/20 hover:border-accent-green/50 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">Custom Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Set up notifications for price movements</p>
                  <Button variant="outline" className="w-full border-primary-blue/20 hover:bg-primary-blue/10">
                    Configure Alerts
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
