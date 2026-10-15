# Routevanta — Website Starter

**Current state:** Finished, responsive **pre-launch website** and **browser-based concept demo**. These static files contain no back-end services, subscriber database, live GPS tracking, order database, or online contact form. The content deliberately describes features as planned.

## Files

- `index.html` — public landing page with mission, product roadmap, business audiences, and FAQs.
- `demo.html` — interactive fictional dispatch demonstration. Buttons reassign or complete mock deliveries **in the current browser session only**.
- `styles.css` — desktop and mobile styles.
- `script.js` — mobile menu, audience switching, demo interactions.
- `favicon.svg` — original Routevanta symbol.

## Preview locally

Open `index.html` in a modern browser, or serve the folder with:

```sh
python3 -m http.server 8080
```

Then visit `http://localhost:8080/`.

## Publish using your AWS account (no custom domain needed)

1. Sign into the AWS Console and open **AWS Amplify**.
2. Click **Create new app** → **Deploy without Git** → **Next**.
3. Enter `routevanta` as app name and `main` as branch name; choose **Drag and drop**.
4. Upload `routevanta-website.zip` (the ZIP containing `index.html` and other files directly at its root).
5. Choose **Save and deploy**. Amplify provides a temporary `amplifyapp.com` web address; you can add a custom domain later.

Official AWS documentation: https://docs.aws.amazon.com/amplify/latest/userguide/manual-deploys.html

**Cost note:** AWS services can be billable. Check your account's Free Tier/credit coverage and set an AWS Budget alert before publishing.

## Before presenting as a fully launched company

- Confirm **Routevanta** in relevant business registries and trademark databases, plus domain availability. Search engine checks aren't legal clearance.
- Add **your real, reachable business email** and any required privacy/contact notices. No contact address was provided, so no fake one was published.
- Consider collecting early interest through a legitimate, configured form service or email after you establish your contact details.
- Set up a real LinkedIn company page when ready, then link it here.
- Only change language such as 'in development' once those features are actually available.
- Do not put credentials, AWS access keys or sensitive user information into these client-side files.

## Brand & business summary

**Name:** Routevanta (working brand; company and trademark clearance pending)

**Tagline:** Smarter routes. Better deliveries.

**Category:** Logistics technology / SaaS / delivery management

**Short description:** Routevanta is an early-stage logistics technology startup developing a cloud-based delivery management platform for businesses, e-commerce merchants, and courier operators. Its planned capabilities include dispatching, route planning, delivery visibility, proof of delivery, and operational analytics.

**Mission:** Make intelligent delivery technology accessible to businesses of all sizes.
