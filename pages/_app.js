import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto w-9/12">
      <header>
      <h1 className="text-6xl my-8 font-bold text-center">My Blog</h1>
      <nav>
        <ul className="flex flex-row justify-center space-x-4">
          <li>
            <Link href='/'>
              <a className="">Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
            </li>
        </ul>
      </nav>
      </header>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
 