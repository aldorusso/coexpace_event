# The Invisible Emergency - Coexpace Global Mental Health Summit

Event landing page for Coexpace's global mental health summit focused on youth mental health crisis.

## About the Event

A global summit addressing the youth mental health crisis through the lens of coexistence, empathy, and resilience. Features expert speakers and interactive sessions.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the landing page.

## Build for Production

```bash
npm run build
npm start
```

## Docker Deployment

### Using Docker Compose (Recommended)

Build and run the container:

```bash
docker-compose up -d
```

Stop the container:

```bash
docker-compose down
```

View logs:

```bash
docker-compose logs -f
```

### Using Docker directly

Build the image:

```bash
docker build -t coexpace-event .
```

Run the container:

```bash
docker run -p 3000:3000 coexpace-event
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Production Deployment

For production deployment:

1. Build the image on your server or CI/CD pipeline
2. Run with docker-compose or your orchestration tool (Kubernetes, Docker Swarm, etc.)
3. The container includes health checks and runs as a non-root user for security
4. Recommended: Use a reverse proxy (nginx, Caddy) in front of the container

## Tech Stack

- Next.js 15.5.0
- React 19.1.0
- TypeScript
- Bootstrap 5

## Project Structure

- `/src/components` - React components
- `/src/layouts` - Layout components (header, footer)
- `/public` - Static assets
- `/src/data` - Data files for content

## Contact

For more information about Coexpace: [coexpace.org](https://coexpace.org)
