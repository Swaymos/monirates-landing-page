import Head from 'next/head'

export default function AppHead(props) {
  return (
    <div>
      {/* <Head>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
      </Head> */}
      <div>
          {props.children}
      </div>
    </div>
  )
}