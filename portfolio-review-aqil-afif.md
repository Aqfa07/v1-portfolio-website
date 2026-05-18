# Review & Panduan Perbaikan Portfolio — Aqil Afif
**Website:** https://aqil-afif.vercel.app/  
**Reviewer:** UI/UX & Web Consultant  
**Tanggal Review:** Mei 2026  
**Status:** Fresh Graduate — Target: Job / Freelance di bidang ML, Web Dev, Mobile Dev

---

## Ringkasan Eksekutif

| Aspek | Skor | Status |
|---|---|---|
| UI Design | 6/10 | Perlu perbaikan |
| UX & Navigasi | 6.5/10 | Perlu perbaikan |
| Konten & Copywriting | 5.5/10 | Perlu perbaikan signifikan |
| Personal Branding | 6/10 | Perlu perbaikan |
| SEO & Performa | 7.5/10 | Sudah baik, sedikit optimasi |
| Aksesibilitas | 6/10 | Perlu perbaikan |
| **Keseluruhan** | **6.1/10** | **Fondasi baik — butuh perbaikan kritikal sebelum dibagikan ke rekruter** |

> **Catatan penting:** Website ini punya fondasi yang solid — SEO sudah dikerjakan dengan serius, struktur navigasi logis, dan sertifikasi yang mumpuni. Namun ada beberapa bug dan keputusan konten yang bisa langsung merugikan kesan pertama rekruter. Perbaikan di dokumen ini difokuskan pada hal-hal yang paling berdampak terhadap peluang mendapat pekerjaan.

---

## 🚨 Bug Kritikal — Harus Diperbaiki Sekarang

### Skill Bar Menampilkan 0%

Semua skill bar di section Frontend menampilkan 0%:
- HTML & CSS → 0%
- JavaScript → 0%
- React / Next.js → 0%
- Tailwind CSS → 0%

**Dampak:** Rekruter yang melihat ini akan langsung meragukan kompetensi teknis. Ini adalah bug paling merusak kredibilitas di seluruh website.

**Cara memperbaiki:**
```jsx
// Cari komponen skill bar, kemungkinan ada di:
// components/Skills.jsx atau sections/Skills.jsx

// Pastikan nilai width prop sudah terisi, contoh:
<SkillBar skill="HTML & CSS" percentage={90} />
<SkillBar skill="JavaScript" percentage={85} />
<SkillBar skill="React / Next.js" percentage={80} />
<SkillBar skill="Tailwind CSS" percentage={88} />

// Atau jika menggunakan CSS animation, pastikan nilai CSS variable sudah di-set:
// --skill-width: 90%;  // jangan biarkan 0% atau undefined
```

**Rekomendasi tambahan:** Pertimbangkan mengganti skill bar dengan format yang lebih aman dan tidak perlu angka — lihat section Skills di bawah.

---

## 1. UI (User Interface) — Skor: 6/10

### 1.1 Konsistensi Warna, Tipografi & Spacing

**Temuan:**
- Palet warna biru-ungu konsisten dan terkesan modern — ini sudah baik
- Ada ketidakseragaman spacing antar section (ada yang terlalu rapat, ada yang terlalu longgar)
- Hierarki tipografi belum sepenuhnya konsisten

**Rekomendasi:**

Pastikan variabel CSS/Tailwind digunakan secara konsisten. Jika menggunakan Tailwind, buat design tokens di `tailwind.config.js`:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        'section': '5rem',      // jarak antar section
        'section-sm': '3rem',   // untuk mobile
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'section-title': ['2rem', { lineHeight: '1.2', fontWeight: '600' }],
      }
    }
  }
}
```

Terapkan spacing section yang konsisten:
```jsx
// Buat komponen Section wrapper
const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    <div className="container mx-auto px-4 max-w-6xl">
      {children}
    </div>
  </section>
);
```

### 1.2 Kualitas Visual & Profesionalisme

**Temuan:**
- Tampilan terkesan "template-ish" — menggunakan pola hero + skill grid yang umum
- Belum ada elemen visual unik yang menonjolkan identitas Aqil
- Section certifications dengan 93 badge sangat ramai (visual noise)

**Rekomendasi:**

Tambahkan satu elemen visual signature. Pilihan yang realistis dengan Next.js + Tailwind:

```jsx
// Opsi 1: Gradient mesh background di hero (subtle)
<div className="relative overflow-hidden">
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
    <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
  </div>
  {/* hero content */}
