import Head from "next/head";
import { useState } from "react";

function page({ data }) {
  const [products, setproducts] = useState(data.products)
    console.log("products",products);
    
  return (
    <div>
      <Head>
        <title>Blog Page</title>
      </Head>
      {
      products && products.map((p) => {
        return <div>{p.title}</div>
      })      
      }
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://dummyjson.com/products`)
    const data = await res.json()
   
    // Pass data to the page via props
    return { props: { data } }
}


export default page