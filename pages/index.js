import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingLg}>
        <p>Tom Dale</p>
        <h1 className="title">
        Read <Link href="https://dev.to/daletom"><a>original post!</a></Link>
        </h1>
      </section>
      <div class="row">
        <div class="column">
          <Image
            src="/images/beach_zeek.jpg"
            alt="Image"
            width={800}
            height={800}
            loading="lazy"
            quality={35}
            sizes="(max-width: 600px) 100vw, (max-width: 1023px) 48vw, 23vw"
          />
          <Image
            src="/images/disney.jpg"
            alt="Image"
            width={800}
            height={600}
            loading="lazy"
            quality={35}
            sizes="(max-width: 600px) 100vw, (max-width: 1023px) 48vw, 23vw"
          />
        </div>
        <div class="column">
          <Image
              src="/images/terrarium.jpg"
              alt="Image"
              width={800}
              height={800}
              loading="lazy"
              quality={35}
              sizes="(max-width: 600px) 100vw, (max-width: 1023px) 48vw, 23vw"
            />
            <Image
              src="/images/geiranger.jpg"
              alt="Image"
              width={800}
              height={600}
              loading="lazy"
              quality={35}
              sizes="(max-width: 600px) 100vw, (max-width: 1023px) 48vw, 23vw"
            />
        </div>
        <div class="column">
          <Image
              src="/images/zeek_yellow.jpg"
              alt="Image"
              width={800}
              height={800}
              loading="lazy"
              quality={35}
              sizes="(max-width: 600px) 100vw, (max-width: 1023px) 48vw, 23vw"
            />
            <Image
              src="/images/zeekgraffiti.jpg"
              alt="Image"
              width={800}
              height={600}
              loading="lazy"
              quality={35}
              sizes="(max-width: 600px) 100vw, (max-width: 1023px) 48vw, 23vw"
            />
        </div>
        <div class="column">
          <Image
              src="/images/surat-thani.jpg"
              alt="Image"
              width={800}
              height={800}
              loading="lazy"
              quality={35}
              sizes="(max-width: 600px) 100vw, (max-width: 1023px) 48vw, 23vw"
            />
            <Image
              src="/images/kids_skateboard.jpg"
              alt="Image"
              width={800}
              height={600}
              loading="lazy"
              quality={35}
              sizes="(max-width: 600px) 100vw, (max-width: 1023px) 48vw, 23vw"
            />
        </div>
      </div>
    </Layout>
  )
}