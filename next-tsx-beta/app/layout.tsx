import './globals.scss';
import NavBar from './navbar';
import Footer from './footer';

export default function RootLayout({ children, }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*https://beta.nextjs.org/docs/api-reference/file-conventions/head*/}
      <head />
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
