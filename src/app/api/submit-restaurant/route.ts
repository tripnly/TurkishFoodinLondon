import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const data = await req.json()
  const apiKey = process.env.BREVO_API_KEY

  if (!apiKey) {
    return NextResponse.json({ error: 'Server config error' }, { status: 500 })
  }

  const area = data.area === 'Other (please specify)' ? data.otherArea : data.area

  // 1. Send transactional email notification to you
  const emailBody = `
<h2>New Restaurant Submission</h2>
<table style="border-collapse:collapse;width:100%;max-width:600px;">
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Restaurant</td><td style="padding:8px;border:1px solid #ddd;">${data.restaurantName}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Owner/Manager</td><td style="padding:8px;border:1px solid #ddd;">${data.ownerName}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${data.email}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${data.phone || '—'}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Area</td><td style="padding:8px;border:1px solid #ddd;">${area}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Address</td><td style="padding:8px;border:1px solid #ddd;">${data.address}, ${data.postcode}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Type</td><td style="padding:8px;border:1px solid #ddd;">${data.type}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Description</td><td style="padding:8px;border:1px solid #ddd;">${data.description}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Special Dishes</td><td style="padding:8px;border:1px solid #ddd;">${data.specialDishes || '—'}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Price Range</td><td style="padding:8px;border:1px solid #ddd;">${data.priceRange || '—'}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Hours</td><td style="padding:8px;border:1px solid #ddd;">${data.hours || '—'}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Website</td><td style="padding:8px;border:1px solid #ddd;">${data.website || '—'}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Instagram</td><td style="padding:8px;border:1px solid #ddd;">${data.instagram || '—'}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Interested Tier</td><td style="padding:8px;border:1px solid #ddd;">${data.tier}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Message</td><td style="padding:8px;border:1px solid #ddd;">${data.message || '—'}</td></tr>
</table>
  `.trim()

  try {
    // Send notification email
    const emailRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        sender: { name: 'Turkish Food in London', email: 'nejat@ticaret.com' },
        to: [{ email: 'nejat@ticaret.com', name: 'Nejat' }],
        replyTo: { email: data.email, name: data.ownerName },
        subject: `New Restaurant Submission: ${data.restaurantName}`,
        htmlContent: emailBody,
      }),
    })

    if (!emailRes.ok) {
      const err = await emailRes.text()
      console.error('Brevo email error:', err)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    // 2. Add restaurant owner as a Brevo contact
    await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        email: data.email,
        attributes: {
          FIRSTNAME: data.ownerName,
          RESTAURANT: data.restaurantName,
          AREA: area,
          TIER: data.tier,
        },
        listIds: [],
        updateEnabled: true,
      }),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Brevo API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
