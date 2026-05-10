import React from 'react'
import Bg1 from '../../assets/bg1.jpg';

const Privacy = () => {
    return (
        <div className='h-auto w-full flex justify-center items-center bg-[#1f0713]'
            // style={{ backgroundImage: `url("${Bg1}")` }}
        >

            <div className='h-auto w-[90%] bg-[blue] px-[50px] py-[40px] rounded-[12px] my-[10%] gap-[30px] flex justify-evenly items-start flex-col bg-[rgba(255,255,255,0.1)] backdrop-blur-[15px]'>
                <h4 className='secondaryTitle text-white'>Terms & Conditions</h4>
                <h5 className='tertiaryTitle text-white'>1. Introduction</h5>
                <div className=''>
                    <p className='paragraph'>1.1 These Terms & Conditions (“Terms”) govern your access to and use of the services provided by Foinikas Wealth Management Ltd (“Foinikas”, “we” or “us”), a company incorporated in Malta (C107158) and authorised by the Malta Financial Services Authority (MFSA) as a Discretionary Investment Manager.</p>
                    <p className='paragraph'>1.2 By registering for or using our website or services, you agree to be bound by these Terms.</p>
                </div>
                <h5 className='tertiaryTitle text-white'>2. Definitions</h5>
                <ul className='w-full ml-[60px]' style={{ listStyleType: "disc" }}>
                    <li className='paragraph'> <span className='font-[900]'>Client:</span> any natural or legal person who has entered into an agreement with Foinikas for discretionary portfolio management.</li>
                    <li className='paragraph'><span className='font-[900]'>Services:</span> portfolio management, investment advice, reporting and related financial services.</li>
                </ul>

                <h5 className='tertiaryTitle text-white'>3. Scope of Services</h5>
                <div className=''>
                    <p className='paragraph'>3.1 Foinikas will, in its sole discretion and subject to the Client’s investment mandate, manage assets held in Client accounts.</p>
                    <p className='paragraph'>3.2 We will exercise investment discretion in accordance with the Client’s Investment Policy Statement (IPS) and applicable regulations, including MiFID II.</p>
                </div>

                <h5 className='tertiaryTitle text-white'>4. Client Onboarding & Suitability</h5>
                <div className=''>
                    <p className='paragraph'>4.1 We conduct a Know-Your-Client (KYC) and anti-money-laundering (AML) process prior to accepting you as a Client.</p>
                    <p className='paragraph'>4.2 We assess your investment knowledge, experience, financial situation and risk tolerance to ensure suitability of our Services.</p>
                </div>

                <h5 className='tertiaryTitle text-white'>5. Fees & Charges</h5>
                <div className=''>
                    <p className='paragraph'>5.1 Our fees consist of:</p>
                    <p className='paragraph ml-[60px]'>•	Management Fee: a percentage of assets under management, payable quarterly in arrears.</p>
                </div>

                <h5 className='tertiaryTitle text-white'>6. Risk Disclosure</h5>
                <div className=''>
                    <p className='paragraph'>6.1 Investments involve risks, including possible loss of capital. Past performance is not indicative of future results.</p>
                    <p className='paragraph'>6.2 Full Risk Disclosure and Key Information Documents (KIDs) are provided on onboarding and at any subsequent request.</p>
                </div>

                <h5 className='tertiaryTitle text-white'>7. Client Obligations</h5>
                <div className=''>
                    <p className='paragraph'>7.1 You must provide accurate information, update us to any material changes, and pay fees when due.</p>
                    <p className='paragraph'>7.2 You irrevocably authorise Foinikas to execute transactions in your accounts.</p>
                </div>

                <h5 className='tertiaryTitle text-white'>8. Liability</h5>
                <div className=''>
                    <p className='paragraph'>8.1 Foinikas will act with due skill, care and diligence, but is not liable for losses arising from market events beyond our control, nor for indirect or consequential losses.</p>
                    <p className='paragraph'>8.2 Our total aggregate liability is capped at the total fees paid by the Client in the preceding 12 months.</p>
                </div>

                <h5 className='tertiaryTitle text-white'>9. Confidentiality & Data Protection</h5>
                <div className=''>
                    <p className='paragraph'>9.1 Both parties shall keep confidential all non-public business and personal data; disclosure is only permitted as required by law or regulation.</p>
                    <p className='paragraph'>9.2 Our handling of your personal data is set out in the Privacy Policy.</p>
                </div>

                <h5 className='tertiaryTitle text-white'>10. Termination</h5>
                <div className=''>
                    <p className='paragraph'>10.1 Either party may terminate the Discretionary Portfolio Management Agreement on 30 days’ written notice.</p>
                    <p className='paragraph'>10.2 Upon termination, we will liquidate or transfer assets as instructed, and any outstanding fees will become immediately due.</p>
                </div>

                <h5 className='tertiaryTitle text-white'>11. Governing Law & Jurisdiction</h5>
                <div className=''>
                    <p className='paragraph'>11.1 These Terms and any disputes arising hereunder are governed by Maltese law.</p>
                    <p className='paragraph'>11.2 The Courts of Malta shall have exclusive jurisdiction.</p>
                </div>

                <h5 className='tertiaryTitle text-white'>12. Amendments</h5>
                <div className=''>
                    <p className='paragraph'>12.1 We may amend these Terms at any time by posting updated Terms on our website. Material changes will be notified to Clients 30 days in advance.</p>
                </div>

                <h5 className='tertiaryTitle text-white'>13. Contact</h5>
                <div className=''>
                    <p className='paragraph'>Foinikas Wealth Management Ltd</p>
                    <p className='paragraph'>Address: 30 sir Augustus Bartolo Street, Ta’ Xbiex XBX 1093_ Malta </p>
                    <p className='paragraph'>Email: <a href="mailto:info@foinikasinvest.com">info@foinikasinvest.com</a> </p>
                </div>
                <div className='h-[1px] w-full bg-white'></div>
                <h4 className='secondaryTitle text-white'>Privacy Policy</h4>

                <h5 className='tertiaryTitle text-white'>1. Introduction</h5>
                <div className=''>
                    <p className='paragraph'>Foinikas Wealth Management Ltd (“Foinikas”, “we”, “us”) respects your privacy and is committed to processing your personal data in accordance with the EU General Data Protection Regulation (GDPR) and the Maltese Data Protection Act.</p>
                </div>

                <h5 className='tertiaryTitle text-white'>2. Data Controller</h5>
                <div className=''>
                    <p className='paragraph'>Foinikas Wealth Management Ltd</p>
                    <p className='paragraph'>Address: 30 sir Augustus Bartolo Street, Ta’ Xbiex XBX 1093_ Malta </p>
                    <p className='paragraph'>Email: <a href="mailto:info@foinikasinvest.com">info@foinikasinvest.com</a> </p>
                </div>

                <h5 className='tertiaryTitle text-white'>3. Personal Data We Collect</h5>
                <ul className='w-full ml-[60px]' style={{ listStyleType: "disc" }}>
                    <li className='paragraph'> <span className='font-[900]'>Identity Data:</span> name, date of birth, nationality, ID/passport.</li>
                    <li className='paragraph'><span className='font-[900]'>Contact Data: </span>address, email, phone.</li>
                    <li className='paragraph'><span className='font-[900]'>Financial Data: </span>bank details, income, net worth, portfolio holdings.</li>
                    <li className='paragraph'><span className='font-[900]'>Transactional Data: </span>records of trades, communications, service usage.</li>
                    <li className='paragraph'><span className='font-[900]'>Technical Data: </span>IP address, cookies, device details (when you use our website).</li>
                </ul>

                <h5 className='tertiaryTitle text-white'>4. Purpose & Legal Basis</h5>
                <table className=' w-full'>
                    <tr className='border border-white text-white'>
                        <th className='tertiaryTitle border border-white py-[10px]'>Purpose</th>
                        <th className='tertiaryTitle border border-white py-[10px]'>Data Categories</th>
                        <th className='tertiaryTitle border border-white py-[10px]'>Legal Basis</th>
                    </tr>
                    <tr className='border border-white text-white h-[50px]'>
                        <th className='paragraph border border-white text-center'>Client onboarding & KYC/AML checks</th>
                        <th className='paragraph border border-white text-center'>Identity, Contact, Financial</th>
                        <th className='paragraph border border-white text-center'>GDPR Art. 6(1)(c) compliance with legal obligation; 6(1)(b) contract</th>

                    </tr>

                    <tr className='border border-white text-white h-[50px]'>
                        <th className='paragraph border border-white text-center'>Portfolio management & reporting</th>
                        <th className='paragraph border border-white text-center'>Financial, Transactional</th>
                        <th className='paragraph border border-white text-center'>GDPR Art. 6(1)(b) performance of contract</th>

                    </tr>

                    <tr className='border border-white text-white h-[50px]'>
                        <th className='paragraph border border-white text-center'>Regulatory reporting</th>
                        <th className='paragraph border border-white text-center'>Identity, Transactional</th>
                        <th className='paragraph border border-white text-center'>GDPR Art. 6(1)(c) compliance</th>
                    </tr>

                    <tr className='border border-white text-white h-[50px]'>
                        <th className='paragraph border border-white text-center'>Website operation & analytics</th>
                        <th className='paragraph border border-white text-center'>Technical</th>
                        <th className='paragraph border border-white text-center'>GDPR Art. 6(1)(f) legitimate interests</th>
                    </tr>
                    <tr className='border border-white text-white h-[50px]'>
                        <th className='paragraph border border-white text-center'>Marketing (if opted-in)</th>
                        <th className='paragraph border border-white text-center'>Contact</th>
                        <th className='paragraph border border-white text-center'>GDPR Art. 6(1)(a) consent</th>
                    </tr>
                </table>

                <h5 className='tertiaryTitle text-white'>5. Cookies & Tracking</h5>
                <div className=''>
                    <p className='paragraph'>We use essential cookies for site functionality and analytical cookies (Google Analytics). You can manage preferences via our Cookie Banner.</p>

                </div>

                <h5 className='tertiaryTitle text-white'>6. Data Sharing & Transfers</h5>
                <div className=''>
                    <p className='paragraph'>6.1 We may share data with:</p>
                    <p className='paragraph ml-[60px]'>•	Service providers (custodians, fund administrators, IT hosts) </p>
                    <p className='paragraph ml-[60px]'>•	Regulators (MFSA, tax authorities)
                        6.2 All transfers within the EEA rely on GDPR adequacy; transfers outside the EEA use Standard Contractual Clauses.
                    </p>
                </div>

                <h5 className='tertiaryTitle text-white'>7. Data Retention</h5>
                <div className=''>
                    <p className='paragraph'>We retain personal data as long as necessary:</p>
                    <p className='paragraph ml-[60px]'>•	For the duration of our contractual relationship + 5 years (per MiFID II / AML rules).</p>
                    <p className='paragraph ml-[60px]'>•	Website analytics: up to 2 years.</p>
                </div>

                <h5 className='tertiaryTitle text-white'>8. Your Rights</h5>
                <div className=''>
                    <p className='paragraph'>Under Articles 15–22 GDPR, you may:</p>
                    <p className='paragraph ml-[60px]'>•	Access your personal data</p>
                    <p className='paragraph ml-[60px]'>•	Request rectification or erasure (“right to be forgotten”)</p>
                    <p className='paragraph ml-[60px]'>•	Restrict or object to processing</p>
                    <p className='paragraph ml-[60px]'>•	Request data portability</p>
                    <p className='paragraph ml-[60px]'>•	Withdraw consent at any time (for marketing)</p>
                    <p className='paragraph'>To exercise these rights, contact <a href="mailto:dpo@foinikas.com">dpo@foinikas.com</a>.</p>
                </div>

                <h5 className='tertiaryTitle text-white'>9. Security</h5>
                <div className=''>
                    <p className='paragraph'>We implement technical (encryption, firewalls) and organisational (access controls, staff training) measures to protect your data.</p>

                </div>

                <h5 className='tertiaryTitle text-white'>10. Complaints</h5>
                <div className=''>
                    <p className='paragraph'>If you believe your personal data has been misused, you have the right to lodge a complaint with the Office of the Information and Data Protection Commissioner (IDPC) in Malta:</p>

                    <p className='paragraph'>Data Protection Commissioner:</p>
                    <p className='paragraph'>Address: 14, Triq il-Pitkalija, Santa Venera SVR 9030, Malta</p>
                    <p className='paragraph'>Website: <a href="https://idpc.org.mt">https://idpc.org.mt</a> </p>

                </div>
            </div>

        </div>
    )
}

export default Privacy
