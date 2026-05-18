# Aqil Afif - Interactive Portfolio Website

A modern, interactive portfolio website showcasing the skills, experience, and projects of Aqil Afif, a fresh graduate in Informatics Engineering Education with expertise in Machine Learning, Web Development, and Mobile Development.

## 🌟 Features

### Interactive Animations
- **Matrix-style name typing animation** with random character effects
- **Dynamic role cycling** with backspace/typing effects for different specializations
- **Interactive particle background** with mouse-responsive connections
- **Smooth scroll-triggered animations** for sections and elements
- **Animated progress bars** with shimmer effects and percentage counters
- **Elegant card hover effects** with scaling and glow animations

### Modern Design
- **Responsive design** optimized for all devices and screen sizes
- **Clean, professional layout** with modern typography and spacing
- **Purple accent color scheme** (#8b5cf6) with sophisticated gray tones
- **Smooth scrolling navigation** with active section highlighting
- **Mobile-first approach** with collapsible navigation menu

### Content Sections
- **Hero Section** - Dynamic introduction with animated profile image
- **About Section** - Education, location, languages, and certifications
- **Skills Section** - Interactive progress bars for technical competencies
- **Experience Section** - Professional journey with detailed descriptions
- **Projects Section** - Featured work across different technology domains
- **Contact Section** - Multiple contact methods and interactive form

## 🚀 Technologies Used

### Frontend Framework
- **Next.js 15** with App Router
- **React 18** with TypeScript
- **Tailwind CSS v4** for styling and animations

### UI Components
- **shadcn/ui** component library
- **Lucide React** for icons
- **Custom CSS animations** and keyframes

### Interactive Features
- **Canvas API** for particle background effects
- **Intersection Observer** for scroll-triggered animations
- **Custom React hooks** for typing animations and scroll detection

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Setup Instructions

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd aqil-portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 🏗️ Project Structure

\`\`\`
aqil-portfolio/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Main portfolio page
├── components/
│   ├── ui/                  # shadcn/ui components
│   └── theme-provider.tsx   # Theme configuration
├── hooks/
│   ├── use-mobile.tsx       # Mobile detection hook
│   └── use-toast.ts         # Toast notifications
├── lib/
│   └── utils.ts             # Utility functions
├── public/
│   └── images/
│       └── aqil-profile.jpg # Profile image
├── next.config.mjs          # Next.js configuration
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
\`\`\`

## 🎨 Customization

### Personal Information
Update the personal details in `app/page.tsx`:
- Name, contact information, and social links
- Professional experience and education
- Skills and certifications
- Project descriptions

### Styling and Colors
Modify the color scheme in `app/globals.css`:
- Update CSS custom properties for colors
- Adjust animation timings and effects
- Customize component styling

### Profile Image
Replace `public/images/aqil-profile.jpg` with your own professional photo.

### Content Sections
Edit the data arrays in `app/page.tsx`:
- `skills` - Technical competencies with progress levels
- `experiences` - Professional work history
- `certifications` - Professional certifications
- `projects` - Featured projects and work

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Other Platforms
The portfolio is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Performance Features

- **Optimized animations** with CSS transforms and GPU acceleration
- **Lazy loading** for images and components
- **Responsive images** with proper sizing
- **Minimal JavaScript bundle** with Next.js optimization
- **SEO-friendly** with proper meta tags and semantic HTML

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements that could benefit others, pull requests are welcome!

## 📞 Contact

**Aqil Afif**
- Email: aqfasmanju7@gmail.com
- Phone: +62 812-6147-9569
- LinkedIn: [linkedin.com/in/aqil-af-50548a278](https://www.linkedin.com/in/aqil-af-50548a278/)
- GitHub: [github.com/Aqfa07](https://github.com/Aqfa07)
- Location: Kota Padang, Sumatera Barat, Indonesia

---

Built with ❤️ using modern web technologies and best practices.
