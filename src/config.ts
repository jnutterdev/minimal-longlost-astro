export const SITE = {
  website: "https://longlostforgotten.com",
  author: "John Nutter",
  profile: "https://jnutterdev.com",
  desc: "longlostforgotten: the terrible inconvenience of. A personal blog for sharing music, books, and pictures.",
  title: "longlostforgotten",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "America/New_York",
} as const;
