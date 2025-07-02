# Talim Multi-Portal Deployment Guide

## Overview

This guide helps you deploy the Talim multi-portal system with proper subdomain configuration on Vercel.

## Domain Structure

- **Main Landing Page**: `www.mytalim.com` (this project)
- **Student Portal**: `students.mytalim.com`
- **Teacher Portal**: `teachers.mytalim.com`
- **Parent Portal**: `parents.mytalim.com`
- **School Admin Portal**: `school.mytalim.com`

## Vercel Deployment Steps

### 1. Deploy Each Application Separately

#### Landing Page (this project)

```bash
# Deploy the landing page
cd Talim-landingpage
vercel --prod
```

#### Parent Portal

```bash
# Deploy the parent portal
cd talim-parents
vercel --prod
```

#### School Admin Portal

```bash
# Deploy the school admin portal
cd Talim-Sch-Admin
vercel --prod
```

### 2. Configure Custom Domains in Vercel Dashboard

For each deployed project in Vercel:

1. Go to your project settings in Vercel Dashboard
2. Navigate to "Domains" section
3. Add the appropriate custom domain:

#### Landing Page Project

- Add domain: `mytalim.com`
- Add domain: `www.mytalim.com`

#### Parent Portal Project

- Add domain: `parents.mytalim.com`

#### School Admin Portal Project

- Add domain: `school.mytalim.com`

#### Future Student Portal Project

- Add domain: `students.mytalim.com`

#### Future Teacher Portal Project

- Add domain: `teachers.mytalim.com`

### 3. DNS Configuration

In your domain registrar (e.g., GoDaddy, Namecheap, etc.), add these DNS records:

```
Type    Name        Value                   TTL
CNAME   www         cname.vercel-dns.com    Auto
CNAME   students    cname.vercel-dns.com    Auto
CNAME   teachers    cname.vercel-dns.com    Auto
CNAME   parents     cname.vercel-dns.com    Auto
CNAME   school      cname.vercel-dns.com    Auto
A       @           76.76.19.19             Auto
AAAA    @           2606:4700:90:0:f22e:fbec:5bed:a9b9   Auto
```

### 4. Environment Variables

Set these environment variables in each Vercel project:

#### All Projects

```
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.mytalim.com
```

#### Landing Page Specific

```
NEXT_PUBLIC_STUDENT_PORTAL_URL=https://students.mytalim.com
NEXT_PUBLIC_TEACHER_PORTAL_URL=https://teachers.mytalim.com
NEXT_PUBLIC_PARENT_PORTAL_URL=https://parents.mytalim.com
NEXT_PUBLIC_SCHOOL_PORTAL_URL=https://school.mytalim.com
```

### 5. Update Portal URLs (if needed)

If you want to use environment variables instead of hardcoded URLs, update the `PortalModal.tsx`:

```typescript
const portals: Portal[] = [
  {
    name: "Student",
    url:
      process.env.NEXT_PUBLIC_STUDENT_PORTAL_URL ||
      "https://students.mytalim.com",
    description: "Access your courses, assignments, and progress",
    icon: "🎓",
  },
  // ... other portals
];
```

### 6. Verification Steps

1. **Test each subdomain** after deployment
2. **Verify SSL certificates** are automatically provisioned
3. **Check redirects** work properly from the landing page modal
4. **Test responsive design** on different devices
5. **Verify analytics** and tracking (if implemented)

### 7. Monitoring and Analytics

Consider adding:

- **Vercel Analytics** for performance monitoring
- **Google Analytics** for user tracking
- **Error monitoring** (e.g., Sentry)

### 8. Continuous Deployment

Set up GitHub integration for automatic deployments:

1. Connect each repository to its respective Vercel project
2. Configure automatic deployments on push to main/master branch
3. Set up preview deployments for pull requests

## Troubleshooting

### Common Issues:

1. **Domain not propagating**: Wait 24-48 hours for DNS propagation
2. **SSL certificate issues**: Vercel automatically handles this, but may take a few minutes
3. **CORS errors**: Ensure your backend API allows requests from all portal domains
4. **404 errors on refresh**: Make sure each Next.js app has proper routing configuration

### Support

For additional help:

- Vercel Documentation: https://vercel.com/docs
- Domain Configuration: https://vercel.com/docs/custom-domains
- Contact: support@mytalim.com
