import React, { useState, useEffect } from 'react';
import { usePresalePurchase } from '../hooks/usePresalePurchase';
import type { Token } from '../config/tokens';
import { formatEther } from 'viem';

interface TokenPurchaseCardProps {
  token: Token;
  onPurchaseClick: (token: Token) => void;
}

export const TokenPurchaseCard: React.FC<TokenPurchaseCardProps> = ({ token, onPurchaseClick }) => {
  const { getTokenBalance } = usePresalePurchase();
  const [balance, setBalance] = useState<string>('0');
  const [loadingBalance, setLoadingBalance] = useState(false);

  useEffect(() => {
    const fetchBalance = async () => {
      setLoadingBalance(true);
      try {
        const bal = await getTokenBalance(token.symbol);
        if (bal) {
          setBalance(formatEther(bal));
        }
      } catch (err) {
        console.error('Error fetching balance:', err);
      } finally {
        setLoadingBalance(false);
      }
    };

    fetchBalance();
  }, [token.symbol, getTokenBalance]);

  return (
    <div className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 overflow-hidden h-full flex flex-col">
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="absolute inset-0 opacity-20 blur-xl"
          style={{ backgroundColor: token.accent }}
        />
      </div>

      <div className="relative z-10 space-y-4 flex-1 flex flex-col">
        {/* Token Image */}
        <div className="relative h-48 rounded-lg overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
          <img
            src={token.image}
            alt={token.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Token Info */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">{token.symbol}</h3>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                token.status === 'ACTIVE'
                  ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                  : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
              }`}
            >
              {token.status}
            </span>
          </div>
          <h4 className="text-sm text-white/80">{token.name}</h4>
          <p className="text-sm text-white/60 leading-relaxed">{token.description}</p>
        </div>

        {/* Balance Display */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-3 mt-auto">
          <p className="text-xs text-white/60 mb-1">Your Balance</p>
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold text-white">
              {loadingBalance ? (
                <span className="animate-pulse">Loading...</span>
              ) : (
                `${parseFloat(balance).toFixed(4)} ${token.symbol}`
              )}
            </p>
          </div>
        </div>

        {/* Accent Line */}
        <div
          className="h-1 rounded-full opacity-50 mt-4"
          style={{ backgroundColor: token.accent }}
        />

        {/* Buy Button */}
        <button
          onClick={() => onPurchaseClick(token)}
          disabled={token.status !== 'ACTIVE'}
          className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/50 disabled:shadow-none"
          style={{
            borderColor: `${token.accent}40`,
          }}
        >
          {token.status === 'ACTIVE' ? 'Buy / Stake' : 'Coming Soon'}
        </button>
      </div>
    </div>
  );
};
