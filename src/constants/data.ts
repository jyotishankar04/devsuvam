import type { Blog, Project } from "@/types";

export const blogs: Blog[] = [
    {
        id: "1",
        slug: "opentelemetry-nodejs",
        title: "OpenTelemetry (OTEL) in Node.js",
        description:
            "Learn how to set up OpenTelemetry (OTEL) in Node.js to capture traces, logs, and metrics. A step-by-step guide to improving observability, performance, and error tracking in your app.",
        date: "Sep 8, 2025",
        tags: ["nodejs", "performance", "observability"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        readTime: "8 min read",
    },
    {
        id: "2",
        slug: "designing-rest-apis",
        title: "Designing Scalable REST APIs with Express and PostgreSQL",
        description:
            "Learn how to combine Express.js and PostgreSQL to build type-safe, scalable REST APIs with proper error handling and validation.",
        date: "Oct 21, 2024",
        tags: ["nodejs", "postgresql", "api-design"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
        readTime: "12 min read",
    },
    {
        id: "3",
        slug: "docker-containerization-guide",
        title: "Complete Guide to Docker Containerization for Backend Apps",
        description:
            "Learn how to safely containerize your backend applications using Docker, with best practices for multi-stage builds and security.",
        date: "May 7, 2024",
        tags: ["docker", "devops", "nodejs"],
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop",
        readTime: "10 min read",
    },
    {
        id: "4",
        slug: "redis-caching-strategies",
        title: "Redis Caching Strategies for High-Performance APIs",
        description:
            "Explore different caching patterns with Redis to dramatically improve your API response times and reduce database load.",
        date: "Apr 15, 2024",
        tags: ["redis", "performance", "caching"],
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
        readTime: "7 min read",
    },
];

export const projects: Project[] = [
    {
        id: "1",
        slug: "distributed-task-queue",
        title: "Distributed Task Queue System",
        description:
            "A scalable distributed task queue built with Node.js, Redis, and Bull. Handles millions of jobs with automatic retries, rate limiting, and real-time monitoring dashboard.",
        tags: ["Node.js", "Redis", "Bull", "Docker", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        liveUrl: "https://demo.example.com",
        githubUrl: "https://github.com/example/task-queue",
        featured: true,
        content: `# Building Modern Web Applications: A Complete Guide to React, Next.js, and TypeScript

![Hero Image](https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=400&fit=crop)

*Published on January 17, 2026 | 15 min read*

---

## Table of Contents

1. [Introduction](#introduction)
2. [Understanding Modern Web Development](#understanding-modern-web-development)
3. [Setting Up Your Development Environment](#setting-up-your-development-environment)
4. [Building Your First React Application](#building-your-first-react-application)
5. [Advanced TypeScript Patterns](#advanced-typescript-patterns)
6. [Next.js App Router Deep Dive](#nextjs-app-router-deep-dive)
7. [State Management Strategies](#state-management-strategies)
8. [Performance Optimization Techniques](#performance-optimization-techniques)
9. [Conclusion](#conclusion)

---

## Introduction

The landscape of web development has evolved dramatically over the past decade. What started as simple HTML pages with basic JavaScript has transformed into complex, highly interactive applications that rival native desktop software. In this comprehensive guide, we'll explore the modern web development stack, focusing on React, Next.js, and TypeScript.

> "The web is more a social creation than a technical one. I designed it for a social effect — to help people work together — and not as a technical toy." — Tim Berners-Lee

### Why This Stack?

- **React**: Component-based architecture for building reusable UI elements
- **Next.js**: Framework for production-ready React applications with SSR/SSG
- **TypeScript**: Type safety that catches errors before runtime

![Development Stack](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&h=500&fit=crop)
`
    },
    {
        id: "2",
        slug: "api-gateway",
        title: "Microservices API Gateway",
        description:
            "Custom API gateway with rate limiting, authentication, request transformation, and load balancing for microservices architecture.",
        tags: ["Go", "gRPC", "Kubernetes", "Prometheus"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
        githubUrl: "https://github.com/example/api-gateway",
        featured: true,
        content: `# Building Modern Web Applications: A Complete Guide to React, Next.js, and TypeScript

![Hero Image](https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=400&fit=crop)

*Published on January 17, 2026 | 15 min read*

---

## Table of Contents

1. [Introduction](#introduction)
2. [Understanding Modern Web Development](#understanding-modern-web-development)
3. [Setting Up Your Development Environment](#setting-up-your-development-environment)
4. [Building Your First React Application](#building-your-first-react-application)
5. [Advanced TypeScript Patterns](#advanced-typescript-patterns)
6. [Next.js App Router Deep Dive](#nextjs-app-router-deep-dive)
7. [State Management Strategies](#state-management-strategies)
8. [Performance Optimization Techniques](#performance-optimization-techniques)
9. [Conclusion](#conclusion)

---

## Introduction

The landscape of web development has evolved dramatically over the past decade. What started as simple HTML pages with basic JavaScript has transformed into complex, highly interactive applications that rival native desktop software. In this comprehensive guide, we'll explore the modern web development stack, focusing on React, Next.js, and TypeScript.

> "The web is more a social creation than a technical one. I designed it for a social effect — to help people work together — and not as a technical toy." — Tim Berners-Lee

### Why This Stack?

- **React**: Component-based architecture for building reusable UI elements
- **Next.js**: Framework for production-ready React applications with SSR/SSG
- **TypeScript**: Type safety that catches errors before runtime

![Development Stack](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&h=500&fit=crop)
`
    },
    {
        id: "3",
        slug: "real-time-analytics",
        title: "Real-time Analytics Pipeline",
        description:
            "Stream processing pipeline for real-time analytics using Apache Kafka and ClickHouse for sub-second query performance.",
        tags: ["Python", "Kafka", "ClickHouse", "Grafana"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        liveUrl: "https://analytics.example.com",
        githubUrl: "https://github.com/example/analytics",
        content: `# Building Modern Web Applications: A Complete Guide to React, Next.js, and TypeScript

![Hero Image](https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=400&fit=crop)

*Published on January 17, 2026 | 15 min read*

---

## Table of Contents

1. [Introduction](#introduction)
2. [Understanding Modern Web Development](#understanding-modern-web-development)
3. [Setting Up Your Development Environment](#setting-up-your-development-environment)
4. [Building Your First React Application](#building-your-first-react-application)
5. [Advanced TypeScript Patterns](#advanced-typescript-patterns)
6. [Next.js App Router Deep Dive](#nextjs-app-router-deep-dive)
7. [State Management Strategies](#state-management-strategies)
8. [Performance Optimization Techniques](#performance-optimization-techniques)
9. [Conclusion](#conclusion)

---

## Introduction

The landscape of web development has evolved dramatically over the past decade. What started as simple HTML pages with basic JavaScript has transformed into complex, highly interactive applications that rival native desktop software. In this comprehensive guide, we'll explore the modern web development stack, focusing on React, Next.js, and TypeScript.

> "The web is more a social creation than a technical one. I designed it for a social effect — to help people work together — and not as a technical toy." — Tim Berners-Lee

### Why This Stack?

- **React**: Component-based architecture for building reusable UI elements
- **Next.js**: Framework for production-ready React applications with SSR/SSG
- **TypeScript**: Type safety that catches errors before runtime

![Development Stack](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&h=500&fit=crop)
`
    },
    {
        id: "4",
        slug: "auth-service",
        title: "OAuth2 Authentication Service",
        description:
            "Production-ready authentication microservice with OAuth2, JWT tokens, and multi-factor authentication support.",
        tags: ["Node.js", "PostgreSQL", "JWT", "OAuth2"],
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop",
        githubUrl: "https://github.com/example/auth-service",
        content: `# Building Modern Web Applications: A Complete Guide to React, Next.js, and TypeScript

![Hero Image](https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=400&fit=crop)

*Published on January 17, 2026 | 15 min read*

---

## Table of Contents

1. [Introduction](#introduction)
2. [Understanding Modern Web Development](#understanding-modern-web-development)
3. [Setting Up Your Development Environment](#setting-up-your-development-environment)
4. [Building Your First React Application](#building-your-first-react-application)
5. [Advanced TypeScript Patterns](#advanced-typescript-patterns)
6. [Next.js App Router Deep Dive](#nextjs-app-router-deep-dive)
7. [State Management Strategies](#state-management-strategies)
8. [Performance Optimization Techniques](#performance-optimization-techniques)
9. [Conclusion](#conclusion)

---

## Introduction

The landscape of web development has evolved dramatically over the past decade. What started as simple HTML pages with basic JavaScript has transformed into complex, highly interactive applications that rival native desktop software. In this comprehensive guide, we'll explore the modern web development stack, focusing on React, Next.js, and TypeScript.

> "The web is more a social creation than a technical one. I designed it for a social effect — to help people work together — and not as a technical toy." — Tim Berners-Lee

### Why This Stack?

- **React**: Component-based architecture for building reusable UI elements
- **Next.js**: Framework for production-ready React applications with SSR/SSG
- **TypeScript**: Type safety that catches errors before runtime

![Development Stack](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&h=500&fit=crop)
`
    },
    {
        id: "5",
        slug: "log-aggregator",
        title: "Centralized Log Aggregator",
        description:
            "ELK-alternative log aggregation system optimized for high-volume ingestion with custom querying DSL.",
        tags: ["Rust", "Elasticsearch", "S3", "Docker"],
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
        githubUrl: "https://github.com/example/log-aggregator",
        content: `# Building Modern Web Applications: A Complete Guide to React, Next.js, and TypeScript

![Hero Image](https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=400&fit=crop)

*Published on January 17, 2026 | 15 min read*

---

## Table of Contents

1. [Introduction](#introduction)
2. [Understanding Modern Web Development](#understanding-modern-web-development)
3. [Setting Up Your Development Environment](#setting-up-your-development-environment)
4. [Building Your First React Application](#building-your-first-react-application)
5. [Advanced TypeScript Patterns](#advanced-typescript-patterns)
6. [Next.js App Router Deep Dive](#nextjs-app-router-deep-dive)
7. [State Management Strategies](#state-management-strategies)
8. [Performance Optimization Techniques](#performance-optimization-techniques)
9. [Conclusion](#conclusion)

---

## Introduction

The landscape of web development has evolved dramatically over the past decade. What started as simple HTML pages with basic JavaScript has transformed into complex, highly interactive applications that rival native desktop software. In this comprehensive guide, we'll explore the modern web development stack, focusing on React, Next.js, and TypeScript.

> "The web is more a social creation than a technical one. I designed it for a social effect — to help people work together — and not as a technical toy." — Tim Berners-Lee

### Why This Stack?

- **React**: Component-based architecture for building reusable UI elements
- **Next.js**: Framework for production-ready React applications with SSR/SSG
- **TypeScript**: Type safety that catches errors before runtime

![Development Stack](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&h=500&fit=crop)
`
    },
];