# Screen Free Sundays 🌱

A beautiful, modern landing page for **Screen Free Sundays** - a social initiative helping children and teens overcome phone and social media addiction through offline activities every Sunday.

## 🌟 Features

- **Stunning Design**: Elegant, nature-inspired UI with smooth animations
- **Fully Responsive**: Beautiful on all devices from mobile to desktop
- **Interactive Animations**: Powered by Framer Motion for smooth transitions
- **Contact Form**: Functional email integration with Nodemailer
- **Modern Stack**: Next.js 14, Tailwind CSS, TypeScript
- **Performance Optimized**: Fast loading, SEO-friendly

## 🎨 Design Philosophy

The website embodies the core message: **"Unplug to Reconnect"**

- Calm, peaceful, and nature-inspired color palette
- Minimal yet expressive design with ample white space
- Smooth, gentle animations that feel alive
- Elegant typography using Poppins font
- Glassmorphism and gradient effects
- Hover interactions and scroll reveals

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   cd screen-free-sundays
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```env
   # SMTP Configuration for Contact Form
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   
   # Contact Email (where form submissions will be sent)
   CONTACT_EMAIL=your-contact-email@gmail.com
   ```

   **Note**: For Gmail, you'll need to generate an [App Password](https://support.google.com/accounts/answer/185833) instead of using your regular password.

4. **Add images to public folder**

   Create the following directory structure and add your images:
   ```
   public/
   ├── placeholder-kids-playing.jpg
   ├── placeholder-yoga.jpg
   ├── placeholder-meditation.jpg
   ├── placeholder-sports.jpg
   ├── placeholder-activity.jpg
   └── placeholder-smiles.jpg
   ```

   These are currently using placeholder gradients. Replace with actual images of your activities.

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
screen-free-sundays/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── globals.css               # Global styles and Tailwind config
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main page component
├── components/
│   ├── Header.tsx                # Sticky navigation header
│   ├── Hero.tsx                  # Hero section with CTA
│   ├── About.tsx                 # Mission and vision section
│   ├── Activities.tsx            # Activities showcase
│   ├── Gallery.tsx               # Image and video gallery
│   ├── Footer.tsx                # Footer with social links
│   └── ContactModal.tsx          # Contact form modal
├── public/
│   └── assets/                   # Images and media files
├── .env.local                    # Environment variables (not in git)
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.js                # Next.js configuration
└── package.json                  # Dependencies
```

## 🎯 Sections

### Hero Section
- Eye-catching gradient background
- Compelling headline: "Rediscover Life Beyond the Screen"
- Smooth scroll to about section
- Animated floating shapes

### About Section
- Mission statement
- Location information (Chawni, Chh. Sambhajinagar)
- Feature cards with icons
- Activities preview

### Activities Section
- Three main activity cards:
  - Digital Detox Workshops
  - Mindfulness & Yoga
  - Team Sports & Games
- Hover animations and gradients

### Gallery Section
- Responsive image grid
- Video modal with play button
- Smooth image hover effects

### Contact Section
- Elegant modal with glassmorphism
- Form validation
- Email submission via API
- Success/error feedback

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

Vercel automatically builds and deploys your Next.js app.

### Environment Variables for Vercel

Make sure to add these in your Vercel project settings:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_EMAIL`

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  primary: {
    // Adjust these values
    500: "#1890ff",
  },
  mint: {
    // Adjust these values
    500: "#22c55e",
  },
}
```

### Typography

Change the font in `app/layout.tsx`:
```typescript
import { Inter } from "next/font/google";
// or
import { Montserrat } from "next/font/google";
```

### Content

- Edit text content directly in component files
- Add more sections by creating new components
- Modify animations in Framer Motion components

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## 💬 Support

For questions or support, please open an issue or contact us through the website's contact form.

---

Built with ❤️ for a balanced digital life 🌱