</div>

// Opsi 2: Custom animated border di profile photo
<div className="relative w-64 h-64 mx-auto">
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-spin-slow opacity-75" />
  <img src="/images/aqil-profile.jpg" className="relative rounded-full w-60 h-60 m-2 object-cover" />
</div>
```

### 1.3 Hierarki Visual

**Temuan:**
- Hero section sudah mengarahkan mata ke nama dan headline — sudah benar
- Tapi CTA (View My Work, Download CV) kurang menonjol secara visual
- Stat counter di hero (3+ Projects, 2 BNSP, C1, 1+ Year) kurang terekspos

**Rekomendasi:**

Perkuat kontras CTA button:
```jsx
// Primary CTA — harus paling mencolok
<a href="#projects" className="
  inline-flex items-center gap-2 px-8 py-4 
  bg-blue-600 hover:bg-blue-700 
  text-white font-semibold rounded-lg
  shadow-lg shadow-blue-500/25
  transition-all duration-200 hover:scale-105
">
  View My Work <ArrowRight size={18} />
</a>

// Secondary CTA — lebih subtle
<a href="/cv-aqil-afif.pdf" download className="
  inline-flex items-center gap-2 px-8 py-4
  border-2 border-blue-600 text-blue-600
  hover:bg-blue-600 hover:text-white
  font-semibold rounded-lg transition-all duration-200
">
  Download CV <Download size={18} />
</a>
```

### 1.4 Animasi & Micro-interaction

**Temuan:**
- Typing animation di hero menarik — pertahankan
- Skill bar dengan 0% merusak kesan keseluruhan (sudah dibahas di Bug Kritikal)
- Animasi secara umum basic, belum ada surprise moment

**Rekomendasi:**

Tambahkan scroll-triggered animations yang subtle dengan library Framer Motion atau intersection observer:

```jsx
// Menggunakan Framer Motion (sudah populer di ekosistem Next.js)
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  {/* konten section */}
</motion.div>
```

---

## 2. UX (User Experience) — Skor: 6.5/10

### 2.1 Urutan Section

**Temuan saat ini:**
```
Hero → About → Skills → Certifications → Experience → Projects → Contact
```

**Masalah:** Certifications muncul sebelum Projects. Rekruter teknis ingin melihat *apa yang sudah kamu buat* sebelum melihat daftar sertifikasi. Certifications sebagai pendukung, bukan headline.

**Rekomendasi urutan:**
```
Hero → About → Skills → Projects → Experience → Certifications → Contact
```

Alasan perubahan:
- Projects naik karena ini adalah bukti nyata kemampuan
- Experience setelah Projects karena konteksnya lebih kuat jika sudah tahu proyeknya
- Certifications tetap ada tapi sebagai "kredensial pendukung", bukan sorotan utama

### 2.2 Call-to-Action

**Masalah kritikal:** Tombol "Download CV" mengarah ke LinkedIn, bukan file PDF langsung.

**Cara memperbaiki:**

1. Buat file PDF CV terbaru
2. Simpan di folder `public/` di project Next.js: `public/cv-aqil-afif-2025.pdf`
3. Update link:
```jsx
// SEBELUM (bermasalah):
<a href="https://www.linkedin.com/in/aqilafif">Download CV</a>

// SESUDAH (benar):
<a 
  href="/cv-aqil-afif-2025.pdf" 
  download="CV-Aqil-Afif.pdf"
  target="_blank"
>
  Download CV
