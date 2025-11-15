# Tiny Mart

This is a small project to showcase basic API integration with simple CRUD operations.

**Live Demo:** [https://tiny-mart-pro.vercel.app/](https://tiny-mart-pro.vercel.app/)

## Getting Started

### Prerequisites

- Node.js version 22 or higher (latest version recommended)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:

   - Create a `.env` file in the root directory
   - Copy and paste the content from `.env.example` (provided in the project)

3. Generate Prisma client:

```bash
npx prisma generate
```

### Running the Application

#### Development Mode

To run the project in development mode with hot reload:

```bash
npm run dev
```

#### Production Mode

To build and run the project in production mode:

1. Build the project:

```bash
npm run build
```

2. Start the production server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
