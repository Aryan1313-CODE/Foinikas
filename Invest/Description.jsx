import React from "react";

const DisclaimerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="
      absolute left-0 top-full mt-3 z-20
      w-full max-w-4xl
    ">
      <div className="
        bg-white rounded-2xl shadow-2xl border
        max-h-[60vh] overflow-y-auto
      ">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-5 py-3
          flex items-center justify-between rounded-t-2xl">
          <h3 className="font-semibold text-[#7b1e1e] text-sm">
            Legal Disclaimer & Important Notices
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-lg"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="px-5 py-4 text-sm text-gray-700 leading-relaxed space-y-4">
          <p>
            Foinikas Wealth Management provides the information on this website
            for general informational purposes only. By accessing this website,
            you agree to be bound by the terms and conditions set forth below.
          </p>

          <h4 className="font-semibold">1. No Investment Advice</h4>
          <p>
            The information, analyses, opinions, and recommendations contained
            on this website do not constitute investment advice, a
            recommendation, an offer, or a solicitation to buy or sell any
            financial instruments.
          </p>

          <h4 className="font-semibold">2. Performance Disclosures</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Calculated with hindsight benefit</li>
            <li>Does not reflect actual trading costs or market impact</li>
            <li>Would be lower if fees and expenses were deducted</li>
            <li>No guarantee of future results</li>
          </ul>

          <h4 className="font-semibold">3. Risk Warning</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Capital loss</li>
            <li>Market volatility</li>
            <li>Liquidity risk</li>
          </ul>

          <p className="text-xs text-gray-500 pt-3 border-t">
            Last Updated: January 27, 2026 · compliance@foinikaswealth.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