</a>
```

Atau jika ingin tracking download:
```jsx
const handleCVDownload = () => {
  // Optional: tracking analytics
  window.gtag?.('event', 'cv_download');
  window.open('/cv-aqil-afif-2025.pdf', '_blank');
};
```

### 2.3 Friction & Kebingungan Pengguna

**Daftar friction yang ditemukan:**

| Friction | Dampak | Solusi |
|---|---|---|
| CV download → LinkedIn | Tinggi | Upload PDF, link langsung |
| 93 badge sekaligus | Tinggi | Batasi 6-8 badge, link ke Credly |
| Nomor HP ditampilkan publik | Medium | Gunakan contact form atau sembunyikan |
| Tidak ada contact form | Medium | Tambahkan form (Formspree/EmailJS) |
| Skill bar 0% | Sangat Tinggi | Fix bug (sudah dibahas) |

**Tambahkan Contact Form sederhana:**
```jsx
// Gunakan Formspree (gratis, tidak perlu backend)
// 1. Daftar di formspree.io, dapatkan endpoint

const ContactForm = () => {
  return (
    <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
      <input type="text" name="name" placeholder="Nama" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Pesan" rows={5} required />
      <button type="submit">Kirim Pesan</button>
    </form>
  );
};
```

### 2.4 Mobile Responsiveness

**Temuan:**
- Layout dasar responsif berkat Tailwind — sudah baik
- 93 badge gambar akan sangat berat di mobile (network + render)
- Beberapa section mungkin terlalu padat di layar kecil

**Rekomendasi:**

```jsx
// Batasi badge yang ditampilkan, terutama di mobile
const CertificationsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedBadges = showAll ? allBadges : allBadges.slice(0, 8);
  
  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {displayedBadges.map(badge => (
          <BadgeCard key={badge.id} {...badge} />
        ))}
      </div>
      {!showAll && (
        <button onClick={() => setShowAll(true)}>
          Lihat semua {allBadges.length} badge →
        </button>
      )}
    </div>
  );
};
```

---

## 3. Konten & Copywriting — Skor: 5.5/10

### 3.1 Hero Section Headline

**Teks saat ini (generik):**
> "Fresh graduate in Informatics Engineering Education from Universitas Negeri Padang. Passionate about creating innovative AI solutions and full-stack applications."

**Masalah:** Kalimat ini bisa milik ribuan fresh graduate lain. Tidak ada diferensiasi, tidak ada nilai konkret yang ditawarkan.

**Versi yang direkomendasikan (pilih salah satu atau adaptasi):**

Opsi A — fokus ML/AI:
> "I build and deploy ML systems — TensorFlow certified, Google Cloud ready. From model training to production APIs."

Opsi B — fokus breadth + sertifikasi:
> "Full-stack engineer with hands-on ML expertise. TensorFlow Developer Certified · AWS re/Start Graduate · C1 English."

Opsi C — problem-solver angle:
> "I turn ML models into working products. Next.js for the frontend, Python + TensorFlow for the brain, Google Cloud for deployment."

**Tambahkan USP bar di bawah hero:**
```jsx
// Strip kecil yang highlight kredensial terkuat, muncul di bawah tagline
const USPBar = () => (
  <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
    {[
      { icon: '🏆', text: 'TensorFlow Developer Certified' },
      { icon: '☁️', text: 'AWS re/Start Graduate' },
      { icon: '🌐', text: 'C1 English' },
      { icon: '🔬', text: '93 Cloud Badges' },
    ].map(item => (
      <span key={item.text} className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
        {item.icon} {item.text}
      </span>
    ))}
  </div>
);
```

### 3.2 About Me

**Teks saat ini:**
> "My mission is to leverage Machine Learning and modern web technologies to build products that solve real problems — from automating intelligent systems to crafting intuitive user experiences."

**Masalah:** Terdengar seperti copy dari LinkedIn template. Tidak ada cerita personal, tidak ada spesifisitas.

**Template storytelling yang lebih kuat:**

```
Paragraf 1 — The Hook (mengapa kamu tertarik ke ML/tech):
"Ketertarikan saya ke Machine Learning dimulai saat [cerita spesifik — 
misal: saat skripsi, saat pertama kali lihat demo GPT, saat nonton dokumenter AI]. 
Saya menyadari bahwa [insight yang kamu dapat]."

