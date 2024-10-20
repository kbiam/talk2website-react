import React from 'react'

function Page2() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Engage with Your Content Like Never Before</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Our cutting-edge AI lets you interact directly with your website's content, providing instant insights, answers, and optimizations tailored to your needs.

          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12 ">
        <div className="flex flex-col justify-center space-y-4">
          <ul className="grid gap-6">
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Sentiment Analysis</h3>
                <p className="text-muted-foreground">
                Instantly gauge the emotional tone and sentiment of any blog or documentation by chatting with it.

                </p>
              </div>
            </li>
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Keyword Insights</h3>
                <p className="text-muted-foreground">
                Discover the most relevant keywords and topics in the articles you're reading, through a simple conversation.
                </p>
              </div>
            </li>
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Chat with Any Content</h3>
                <p className="text-muted-foreground">
                Simply paste any URL from the docs or blogs you're browsing and start a conversation with the content—no need to manually copy-paste into GPT.
                </p>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Page2