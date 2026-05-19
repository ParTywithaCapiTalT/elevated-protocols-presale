import React, { useState } from 'react';
import { TOKEN_LIST } from '../config/tokens';
import { TokenPurchaseCard } from './TokenPurchaseCard';
import { PurchaseModal } from './PurchaseModal';
import type { Token } from '../config/tokens';

export const TokenGrid: React.FC = () => {
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePurchaseClick = (token: Token) => {
    setSelectedToken(token);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedToken(null), 300);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TOKEN_LIST.map((token) => (
          <TokenPurchaseCard
            key={token.id}
            token={token}
            onPurchaseClick={handlePurchaseClick}
          />
        ))}
      </div>

      <PurchaseModal
        token={selectedToken}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};
