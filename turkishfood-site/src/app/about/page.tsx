import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Turkish Food in London',
  description: 'The insider\'s guide to Turkish food in London. Written by someone who grew up with this food and knows the difference between good and great.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            About This Guide
          </h1>
          <p className="text-white/90 text-lg">
            Why another restaurant guide? Because most of them get Turkish food wrong.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-5 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          
          <p className="text-xl text-gray-600 leading-relaxed">
            I'm Turkish. I grew up eating this food. I know what a proper adana should taste 
            like, why the lamb ribs at one restaurant are better than the identical-looking 
            ones next door, and which "Turkish breakfast" spreads are authentic versus which 
            are assembled for Instagram.
          </p>

          <p>
            London has one of the best Turkish food scenes outside of Turkey itself. But most 
            guides treat it as an afterthought—a few Green Lanes recommendations copied from 
            each other, maybe a mention of Mangal if the writer has been to Dalston.
          </p>

          <p>
            This guide is different because I actually eat at these places. Not once for a 
            review, but regularly, over years. I know which restaurants have maintained their 
            quality and which have slipped. I know what to order and what to skip. I know the 
            places Turkish families go versus the places that cater to tourists.
          </p>

          <h2>What makes this guide different</h2>

          <ul>
            <li>
              <strong>Cultural context:</strong> I explain why dishes exist, how they vary 
              regionally, and what makes them good. Not just "the lamb was tender."
            </li>
            <li>
              <strong>Real opinions:</strong> I'll tell you when a famous place is overrated 
              or when a hole-in-the-wall is better than its fancy neighbour.
            </li>
            <li>
              <strong>Neighbourhood knowledge:</strong> Turkish London isn't just Green Lanes. 
              I cover the whole scene—Dalston, Stoke Newington, the scattered gems across 
              North and East London.
            </li>
            <li>
              <strong>Practical details:</strong> Opening hours, what to order, when to go, 
              whether to book. The stuff you actually need to know.
            </li>
          </ul>

          <h2>What this guide is not</h2>

          <p>
            This isn't a paid directory. Restaurants don't pay to be featured. If I recommend 
            somewhere, it's because I genuinely think it's good.
          </p>

          <p>
            Some links may be affiliate links (I'll earn a small commission if you book), 
            but this never affects what I recommend. The reviews come first; monetisation 
            comes second.
          </p>

          <h2>Get in touch</h2>

          <p>
            Found a place I should know about? Think I've got something wrong? Have a 
            question about Turkish food in London?
          </p>

          <p>
            Email me at{' '}
            <a href="mailto:hello@turkishfoodinlondon.com" className="text-turkish-red hover:underline">
              hello@turkishfoodinlondon.com
            </a>
          </p>

          <p className="text-gray-500 italic">
            Afiyet olsun.
          </p>

        </div>
      </article>
    </>
  )
}
