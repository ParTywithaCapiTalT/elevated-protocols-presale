import React, { useState } from 'react';
import { usePresalePurchase } from '../hooks/usePresalePurchase';
import type { Token } from '../config/tokens';

interface PurchaseModalProps {
  token: Token | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PurchaseModal: React.FC<PurchaseModalProps> = ({ token, isOpen, onClose }) => {
  const [amount, setAmount] = useState('');
  const [gasEstimate, setGasEstimate] = useState<string>('0');
  const { purchaseTokens, estimateGas, isLoading, error, txHash } = usePresalePurchase();
  const [txStatus, setTxStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');

  if (!isOpen || !token) return null;

  const handleAmountChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value);

    if (value && parseFloat(value) > 0) {
      const gas = await estimateGas(value);
      if (gas) {
        setGasEstimate((Number(gas) / 1e9).toFixed(4));
      }
    }
  };

  const handlePurchase = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    setTxStatus('pending');
    const result = await purchaseTokens(token.symbol, amount);

    if (result?.success) {
      setTxStatus('success');
      setAmount('');
      setTimeout(() => {
        onClose();
        setTxStatus('idle');
      }, 3000);
    } else {
      setTxStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Purchase {token.symbol}</h2>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Transaction Status Messages */}
        {txStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
            <p className="text-green-300 font-semibold">✓ Purchase successful!</p>
            {txHash && (
              <p className="text-xs text-green-300/80 mt-2 break-all">
                TX: {txHash.slice(0, 10)}...{txHash.slice(-10)}
              </p>
            )}
          </div>
        )}

        {txStatus === 'error' && error && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
            <p className="text-red-300 font-semibold">✗ Purchase failed</p>
            <p className="text-xs text-red-300/80 mt-2">{error}</p>
          </div>
        )}

        {/* Amount Input */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Amount to Purchase
            </label>
            <div className="relative">
              <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
                placeholder="0.00"
                disabled={isLoading || txStatus === 'pending'}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 disabled:opacity-50"
              />
              <span className="absolute right-4 top-3 text-white/60 text-sm">{token.symbol}</span>
            </div>
          </div>

          {/* Gas Estimate */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-white/60">Estimated Gas</span>
              <span className="text-sm font-semibold text-white">
                {gasEstimate} Gwei
              </span>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-lg p-3">
            <p className="text-xs text-white/70">
              <span className="font-semibold text-orange-300">ℹ️ Note:</span> Tokens will be staked in the Summit Vault for 30 days with automatic protocol allocation.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={onClose}
              disabled={isLoading || txStatus === 'pending'}
              className="flex-1 py-3 px-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={handlePurchase}
              disabled={isLoading || txStatus === 'pending' || !amount}
              className="flex-1 py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/50 disabled:shadow-none flex items-center justify-center gap-2"
            >
              {isLoading || txStatus === 'pending' ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Processing...
                </>
              ) : (
                'Confirm Purchase'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
