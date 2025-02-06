import React from 'react'
import { useRouter } from 'next/router'
import Home from './home';
import { Head } from 'next/document';


function Slug() {
  const router = useRouter();
  const slug = router.query?.slug??null;
  
  console.log("slug",slug);
  return (
    <>
    {/* <Head>
      <title>Weather - {slug}</title>
    </Head> */}
    <Home slug={slug}></Home>
    </>
  )
}

export default Slug