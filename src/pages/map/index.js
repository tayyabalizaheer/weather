
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamically import the component
const Map = dynamic(() => import('@/components/Map'), {
  ssr: false, // This ensures the component is rendered only on the client side
});
export default function page() {
  return (
    <div>
      <Head>
        <title>Map</title>
      </Head>
      <Map></Map>
    </div>
  )
}
