This is a example template for optimizing images with [Next.js version 10](https://nextjs.org/blog/next-10#images-on-the-web).

Instead of using an img tag, you can drop in <Image> instead.  All you have to do is 
```import Image from 'next/Image' ```
then replace the img tag with Image tag for a local image in the public folder and add a width and height.
```<Image
              src="/images/terrarium.jpg"
              alt="Image"
              width={800}
              height={800}
              loading="lazy"
              quality={35}
              sizes="(max-width: 600px) 100vw, (max-width: 1023px) 48vw, 23vw"
            />
```
