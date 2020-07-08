import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Truckbook - Forgot Password</title>
          <link rel="icon" href="/images/favicon.png" />
        </Head>

        <main>
          <h1>Forgot Password</h1>
          <Link href="/auth/login"><a>Login</a></Link><br />
          <Link href="/auth/signup"><a>Signup</a></Link><br />
          <Link href="/auth/reset-password"><a>Reset Password</a></Link><br />
        </main>

        <footer>

        </footer>

        <style jsx>{`
        
      `}</style>

        <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      </div>
    </Layout>
  )
}
