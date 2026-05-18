import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://aqil-afif.vercel.app"),
  title: "Aqil Afif | Machine Learning & Web Developer Indonesia",
  description:
    "Portfolio of Aqil Afif — Fresh graduate in Informatics Engineering from Universitas Negeri Padang, specializing in Machine Learning, Web Development, and Mobile Development.",
  keywords: [
    "Aqil Afif",
    "Machine Learning Developer Indonesia",
    "Web Developer Padang",
    "Software Engineer Fresh Graduate",
    "TensorFlow Developer",
    "Next.js Developer",
    "Android Developer",
  ],
  authors: [{ name: "Aqil Afif", url: "https://aqil-afif.vercel.app" }],
  creator: "Aqil Afif",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://aqil-afif.vercel.app",
    siteName: "Aqil Afif Portfolio",
    title: "Aqil Afif | Machine Learning & Web Developer Indonesia",
    description:
      "Portfolio of Aqil Afif — specializing in Machine Learning, Web Development, and Mobile Development.",
    images: [
      {
        url: "/images/aqil-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Aqil Afif — Machine Learning & Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqil Afif | Machine Learning & Web Developer",
    description:
      "Portfolio of Aqil Afif — specializing in Machine Learning, Web Development, and Mobile Development.",
    images: ["/images/aqil-profile.jpg"],
  },
  alternates: {
    canonical: "https://aqil-afif.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aqil Afif",
  url: "https://aqil-afif.vercel.app",
  email: "aqfasmanju7@gmail.com",
  jobTitle: "Machine Learning Engineer & Full-Stack Developer",
  description: "Fresh graduate specializing in Machine Learning, Web Development, and Cloud Computing. TensorFlow Developer Certified, AWS re/Start Graduate, C1 English.",
  image: "https://aqil-afif.vercel.app/images/aqil-profile.jpg",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universitas Negeri Padang",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kota Padang",
    addressRegion: "Sumatera Barat",
    addressCountry: "ID",
  },
  sameAs: [
    "https://github.com/Aqfa07",
    "https://www.linkedin.com/in/aqilafif",
    "https://www.credly.com/users/aqil-afif",
  ],
  knowsAbout: [
    "Machine Learning", "Deep Learning", "TensorFlow", "Python",
    "Web Development", "Next.js", "React", "TypeScript",
    "Mobile Development", "Android", "Google Cloud", "AWS",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "TensorFlow Developer Certificate",
      credentialCategory: "Professional Certificate",
      recognizedBy: { "@type": "Organization", name: "TensorFlow / Google" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "AWS re/Start Graduate",
      credentialCategory: "Professional Certificate",
      recognizedBy: { "@type": "Organization", name: "Amazon Web Services" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Junior Web Programmer",
      credentialCategory: "Professional Certificate",
      recognizedBy: { "@type": "Organization", name: "BNSP Indonesia" },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
