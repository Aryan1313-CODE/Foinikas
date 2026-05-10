import React from 'react'

const PrivacyStatement = () => {
    return (
        <div className='h-auto w-full flex justify-center items-center bg-[#1f0713]'>
            <div className='h-auto w-[90%] px-[50px] py-[40px] rounded-[12px] my-[10%] gap-[30px] flex justify-evenly items-start flex-col bg-[rgba(255,255,255,0.1)] backdrop-blur-[15px]'>

                <h4 className='secondaryTitle text-white'>Privacy Statement (EU)</h4>

                <div className=''>
                    <p className='paragraph'>This privacy statement was last updated on May 14, 2025 and applies to citizens and legal permanent residents of the European Economic Area and Switzerland.</p>
                </div>

                <div className=''>
                    <p className='paragraph'>In this privacy statement, we explain what we do with the data we obtain about you via <a href="https://www.foinikaswealth.com" target="_blank" rel="noreferrer">https://www.foinikaswealth.com</a>. We recommend you carefully read this statement. In our processing we comply with the requirements of privacy legislation. That means, among other things, that:</p>

                    <ul className='w-full ml-[60px]' style={{ listStyleType: "disc" }}>
                        <li className='paragraph'>we clearly state the purposes for which we process personal data. We do this by means of this privacy statement;</li>
                        <li className='paragraph'>we aim to limit our collection of personal data to only the personal data required for legitimate purposes;</li>
                        <li className='paragraph'>we first request your explicit consent to process your personal data in cases requiring your consent;</li>
                        <li className='paragraph'>we take appropriate security measures to protect your personal data and also require this from parties that process personal data on our behalf;</li>
                        <li className='paragraph'>we respect your right to access your personal data or have it corrected or deleted, at your request.</li>
                    </ul>

                    <p className='paragraph'>If you have any questions, or want to know exactly what data we keep of you, please contact us.</p>
                </div>

                <h5 className='tertiaryTitle text-white'>1. Purpose, Data and Retention Period</h5>
                <div className=''>
                    <p className='paragraph'>We may collect or receive personal information for a number of purposes connected with our business operations which may include the following:</p>
                    <p className='paragraph ml-[60px]'>1.1 Contact – Through phone, mail, email and/or webforms</p>
                </div>

                <h5 className='tertiaryTitle text-white'>2. Cookies</h5>
                <div className=''>
                    <p className='paragraph'>Our website uses cookies. For more information about cookies, please refer to our Cookie Policy.</p>
                </div>

                <h5 className='tertiaryTitle text-white'>3. Disclosure Practices</h5>
                <div className=''>
                    <p className='paragraph'>We disclose personal information if we are required by law or by a court order, in response to a law enforcement agency, to the extent permitted under other provisions of law, to provide information, or for an investigation on a matter related to public safety.</p>
                    <p className='paragraph'>If our website or organisation is taken over, sold, or involved in a merger or acquisition, your details may be disclosed to our advisers and any prospective purchasers and will be passed on to the new owners.</p>
                </div>

                <h5 className='tertiaryTitle text-white'>4. Security</h5>
                <div className=''>
                    <p className='paragraph'>We are committed to the security of personal data. We take appropriate security measures to limit abuse of and unauthorized access to personal data. This ensures that only the necessary persons have access to your data, that access to the data is protected, and that our security measures are regularly reviewed.</p>
                </div>

                <h5 className='tertiaryTitle text-white'>5. Third-party Websites</h5>
                <div className=''>
                    <p className='paragraph'>This privacy statement does not apply to third-party websites connected by links on our website. We cannot guarantee that these third parties handle your personal data in a reliable or secure manner. We recommend you read the privacy statements of these websites prior to making use of these websites.</p>
                </div>

                <h5 className='tertiaryTitle text-white'>6. Amendments to this Privacy Statement</h5>
                <div className=''>
                    <p className='paragraph'>We reserve the right to make amendments to this privacy statement. It is recommended that you consult this privacy statement regularly in order to be aware of any changes. In addition, we will actively inform you wherever possible.</p>
                </div>

                <h5 className='tertiaryTitle text-white'>7. Accessing and Modifying Your Data</h5>
                <div className=''>
                    <p className='paragraph'>If you have any questions or want to know which personal data we have about you, please contact us. You can contact us by using the information below. You have the following rights:</p>

                    <ul className='w-full ml-[60px]' style={{ listStyleType: "disc" }}>
                        <li className='paragraph'>You have the right to know why your personal data is needed, what will happen to it, and how long it will be retained for.</li>
                        <li className='paragraph'>Right of access: You have the right to access your personal data that is known to us.</li>
                        <li className='paragraph'>Right to rectification: you have the right to supplement, correct, have deleted or blocked your personal data whenever you wish.</li>
                        <li className='paragraph'>If you give us your consent to process your data, you have the right to revoke that consent and to have your personal data deleted.</li>
                        <li className='paragraph'>Right to transfer your data: you have the right to request all your personal data from the controller and transfer it in its entirety to another controller.</li>
                        <li className='paragraph'>Right to object: you may object to the processing of your data. We comply with this, unless there are justified grounds for processing.</li>
                    </ul>

                    <p className='paragraph'>Please make sure to always clearly state who you are, so that we can be certain that we do not modify or delete any data of the wrong person.</p>
                </div>

                <h5 className='tertiaryTitle text-white'>8. Submitting a Complaint</h5>
                <div className=''>
                    <p className='paragraph'>If you are not satisfied with the way in which we handle (a complaint about) the processing of your personal data, you have the right to submit a complaint to the Data Protection Authority.</p>
                </div>

                <h5 className='tertiaryTitle text-white'>9. Contact Details</h5>
                <div className=''>
                    <p className='paragraph'>Foinikas Wealth Management Ltd</p>
                    <p className='paragraph'>30/3, Kenilworth Court</p>
                    <p className='paragraph'>Sir Augustus Bartolo Street</p>
                    <p className='paragraph'>Ta’ Xbiex</p>
                    <p className='paragraph'>XBX 1093 Malta</p>
                    <p className='paragraph'>Malta</p>
                    <p className='paragraph'>Website: <a href="https://www.foinikasinvest.com" target="_blank" rel="noreferrer">https://www.foinikasinvest.com</a></p>
                    <p className='paragraph'>Email: <a className='text-[1.3rem] font-[400]' href="mailto:info@foinikasinvest.com">info@foinikasinvest.com</a></p>
                    {/* <p className='paragraph'>Phone number: +356 23479856</p> */}
                </div>

            </div>
        </div>
    )
}

export default PrivacyStatement
