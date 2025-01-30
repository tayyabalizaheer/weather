import React from 'react'
import { useRouter } from 'next/router'
import Home from './home';


function Slug() {
  const router = useRouter();
  const slug = router.query?.slug??null;
  
  console.log("slug",slug);
  return (
    <Home slug={slug}></Home>
  )
}

export default Slug