import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Image from 'next/image'
function ImageContainer() {
  return (
    <>
      <Image
        src="/images/beach_zeek.jpg"
        alt="Image"
        width={200}
        height={200}
        loading="eager"
        quality={35}
        sizes="(min-width: 725px) 725px, 100vw"
      />
    </>
  )
}
export default ImageContainer

/*export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}*/