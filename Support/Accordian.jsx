import React, { useState } from 'react';

const Accordian = () => {
  const [openItem, setOpenItem] = useState({ section: null, index: null });

  // ... faqData remains the same ...
  const faqData = {
    "Security & Custody": [
      {
        q: "How are my assets protected with Foinikas and Interactive Brokers Ireland (IBIE)?",
        a: "Client assets are held in segregated accounts under your name at Interactive Brokers Ireland (IBIE), a MiFID-regulated firm supervised by the Central Bank of Ireland (CBI). All client securities are kept separate from the firm’s own assets and reconciled daily, ensuring full protection and clear legal ownership."
      },
      {
        q: "What happens to my assets if IBIE encounters financial difficulties?",
        a: "In the unlikely event of IBIE’s insolvency, your invested assets remain unaffected due to segregation rules. Only uninvested client cash may be exposed, and eligible clients may receive compensation up to €20,000 under the Irish Investor Compensation Scheme (ICS)."
      },
      {
        q: "Are my cash holdings insured or protected?",
        a: "Cash is held in segregated bank accounts or qualifying money market funds. While not covered under a deposit guarantee scheme, IBIE applies rigorous risk controls and holds excess regulatory capital to further safeguard client cash."
      },
      {
        q: "Is there additional insurance for my assets beyond the €20,000 ICS coverage?",
        a: "Yes. Interactive Brokers maintains excess insurance coverage through Lloyd’s of London and other insurers, designed to protect assets beyond the statutory limits, subject to specific conditions."
      },
      {
        q: "How financially strong is Interactive Brokers?",
        a: "Interactive Brokers has one of the strongest balance sheets in the industry, with $20+ billion in equity capital, no long-term debt, and an A- credit rating from S&P. It also holds significantly more capital than required by regulators, ensuring stability and client protection."
      },
      {
        q: "Is Foinikas a regulated investment firm?",
        a: "Yes, our parent company Foinikas Wealth Management Ltd. is licensed and regulated by the Malta Financial Services Authority (MFSA) as an Investment Firm under the Investment Services Act. We operate in full compliance with EU MiFID II regulations, and are authorized to provide discretionary portfolio management across the European Economic Area (EEA). The MFSA supervises our operations to ensure the highest standards of client protection, governance, and conduct."
      }
    ],
    "Transparency & Access": [
      {
        q: "Does Foinikas have access to my assets?",
        a: "No. Foinikas acts as a discretionary portfolio manager, but assets remain in your legal name and under your full ownership at IBIE. We manage your portfolio according to your agreed strategy without direct access to withdraw or move your funds."
      },
      {
        q: "Can I access or monitor my portfolio directly?",
        a: "Yes. You’ll have full, real-time access to your account via the Interactive Brokers platform or mobile app, where you can track holdings, performance, reports, and more—anytime, anywhere."
      }
    ],
    "Service & Offering": [
      {
        q: "What is the minimum investment required to work with Foinikas?",
        a: "Our service is designed for mass affluent investors, with a minimum of €200,000 in investable assets. This allows us to offer personalized portfolios, robust risk management, and institutional-quality service, traditionally reserved for clients with €1M+."
      },
      {
        q: "Can Foinikas manage portfolios in multiple currencies?",
        a: "Yes. We offer portfolios in multiple base currencies, including EUR, USD, GBP, and CHF. This enables better alignment with your income needs, global exposure, or future spending plans."
      },
      {
        q: "Are portfolios customized or one-size-fits-all?",
        a: "Each portfolio is tailored based on your MiFID risk profile, investment goals, and preferences. We use structured strategies like Growth, Dynamic, or Income as a foundation, but we customize allocations to ensure a strategy that reflects your needs."
      }
    ]
  };

  const toggleAccordion = (section, index) => {
    if (openItem.section === section && openItem.index === index) {
      setOpenItem({ section: null, index: null });
    } else {
      setOpenItem({ section, index });
    }
  };

  return (
    // THE ONLY CHANGE IS HERE: Removed max-w-5xl and mx-auto, and adjusted padding.
    // This container now spans the full width with responsive side padding.
    <div className='w-full max-h-[85vh] rounded-2xl backdrop-blur-xl overflow-y-auto py-8 px-4 sm:px-8 md:px-12 lg:px-16'>
      
      {Object.entries(faqData).map(([sectionTitle, items]) => (
        <div key={sectionTitle} className="mb-6 bg-white/10 px-5 md:px-8 py-6 md:py-8 rounded-2xl">
          
          <h2 className='tertiaryTitle mb-4 text-white text-left text-2xl md:text-3xl'>
            {sectionTitle}
          </h2>
          
          {items.map((item, index) => (
            <div key={`${sectionTitle}-${index}`} className='mb-2 border-b border-white/20 last:border-b-0'>
              <div
                onClick={() => toggleAccordion(sectionTitle, index)}
                className="w-full flex justify-between items-center cursor-pointer py-4 text-left transition-all duration-300"
              >
                <p className={`text-sm md:text-base text-white transition-all duration-300 ${openItem.section === sectionTitle && openItem.index === index ? "font-bold" : ""}`}>
                  {item.q}
                </p>
                <svg
                  className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openItem.section === sectionTitle && openItem.index === index ? "rotate-180" : "rotate-0"}`}
                  width="20"
                  height="10"
                  viewBox="0 0 20 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.1667 0.416626L10 8.58329L1.83333 0.416626" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem.section === sectionTitle && openItem.index === index ? "max-h-96" : "max-h-0"}`}
              >
                <p className="text-white/80 text-sm md:text-base pb-4 pr-6">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Accordian;