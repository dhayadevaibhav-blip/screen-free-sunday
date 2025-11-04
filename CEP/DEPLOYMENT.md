# 🚢 Deployment Guide

## Vercel Deployment (Recommended)

### Step 1: Prepare Your Code
1. Make sure all changes are committed
2. Push to GitHub/GitLab/Bitbucket

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select your repository
4. Configure project settings
5. Add environment variables (see below)
6. Click "Deploy"

### Step 3: Environment Variables

Add these in Vercel Dashboard → Settings → Environment Variables:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=your-contact@email.com
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

**Important**: Mark these as "Production" and "Preview" environments

### Step 4: Verify Deployment
1. Visit your Vercel URL
2. Test the contact form
3. Check responsiveness on mobile
4. Verify all sections load

## Other Deployment Options

### Netlify
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables
5. Deploy

### Self-Hosted (VPS)
1. SSH into your server
2. Install Node.js and npm
3. Clone repository
4. Run `npm install`
5. Set environment variables
6. Run `npm run build`
7. Use PM2 to run `npm start`
8. Configure Nginx as reverse proxy

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] Mobile responsive
- [ ] Contact form sends emails
- [ ] All animations work smoothly
- [ ] Images display properly
- [ ] Social links work
- [ ] Footer displays correctly
- [ ] SEO metadata present
- [ ] Performance is good
- [ ] SSL certificate active

## Domain Configuration

### Adding Custom Domain (Vercel)
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. Wait for SSL provisioning

### Environment Variable Update
Update `NEXT_PUBLIC_APP_URL` to your production domain

## Monitoring

### Recommended Tools
- **Vercel Analytics** (built-in)
- **Google Analytics** (optional)
- **Sentry** (error tracking)

### Performance Monitoring
- Check Core Web Vitals
- Monitor page load times
- Track contact form submissions
- Check email deliverability

## Maintenance

### Regular Updates
```bash
# Update dependencies
npm update

# Check for outdated packages
npm outdated

# Run security audit
npm audit
```

### Backup
- Regular database backups (if using)
- Version control (Git)
- Environment variables backup
- Image assets backup

## Troubleshooting

### Build Fails
- Check Node.js version (need 18+)
- Verify all dependencies installed
- Check for TypeScript errors
- Review Vercel build logs

### Contact Form Not Working
- Verify SMTP credentials
- Check environment variables
- Test email configuration
- Review server logs

### Images Not Loading
- Verify public folder structure
- Check image file names
- Ensure files are committed
- Clear browser cache

## Support

For deployment issues:
- Check Vercel documentation
- Review Next.js deployment guide
- Check project GitHub issues
- Contact Vercel support

---

**Ready to go live?** Your beautiful website is just a few clicks away! 🎉





