'use client';

import { useState } from 'react';
import { useWalletClient, usePublicClient, useAccount } from 'wagmi';
import { getContract, parseEther } from 'viem';
import { SUMIT_ABI, SUMMIT_VAULT_ABI, CONTRACT_ADDRESSES } from '../config/contracts';

export function usePresalePurchase() {
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();
  const { address: userAddress } = useAccount();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [txHash, setTxHash] = useState<string | null>(null);

  const purchaseTokens = async (tokenSymbol: string, amount: string) => {
    if (!walletClient || !publicClient || !userAddress) {
      setError('Wallet not connected');
      return;
    }

    setIsLoading(true);
    setError(null);
    setTxHash(null);

    try {
      const addresses = CONTRACT_ADDRESSES.baseSepolia;
      const amountInWei = parseEther(amount);
      const vaultAddress = addresses.SummitVault as `0x${string}`;

      const vaultContract = getContract({
        address: vaultAddress,
        abi: SUMMIT_VAULT_ABI,
        client: {
          wallet: walletClient,
        },
      });

      const tx = await vaultContract.write.stake([amountInWei, BigInt(30 * 24 * 60 * 60)]);
      setTxHash(tx);

      const receipt = await publicClient.waitForTransactionReceipt({ hash: tx });

      if (receipt.status === 'success') {
        return {
          success: true,
          txHash: tx,
          message: `Successfully purchased ${amount} ${tokenSymbol}!`,
        };
      } else {
        throw new Error('Transaction failed');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      return {
        success: false,
        message: `Purchase failed: ${errorMessage}`,
      };
    } finally {
      setIsLoading(false);
    }
  };

  const getTokenBalance = async (tokenSymbol: string) => {
    if (!publicClient || !userAddress) return null;

    try {
      const addresses = CONTRACT_ADDRESSES.baseSepolia;
      const tokenAddress = addresses[tokenSymbol as keyof typeof addresses] as `0x${string}`;

      const contract = getContract({
        address: tokenAddress,
        abi: SUMIT_ABI,
        client: {
          public: publicClient,
        },
      });

      const balance = await contract.read.balanceOf([userAddress]);
      return balance;
    } catch (err) {
      console.error('Error fetching balance:', err);
      return null;
    }
  };

  const estimateGas = async (amount: string) => {
    if (!publicClient || !userAddress) return null;

    try {
      const addresses = CONTRACT_ADDRESSES.baseSepolia;
      const vaultAddress = addresses.SummitVault as `0x${string}`;

      const gasEstimate = await publicClient.estimateGas({
        account: userAddress,
        to: vaultAddress,
        value: parseEther(amount),
      });

      return gasEstimate;
    } catch (err) {
      console.error('Error estimating gas:', err);
      return null;
    }
  };

  return {
    purchaseTokens,
    getTokenBalance,
    estimateGas,
    isLoading,
    error,
    txHash,
  };
}