Paragraf 2 — What you've done:
"Sejak itu, saya mendapatkan TensorFlow Developer Certificate dari Google, 
menyelesaikan AWS re/Start program, dan mengumpulkan 93 badge di Google Cloud 
sambil mengerjakan [proyek spesifik yang paling bangga]."

Paragraf 3 — What you're looking for:
"Saat ini saya mencari [posisi spesifik] di mana saya bisa [nilai yang ingin dikontribusikan]. 
Saya siap bekerja dalam tim internasional (C1 English) dan terbiasa dengan 
stack modern [sebutkan tech stack utama]."
```

**Contoh implementasi:**
```
Saya mulai serius di Machine Learning saat menulis skripsi tentang klasifikasi penyakit tanaman 
menggunakan CNN — dan berhasil mencapai akurasi 94%. Dari situ saya tidak bisa berhenti belajar.

Dalam setahun terakhir, saya mendapatkan TensorFlow Developer Certificate, menyelesaikan 
AWS re/Start Graduate program, dan membangun keahlian Google Cloud melalui 93 hands-on labs. 
Pengalaman exchange di UNY juga membuka perspektif saya tentang kolaborasi lintas institusi.

Sekarang saya siap mengaplikasikan semua ini di dunia nyata — mencari posisi ML Engineer 
atau Full-Stack Developer di mana saya bisa berkontribusi dari hari pertama.
```

### 3.3 Section Skills

**Masalah:**
- Persentase domain (Frontend 89%, Backend 82%, ML 81%) terlalu tinggi dan tidak believable untuk fresh graduate
- Skill bar individual yang 0% (bug kritikal)
- Inkonsistensi antara persentase domain tinggi vs bar individual 0%

**Rekomendasi: Ganti persentase dengan format yang lebih honest dan visual:**

```jsx
// Format 1: Technology Icons + Level Badge (paling clean)
const skillCategories = [
  {
    name: 'Machine Learning',
    level: 'Proficient',  // bukan angka
    skills: [
      { name: 'TensorFlow', icon: '/icons/tensorflow.svg', certified: true },
      { name: 'Python', icon: '/icons/python.svg' },
      { name: 'Scikit-learn', icon: '/icons/sklearn.svg' },
      { name: 'Pandas', icon: '/icons/pandas.svg' },
    ]
  },
  {
    name: 'Frontend',
    level: 'Intermediate',
    skills: [
      { name: 'Next.js', icon: '/icons/nextjs.svg' },
      { name: 'React', icon: '/icons/react.svg' },
      { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
    ]
  },
  // dst...
];

// Level labels yang lebih honest:
// "Learning" → masih belajar
// "Familiar" → pernah pakai di project kecil  
// "Intermediate" → beberapa project nyata
// "Proficient" → bisa deliver di production
// Jangan pakai "Expert" untuk fresh graduate
```

**Atau format alternatif yang lebih safe — hanya icon tech stack tanpa level:**

```jsx
// Minimal dan tidak memancing sanggahan
<div className="flex flex-wrap gap-3">
  {['Python', 'TensorFlow', 'Next.js', 'React', 'Tailwind', 'FastAPI', 
    'Android/Kotlin', 'Docker', 'Google Cloud', 'PostgreSQL'].map(tech => (
    <span key={tech} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
      {tech}
    </span>
  ))}
</div>
```

### 3.4 Section Projects

**Masalah:**
- Hanya 3 proyek deployed — terlalu sedikit
- Detail proyek tidak terlihat (mungkin load dinamis, tapi perlu diperkuat)
- Tidak ada ukuran impact yang terverifikasi

**Template project card yang ideal:**

```jsx
const projects = [
  {
    title: "Klasifikasi Penyakit Tanaman dengan CNN",
    category: "Machine Learning",
    description: "Model CNN untuk deteksi 15 jenis penyakit tanaman dari foto daun. Dibangun sebagai proyek skripsi dengan dataset 10.000+ gambar.",
    impact: "Akurasi 94.2% pada test set — melampaui baseline ResNet50 (91%)",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "FastAPI"],
    links: {
      github: "https://github.com/...",
      demo: "https://...",  // jika ada
      paper: "https://..."  // jika ada
    },
    image: "/projects/plant-disease.jpg",
    highlight: true  // proyek terbaik
  },
  // Tambahkan minimal 2-3 proyek lagi:
  // - Proyek web dev (Next.js app yang sudah deploy)
  // - Proyek mobile (Android app)
  // - Side project / open source contribution
];
```

**Proyek yang bisa ditambahkan (jika ada):**
- Tugas kuliah signifikan yang punya kode bagus di GitHub
- Proyek dari AWS re/Start atau Google Cloud training
- Clone project tapi dengan custom features
- Tool/script yang berguna (otomatisasi, scraper, dll)
- Kontribusi ke open source, sekecil apapun

**Format deskripsi proyek (gunakan formula ini):**
```
[Verb] [apa yang dibuat] untuk [siapa/tujuan apa].
Menggunakan [tech stack].
Hasilnya: [metric yang terukur].

