// src/assets/data.ts
import { Book, Dumbbell, Gamepad2 } from "lucide-react";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import type { Experience } from "../lib/types";

export const myInfo = {
  // ===================== DATOS PRINCIPALES =====================
  name: "Tomás Hauser",
  alias: "Tomás",
  title: "Estudiante en ORT Montañeses",
  // poné tu foto en /public con este nombre
  image: "/tomas-profile.jpg",

  // ===================== TECNOLOGÍAS (TECK STACK) =====================
  // Me dijiste "dejá esas" → mantengo las mismas del repo
  skills: [
    {
      name: ".Net",
      children: <AiOutlineDotNet className="size-10" />,
      className: "bg-violet-500",
    },
    {
      name: "React",
      children: <FaReact className="size-10" />,
      className: "bg-sky-500",
    },
    {
      name: "Docker",
      children: <FaDocker className="size-10" />,
      className: "bg-blue-700",
    },
    {
      name: "NodeJS",
      children: <FaNodeJs className="size-10" />,
      className: "bg-green-500",
    },
    {
      name: "Azure",
      children: <VscAzure className="size-10" />,
      className: "bg-blue-500",
    },
    {
      name: "Sql",
      children: <TbSql className="size-10" />,
      className: "bg-yellow-500 text-zinc-900",
    },
  ],

  // ===================== ABOUT ME / QUIÉN SOY =====================
  about_me: {
    head:
      "Soy un estudiante de software especializado en desarrollo de videojuegos. Estoy aprendiendo sobre desarrollo back-end y hoy en día busco mejorar mis habilidades y aprender cosas nuevas, estoy abierto a cualquier tipo de oportunidad.",
    // Me dijiste “dejá esos” → mantengo el snapshot original
    snapshot: [
      {
        label: "10 000 +",
        value: "Lines of code written",
      },
      {
        label: "6",
        value: "Years of experience",
      },
      {
        label: "2.5",
        value: "Spoken languages",
      },
      {
        label: "2",
        value: "Countries lived in",
      },
    ],
    // Hobbies: “si” → dejo estos
    hobbies: [
      {
        name: "Gaming",
        icon: <Gamepad2 className="size-6 text-zinc-400" />,
      },
      {
        name: "Reading",
        icon: <Book className="size-6 text-zinc-400" />,
      },
      {
        name: "Gym",
          icon: <Dumbbell className="size-6 text-zinc-400" />,
      },
    ],
    other:
      "Me interesan los proyectos donde pueda aprender cosas nuevas, experimentar con tecnología y seguir creciendo como desarrollador.",
  },

  // ===================== CONTACTO =====================
  contact: {
    email: "tomashauser2007@gmail.com",
    phone: "+54 9 11 5220-1926",
    whatsapp: "https://wa.me/5491152201926",
    // si todavía no querés links reales, dejá "#" o completalos después
    linkedin: "#",
    github: "#",
    location: "Buenos Aires, Argentina",
  },

  // ===================== EXPERIENCIA =====================
  // La idea es que las tarjetas queden igual que en tu diseño:
  // textos genéricos “Tipo de experiencia laboral…”
  experience: {
    work: [
      {
        title: "Tipo de experiencia laboral",
        company: "título de la misma",
        location: "Provincia, País",
        dateRange: "duración",
        description:
          "Descripción no tan compleja de que aportó en la experiencia y en qué me aportó a mí.",
        skills: ["Lenguaje", "Framework", "Herramientas", "etc..."],
        current: false,
      },
      {
        title: "Tipo de experiencia laboral",
        company: "título de la misma",
        location: "Provincia, País",
        dateRange: "duración",
        description:
          "Descripción no tan compleja de que aportó en la experiencia y en qué me aportó a mí.",
        skills: ["Lenguaje", "Framework", "Herramientas", "etc..."],
        current: true,
      },
    ] satisfies Experience[],

    freelance: [
      {
        project: "Título de una - ¿con quién?",
        client: "",
        description: "Descripción corta del trabajo.",
        duration: "",
        skills: ["Lenguaje", "Framework", "Herramientas", "etc..."],
      },
      {
        project: "Título de otra - ¿con quién?",
        client: "",
        description: "Descripción corta del trabajo.",
        duration: "",
        skills: ["Lenguaje", "Framework", "Herramientas", "etc..."],
      },
    ],
  },

  // ===================== EDUCACIÓN =====================
  studies: [
    {
      degreeTitle: "Ingeniería en Informática",
      institution: "ITBA",
      location: "Buenos Aires, Argentina",
      dateRange: "duración",
      topics: [
        "conocimiento adquirido 1",
        "conocimiento adquirido 2",
        "conocimiento adquirido 3",
        "conocimiento adquirido 4",
        "conocimiento adquirido 5",
      ],
      current: false,
    },
  ],

  // ===================== PROYECTOS =====================
  projects: [
    {
      title: "MyFit",
      description:
        "Aplicación que en base a tu ropero digital y mediante un algoritmo con ingreso de variables genera una combinación de ropa apropiada para la ocasión correspondiente. Actualmente no quedó ningún registro del proyecto.",
      technologies: ["C#", "VS Code", "Climate API"],
      liveLink: "",
      githubLink: "",
      // guardá la imagen en /public/projects/myfit.png
      image: "/projects/myfit.png",
    },
    {
      title: "VR-BOX",
      description:
        "Juego de boxeo sandbox en VR, incluye una batalla contra Gerónimo Sánchez Peruga, el legendario tutor de la materia videojuegos en la orientación TIC de ORT.",
      technologies: ["C#", "Visual Studio", "Unity", "Meta Plugins"],
      liveLink: "",
      githubLink: "https://github.com/matrakei/VR-BOX-UNITY",
      image: "/projects/vrbox.png",
    },
    {
      title: "PipeEye",
      description:
        "Página web potenciada por inteligencia artificial dedicada a detectar y clasificar tipos de fallas en radiografías de soldaduras de ductos de transporte de gases y líquidos varios.",
      technologies: ["SupaBase DB", "Python", "React", "FastAPI", "Modelo IA entrenado"],
      liveLink: "",
      githubLink: "",
      image: "/projects/pipeeye.png",
    },
  ],

  // ===================== CERTIFICACIONES =====================
  // Si después querés poner alguna, la agregamos.
  certifications: [],
};
