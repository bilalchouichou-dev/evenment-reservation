import Footer from '@/components/Footer';
 
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}