Contoh buruk: "Web application untuk manajemen data"
Contoh baik: "Membangun sistem monitoring kualitas udara real-time 
menggunakan Next.js + FastAPI yang mengolah 1.000 data sensor/jam. 
Deployed di Google Cloud Run dengan uptime 99.9%."
```

---

## 4. Personal Branding & Positioning — Skor: 6/10

### 4.1 Diferensiasi dari Kandidat Lain

**Aqil memiliki kombinasi yang sebenarnya langka:**
- TensorFlow Developer Certificate (sangat sedikit orang Indonesia yang punya ini)
- AWS re/Start Graduate
- C1 English (sangat berharga untuk perusahaan multinasional)
- Exchange student (menunjukkan adaptability)
- 93 Google Cloud badges (volume yang luar biasa)

**Masalah:** Semua ini tersembunyi jauh di dalam halaman. Rekruter yang membuka website dan menutupnya dalam 30 detik tidak akan tahu keunggulan ini.

**Solusi:** Buat "credential bar" yang langsung terlihat di hero section (sudah dibahas di 3.1).

**Positioning statement yang bisa digunakan:**
```
Untuk rekruter ML/AI:
"TensorFlow Developer Certified engineer dengan pengalaman Google Cloud end-to-end"

Untuk rekruter Web Dev:
"Full-stack developer dengan background ML yang bisa membangun AI-powered web apps"

Untuk freelance client:
"Saya membangun produk digital — dari desain UI sampai deployment cloud"
```

### 4.2 93 Digital Badges Credly

**Skor: 4/10 — ini perlu diubah drastis**

**Masalah:**
- 93 gambar diload sekaligus = performa buruk
- Visual noise yang ekstrem — rekruter tidak tahu mana yang penting
- Halaman jadi sangat panjang hanya untuk daftar badge
- Justru mengaburkan badge paling prestisius

**Rekomendasi implementasi:**

```jsx
// Tampilkan hanya badge tier-1 (max 8)
const featuredBadges = [
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google / TensorFlow",
    year: "2024",
    url: "https://www.credly.com/badges/...",
    image: "/badges/tensorflow.png",
    tier: 1  // paling prestisius
  },
  {
    name: "AWS re/Start Graduate",
    issuer: "Amazon Web Services",
    year: "2024",
    url: "https://www.credly.com/badges/...",
    image: "/badges/aws-restart.png",
    tier: 1
  },
  // Tambahkan 4-6 Google Cloud badge paling relevan:
  // - Build and Deploy ML Solutions on Vertex AI
  // - Develop GenAI Apps with Gemini and Streamlit
  // - Implement CI/CD Pipelines on Google Cloud
  // dst.
];

