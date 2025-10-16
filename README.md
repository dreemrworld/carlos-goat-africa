# Carlos Araújo Portfolio

A modern minimilist single page developer portfolio website showcasing projects, experience, and skills. Built with Next.js, featuring smooth animations and a clean design.

## 🚀 Live Demo

Visit the live version at: [https://dev.goat.africa](https://dev.goat.africa)

![og-image](public/images/og-image.jpg)

## ✨ Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Mode**: Theme toggle with smooth transitions
- **Smooth Animations**: Powered by Framer Motion
- **SEO Optimized**: Includes sitemap generation and meta tags
- **Type-Safe**: Built with TypeScript for better development experience
- **Fast Performance**: Optimized with Next.js and Tailwind CSS
- **WhatsApp Contact**: Direct link for instant messaging
- **Open Graph Images**: Configured for enhanced social media sharing
- **Twitter Card Images**: Optimized images for Twitter previews

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Radix UI
- **Icons**: Lucide React & React Icons
- **Theme**: next-themes

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Git

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd dev.goat.africa
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory and add the following variables:

```env
SITE_URL=https://dev.goat.africa
```

> **Note**: The SITE_URL is required for sitemap generation. Replace with your actual domain if deploying elsewhere.

### 4. Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbo
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run preview` - Build and preview production locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format:check` - Check code formatting
- `npm run format:write` - Format code
- `npm run typecheck` - Run TypeScript type checking

## 🚀 Deployment

### Cloudflare Pages

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy**:
   - Connect your GitHub repository to Cloudflare Pages
   - Set build command to `npm run build`
   - Set build output directory to `out` (Next.js static export)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/
│   ├── about.tsx           # About section
│   ├── contact.tsx         # Contact form
│   ├── experience.tsx      # Work experience
│   ├── header.tsx          # Navigation header
│   ├── intro.tsx           # Hero/intro section
│   ├── projects.tsx        # Projects showcase
│   └── ...                 # Other UI components
├── hooks/
│   └── use-section-in-view.ts  # Intersection observer hook
├── lib/
│   ├── data.tsx            # Static data
│   ├── utils.ts            # Utility functions
│   └── ...                 # Configuration files
└── styles/
    └── globals.css         # Global styles
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

## 📧 Contact

For questions or issues, reach out to: [carlos@goat.africa](mailto:carlos@goat.africa)

## 🙏 Acknowledgments

Thanks to [michael scholak](https://github.com/michaelscholak) for allowing this fork and providing the original inspiration.
