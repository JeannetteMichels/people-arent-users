# People Aren't Users: the site

Three files, no build step, no dependencies:

- `index.html`: the whole site
- `404.html`: the not-found page
- `README.md`: this file

## Part 1: GitHub (5 minutes)

1. Sign in at github.com. Click the **+** in the top right → **New repository**.
2. Name it `people-arent-users`. Public or Private both work with Vercel. Click **Create repository**.
3. On the new repo's page, click the **"uploading an existing file"** link.
4. Drag in `index.html`, `404.html`, and `README.md`. Click **Commit changes**.

## Part 2: Vercel (5 minutes)

1. Sign in at vercel.com (choose **Continue with GitHub** so the accounts are linked).
2. Click **Add New → Project**, find `people-arent-users` in the list, click **Import**.
3. Change nothing on the configure screen: Framework Preset stays **Other**, no
   build command, no output directory. Click **Deploy**.
4. In about thirty seconds you have a live site at a URL like
   `people-arent-users.vercel.app`. Open it and check it before touching DNS.

## Part 3: Point peoplearentusers.com at it

1. In the Vercel project: **Settings → Domains** → type `peoplearentusers.com` → **Add**.
   When it asks, choose the option that also adds `www` and redirects www to the bare domain.
2. Vercel now shows you the exact DNS records it needs. Typically:
   - an **A** record, name `@`, value `76.76.21.21`
   - a **CNAME** record, name `www`, value `cname.vercel-dns.com`
   Use whatever Vercel's screen shows you: that screen is the source of truth.
3. Go to your registrar's DNS page for peoplearentusers.com. At GoDaddy that is:
   sign in → **My Products** → next to the domain, **⋯ → Manage DNS** (or Domain
   Settings → DNS tab).
4. GoDaddy domains usually come with a parked **A** record on `@` already.
   **Edit** it (pencil icon) and change its value to the one Vercel gave you.
   Then edit or add the `www` **CNAME** the same way. Delete any other A records
   on `@` and any "Forwarding" set up on the domain (bottom of the DNS page),
   because forwarding fights the DNS records.
5. Back in Vercel, the Domains screen will flip from "Invalid Configuration" to
   a checkmark, usually within minutes, occasionally up to an hour. Vercel
   issues the SSL certificate automatically. Done: https://peoplearentusers.com
   is live.

## Part 4: Point jeannettemichels.com at the same site (optional, GoDaddy)

Simplest setup: make it redirect to the book site, so both names work.

1. In the same Vercel project: **Settings → Domains** → add `jeannettemichels.com`.
2. Vercel will ask what to do with it since the project already has a domain:
   choose **Redirect to peoplearentusers.com**.
3. Repeat the GoDaddy DNS steps from Part 3 for jeannettemichels.com: edit the
   `@` A record and `www` CNAME to the values Vercel shows, remove GoDaddy
   forwarding if any.

If you later want a separate author site at jeannettemichels.com, remove the
domain from this project and give it its own project. Nothing about the book
site changes.

## Wire the email list (whenever you pick a provider)

The form already works: with no provider set, submitting opens the visitor's
email app addressed to you. To switch to a real list, one attribute changes.

Find this line in `index.html`:

```html
<form class="sform" id="sform" action="" method="post" novalidate>
```

- **Buttondown**: set `action="https://buttondown.com/api/emails/embed-subscribe/YOUR_USERNAME"`
- **Kit (ConvertKit)**: create a form in Kit, copy its action URL
  (looks like `https://app.kit.com/forms/1234567/subscriptions`) into `action=""`,
  and rename the input from `name="email"` to `name="email_address"`.
- **Mailchimp**: create an embedded form, copy its action URL into `action=""`,
  and rename the input to `name="EMAIL"`.

Then set up one automation in the provider: new subscriber → send the opening
chapter (as a PDF attachment or pasted into the welcome email). That delivers
the site's promise: the chapter now, one email when there's a date.

## Updating the site later

Edit `index.html` on GitHub (open the file, click the pencil icon, commit).
Vercel redeploys automatically within a minute. That's the entire workflow.

## Things marked for later, all in `index.html`

- **Headshot**: upload `headshot.jpg` to the repo and uncomment the
  `<figure>` block in the author section (search for `HEADSHOT SLOT`).
- **Contact email**: `jeannettemichels@gmail.com` appears three times; search
  and replace all three if you set up an address like hello@peoplearentusers.com
  (GoDaddy sells email forwarding, or your list provider may include it).
- **Social preview image**: when cover art exists, upload `cover.jpg` to the
  repo and add this line in the `<head>`:
  `<meta property="og:image" content="https://peoplearentusers.com/cover.jpg">`
  Shared links on LinkedIn will then show the cover.
- **The sample document** in the Document Test is the prefilled text inside
  `<textarea id="doc">`. Swap in any spec you'd rather skewer.

## What's deliberately not here

No analytics, no cookies, no tracking scripts. The footer says so, and the
footer is telling the truth. If you ever want visitor counts, Vercel's Web
Analytics (project Settings → Analytics) is the least invasive option, but
turning it on makes the "no trackers" line false, so reword the footer if
you do.
