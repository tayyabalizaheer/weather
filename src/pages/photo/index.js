
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamically import the component
const Photo = dynamic(() => import('@/components/Photo'), {
  ssr: false, // This ensures the component is rendered only on the client side
});
export default function page() {
  return (
    <div>
      <Head>
        <title>Photo</title>
      </Head>
      <Photo></Photo>
    </div>
  )
}
