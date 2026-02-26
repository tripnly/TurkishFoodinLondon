import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Turkish Food in London',
  description: 'Get in touch with Turkish Food in London. Restaurant suggestions, corrections, partnerships, and general enquiries.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-turkish-red to-orange-600 text-white py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-white/90 text-lg">
            Restaurant tips, corrections, or just want to say hello?
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-5 py-12">
        
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="font-display text-2xl font-bold text-navy mb-6">Contact</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-navy mb-2">General Enquiries</h3>
                <a 
                  href="mailto:hello@turkishfoodinlondon.com" 
                  className="text-turkish-red hover:underline"
                >
                  hello@turkishfoodinlondon.com
                </a>
              </div>
              
              <div>
                <h3 className="font-semibold text-navy mb-2">Restaurant Suggestions</h3>
                <p className="text-gray-600 text-sm">
                  Know a place I should check out? Found somewhere amazing that isn't 
                  on the site? I'm always looking for new recommendations—especially 
                  neighbourhood gems off the beaten path.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-navy mb-2">Corrections</h3>
                <p className="text-gray-600 text-sm">
                  Restaurant closed? Hours changed? Something I got wrong? Let me know 
                  and I'll update the guide.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-navy mb-2">Partnerships</h3>
                <p className="text-gray-600 text-sm">
                  For restaurant partnerships, advertising enquiries, or collaboration 
                  opportunities, please email with details of what you have in mind.
                </p>
              </div>
            </div>
          </div>
          
          {/* Response Time */}
          <div>
            <div className="bg-cream rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-navy mb-2">Response Time</h3>
              <p className="text-gray-600 text-sm">
                I read every email and try to respond within a few days. If you're 
                suggesting a restaurant, I'll add it to my list to visit—though it 
                may take a while before I can review it.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-navy mb-2">Note on Reviews</h3>
              <p className="text-gray-600 text-sm">
                I don't accept payment for reviews or guaranteed coverage. If I visit 
                a restaurant based on your suggestion and think it's worth recommending, 
                it'll appear on the site. If not, it won't. That's how I keep this 
                guide honest.
              </p>
            </div>
          </div>
          
        </div>

      </article>
    </>
  )
}
