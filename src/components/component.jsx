import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { Textarea } from "./ui/textarea"
import React from "react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-background border-b px-4 lg:px-6 h-12 flex items-start pt-4 -mb-8">
        <a href="#" className="flex items-center justify-center" >
          <MountainIcon className="size-6" />
          <span className="sr-only">Website Discuss</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Discuss
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            About
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 p-6 md:p-8 ">
        <div className="bg-card rounded-lg p-6 md:p-8 flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-left">Discuss a Website</h2>
          <div className="flex gap-2">
            <Input placeholder="Paste a URL" className="flex-1" />
            <Button>Discuss</Button>
          </div>
          <div className="bg-muted rounded-lg p-4 text-sm text-muted-foreground">
            Paste a URL to start discussing a website using AI-powered chat.
          </div>
        </div>
        <div className="bg-card rounded-lg p-6 md:p-8 flex flex-col gap-6 border-l-2">
          <h2 className="text-2xl font-bold">AI-Powered Chat</h2>
          <ScrollArea className="flex-1 rounded-lg border">
            <div className="p-4 space-y-4">
              <div className="flex items-start gap-4">
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                  <AvatarFallback>YO</AvatarFallback>
                </Avatar>
                <div className="grid gap-1 text-sm">
                  <div className="font-medium">You</div>
                  <div className="prose text-muted-foreground">
                    <p>This website looks really interesting. What do you think about it?</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                  <AvatarFallback>OA</AvatarFallback>
                </Avatar>
                <div className="grid gap-1 text-sm">
                  <div className="font-medium">AI Assistant</div>
                  <div className="prose text-muted-foreground">
                    <p>
                      The website you've shared looks quite interesting. Based on my analysis, it appears to be a
                      well-designed and informative site that covers a range of topics related to [topic]. The content
                      seems to be well-researched and presented in a clear, engaging manner. I'd be happy to discuss the
                      website in more detail and provide my insights on its strengths and potential areas for
                      improvement.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                  <AvatarFallback>YO</AvatarFallback>
                </Avatar>
                <div className="grid gap-1 text-sm">
                  <div className="font-medium">You</div>
                  <div className="prose text-muted-foreground">
                    <p>
                      That's great, I'd love to hear more about your thoughts on the website. What do you think are the
                      key strengths and areas for improvement?
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                  <AvatarFallback>OA</AvatarFallback>
                </Avatar>
                <div className="grid gap-1 text-sm">
                  <div className="font-medium">AI Assistant</div>
                  <div className="prose text-muted-foreground">
                    <p>
                      Some of the key strengths I've identified are the website's clean and modern design, the
                      comprehensive coverage of the topic, and the use of visuals and multimedia to enhance the user
                      experience. The content also appears to be well-researched and presented in a logical,
                      easy-to-follow manner.
                    </p>
                    <p>
                      In terms of areas for improvement, I would suggest considering ways to make the website more
                      interactive and engaging, such as by incorporating more user- generated content or interactive
                      features. Additionally, the site could potentially benefit from improved accessibility features to
                      ensure it is inclusive and user-friendly for all visitors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
          <div className="relative">
            <Textarea
              placeholder="Type your message..."
              className="min-h-[48px] rounded-2xl resize-none p-4 border border-neutral-400 shadow-sm pr-16"
            />
            <Button type="submit" size="icon" className="absolute w-8 h-8 top-3 right-3">
              <ArrowUpIcon className="w-4 h-4" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </div>
      </main>
      {/* <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <a href="#" >
              About Us
            </a>
            <a href="#" >
              Our Team
            </a>
            <a href="#" >
              Careers
            </a>
            <a href="#" >
              News
            </a>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Product</h3>
            <a href="#" >
              Features
            </a>
            <a href="#" >
              Pricing
            </a>
            <a href="#" >
              Integrations
            </a>
            <a href="#" >
              API
            </a>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <a href="#" >
              Blog
            </a>
            <a href="#" >
              Documentation
            </a>
            <a href="#" >
              Support
            </a>
            <a href="#" >
              FAQs
            </a>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <a href="#" >
              Privacy Policy
            </a>
            <a href="#" >
              Terms of Service
            </a>
            <a href="#" >
              Cookie Policy
            </a>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <a href="#" >
              Sales
            </a>
            <a href="#" >
              Support
            </a>
            <a href="#" >
              Partnerships
            </a>
            <a href="#" >
              Press
            </a>
          </div>
        </div>
      </footer> */}
    </div>
  )
}

function ArrowUpIcon(props) {
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
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  )
}


function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}