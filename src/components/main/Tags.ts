import Astro from "~/icons/Astro.astro";
import Css from "~/icons/Css.astro";
import Figma from "~/icons/Figma.astro";
import GitHub from "~/icons/GitHub.astro";
import Html from "~/icons/Html.astro";
import JavaScript from "~/icons/JavaScript.astro";
import Sass from "~/icons/Sass.astro";
import Suite from "~/icons/Suite.astro";
import Supabase from "~/icons/Supabase.astro";
import React from "~/icons/React.astro";
import Vitejs from "~/icons/vitejs.astro";
import Daisyui from "~/icons/DaisyUI.astro";
import Tailwindcss from "~/icons/tailwindcss.astro";

// export const TAGS = {
//   react: {
//     name: "React.js",
//     class: "bg-[#61DAFB]/10 text-[#61DAFB] ring-[#61DAFB]/10",
//     img: "/React_dark.svg",
//     icon: React,
//   },
//   astro: {
//     name: "Astro",
//     class: "bg-[#BC52EE]/10 text-[#BC52EE] ring-[#BC52EE]/10",
//     img: "/astro.svg",
//     icon: Astro,
//   },
//   css: {
//     name: "CSS",
//     class: "bg-[#1572B6]/10 text-[#1572B6] ring-[#1572B6]/10",
//     img: "/css.svg",
//     icon: Css,
//   },
//   html: {
//     name: "HTML5",
//     class: "bg-[#E34F26]/10 text-[#E34F26] ring-[#E34F26]/10",
//     img: "/html5.svg",
//     icon: Html,
//   },
//   javascript: {
//     name: "JavaScript",
//     class: "bg-[#F7DF1E]/10 text-[#F7DF1E] ring-[#F7DF1E]/10",
//     img: "/javascript.svg",
//     icon: JavaScript,
//   },
//   Sass: {
//     name: "Sass",
//     class: "bg-[#CD6799]/10 text-[#CD6799] ring-[#CD6799]/10",
//     img: "/sass.svg",
//     icon: Sass, 
//   },
//   ReactSuite: {
//     name: "React Suite",
//     class: "bg-[#3498FF]/10 text-[#3498FF] ring-[#3498FF]/10",
//     img: "/Suite.svg",
//     icon: Suite,
//   },
//   figma: {
//     name: "Figma",
//     class: "bg-[#F24E1E]/10 text-[#F24E1E] ring-[#F24E1E]/10",
//     img: "/figma.svg",
//     icon: Figma,
//   },
//   github: {
//     name: "GitHub",
//     class: "bg-[#181717]/10 text-[#181717] ring-[#181717]/10",
//     img: "/Github.svg",
//     icon: GitHub,
//   },
//   supabase: {
//     name: "Supabase",
//     class: "bg-[#3ECF8E]/10 text-[#3ECF8E] ring-[#3ECF8E]/10",
//     img: "/supabase.svg",
//     icon: Supabase,
//   },
//   daisyui: {
//     name: "DaisyUI",
//     class: "bg-[#A855F7]/10 text-[#A855F7] ring-[#A855F7]/10",
//     img: "/daisyui.svg",
//     icon: Daisyui,
//   },
//   vite: {
//     name: "vite",
//     class: "bg-[#A855F7]/10 text-[#A855F7] ring-[#A855F7]/10",
//     img: "/vitejs.svg",
//     icon: Vitejs,
//   },
//   tailwindcss: {
//     name: "Tailwindcss",
//     class: "bg-cyan-300 text-[#A855F7] ring-[#A855F7]/10",
//     img: "/tailwind.svg",
//     icon: Tailwindcss,
//   },
// };

export const TAGS = {
  react: {
    name: "React.js",
    class: "bg-[#61DAFB]/10 text-[#61DAFB] ring-[#61DAFB]/10",
    img: "/React_dark.svg",
    icon: React,
  },
  astro: {
    name: "Astro",
    class: "bg-[#FF5D01]/10 text-[#FF5D01] ring-[#FF5D01]/10",
    img: "/astro.svg",
    icon: Astro,
  },
  css: {
    name: "CSS",
    class: "bg-[#1572B6]/10 text-[#1572B6] ring-[#1572B6]/10",
    img: "/css.svg",
    icon: Css,
  },
  html: {
    name: "HTML5",
    class: "bg-[#E44D26]/10 text-[#E44D26] ring-[#E44D26]/10",
    img: "/html5.svg",
    icon: Html,
  },
  javascript: {
    name: "JavaScript",
    class: "bg-[#F7DF1E]/10 text-black ring-[#F7DF1E]/10", // texto negro por contraste
    img: "/javascript.svg",
    icon: JavaScript,
  },
  Sass: {
    name: "Sass",
    class: "bg-[#CD6799]/10 text-[#CD6799] ring-[#CD6799]/10",
    img: "/sass.svg",
    icon: Sass,
  },
  ReactSuite: {
    name: "React Suite",
    class: "bg-[#3498FF]/10 text-[#3498FF] ring-[#3498FF]/10",
    img: "/Suite.svg",
    icon: Suite,
  },
  figma: {
    name: "Figma",
    class: "bg-[#F24E1E]/10 text-[#F24E1E] ring-[#F24E1E]/10",
    img: "/figma.svg",
    icon: Figma,
  },
  github: {
    name: "GitHub",
    class: "bg-[#181717]/10 text-[#181717] ring-[#181717]/10",
    img: "/Github.svg",
    icon: GitHub,
  },
  supabase: {
    name: "Supabase",
    class: "bg-[#3ECF8E]/10 text-[#3ECF8E] ring-[#3ECF8E]/10",
    img: "/supabase.svg",
    icon: Supabase,
  },
  daisyui: {
    name: "DaisyUI",
    class: "bg-[#A855F7]/10 text-[#A855F7] ring-[#A855F7]/10",
    img: "/daisyui.svg",
    icon: Daisyui,
  },
  vite: {
    name: "Vite",
    class: "bg-[#646CFF]/10 text-[#646CFF] ring-[#646CFF]/10",
    img: "/vitejs.svg",
    icon: Vitejs,
  },
  tailwindcss: {
    name: "Tailwind CSS",
    class: "bg-[#06B6D4]/10 text-[#06B6D4] ring-[#06B6D4]/10",
    img: "/tailwindcss.svg",
    icon: Tailwindcss,
  },
};
