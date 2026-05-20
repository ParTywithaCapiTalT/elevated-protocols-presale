/**
 * Web3 Initialization for Presale Landing Page
 * Vite-based configuration with WalletConnect Project ID
 */

// Safe environment variable retrieval for Vite
const getProjectId = (): string => {
  // Vite uses import.meta.env for environment variables
  // Variables must start with VITE_ prefix
  const projectId = 
    (import.meta.env.VITE_PROJECT_ID as string) ||
    (import.meta.env.VITE_WALLET_CONNECT_ID as string) ||
    'e6e65b93cf1c8c5ce8a07b2e90917d7b'; // Official WalletConnect Project ID for presale
  
  // Log warning if using fallback
  if (!import.meta.env.VITE_PROJECT_ID && !import.meta.env.VITE_WALLET_CONNECT_ID) {
    console.warn(
      '[Web3 Init - Presale] Using fallback WalletConnect Project ID. ' +
      'For production, set VITE_PROJECT_ID or VITE_WALLET_CONNECT_ID in Vercel environment variables.'
    );
  }
  
  return projectId;
};

// Initialize Web3 on client side
export const initializeWeb3 = () => {
  try {
    const projectId = getProjectId();
    console.log('[Web3 Init - Presale] Project ID loaded:', projectId.substring(0, 8) + '...');
    
    // Store in window for potential use
    // @ts-ignore
    window.__WALLETCONNECT_PROJECT_ID__ = projectId;
    
    console.log('[Web3 Init - Presale] Web3 initialization successful');
    return projectId;
  } catch (error) {
    console.error('[Web3 Init - Presale] Error during Web3 initialization:', error);
    // Return fallback ID
    return 'e6e65b93cf1c8c5ce8a07b2e90917d7b';
  }
};

// Auto-initialize on module load
initializeWeb3();
