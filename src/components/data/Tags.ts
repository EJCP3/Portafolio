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




export const TAGS = {
  react: {
    name: "React.js",
    class: "badge-info bg-info",
    img: "/sprite.svg#react",
    icon: React,
  },
  astro: {
    name: "Astro",
    class: "badge-error",
    img: "/sprite.svg#astro",
    icon: Astro,
  },
  css: {
    name: "CSS",
    class: "badge-info",
    img: "/sprite.svg#css",
    icon: Css,
  },
  html: {
    name: "HTML5",
    class: "badge-error",
    img: "/sprite.svg#html",
    icon: Html,
  },
  javascript: {
    name: "JavaScript",
    class: "badge-warning", // texto negro por contraste
    img: "/sprite.svg#javacript",
    icon: JavaScript,
  },
  Sass: {
    name: "Sass",
    class: "badge-secondary",
    img: "/sprite.svg#sass",
    icon: Sass,
  },
  ReactSuite: {
    name: "React Suite",
    class: "badge-info",
    img: "/sprite.svg#suite",
    icon: Suite,
  },
  figma: {
    name: "Figma",
    class: "badge-error",
    img: "/sprite.svg#figma",
    icon: Figma,
  },
  github: {
    name: "GitHub",
    class: "badge-neutral",
    img: "/sprite.svg#github",
    icon: GitHub,
  },
  supabase: {
    name: "Supabase",
    class: "badge-success",
    img: "/sprite.svg#supabase",
    icon: Supabase,
  },
  daisyui: {
    name: "DaisyUI",
    class: "badge-primary",
    img: "/sprite.svg#daisyui",
    icon: Daisyui,
  },
  vite: {
    name: "Vite",
    class: "badge-primary",
    img: "/sprite.svg#vite",
    icon: Vitejs,
  },
  tailwindcss: {
    name: "Tailwind CSS",
    class: "badge-info",
    img: "/sprite.svg#tailwind",
    icon: Tailwindcss,
  },
};