# Kamal Raj R — Personal Portfolio Website

A sleek, modern, and high-performance developer portfolio website designed for **Kamal Raj R**, Aspiring Java Full-Stack Developer and B.E. Information Technology student at **Sri Krishna College of Technology**.

---

## 🚀 Key Highlights & Features

- **Tailored to Resume**: Showcases education (SKCT Coimbatore), full-stack Java internship at Yelkom Technologies, featured projects (*Scrap Metal Exchange* and *Mental Health Therapy Platform*), 6+ industry certifications, and 4+ hackathons.
- **LeetCode Spotlight**: Dedicated achievement counter highlighting **400+ solved problems** and **110+ days active streak** linked directly to [Kamal's LeetCode Profile](https://leetcode.com/u/Kamalraj_123/).
- **Google Search SEO Ready**: Contains JSON-LD structured data schema (`schema.org/Person`), open-graph meta tags, `robots.txt`, and `sitemap.xml` so search engines (Google, Bing) index your name and show your portfolio at the top of search results.
- **Interactive Project Deep-Dives**: Detailed modal views breaking down system architecture, database design, and REST API endpoints.
- **Dark & Light Mode**: Built-in sleek theme toggle with persistent preferences saved to `localStorage`.
- **Dynamic Typing Headline**: Smooth animated typewriter effect highlighting technical roles.
- **One-Click Contact Utilities**: Instant copy-to-clipboard buttons for email (`kamalrajr232@gmail.com`) and phone (`+91 9629230021`), plus interactive contact form with mail client handoff.

---

## 📂 Project Structure

```text
port/
├── index.html        # Main semantic markup, SEO tags & Schema.org data
├── styles.css        # Modern glassmorphism design system & responsive styling
├── script.js         # Interactive features, theme switch, typing animation, modals
├── robots.txt        # Allows Google & search crawlers to index your website
├── sitemap.xml       # Search engine sitemap for rapid indexing
├── server.js         # Local preview Node.js HTTP server
└── README.md         # Documentation & deployment guide
```

---

## 🌍 How to Publish It Live So Anyone Searching Your Name Finds It

Right now, your site is running locally on your computer at `http://localhost:3000/`. To make it accessible worldwide on Chrome and indexable by Google Search, publish it using **GitHub Pages** (100% Free):

### Step 1: Create a GitHub Repository
1. Log in to your [GitHub Account](https://github.com/).
2. Click **New Repository**.
3. Name it:
   - Either `<your-github-username>.github.io` (for a direct domain like `https://kamalraj.github.io`)
   - OR `portfolio` (will be at `https://<your-github-username>.github.io/portfolio/`).
4. Set it to **Public** and click **Create repository**.

### Step 2: Push Your Code from Terminal
Open PowerShell in this folder (`c:\Users\72782\OneDrive\Documents\port`) and run:

```powershell
git init
git add .
git commit -m "Launch Kamal Raj R Portfolio with 400+ LeetCode spotlight and Google SEO"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** (top tab) -> **Pages** (in left sidebar).
3. Under **Branch**, select `main` and root `/` folder, then click **Save**.
4. In ~60 seconds, your website will be live at `https://<YOUR_GITHUB_USERNAME>.github.io/`!

---

## 🔍 How to Make Google Show Your Site When People Search "Kamal Raj R"

We have already configured:
- Your exact name **Kamal Raj R** in the `<title>` and `<meta name="keywords">`.
- Google's official **Person Schema (`schema.org/Person`)** connecting your name, your college (*Sri Krishna College of Technology*), your location (*Dharmapuri / Coimbatore*), and your [LeetCode profile](https://leetcode.com/u/Kamalraj_123/).
- `robots.txt` and `sitemap.xml` for crawler discovery.

### To Speed Up Google Indexing to 24–48 Hours:
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Click **Add Property** and enter your live website URL (e.g. `https://<username>.github.io/`).
3. Click **URL Inspection** -> Paste your link -> Click **Request Indexing**.
4. Within 1 to 3 days, Google will crawl the site and index your name. When anyone in Chrome searches **"Kamal Raj R"** or **"Kamal Raj Java Full-Stack Developer"**, your portfolio will be discoverable!
