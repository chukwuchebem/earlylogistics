import Link from "next/link"
import { Abril_Fatface } from "next/font/google"

const Abril = Abril_Fatface({
  subsets:['latin'],
  weight:'400'
})

export default function Home () {

  return (
    <main className="h-screen bg-img-mobile bg-img-desktop" >
      <div className="h-full bg-black/60 flex flex-col justify-between py-8 md:py-10 lg:py-12 px-6 md:px-12 lg:px-72"> 
           <p className={`${Abril.className} text-white text-3xl md:text-4xl lg:text-6xl text-center`}>Early Logistics</p>
           <div className="flex flex-col gap-5">
              <h1 >Parcel Tracking At Its&apos; Best</h1>
              <Link href="#">Track Package</Link>
           </div>
           <footer>
                <ul>
                  <li>
                    <Link href="https://instagram.com/early_code_tech">--</Link>
                  </li>
                  <li>
                    <Link href="https://x.com/earlycodetech">--</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                </ul>
           </footer>
      </div>
    </main>
  )
}
           