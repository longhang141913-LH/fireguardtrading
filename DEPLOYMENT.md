# FireGuard Trading Website - Deployment Guide

## Website Structure

```
/
├── index.html          # Main page (EN/AR bilingual)
├── css/
│   └── style.css       # All styles (responsive + RTL)
├── js/
│   ├── i18n.js         # English & Arabic translations
│   └── main.js         # Language switcher, form, interactions
├── robots.txt          # SEO crawler rules
└── sitemap.xml         # Google sitemap
```

---

## 1. Pre-Launch: Replace Placeholders

Before deploying, update these placeholders in the code:

### WhatsApp Number (IMPORTANT)
All WhatsApp links currently point to `8613800000000` (placeholder).

**Files to update:**
- `js/main.js` → line 5: `const WHATSAPP_NUMBER = "8613800000000";`
- `index.html` → search & replace all `8613800000000` with your real number

Format: country code + number, no `+` or spaces.
Example: UAE number `+971 50 123 4567` → `971501234567`

### Contact Info
- Email: `info@fireguardtrading.com` → your real email
- Phone: `+86 138-0000-0000` → your real phone

### Domain
- Replace `fireguardtrading.com` in `index.html`, `robots.txt`, `sitemap.xml` with your actual domain.

---

## 2. Buy Domain & Hong Kong Hosting (No ICP Filing Needed)

### Recommended Domain Registrars
- **Namecheap** (namecheap.com) — cheap, free WHOIS privacy
- **Cloudflare** (cloudflare.com) — at-cost pricing, free DNS
- **GoDaddy** (godaddy.com)

Suggested domains: `fireguardtrading.com`, `fireguard-safety.com`, `fireguardexport.com`

### Recommended Hong Kong Hosting (No ICP Required)

| Provider | Type | Price | Why |
|----------|------|-------|-----|
| **Cloudflare Pages** | Static hosting | FREE | Fastest CDN, free SSL, deploy via git |
| **Vercel** | Static hosting | FREE | Easy deploy, global CDN |
| **Tencent Cloud (HK)** | VPS/Static | ~$5/mo | HK server, low latency to Middle East |
| **Alibaba Cloud (HK)** | VPS | ~$5/mo | HK region, China-origin friendly |
| **Hostinger (HK)** | Shared hosting | ~$3/mo | Easy cPanel, HK datacenter |

**Recommended approach:** Use **Cloudflare Pages** (free) — push code to GitHub, auto-deploys, free SSL, global CDN with Middle East edge nodes.

---

## 3. Deploy with Cloudflare Pages (Recommended, Free)

1. Create a GitHub account (github.com) if you don't have one
2. Create a new repository, upload all website files
3. Go to pages.cloudflare.com, connect your GitHub
4. Select the repository
5. Build settings:
   - Framework: None
   - Build command: (leave empty)
   - Output directory: `/` (root)
6. Click "Deploy" — your site is live at `yourproject.pages.dev`
7. Add custom domain: Settings → Custom domains → Add `fireguardtrading.com`
8. Update DNS at your domain registrar to point to Cloudflare

---

## 4. Google SEO Setup (Critical for Middle East Traffic)

### Step 1: Google Search Console
1. Go to search.google.com/search-console
2. Add your property (domain or URL prefix)
3. Verify ownership (DNS TXT record or HTML file)
4. Add the verification code to `index.html` `<head>`:
   ```html
   <meta name="google-site-verification" content="YOUR_CODE" />
   ```
5. Submit sitemap: enter `https://fireguardtrading.com/sitemap.xml`

### Step 2: Google Analytics (Optional but Recommended)
1. Go to analytics.google.com, create account
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `<head>` in `index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Step 3: Google Business Profile (Optional)
- Register at business.google.com
- Helps with local search visibility in target countries

### Step 4: Target Middle East Keywords
The site is already optimized for these keywords:
- "fire extinguisher supplier Middle East"
- "refurbished fire extinguisher"
- "fire safety equipment UAE"
- "fire fighting equipment Saudi Arabia"
- "CO2 fire extinguisher exporter"
- "dry powder extinguisher wholesale"

---

## 5. Post-Launch Checklist

- [ ] Replace all WhatsApp numbers with real number
- [ ] Replace email addresses
- [ ] Replace phone numbers
- [ ] Buy domain and configure DNS
- [ ] Deploy to hosting
- [ ] Verify SSL certificate is active (https://)
- [ ] Submit to Google Search Console
- [ ] Submit sitemap.xml
- [ ] Test language switcher (EN ↔ AR)
- [ ] Test WhatsApp links on mobile
- [ ] Test form submission
- [ ] Add real product photos (replace emoji icons)
- [ ] Set up Google Analytics
- [ ] Test on mobile devices

---

## 6. Future Enhancements

Consider adding later:
- Real product photos (replace emoji placeholders)
- Product detail pages with specifications
- Online catalog PDF download
- Google Ads / Google Shopping campaigns
- Blog section for SEO content (fire safety tips, regulations)
- Multi-currency pricing display
- Customer testimonials / case studies
