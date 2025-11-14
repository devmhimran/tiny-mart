import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className='max-w-screen-2xl mx-auto py-8'>
      <header className='mb-8'>
        <h1 className='text-3xl md:text-4xl font-bold'>Privacy Policy</h1>
        <p className='mt-2 text-sm text-slate-500'>
          Last updated: November 15, 2025
        </p>
      </header>

      <div className='prose prose-invert max-w-none text-gray-500'>
        <p>
          This is a placeholder privacy policy for Tiny Mart. We respect your
          privacy and are committed to protecting your personal information.
          This dummy document outlines general practices and may be replaced
          with a full legal privacy notice before launch.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We may collect information you provide directly (for example, when you
          create an account, place an order, or contact support) and information
          collected automatically (such as usage data and device information).
        </p>

        <h2>How We Use Information</h2>
        <p>
          Collected information is used to provide and improve our services,
          process orders, communicate with you, and personalize your experience.
        </p>

        <h2>Sharing &amp; Disclosure</h2>
        <p>
          We may share information with service providers who perform services
          on our behalf, as required by law, or to protect our rights. We do not
          sell personal information to third parties in this sample policy.
        </p>

        <h2>Security</h2>
        <p>
          We take reasonable measures to protect information from loss,
          unauthorized access, or disclosure. However no system is completely
          secure; please use caution when sharing personal information online.
        </p>

        <h2>Your Choices</h2>
        <p>
          You may access, update, or delete certain information through your
          account settings or by contacting us. You can opt out of promotional
          communications at any time.
        </p>

        <h2>Contact Us</h2>
        <p>
          For questions about this policy or your data, please contact our
          support team via the <Link href='/contact'>Contact</Link> page.
        </p>

        <p className='text-sm text-gray-400 mt-6'>
          This privacy policy is a sample for development and demonstration
          purposes only and should not be used as a final legal document.
        </p>
      </div>
    </div>
  );
}
