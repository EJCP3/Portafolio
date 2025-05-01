import Astro from "~/icons/Astro.astro";
import Css from "~/icons/Css.astro";
import DaisyUI from "~/icons/DaisyUI.astro";
import Figma from "~/icons/Figma.astro";
import GitHub from "~/icons/GitHub.astro";
import Html from "~/icons/Html.astro";
import JavaScript from "~/icons/JavaScript.astro";
import Sass from "~/icons/Sass.astro";
import Suite from "~/icons/Suite.astro";
import Supabase from "~/icons/Supabase.astro";
import React from "~/icons/React.astro";

export const TAGS = {
  react: {
    name: "React.js",
    class: "bg-[#61DAFB]/10 text-[#61DAFB] ring-[#61DAFB]/10",
    icon: React,
  },
  astro: {
    name: "Astro",
    class: "bg-[#BC52EE]/10 text-[#BC52EE] ring-[#BC52EE]/10",
    icon: Astro,
  },
  css: {
    name: "CSS",
    class: "bg-[#1572B6]/10 text-[#1572B6] ring-[#1572B6]/10",
    icon: Css,
  },
  html: {
    name: "HTML5",
    class: "bg-[#E34F26]/10 text-[#E34F26] ring-[#E34F26]/10",
    icon: Html,
  },
  javascript: {
    name: "JavaScript",
    class: "bg-[#F7DF1E]/10 text-[#F7DF1E] ring-[#F7DF1E]/10",
    icon: JavaScript,
  },
  Sass: {
    name: "Sass",
    class: "bg-[#CD6799]/10 text-[#CD6799] ring-[#CD6799]/10",
    icon: Sass, 
  },
  ReactSuite: {
    name: "React Suite",
    class: "bg-[#3498FF]/10 text-[#3498FF] ring-[#3498FF]/10",
    icon: Suite,
  },
  figma: {
    name: "Figma",
    class: "bg-[#F24E1E]/10 text-[#F24E1E] ring-[#F24E1E]/10",
    icon: Figma,
  },
  github: {
    name: "GitHub",
    class: "bg-[#181717]/10 text-[#181717] ring-[#181717]/10",
    icon: GitHub,
  },
  supabase: {
    name: "Supabase",
    class: "bg-[#3ECF8E]/10 text-[#3ECF8E] ring-[#3ECF8E]/10",
    icon: Supabase,
  },
  daisyui: {
    name: "DaisyUI",
    class: "bg-[#A855F7]/10 text-[#A855F7] ring-[#A855F7]/10",
    icon: DaisyUI,
  },
};
