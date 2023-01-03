type Meta = {
  title: string,
  description: string,
  type: string,
  author: string,
  sm: string,
  ver: string,
}

export const meta = {
  title: 'u010420 | Next.js WebApp Beta',
  description: 'OpenSource Project, Freelance Software Engineer',
  type: 'Website Beta',
  author: 'u-010420',
  sm: '0P3NS0URC3 PR0J3CT5',
  ver: '2.0.0',
};

export default function Head(meta: Meta) {
  return (
    <>
      <title>{meta.title}</title>
      <meta charSet="utf-8" />
      <meta
        content="width=device-width, initial-scale=1"
        name="viewport"
      />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content="http://localhost:3000" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="WebApp Beta" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:author" content={meta.author} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
