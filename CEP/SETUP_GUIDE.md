# 🚀 Quick Setup Guide

## Installation Steps

### 1. Install Node.js (if not already installed)
Download and install Node.js 18+ from https://nodejs.org/

### 2. Navigate to Project Directory
```bash
cd screen-free-sundays
```

### 3. Install Dependencies
```bash
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- Nodemailer
- TypeScript

### 4. Set Up Environment Variables

Create a `.env.local` file in the root directory and add:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
CONTACT_EMAIL=your-contact-email@gmail.com
```

**Important**: For Gmail, you need to:
1. Enable 2-Factor Authentication on your Google account
2. Generate an "App Password" at: https://myaccount.google.com/apppasswords
3. Use this App Password as `SMTP_PASS` (not your regular password)

### 5. Run Development Server
```bash
npm run dev
```

Open your browser to: **http://localhost:3000**

## 📸 Adding Your Images

The gallery section uses placeholder gradient backgrounds. To add real images:

1. Create a `public` folder in the root directory
2. Add your images with these names:
   - `placeholder-kids-playing.jpg`
   - `placeholder-yoga.jpg`
   - `placeholder-meditation.jpg`
   - `placeholder-sports.jpg`
   - `placeholder-activity.jpg`
   - `placeholder-smiles.jpg`

3. The images will automatically appear in the Gallery section

## 🎨 Customization

### Change Colors
Edit `tailwind.config.ts` and modify the `colors` section

### Change Font
Edit `app/layout.tsx` and replace the imported font

### Edit Content
All text content is in the component files in the `components/` folder

## 🚢 Deploy to Vercel

1. Push your code to GitHub
2. Go to https://vercel.com and import your repo
3. Add environment variables in Vercel dashboard
4. Click Deploy!

## ⚡ Quick Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🐛 Troubleshooting

### "Cannot find module 'lucide-react'"
Run `npm install` again

### Contact form not sending emails
- Check your `.env.local` file exists
- Verify SMTP credentials are correct
- Make sure you're using an App Password for Gmail

### Images not showing
- Make sure images are in the `public/` folder
- Verify image filenames match exactly
- Check browser console for errors

## 📞 Need Help?

Check the full README.md for more details or open an issue on GitHub.





