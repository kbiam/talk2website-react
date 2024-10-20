/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OMMrEJt6Spw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import FramerMotion from "./FramerMotion"
import Page2 from "./Page2"
import useLocalStorage from "./useLocalStorage"

export default function LandingPage() {
  const [count, setCount] = useLocalStorage('count', '')
  return (
    <div className="flex flex-col min-h-[100dvh]">
 
      <header className="px-4 lg:px-6 h-14 flex items-center border-b-2">
        <a href="#" className="flex items-center justify-center" >
          <XIcon className="h-6 w-6" />
          <span className="sr-only">AI Content Analyzer</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Features
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Pricing
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            About
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Contact
          </a>
        </nav>
      </header>
      {/* <div className="bg-red-500">
        <h1>sdf
          
        </h1>
        <input type="text" value={count} onChange={(e)=>setCount(e.target.value)} />
      </div> */}
      <main className="flex-1">
        <section className="w-full py-8 md:py-16 lg:py-20 xl:py-8">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Chat to website's content in Realtime
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Paste any number of URLs and let our AI-powered chat uncover the content of the website.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <div className="relative flex-1 outline-none">
                    <Input type="url" placeholder="Enter a website URL" className="pr-16 outline-none " />
                    <Button type="submit" className="absolute top-1/2 right-2 -translate-y-1/2">
                      Analyze
                    </Button>
                  </div>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <Page2/>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Elevate Your Content with AI-Powered Insights
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Unlock the hidden potential of your website content and make data-driven decisions to improve your
                online presence.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <div className="relative flex-1">
                <Input type="url" placeholder="Enter a website URL" className="pr-16" />
                <Button type="submit" className="absolute top-1/2 right-2 -translate-y-1/2">
                  Analyze
                </Button>
              </div>
              <Button variant="secondary">Learn More</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 AI Content Analyzer. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4" >
            Terms of Service
          </a>
          <a href="#" className="text-xs hover:underline underline-offset-4" >
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}