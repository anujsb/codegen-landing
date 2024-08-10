import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-5 bg-white shadow-md rounded-md">
      <h1 className="text-4xl font-bold mb-6 text-lavender text-center">Terms & Conditions</h1>

      <p className="mb-4">
        Please read these Terms & Conditions (“Terms”) carefully before using the 
        <a href="mailto:support@eacc.dev" className="text-blue-500 underline">support@eacc.dev</a> 
        website operated by Eacc.Dev (“Eacc.Dev,” “we,” or “us”).
      </p>

      <p className="mb-4">
        Your access to and use of the Website is conditioned on your acceptance of and compliance with these Terms. 
        These Terms apply to all visitors, users, and others who access or use the Website.
      </p>

      <p className="mb-4">
        By accessing or using the Website you agree to be bound by these Terms. If you disagree with any part of the 
        terms then you may not access the Website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Purchasing</h2>
      <p className="mb-4">
        If you wish to purchase a subscription on the Website, you may be asked to supply certain information relevant 
        to your Purchase including, without limitation, your payment information (card or account details) and personal 
        data. All purchases made on Eacc.Dev are made with either Stripe or PayPal.
      </p>
      <p className="mb-4">
        By proceeding with the purchase you agree to the processing of your personal data by our service for the purpose 
        of delivering the product.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Services</h2>
      <p className="mb-4">
        As a subscriber to our service, you are entitled to receive assistance with your problems, offer ideas, and 
        contact our team as needed. For our part, we will make every effort to answer in a timely manner.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Account</h2>
      <p className="mb-4">
        Accounts may be used only by one user. If we notice any suspicious actions, we reserve the right to terminate 
        your account until the circumstances are clarified.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Monthly & Yearly Subscription</h2>
      <p className="mb-4">
        You can make payment for the subscription using Credit Card. By proceeding with the payment you agree to the 
        subscription terms: the subscription will be automatically renewed every month or year, depending on the plan, 
        on the day you purchased the subscription. Canceling the subscription will cause your account to suspend after 
        your paid period is finished. If we can&apos;t debit your account to renew your subscription due to your credit card 
        blocking or lack of funds, your account will be suspended.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Google Analytics</h2>
      <p className="mb-4">
        We reserve the right to terminate or suspend your access to our service at any time, without prior notice or 
        liability, for any reason, including, without limitation, if you violate the Terms. All provisions of the Terms 
        that, by their nature, must survive termination, including, but not limited to, ownership provisions, warranty 
        disclaimers, indemnity, and liability limitations, shall survive termination.
      </p>

      <p className="mb-4">
        We are not responsible for any currency conversion operations that occurred during your payment process that may 
        cause any difference between the amount deducted from your account and the price on our website. We have no 
        control over the process and cannot change the default currency.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Taxes</h2>
      <p className="mb-4">
        The cost of Eacc.Dev subscription does not include taxes (e.g., VAT). Furthermore, regardless of your location, 
        you are responsible for any other fees and taxes associated with your activities (e.g., withholding tax).
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Refunds Policy</h2>
      <p className="mb-4">
        If there are any issues, reach out via 
        <a href="mailto:support@grow-bot.io" className="text-blue-500 underline">support@grow-bot.io</a> 
        within 10-days and we&apos;ll issue a refund. The full amount may vary depending on Stripe processing fees.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Links to Other Websites</h2>
      <p className="mb-4">
        Our website may contain links to third-party web sites or services that are not owned or controlled by Eacc.Dev. 
        Eacc.Dev has no control over, and accepts no responsibility for, any third-party web sites or services&apos; content, 
        privacy policies, or practices. You acknowledge and agree that Eacc.Dev is not responsible or liable, directly 
        or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or 
        reliance on any such content, goods, or services available on or through any such web sites or services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Modification</h2>
      <p className="mb-4">
        We reserve the right to change or replace these Terms at any time, at our sole discretion. If a revision is a 
        material change, we will try to give you at least 3 days&apos; notice before any new terms go into effect. What 
        constitutes a material change will be determined solely by us.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Affiliate Program</h2>
      <p className="mb-4">
        By participating in our affiliate program, the affiliate agrees to be bound by our Terms as may be established 
        by us from time to time. Eacc.Dev prohibits affiliates from using company keywords and any other keywords the 
        company may decide on in Pay-Per-Click (PPC) advertisements, including search engine advertising campaigns, and 
        other similar platforms. In the event that the affiliate is found to be in violation of these Terms, we reserve 
        the right to take the following actions, at our sole discretion:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Immediate suspension or termination of the affiliate&apos;s participation in the affiliate program.</li>
        <li>Withholding of any unpaid affiliate commissions.</li>
        <li>Pursuit of legal action from non-compliance.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these Terms & Conditions, or wish to make a complaint please contact us at 
        <a href="mailto:support@eacc.dev" className="text-blue-500 underline">support@eacc.dev</a>.
      </p>

      <footer className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Eacc.Dev. All rights reserved.
      </footer>
    </div>
  );
}

export default TermsAndConditions;
