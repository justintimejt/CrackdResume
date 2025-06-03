# CrackdResume

**AI-powered resume compilation that actually works.**

> Beta Version Live: [crackdresume.vercel.app](https://crackdresume.vercel.app/)

Transform your resume content into polished, professional documents with AI. No more wrestling with LaTeX or formatting nightmares.

![App Screenshot](assets/images/crackdresume.png)

## Features

- **AI-Powered Generation**: Leverages Gemini Flash 1.5 for intelligent resume compilation
- **Instant PDF Output**: Get professionally formatted resumes in seconds
- **Template Selection**: Choose the CS/SWE resume that you want
- **Edit in Overlead**: Want to make changes? Click "Edit in Overleaf" and edit!
- **LaTeX Export**: Full TeX source code included for customization
- **No Login Required**: Jump straight into creating your resume

## Tech Stack

- **Frontend**: React + Next.js 15 + TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **AI Engine**: Google Gemini Flash 1.5
- **Deployment**: Vercel
- **Runtime**: Node.js

## Quick Start

```bash
# Clone the repository
git clone https://github.com/justintimejt/CrackdResume.git
cd CrackdResume

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Supabase and Gemini API keys

# Run development server
npm run dev
```

## Environment Variables

```env
# Supabase Configuration
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# AI Configuration
GEMINI_API_KEY=your_gemini_api_key
```

## How It Works

1. **Input**: Paste your resume content or bullet points
2. **AI Processing**: Gemini Flash 1.5 analyzes and enhances your content
3. **Compilation**: Generates clean LaTeX and compiles to PDF
4. **Download**: Get both PDF and source TeX files instantly

## Security & Privacy

- **Row Level Security (RLS)**: Database policies ensure data isolation
- **Time-Limited Storage**: Resume data automatically expires after 24 hours
- **No Persistent User Data**: Anonymous usage with no account creation required

## Deployment

Deployed on Vercel with automatic CI/CD from the main branch.

```bash
# Deploy to Vercel
vercel --prod
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Powered by [Google Gemini](https://ai.google.dev/) for AI capabilities
- Built with [Supabase](https://supabase.com/) for backend infrastructure
- Deployed on [Vercel](https://vercel.com/) for seamless hosting

---

**Made with ❤️ for job seekers everywhere**

*Try it now: [crackdresume.vercel.app](https://crackdresume.vercel.app/)*

<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). -->

<!-- ## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->
