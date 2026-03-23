# 🌿 Nate's Spa — Luxury Wellness & Beauty Website

A fully responsive, single-page spa website built with pure **HTML, CSS, and vanilla JavaScript** — no frameworks, no dependencies. Designed to look and feel like a premium real-world business website with a working appointment booking registration form.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Live Preview](#live-preview)
- [Features](#features)
- [Website Sections](#website-sections)
- [Booking Form — How It Works](#booking-form--how-it-works)
- [Technology Stack](#technology-stack)
- [Design System](#design-system)
- [Fonts & Typography](#fonts--typography)
- [File Structure](#file-structure)
- [How to Run](#how-to-run)
- [Responsive Design](#responsive-design)
- [JavaScript Functions](#javascript-functions)
- [Images](#images)
- [Customisation Guide](#customisation-guide)
- [Future Improvements](#future-improvements)
- [Credits](#credits)

---

## 📌 Project Overview

**Nate's Spa** is a front-end internship project (Task 3) built to simulate a real local business website. It demonstrates:

- Professional web design inspired by Dribbble and Awwwards
- A fully functional appointment booking system with form validation
- Smooth animations, scroll-reveal effects, and interactive UI
- Mobile-first responsive layout
- Real photography from Unsplash

The website was built as part of the **Future Interns Full Stack Web Development Programme (2026)** — Task 3: *Build, Pitch & Monetise a Real Local Business Website*.

---

## 🌐 Live Preview

Open `index.html` in any modern browser (Chrome, Firefox, Safari, Edge).  
No server or installation required — it runs entirely in the browser.

```
/spa-website/
└── index.html   ← Open this file
└── README.md    ← You are reading this
```

---

## ✨ Features

| Feature | Description |
|---|---|
| Fixed Navigation Bar | Transparent on hero, solid white on scroll with active link highlighting |
| Mobile Hamburger Menu | Collapsible mobile nav for screens under 768px |
| Hero Section | Full-viewport image with slow zoom animation and CTA buttons |
| Scrolling Ticker | Infinite marquee banner displaying all service categories |
| Service Cards | Hover-reveal overlays with price, description, and Book Now button |
| Photo Gallery | Asymmetric mosaic grid with 5 real spa images |
| Testimonials | 3-column dark section with client quotes and avatars |
| Booking Form | Full registration-style appointment form with live validation |
| Treatment Cards | 10 clickable treatment selector cards inside the booking form |
| Time Slot Picker | 23 half-hourly slots per day; some marked as unavailable |
| Add-Ons | 6 optional extras with prices that update a live running total |
| Live Summary Bar | Real-time booking summary showing treatment, date, time, total |
| Booking Confirmation | Success screen with unique reference number and printable receipt |
| Scroll-Reveal Animations | Elements fade in as you scroll down the page |
| Fully Responsive | Works on desktop, tablet, and mobile |

---

## 🗂 Website Sections

### 1. Navigation Bar (`<nav>`)
- Fixed at the top of the page at all times
- **Transparent** with white text when over the hero image
- **Solid white background** with dark text after scrolling 80px
- Links: **Treatment · Haircare · Face · Body Care · Booking · About**
- Active link underline highlights the current section as you scroll
- **"Book Now"** button scrolls directly to the booking form
- On mobile: collapses into a hamburger icon that opens a dropdown menu

### 2. Hero Section
- Full-screen background photograph from Unsplash
- Dark gradient overlay for text readability
- Slow zoom animation on page load (16 seconds, `heroZoom`)
- Animated scroll indicator bar on the right side
- Two call-to-action buttons: **Book Your Visit** and **Explore Services**

### 3. Scrolling Ticker
- Dark background strip between the hero and About section
- Infinite horizontal marquee listing all service types
- Styled in italic Cormorant Garamond with gold accent dots

### 4. About Section (`#about`)
- Two-column grid: left = spa photo, right = text content
- Floating badge showing **"10+ Years"** of experience
- Business description paragraphs
- Three key stats: **3,200+ Clients · 28 Treatments · 12 Staff**

### 5. Treatments Section (`#treatments`)
- Three hover-reveal service cards
- Services: Swedish Massage, Hot Stone Ritual, Deep Tissue Massage
- Each card shows: number, name, description, price, duration, Book Now button
- Clicking any card or its Book Now button scrolls to booking and pre-selects that treatment

### 6. Haircare Section (`#haircare`)
- Four-column grid of haircare service cards
- Services: Scalp Detox, Deep Conditioning, Keratin Repair, Oil Ritual
- Same hover interaction and booking integration as Treatments

### 7. Face Care Section (`#facecare`)
- Four-column grid of facial treatment cards
- Services: Classic Facial, Gold Luxury Facial, Hydra-Glow, LED Brightening
- Price range: $85 – $195

### 8. Body Care Section (`#bodycare`)
- Three-column grid of body treatment cards
- Services: Coffee & Sugar Scrub, Seaweed Detox Wrap, Himalayan Salt Stones
- Price range: $80 – $140

### 9. Photo Gallery
- Asymmetric 12-column CSS Grid mosaic layout
- 5 real photographs of spa interiors and treatments from Unsplash
- Centre image spans two rows for a premium editorial feel
- Hover zoom effect on each photo

### 10. Testimonials Section
- Dark background with faint spa background image
- Three client reviews with 5-star ratings
- Real portrait photos alongside names and roles

### 11. Booking Section (`#booking`) — *See detailed breakdown below*

### 12. Footer
- Four-column grid: Brand info · Services · Visit · Contact
- Social media icon links (Instagram, Facebook, LinkedIn, X)
- Address, phone, email, and opening hours
- Copyright notice and policy links

---

## 📝 Booking Form — How It Works

The booking section is styled as a **professional registration form**, split into two panels:

### Left Panel (Dark) — Info & Quick-Select
- Spa address, opening hours, and contact details
- Quick-select list of 5 popular treatments (click to pre-fill the form)

### Right Panel (White) — Registration Form

The form is divided into clearly labelled sections:

#### 👤 Personal Information
| Field | Type | Required | Validation |
|---|---|---|---|
| First Name | Text | ✅ Yes | Min 2 characters |
| Last Name | Text | ✅ Yes | Min 2 characters |
| Email Address | Email | ✅ Yes | Must contain @ symbol |
| Phone Number | Tel | ✅ Yes | Min 7 digits |
| Date of Birth | Date | Optional | — |
| Gender | Select | Optional | Female / Male / Non-binary / Prefer not to say |
| Number of Guests | Select | Optional | 1–4 guests |

Fields show a **green tick ✓** when valid and a **red border + error message** when invalid.

#### 💆 Choose Your Treatment
10 clickable treatment cards across 5 categories:

| Category | Treatments |
|---|---|
| Massage | Swedish Relaxation · Hot Stone Ritual · Deep Tissue |
| Face | Classic Facial · Gold Luxury Facial · Hydra-Glow |
| Hair | Scalp Detox · Deep Conditioning |
| Body | Coffee Body Scrub · Seaweed Detox Wrap |

Click a card to select it — it highlights with an accent left border and a checkmark. Only one treatment can be selected at a time.

#### 📅 Date & Time
- **Date Picker**: Only future dates are selectable (minimum tomorrow)
- **Therapist Preference**: No preference / Nate / Sara / Jordan / Maya / Chris
- **Time Slots**: 23 half-hourly slots from 9:00 AM to 8:00 PM
  - Some slots are dynamically marked as **"Full ✕"** (simulated bookings)
  - Unavailable slots are greyed out and cannot be clicked
  - Selected slot turns dark/filled

#### ✨ Add-Ons (Optional)
Six optional extras with individual pricing:

| Add-On | Price |
|---|---|
| Aromatherapy Oil Blend | +$20 |
| Hot Towel Ritual | +$30 |
| Jade Face Roller | +$25 |
| Scalp Massage Add-On | +$15 |
| Foot Soak | +$18 |
| Champagne & Fruit | +$35 |

Click to toggle on/off. The running total updates instantly.

#### 📝 Additional Information
- **Health Notes / Allergies** — free text textarea
- **Special Occasion** — Birthday / Anniversary / Baby Shower / Hen Party / Self-Care Day / Gift Voucher
- **How did you hear about us?** — Instagram / Google / Friend / Walk-in / Other

#### 💰 Live Summary Bar
Sits above the submit button and updates in real time:
- Treatment name
- Selected date (formatted e.g. "Mar 24, 2026")
- Selected time slot
- Add-ons selected
- **Running total price** in large accent text

#### ✅ Form Submission
On clicking **"Confirm Appointment →"** the form:
1. Validates all required fields (name, email, phone, date, treatment, time)
2. Highlights any missing fields in red with error messages
3. If all valid: hides the form and shows a **Booking Confirmed** success screen

#### 🎉 Confirmation Screen
Shows:
- "Booking Confirmed!" heading
- Personalised message with the client's email address
- Unique booking reference (e.g. `NTS-K2FX9A`)
- Full booking summary table (name, treatment, date, time, add-ons, total)
- **"Book Another"** button to reset the form
- **"Print Confirmation"** button to print the receipt

---

## 🛠 Technology Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | All styling — Grid, Flexbox, custom properties, animations |
| Vanilla JavaScript | All interactivity — no libraries or frameworks |
| Google Fonts | Typography (Cormorant Garamond + Jost) |
| Unsplash | Real high-resolution photography |

No build tools, no npm, no React, no jQuery. Just open the HTML file and it works.

---

## 🎨 Design System

The website uses a warm luxury colour palette defined as CSS custom properties:

```css
:root {
  --cream:  #f5f0e8;  /* warm off-white, used for section backgrounds */
  --warm:   #faf8f4;  /* lightest background */
  --stone:  #c8b99a;  /* mid-tone warm beige for borders and secondary text */
  --dark:   #1a1612;  /* near-black for text and dark sections */
  --muted:  #8a7968;  /* grey-brown for body text and labels */
  --accent: #b08d72;  /* golden-brown primary accent colour */
  --err:    #c0392b;  /* error red for form validation */
  --ok:     #27ae60;  /* success green for valid field indicators */
}
```

---

## 🔤 Fonts & Typography

Two Google Fonts are used:

| Font | Weight | Usage |
|---|---|---|
| Cormorant Garamond | 300, 400, 600 (regular + italic) | Headings, prices, logo, blockquotes |
| Jost | 200, 300, 400, 500 | Body text, labels, buttons, navigation |

These are loaded via Google Fonts CDN — an internet connection is required for fonts to render correctly.

---

## 📁 File Structure

```
spa-website/
├── index.html      ← Entire website (HTML + CSS + JS in one file)
└── README.md       ← This documentation file
```

Everything is contained in a single `index.html` file for simplicity and portability. In a production environment this would be split into separate CSS, JS, and HTML files.

---

## 🚀 How to Run

**Option 1 — Direct browser open**
1. Download or locate the `index.html` file
2. Double-click it to open in your default browser
3. The website loads immediately — no setup required

**Option 2 — VS Code Live Server**
1. Open the project folder in VS Code
2. Install the **Live Server** extension
3. Right-click `index.html` → **"Open with Live Server"**
4. The site opens at `http://127.0.0.1:5500`

**Option 3 — Python local server**
```bash
cd spa-website
python -m http.server 8080
# Open http://localhost:8080 in your browser
```

> ⚠️ **Note:** Images load from Unsplash CDN. An active internet connection is required to display all photographs.

---

## 📱 Responsive Design

The website is fully responsive across three breakpoints:

| Breakpoint | Layout Changes |
|---|---|
| Desktop (> 1024px) | Full two-column grids, side-by-side booking layout, 3–4 column service grids |
| Tablet (768px – 1024px) | Single column about/booking, 2-column footer, reduced padding |
| Mobile (< 768px) | Hamburger menu, single-column service cards, stacked form rows, 3-column time grid |

---

## ⚙️ JavaScript Functions

| Function | Description |
|---|---|
| `scrollToBooking()` | Smoothly scrolls the page to the booking section |
| `openBookingWith(name)` | Scrolls to booking and pre-selects a treatment by name |
| `toggleMenu()` | Shows/hides the mobile navigation dropdown |
| `selectTx(el, name, price, cat, dur)` | Activates a treatment card and stores the selection in state |
| `quickSelect(name, price)` | Selects a treatment from the left info panel quick-list |
| `updateTimeSlots()` | Renders available and booked time slots for the selected date |
| `getBooked(dateStr)` | Returns a simulated list of unavailable slots for a given date |
| `toggleAddon(el, price)` | Toggles an add-on checkbox and updates the running total |
| `updateSummary()` | Refreshes the live summary bar with current selections and total |
| `validateField(input, type)` | Validates a single input field (name, email, or phone) in real time |
| `submitBooking()` | Validates the entire form and shows the confirmation screen on success |
| `resetForm()` | Resets all fields, clears selections, and returns to the blank form |

---

## 🖼 Images

All images are loaded from **Unsplash** (free high-quality photography):

| Section | Image Description | Unsplash URL |
|---|---|---|
| Hero | Luxury massage treatment | `photo-1600334089648` |
| About | Spa interior / reception | `photo-1515377905703` |
| Treatments | Massage therapy | `photo-1544161515` |
| Treatments | Couples spa room | `photo-1507652313519` |
| Treatments | Body treatment | `photo-1540555700478` |
| Haircare | Treatment room | `photo-1560066984` |
| Haircare | Beauty treatment | `photo-1522337360788` |
| Haircare | Relaxation lounge | `photo-1583416750470` |
| Haircare | Spa booking ambiance | `photo-1519823551278` |
| Facecare | Facial treatment | `photo-1570172619644` |
| Facecare | Gold facial / skincare | `photo-1607008829749` |
| Facecare | Relaxation / wellness | `photo-1506126613408` |
| Facecare | Spa pool | `photo-1563459802257` |
| Bodycare (×3) | Body treatments (reused) | Various |
| Gallery | 5 spa interior photos | Various |
| Testimonials | 3 client portraits | Various |

---

## 🔧 Customisation Guide

### Change the business name
Search and replace `Nate's Spa` and `NATE'S SPA` in `index.html`.

### Change colours
Edit the CSS variables in `:root {}` at the top of the `<style>` block.

### Add a new service card
Copy one of the existing `.srv-card` divs, update the image URL, title, description, price, and `onclick` treatment name.

### Add a new treatment to the booking form
Copy a `.tx-card` div in the `#txCards` section and update the `onclick` parameters:
```html
<div class="tx-card" onclick="selectTx(this, 'Treatment Name', PRICE, 'Category', 'Duration')">
```

### Change contact details
Search for `12 Serenity Lane`, `hello@natesspa.com`, and `+1 (800) 628-3772` and replace with your real details.

### Connect to a real backend
Replace the `submitBooking()` function's confirmation logic with a `fetch()` call to your API endpoint:
```javascript
await fetch('/api/bookings', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, treatment, date, time, addons })
});
```

---

## 🔮 Future Improvements

- [ ] Connect to a real backend (Node.js / Express) to store bookings in a database
- [ ] Add email confirmation using Nodemailer or SendGrid
- [ ] Integrate a real calendar API (Google Calendar) for live availability
- [ ] Add a payment/deposit step using Stripe
- [ ] Build an admin dashboard to view and manage appointments
- [ ] Add user login / account creation for returning clients
- [ ] Add Google Maps embed for the location
- [ ] Add WhatsApp direct booking button
- [ ] Implement a gift card purchase flow
- [ ] Add multi-language support

---

## 🏷 Project Info

| Detail | Value |
|---|---|
| Project | Full Stack Web Development — Task 3 |
| Programme | Future Interns (2026) |
| Business | Nate's Spa (local business simulation) |
| Type | Front-End Website — HTML/CSS/JS |
| File Count | 1 HTML file (self-contained) |
| Lines of Code | ~1,300 |
| Built With | HTML5, CSS3, Vanilla JavaScript |
| Images | Unsplash (free licence) |
| Fonts | Google Fonts (Cormorant Garamond + Jost) |

---

## 📄 Credits

- **Photography** — [Unsplash](https://unsplash.com) (free to use under Unsplash Licence)
- **Fonts** — [Google Fonts](https://fonts.google.com) — Cormorant Garamond, Jost
- **Design Inspiration** — [Dribbble](https://dribbble.com), [Awwwards](https://www.awwwards.com), [Webflow Inspo](https://webflow.com/made-in-webflow)
- **Built by** — Internship Task 3 submission for Future Interns Programme

---

*© 2026 Nate's Spa. Built as part of the Future Interns Full Stack Web Development Internship.*
