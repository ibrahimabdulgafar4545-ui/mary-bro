// pages.ts  (or staticData.ts / content/pages.ts)
// central storage for static page data — with responsive Tailwind classes

export const pages = {
  info: {
    title: 'Information',
    titleClasses:
      'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight',
    description:
      'Here you can find detailed information about our project, goals, and the technologies we use. We aim to provide clarity and insight into our development process.',
    descriptionClasses:
      'mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl',
  },
  reach: {
    title: 'Reach Out',
    titleClasses:
      'text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight',
    description:
      'If you have questions or want to work together, please get in touch. Your feedback and collaboration are important to us.',
    descriptionClasses:
      'mt-4 sm:mt-5 text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl',
  },
} 