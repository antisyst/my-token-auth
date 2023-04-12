import Head from 'next/head';
import Navigation from '@/components/navbar';
import Showcase from '@/components/showcase/showcase';


export default function Home() {
  return (
    <>
     <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Chakra+Petch:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&family=Gemunu+Libre&family=Josefin+Sans&family=Jost:wght@500&family=Lexend:wght@400;500;800&family=Manrope:wght@400;500;600;700;800&family=Noto+Sans+KR&family=Open+Sans:wght@400;500;600&family=Oxygen&family=Plus+Jakarta+Sans:wght@800&family=Poppins:ital,wght@0,400;0,500;0,600;1,400&family=Prompt&family=Questrial&family=Quicksand:wght@600&family=Roboto+Slab:wght@400;500&family=Tilt+Warp&family=Titillium+Web&display=swap" rel="stylesheet"></link>
     <link href='https://github.com/locomotivemtl/locomotive-scroll/blob/master/dist/locomotive-scroll.css'></link>
     <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500&f[]=author@500,600,700&f[]=general-sans@500,600,700&f[]=outfit@800,500,700&f[]=beVietnam-pro@600,900,700,800&f[]=excon@900,700,500&f[]=chillax@600,700&f[]=nippo@700&f[]=work-sans@800,600,700,601&display=swap" rel="stylesheet"></link>
     <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
      <Head>
        <title>Ramazan Azimli | Frontend React Developer</title>
        <meta name="description" content="Ramazan Azimli | Frontend UI Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <Navigation/>
      <Showcase/>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js" integrity="sha512-pumBsjNRGGqkPzKHndZMaAG+bir374sORyzM3uulLV14lN5LyykqNk8eEeUlUkB3U0M4FApyaHraT65ihJhDpQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      <script src="locomotive-scroll.min.js"></script>
      <script src="https://unpkg.com/scrollreveal"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.4.0/reveal.js" integrity="sha512-y2j3xEERQApzRH8Rl1bPspQks1/wEsJ8P0pcNQdq7L+G3tT+U5wFjKoxwQNePdnvarg/zamz05jlHDlB5IAeXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    </>
  )
}
