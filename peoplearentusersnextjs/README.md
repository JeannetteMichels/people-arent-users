# People Aren't Users

The complete source for the *People Aren't Users* website by Jeannette Michels. This repository is ready for GitHub and Vercel.

## What is included

- The complete responsive website
- All photographs and editorial artwork
- The interactive Document Test
- The expandable opening chapter
- The chapter-request email fallback
- Page title, description, favicon, and accessibility labels

## Upload to GitHub

1. Create a new empty repository on GitHub.
2. Open the repository and choose **Add file → Upload files**.
3. Upload the **contents** of this folder, including `app`, `public`, `package.json`, and the other root files. Do not upload the outer ZIP as one file.
4. Commit the files to the `main` branch.

## Deploy through Vercel

1. Sign in to Vercel and select **Add New → Project**.
2. Import the GitHub repository.
3. Vercel should identify the framework as **Next.js** automatically.
4. Leave the root directory, build command, and output settings at their defaults.
5. Select **Deploy**.

Every later commit to the GitHub repository will create a new Vercel deployment automatically.

## Run locally

Use Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Important email note

The chapter form currently validates the email address and opens the visitor's email application with a prepared request to `jeannettemichels@gmail.com`. No mailing-list provider or database is required.

For automatic chapter delivery and list management, connect the form to a service such as Kit, Mailchimp, or Buttondown before publishing it as a signup form.