const CertificationsSection = () => (
  <section>
    <h2>Certifications & Credentials</h2>
    <p>Verified badges from Google Cloud, AWS, and TensorFlow</p>
    
    {/* Hanya 8 badge terpilih */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {featuredBadges.map(badge => (
        <a href={badge.url} target="_blank" key={badge.name}
           className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md transition-shadow">
          <img src={badge.image} alt={badge.name} className="w-20 h-20 object-contain" />
          <span className="text-sm font-medium text-center mt-2">{badge.name}</span>
          <span className="text-xs text-gray-500">{badge.issuer}</span>
        </a>
      ))}
    </div>
    
    {/* Link ke semua badge */}
    <a href="https://www.credly.com/users/aqilafif" target="_blank"
       className="mt-4 inline-flex items-center gap-1 text-blue-600 hover:underline">
      View all 93 verified badges on Credly →
    </a>
  </section>
);
```

### 4.3 "Open to Work" Badge

**Skor: 7.5/10 — sudah baik, sedikit peningkatan**

Badge sudah terlihat di hero — ini sudah benar. Rekomendasi tambahan:

```jsx
// Buat badge ini sticky di navbar atau selalu visible
// Tambahkan detail availability jika memungkinkan

const OpenToWorkBadge = () => (
  <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 
                  border border-green-200 dark:border-green-800 rounded-full">
    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
    <span className="text-sm font-medium text-green-700 dark:text-green-300">
      Available for work
    </span>
  </div>
);

// Atau di navbar:
<nav>
  <div>Logo</div>
  <div className="nav-links">...</div>
  <div className="flex items-center gap-3">
    <OpenToWorkBadge />
    <a href="#contact">Hire Me</a>
  </div>
</nav>
```

---

## 5. SEO & Performa — Skor: 7.5/10

### 5.1 Yang Sudah Baik (Pertahankan)

Meta tags sudah lengkap dan benar:
- `<title>` sudah optimal: "Aqil Afif | Machine Learning & Web Developer Indonesia"
- `meta description` sudah ada dan relevan
- Open Graph tags (og:title, og:description, og:image) sudah terpasang
- Twitter Card sudah ada
- Canonical URL sudah di-set
- Robots meta sudah `index, follow`
- Keywords yang tepat: "Machine Learning Developer Indonesia", "Web Developer Padang", dll

### 5.2 Optimasi Tambahan

**Tambahkan JSON-LD Structured Data:**
```jsx
// Tambahkan di _app.js atau layout.js (Next.js 13+)
// Ini membantu Google memahami siapa Aqil dan menampilkan rich snippet

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Aqil Afif",
  "jobTitle": "Machine Learning Engineer & Web Developer",
  "description": "Fresh graduate Informatics Engineering, specializing in ML, Web Dev, Mobile Dev",
  "url": "https://aqil-afif.vercel.app",
  "image": "https://aqil-afif.vercel.app/images/aqil-profile.jpg",
  "email": "aqfasmanju7@gmail.com",
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Universitas Negeri Padang"
  },
  "knowsAbout": ["Machine Learning", "TensorFlow", "Next.js", "React", "Android Development", "Google Cloud"],
  "sameAs": [
    "https://www.linkedin.com/in/aqilafif",
    "https://github.com/Aqfa07",
    "https://www.credly.com/users/aqilafif"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "TensorFlow Developer Certificate",
      "credentialCategory": "Professional Certificate",
      "recognizedBy": { "@type": "Organization", "name": "TensorFlow / Google" }
    }
  ]
};

// Di component Head atau Metadata:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
/>
```

**Untuk Next.js 13+ App Router:**
```js
// app/layout.js atau app/page.js
export const metadata = {
  title: 'Aqil Afif | Machine Learning & Web Developer Indonesia',
  description: 'Portfolio of Aqil Afif — Fresh graduate specializing in Machine Learning, Web Development, and Mobile Development. TensorFlow Developer Certified.',
  // ... rest of metadata
};
```

**Optimasi gambar:**
```jsx
// Gunakan next/image untuk semua gambar (sudah auto-optimize)
import Image from 'next/image';

<Image
  src="/images/aqil-profile.jpg"
  alt="Aqil Afif — Machine Learning & Web Developer"
  width={400}
  height={400}
  priority  // tambahkan untuk hero image
  className="rounded-full"
