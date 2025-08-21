# Synapeer Technologies Inc. Website

Modern, responsive website for Synapeer Technologies Inc. built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.

## 🚀 Features

- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS** for styling with custom design system
- **shadcn/ui** components for consistent UI
- **Motion One** for smooth animations
- **Responsive Design** optimized for all devices
- **SEO Optimized** with metadata and structured data
- **Contact Form** with validation and API integration
- **Interactive Before/After Slider** for AI Food Photography
- **Performance Optimized** with modern web standards

## 📁 Project Structure

```
synapeer/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── ai/                # AI applications pages
│   ├── consultancy/       # Digital marketing services
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── header.tsx        # Navigation header
│   ├── footer.tsx        # Site footer
│   ├── split-hero.tsx    # Hero section component
│   └── ...               # Other custom components
├── content/              # Content and data
│   ├── site.ts          # Site configuration
│   ├── services.ts      # Services data
│   └── process.ts       # Process steps data
├── lib/                  # Utility functions
│   └── utils.ts         # Helper functions
└── public/              # Static assets
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Motion One (@motionone/react)
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd synapeer
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Email Service (Optional)
RESEND_API_KEY=your_resend_api_key

# Calendly (Optional)
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-handle/intro-call
```

## 🎨 Customization

### Content Management

Edit content in the `content/` directory:

- **`content/site.ts`**: Site-wide configuration, navigation, CTAs
- **`content/services.ts`**: Services and features data
- **`content/process.ts`**: Process steps and methodology

### Styling

- **Colors**: Modify CSS variables in `src/app/globals.css`
- **Components**: Customize shadcn/ui components in `components/ui/`
- **Layout**: Update Tailwind classes in component files

### Adding New Pages

1. Create a new directory in `app/`
2. Add `page.tsx` with your content
3. Update navigation in `content/site.ts`
4. Add metadata export for SEO

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy

### Manual Deployment

1. **Build the project**
   ```bash
   pnpm build
   ```

2. **Start production server**
   ```bash
   pnpm start
   ```

## 📱 Pages & Routes

- **`/`** - Home page with split hero and services overview
- **`/consultancy`** - Digital marketing services
- **`/ai`** - AI applications overview
- **`/ai/food-photography`** - AI Food Photography landing page
- **`/about`** - Company information and team
- **`/contact`** - Contact form and information

## 🔧 API Endpoints

- **`POST /api/contact`** - Contact form submission
  - Validates form data with Zod
  - Logs submission (configure email service for production)

## 🎯 Key Features

### Split Hero Section
- 50/50 split layout with contrasting backgrounds
- Smooth animations with Motion One
- Responsive design for all screen sizes

### Interactive Before/After Slider
- Drag-to-compare functionality
- Touch support for mobile devices
- Smooth spring animations

### Contact Form
- Form validation with React Hook Form + Zod
- Real-time error feedback
- Success/error state handling
- API integration ready

### Performance Optimized
- Next.js Image optimization
- Lazy loading for heavy sections
- Optimized animations with Motion One
- SEO-friendly metadata

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Synapeer Technologies Inc.

## 📞 Support

For questions or support, contact:
- Email: info@synapeer.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ by Synapeer Technologies Inc.
