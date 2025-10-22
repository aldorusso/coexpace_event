import Wrapper from "@/layouts/Wrapper";
import Link from "next/link";

export const metadata = {
   title: "404 - Page Not Found",
};

const NotFoundPage = () => {
   return (
      <Wrapper>
         <div style={{ textAlign: 'center', padding: '100px 20px', minHeight: '60vh' }}>
            <h1 style={{ fontSize: '120px', margin: '0', color: '#ff6b6b' }}>404</h1>
            <h2 style={{ fontSize: '32px', marginTop: '20px' }}>Page Not Found</h2>
            <p style={{ fontSize: '18px', marginTop: '15px', color: '#666' }}>
               Sorry, the page you are looking for does not exist.
            </p>
            <Link
               href="/"
               style={{
                  display: 'inline-block',
                  marginTop: '30px',
                  padding: '12px 30px',
                  backgroundColor: '#ff6b6b',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '16px'
               }}
            >
               Go Back Home
            </Link>
         </div>
      </Wrapper>
   )
}

export default NotFoundPage