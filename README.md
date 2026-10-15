# INFINI Admin Console

> Dedicated engineering administration dashboard and content management system for **INFINI Precision Pvt. Ltd.**

This repository powers the administrative operations of the INFINI platform, including client inquiry management, trade show exhibition announcements, LinkedIn technical case study synchronization, metallurgical micrograph uploads, ISO compliance tracking, and team access control.

---

## Features & Modules

- **Executive KPI Dashboard (`/admin`)**: Real-time inquiry counts, active exhibition status, published case study counters, and quick actions.
- **Inquiries & RFQ CRM (`/admin/leads`)**: Submissions inbox, technical drawing preview, requirement logs, engineer triage notes, and status pipelines (`New`, `In Review`, `Quoted`).
- **Exhibition & Event Marquee (`/admin/events`)**: Configurable header announcement marquee with real-time live preview, broadcast toggle switch, 3 high-contrast theme presets (**Precision Red**, **Dark Slate**, **Gold Accent**), booth coordinates, and schedule auto-expiry.
- **Case Studies & Micrographs (`/admin/case-studies`)**: Before & after metallurgical roughness ($Ra / Rz$) comparisons, alloy specifications, and automated LinkedIn technical whitepaper parsing.
- **Client Reviews & Testimonials (`/admin/testimonials`)**: Verified OEM customer endorsements, precision industry tags, star ratings, and display order management.
- **Technical Articles & News (`/admin/news`)**: Engineering insights, metallurgical reports, domain category filters, upward custom tag selector, and live publication toggle.
- **Industry Applications (`/admin/industries`)**: Custom sector showcases across Aerospace, Medical Implants, Cutting Tools, and Dies.
- **Certifications (`/admin/certifications`)**: ISO 9001:2015, ISO 13485:2016, and compliance audit certificates with live PDF viewer.
- **Media Asset Library (`/admin/media`)**: Direct device upload for high-resolution micrographs, CAD drawings, and ISO documents.
- **Settings & Team Access (`/admin/settings`)**: Company communication channels, Parwanoo plant coordinates, and RBAC user permissions (`superAdmin`, `contentEditor`, `leadsManager`).

---

## Tech Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Runtime**: React 19
- **Styling**: Tailwind CSS v4 (Dark Luxury Engineering Design Token System)
- **Icons**: Lucide React
- **Backend / Database**: Google Firebase & Cloud Firestore
- **Authentication**: Firebase Authentication with custom RBAC session claims

---

## Getting Started

### 1. Prerequisites
- Node.js 20+ installed
- Access to the INFINI Firebase project credentials

### 2. Installation
```bash
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=infini-precision
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
FIREBASE_SERVICE_ACCOUNT_KEY=your_service_account_json_or_path
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to access the console.

### 5. Build for Production
```bash
npm run build
npm run start
```

---

## Collaborative Architecture

This dashboard connects to the shared Cloud Firestore database utilized by the public website repository ([Humble-Coders/Infini](https://github.com/Humble-Coders/Infini)). All content published or edited in this console is instantly reflected on the live customer-facing website in real time.
