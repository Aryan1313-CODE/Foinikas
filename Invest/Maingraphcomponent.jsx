import React, { useState } from "react";
import DeepViewChart from "./Graphs/Deepview/Deepview";
import ETF_returns from "./Graphs/Deepview/ETF_returns";
import Next_Horizon from "./Graphs/Deepview/Next_Horizon";
import Peakincome from "./Graphs/Deepview/Peakincome";
import Bg1 from "../../assets/bg1Flip.jpg";

const Maingraphcomponent = () => {
  const [activeTab, setActiveTab] = useState("deep");
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [stats, setStats] = useState({
    startingBalance: 0,
    endingBalance: 0,
    totalReturn: 0,
    annualizedReturn: 0,
  });

  const TABS = [
    { key: "deep", label: "DeepView", component: <DeepViewChart onStatsChange={setStats} /> },
    { key: "balanced", label: "Next_Horizon", component: <Next_Horizon onStatsChange={setStats} /> },
    { key: "growth", label: "ETF++", component: <ETF_returns onStatsChange={setStats} /> },
    { key: "conservative", label: "Peak Income", component: <Peakincome onStatsChange={setStats} /> },
  ];

  const activeGraph = TABS.find(t => t.key === activeTab)?.component;

  return (
    <div
      className="
        p-6 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-60
        rounded-2xl bg-cover bg-center bg-no-repeat
      "
      style={{ backgroundImage: `url(${Bg1})` }}
    >
      <h1 className="text-2xl font-bold text-white mb-4">
        Investment Performance Dashboard
      </h1>

      {/* Tabs */}
      <div className="grid grid-cols-2 gap-2 mb-4 sm:flex sm:flex-wrap sm:gap-2">
        {TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-full border font-medium transition
              ${
                activeTab === tab.key
                  ? "bg-[#7b1e1e] text-white border-[#7b1e1e]"
                  : "bg-white text-[#7b1e1e] border-[#7b1e1e] hover:bg-[#7b1e1e]/10"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Graph */}
      <div className="mb-4 rounded-2xl p-4 bg-white/60 backdrop-blur-md border">
        {activeGraph}
      </div>

      {/* Stats */}
      <div className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4
        bg-white rounded-xl p-4 border border-[#7b1e1e]/20
      ">
        <Stat label="Total returns" value={`${stats.totalReturn.toFixed(1)}%`} />
        <Stat label="Annualized returns" value={`${stats.annualizedReturn.toFixed(1)}%`} />
        <Stat label="Starting balance" value={`$${stats.startingBalance.toLocaleString()}`} />
        <Stat label="Ending balance" value={`$${stats.endingBalance.toLocaleString()}`} />
      </div>

      {/* Disclaimer */}
      <div className="
        mt-6 text-xs text-gray-600
        bg-white/50 backdrop-blur-sm
        border border-[#7b1e1e]/20
        rounded-xl p-3 leading-relaxed
      ">
        <p>
          <span className="font-semibold text-[#7b1e1e]">Disclaimer:</span>{" "}
          Performance figures are illustrative only. Past performance does not
          guarantee future results. See full disclaimer{" "}
          <span
            onClick={() => setShowDisclaimer(v => !v)}
            className="text-[#7b1e1e] underline cursor-pointer text-sm"
          >
            here
          </span>
        </p>

        {/* INLINE — NOT ABSOLUTE */}
        {showDisclaimer && (
  <div className="
    mt-4 bg-white rounded-2xl shadow-xl border
    max-h-[70vh] overflow-y-auto
    text-sm text-gray-700 leading-relaxed
  ">
    <div className="sticky top-0 bg-white border-b px-5 py-3
      flex items-center justify-between rounded-t-2xl">
      <h3 className="font-semibold text-[#7b1e1e]">
        Legal Disclaimer & Important Notices
      </h3>
      <button
        onClick={() => setShowDisclaimer(false)}
        className="text-gray-400 hover:text-gray-700 text-lg"
      >
        ×
      </button>
    </div>

    <div className="px-5 py-4 space-y-4">
      <p>
        Foinikas Wealth Management provides the information on this website for
        general informational purposes only. By accessing this website, you agree
        to be bound by the terms and conditions set forth below.
      </p>

      <h4 className="font-semibold">1. No Investment Advice</h4>
      <p>
        The information, analyses, opinions, and recommendations contained on
        this website do not constitute investment advice, a recommendation, an
        offer, or a solicitation to buy or sell any financial instruments. Past
        performance is not indicative of future results. Any investment decision
        should be based solely on your own independent assessment of your
        financial situation, investment objectives, risk tolerance, and
        consultation with your independent professional advisors.
      </p>

      <h4 className="font-semibold">2. Performance Disclosures</h4>
      <p>
        All performance figures – whether actual, simulated, or back-tested –
        are provided for illustrative purposes only and do not represent the
        performance of any specific client account. Back-tested and simulated
        performance has inherent limitations:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Calculated with hindsight benefit</li>
        <li>
          Does not reflect actual trading costs, liquidity constraints, or market
          impact
        </li>
        <li>
          Would be lower if management fees, transaction costs, custody fees, and
          other expenses were deducted
        </li>
        <li>No guarantee that similar results can be achieved in the future</li>
      </ul>

      <p>
        Past performance is not a reliable indicator of future results. The value
        of investments may go down as well as up, and you may not recover your
        original investment.
      </p>

      <h4 className="font-semibold">3. Risk Warning</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Capital loss</li>
        <li>Market volatility</li>
        <li>Currency exchange risk</li>
        <li>Interest rate risk</li>
        <li>Credit risk</li>
        <li>Liquidity risk</li>
        <li>Counterparty risk</li>
        <li>Regulatory and political risk</li>
      </ul>

      <p>
        Different investments carry different levels of risk, and investors
        should be aware they could lose some or all of their investment.
      </p>

      <h4 className="font-semibold">4. Hypothetical & Model Performance</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Ignore the effects of taxes, fees, and transaction costs</li>
        <li>May assume unrealistic liquidity or execution conditions</li>
        <li>Are constructed with the benefit of hindsight</li>
        <li>Cannot account for investor behavioral biases or timing</li>
      </ul>

      <h4 className="font-semibold">5. Third-Party Information</h4>
      <p>
        Any third-party content, links, or references do not constitute endorsement
        or recommendation. Foinikas Wealth Management accepts no responsibility
        for the accuracy, completeness, or suitability of external information.
      </p>

      <h4 className="font-semibold">6. Forward-Looking Statements</h4>
      <p>
        Statements regarding future performance, market trends, economic
        conditions, or investment outcomes are forward-looking and subject to
        uncertainty. Actual results may differ materially.
      </p>

      <h4 className="font-semibold">7. Regulatory Compliance</h4>
      <p>
        Foinikas Wealth Management Ltd is licenced by the Malta Financial Services
        Authority (MFSA) under the Investment Services Act (Chapter 370 of the Laws
        of Malta). This website is not intended for persons in jurisdictions where
        such distribution is restricted.
      </p>

      <h4 className="font-semibold">8. No Guarantee of Accuracy</h4>
      <p>
        While we strive for accuracy, Foinikas Wealth Management does not guarantee
        the timeliness, correctness, or completeness of information on this
        website. All content is subject to change without notice.
      </p>

      <h4 className="font-semibold">9. No Liability</h4>
      <p>
        To the maximum extent permitted by law, Foinikas Wealth Management, its
        affiliates, directors, officers, and employees shall not be liable for
        any damages arising from use of this website or reliance on its content.
      </p>

      <h4 className="font-semibold">10. Copyright & Intellectual Property</h4>
      <p>
        All content is proprietary to Foinikas Wealth Management. Reproduction,
        distribution, or use without prior written consent is prohibited.
      </p>

      <div className="text-xs text-gray-500 pt-4 border-t">
        Last Updated: January 27, 2026<br />
        Contact: compliance@foinikaswealth.com
      </div>
    </div>
  </div>
)}

      </div>
    </div>
  );
};

const Stat = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-500">{label}</p>
    <h3 className="text-lg font-semibold text-[#7b1e1e]">{value}</h3>
  </div>
);

export default Maingraphcomponent;
