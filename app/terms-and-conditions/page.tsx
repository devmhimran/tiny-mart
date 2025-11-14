import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className='max-w-screen-2xl mx-auto py-8'>
      <div className='mb-8'>
        <h1 className='text-3xl md:text-4xl font-bold'>
          Terms &amp; Conditions
        </h1>
        <p className='mt-2 text-sm text-slate-500'>
          Effective date: November 15, 2025
        </p>
      </div>

      <div className='prose prose-invert max-w-none text-gray-500'>
        <p>
          These terms and conditions govern your use of Tiny Mart&apos;s website
          and services. By accessing or using our services you agree to be bound
          by these terms. This is a sample agreement for development purposes
          and should be replaced with a full legal document before production.
        </p>

        <h2>Use of the Service</h2>
        <p>
          You may use the service for lawful purposes only. You agree not to
          misuse the services or help anyone else do so. We reserve the right to
          suspend or terminate accounts that violate these terms.
        </p>

        <h2>Accounts</h2>
        <p>
          When you create an account, you are responsible for keeping your
          password secure. You are responsible for all activity associated with
          your account.
        </p>

        <h2>Orders &amp; Payments</h2>
        <p>
          Orders are subject to acceptance and product availability. Prices and
          taxes may change. Payments are processed through third-party payment
          processors and are subject to their terms.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content, logos, and trademarks are the property of Tiny Mart or
          its licensors. You may not use our intellectual property without
          express written permission.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Tiny Mart will not be liable
          for indirect, incidental, special, consequential, or punitive damages
          arising from your use of the service.
        </p>

        <h2>Changes</h2>
        <p>
          We may revise these terms from time to time. Continued use of the
          service after changes are posted constitutes your acceptance of the
          updated terms.
        </p>

        <h2>Governing Law</h2>
        <p>
          These terms shall be governed in accordance with the laws applicable
          to the operator of this website. This is a sample clause and may need
          to be adjusted for your jurisdiction.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms can be directed to our support team via
          the <Link href='/contact'>Contact</Link> page.
        </p>

        <p className='text-sm text-gray-400 mt-6'>
          This Terms &amp; Conditions page is provided as a placeholder for
          development/demo use only and is not legal advice.
        </p>
      </div>
    </div>
  );
}