/>
```

### 5.3 Potensi Isu Performa

**Masalah utama: 93 badge images**

93 request HTTP untuk badge images adalah bottleneck performa yang signifikan.

```jsx
// Solusi 1: Lazy loading dengan intersection observer
<img
  src={badge.image}
  loading="lazy"  // native lazy loading
  alt={badge.name}
/>

// Solusi 2: Atau dengan next/image (sudah built-in lazy loading)
<Image
  src={badge.image}
  loading="lazy"
  alt={badge.name}
  width={80}
  height={80}
/>

// Solusi 3 (terbaik): Kurangi jumlah badge yang ditampilkan
// Hanya 8 badge featured, sisanya di Credly
```

**Cek performa dengan:**
- Google PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/
- Target: LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## 6. Aksesibilitas — Skor: 6/10

### 6.1 Kontras Teks

**Cara cek:**
1. Buka https://webaim.org/resources/contrastchecker/
2. Masukkan warna teks dan warna background
3. Pastikan semua teks normal rasionya minimal 4.5:1 (WCAG AA)
4. Teks besar (18pt+) minimal 3:1

**Yang perlu dicek secara khusus:**
- Teks sekunder di atas background gelap (warna abu-abu muda di background gelap)
- Teks badge/pill di atas warna background berwarna
- Link color vs background

### 6.2 Gambar Profil

**Sudah baik:** Alt text sudah ada di gambar profil. Pertahankan pola ini untuk semua gambar.

```jsx
// Pastikan SEMUA gambar punya alt text yang deskriptif
// Bukan hanya "" (kosong) atau alt yang tidak informatif

// ✅ Benar:
<img alt="Aqil Afif — Machine Learning & Web Developer" src="..." />
<img alt="Screenshot aplikasi klasifikasi penyakit tanaman" src="..." />
<img alt="TensorFlow Developer Certificate badge from Google" src="..." />

