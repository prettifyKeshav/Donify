// import "./global.css";
import "@/uploads/styles/header/header.css"
import { Dela_Gothic_One } from 'next/font/google'

const delaGothic = Dela_Gothic_One({
  subsets: ['latin'],
  weight: '400',
})

export const metadata = {
  title: "Donify Connecting Communities",
  description: "India’s most trusted online donation platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased" >
        {children}
      </body>
    </html>
  );
}
