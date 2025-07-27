# Traque Website

The official website for **Traque** - a modern app monitoring and tracking tool that keeps developers connected to their applications wherever they are.

## About Traque

Traque is an innovative tracking solution that combines powerful error and event monitoring with mobile accessibility. Unlike traditional monitoring tools that chain you to your desk, Traque delivers real-time insights about your app's health and user behavior directly to your phone.

### Key Features

- **Real-time Error Tracking** - Monitor application errors as they happen
- **Event Analytics** - Track user behavior and business events
- **Mobile-First Monitoring** - Get notifications and check your app status on the go
- **AWS WAF Integration** - Enhanced security with built-in traffic filtering
- **Easy Setup** - Get started with just a few lines of code
- **Multi-Platform Support** - Works with React, Node.js, NestJS, and more

## This Repository

This repository contains the source code for [traque.dev](https://traque.dev), including:

- **Marketing Website** - Product information and pricing
- **Documentation** - Comprehensive guides for getting started with Traque

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Documentation**: Fumadocs
- **UI Components**: Shadcn with Radix UI primitives
- **Animations**: Motion (Framer Motion)
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm (recommended)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-org/traque.dev.git
cd traque.dev
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:5001](http://localhost:5001) in your browser

### Available Scripts

- `pnpm dev` - Start development server on port 5001
- `pnpm build` - Build the project for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── (marketing)/     # Marketing pages
│   ├── (legal)/         # Legal pages (privacy, etc.)
│   ├── docs/            # Documentation pages
│   └── api/             # API routes
├── common/              # Shared components and utilities
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   └── utils/           # Utility functions
├── content/             # MDX documentation content
└── lib/                 # Library configurations
```

## Contributing

We welcome contributions to improve the Traque website! Please feel free to submit issues and pull requests.

## License

This project is proprietary software. All rights reserved.

## Learn More About Traque

- [Website](https://traque.dev)
- [Documentation](https://traque.dev/docs)
- [Pricing](https://traque.dev/pricing)
