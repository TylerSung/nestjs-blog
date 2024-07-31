const allCategories = [
  "react",
  "javascript",
  "css",
  "tailwindcss",
  "animation",

  "nodejs",
  "typescript",
  "nextjs",
];

export const categories =
  allCategories.length > 8
    ? [...allCategories.slice(0, 8), "..."]
    : allCategories;

type PopularPostsProps = {
  title: string;
  content: string;
};

export const popularPosts: PopularPostsProps[] = [
  {
    title: "Mastering React Hook Form",
    content:
      "React Hook Form 是一个轻量级的 React 库，它提供了一种简洁的方式来处理表单的验证和状态管理。在这篇文章中，我们将探讨如何使用 React Hook Form 来简化表单处理，并提高表单的性能和可维护性。",
  },
  {
    title: "Vue 3 + Vite + TypeScript: A Modern Development Stack",
    content:
      "在现代前端开发中，使用 Vue 3、Vite 和 TypeScript 组成的技术栈可以极大地提高开发效率和代码的可维护性。这篇文章将介绍如何设置和配置这个开发环境，并展示一些最佳实践。",
  },
  {
    title: "Building a Full-stack App with Next.js, Tailwind CSS, and Prisma",
    content:
      "Next.js 是一个功能强大的 React 框架，结合 Tailwind CSS 和 Prisma，我们可以快速构建全栈应用。本指南将带你一步步实现一个简单的全栈应用，从前端界面到后端数据库操作。",
  },
  {
    title: "Enhancing User Experience with CSS Animations",
    content:
      "动画可以显著改善用户体验。在本文中，我们将探讨如何使用 CSS 动画和过渡来创建更生动和有吸引力的用户界面。",
  },
  {
    title: "Deep Dive into TypeScript Generics",
    content:
      "TypeScript 的泛型为代码提供了更高的灵活性和类型安全性。在这篇文章中，我们将深入探讨 TypeScript 泛型的使用方法及其在实际项目中的应用场景。",
  },
  {
    title: "Getting Started with GraphQL and Apollo Client",
    content:
      "GraphQL 提供了一种高效的方式来查询数据。本文将介绍如何使用 Apollo Client 在 React 应用中集成 GraphQL，以及一些最佳实践。",
  },
];