// ❌ Salah:
<img alt="" src="..." />
<img alt="image" src="..." />
<img alt="badge" src="..." />
```

### 6.3 Keyboard Navigation & Focus States

```css
/* Pastikan semua interactive element punya focus state yang visible */
a:focus-visible,
button:focus-visible,
input:focus-visible {
  outline: 2px solid #3B82F6;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Jangan pernah hapus outline tanpa mengganti dengan yang lain */
/* ❌ Jangan lakukan ini: */
* { outline: none; }
```

```jsx
// Untuk Tailwind:
<button className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
  ...
</button>
```

### 6.4 Semantic HTML

```jsx
// Gunakan semantic HTML yang benar
// ✅ Benar:
<header>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <section id="hero" aria-label="Introduction">
    <h1>Hi, I'm Aqil Afif</h1>
  </section>
  
  <section id="projects" aria-labelledby="projects-heading">
    <h2 id="projects-heading">Projects</h2>
  </section>
</main>

<footer>...</footer>
```

---

## 7. Top 5 Prioritas Perbaikan

Diurutkan berdasarkan dampak terhadap peluang mendapat pekerjaan:

### 🔴 #1 — Fix Bug Skill Bar 0% (Lakukan Sekarang)
**Estimasi waktu:** 15–30 menit  
**Dampak:** Sangat tinggi — ini adalah bug yang langsung terlihat dan merusak kredibilitas

Cari komponen skill bar, pastikan nilai persentase sudah ter-pass dengan benar. Setelah fix, pertimbangkan mengganti skill bar dengan format technology icons (lebih aman, tidak memancing angka yang dipertanyakan).

---

### 🔴 #2 — Ganti Link CV dari LinkedIn ke PDF Langsung
**Estimasi waktu:** 30 menit  
**Dampak:** Tinggi — rekruter sering ingin download CV tanpa friction

1. Update CV terbaru dalam format PDF
2. Simpan di `public/cv-aqil-afif-2025.pdf`
3. Update semua link "Download CV" untuk mengarah ke `/cv-aqil-afif-2025.pdf`
4. Tambahkan atribut `download` pada tag `<a>`

---

### 🟠 #3 — Kurangi Badges dari 93 menjadi 8 yang Paling Prestisius
**Estimasi waktu:** 1–2 jam  
**Dampak:** Tinggi — drastis memperbaiki performa, kesan profesional, dan kejelasan value proposition

Pilih 6-8 badge terbaik (TensorFlow Developer Cert, AWS re/Start, + 4-6 Google Cloud badge paling relevan). Tambahkan link "View all 93 badges on Credly" di bawahnya.

---

### 🟠 #4 — Perkuat Section Projects
**Estimasi waktu:** 3–5 jam  
**Dampak:** Tinggi — ini yang paling menentukan bagi rekruter teknis

- Tambahkan minimal 2-3 proyek baru
- Setiap proyek harus ada: deskripsi masalah, tech stack, dan hasil terukur
- Tambahkan screenshot atau GIF demo
- Pastikan link GitHub aktif dan repo-nya rapi (README yang baik, kode yang readable)

---

### 🟡 #5 — Tulis Ulang Hero Headline & Tambahkan USP Bar
**Estimasi waktu:** 1–2 jam  
**Dampak:** Medium-Tinggi — kesan pertama yang lebih kuat dan diferensiatif

Ganti kalimat generik dengan value proposition konkret yang menyebut sertifikasi terpenting. Tambahkan credential bar di bawah tagline dengan badge: TensorFlow Certified, AWS re/Start, C1 English, Google Cloud.

---

## Checklist Perbaikan

Gunakan checklist ini untuk memastikan semua perbaikan sudah dilakukan:

### Kritikal (sebelum dibagikan ke siapapun)
- [ ] Fix bug skill bar 0%
- [ ] Ganti link "Download CV" dari LinkedIn ke PDF langsung
- [ ] Upload file PDF CV terbaru ke folder `public/`

### Penting (dalam 1-2 minggu)
- [ ] Kurangi badges ke 8 badge terbaik + link ke Credly
- [ ] Ubah urutan section: Skills → Projects → Experience → Certifications
- [ ] Perkuat section Projects dengan minimal 2-3 proyek tambahan
- [ ] Tulis ulang hero tagline dengan value proposition konkret
- [ ] Tambahkan USP bar di hero section
- [ ] Tambahkan contact form (Formspree atau EmailJS)
- [ ] Tulis ulang About Me dengan storytelling personal

### Optimasi lanjutan (bulan depan)
- [ ] Tambahkan JSON-LD structured data (Person schema)
- [ ] Cek kontras warna dengan WebAIM Contrast Checker
- [ ] Tambahkan lazy loading untuk semua gambar badge
- [ ] Tambahkan scroll-triggered animations (Framer Motion)
- [ ] Verifikasi keyboard navigation dan focus states
- [ ] Cek skor di Google PageSpeed Insights (target: 85+)
- [ ] Tambahkan `aria-label` pada semua section
- [ ] Pertimbangkan menambahkan blog/artikel teknis untuk SEO jangka panjang

---

## Catatan Penutup

**Kekuatan terbesar yang sudah dimiliki Aqil:**
- SEO sudah dikerjakan dengan sangat baik — lebih baik dari mayoritas portofolio fresh graduate
- Sertifikasi yang impressive (TensorFlow Developer Cert, AWS re/Start, 93 Cloud Badges)
- C1 English membuka pintu ke perusahaan multinasional
- Tech stack modern (Next.js, Tailwind) menunjukkan awareness terhadap ekosistem terkini

**Satu kalimat rekomendasi:**  
Perbaiki bug skill bar, ganti link CV, kurangi badge menjadi 8 yang terpilih, dan tulis ulang hero headline — keempat hal ini saja sudah bisa meningkatkan konversi dari "rekruter melihat portfolio" menjadi "rekruter menghubungi" secara signifikan.

---

*Review ini dibuat berdasarkan analisis konten dan struktur website per Mei 2026. Beberapa detail visual mungkin berbeda jika ada perubahan setelah tanggal tersebut.*
