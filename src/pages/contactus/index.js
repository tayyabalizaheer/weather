
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamically import the component
const ContactUs = dynamic(() => import('@/components/Contact'), {
  ssr: false, // This ensures the component is rendered only on the client side
});
export default function page() {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <ContactUs></ContactUs>
    </div>
  )
}
