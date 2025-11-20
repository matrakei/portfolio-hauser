// src/assets/data.ts
import { Gamepad2 } from "lucide-react";
import type { Experience } from "../lib/types";

export const myInfo = {
  name: "Tomás Hauser",
  alias: "Tomás",
  title: "Estudiante en ORT Montañeses",
  image: "/tomas-profile.jpg",

  // ===================== TECNOLOGÍAS =====================
  skills: [
    {
      name: "C#",
      children: (
        <img
          src="/csharp-icon.png"
          className="w-16 h-16 object-contain"
          draggable="false"
        />
      ),
      className: "",
    },
    {
      name: "FastAPI",
      children: (
        <img
          src="/fastapi-icon.png"
          className="w-16 h-16 object-contain"
          draggable="false"
        />
      ),
      className: "",
    },
    {
      name: "Python",
      children: (
        <img
          src="/python-icon.png"
          className="w-16 h-16 object-contain"
          draggable="false"
        />
      ),
      className: "",
    },
    {
      name: "Unity",
      children: (
        <img
          src="/unity-icon.png"
          className="w-16 h-16 object-contain"
          draggable="false"
        />
      ),
      className: "",
    },
  ],

  // ===================== ABOUT ME =====================
  about_me: {
    head:
      "Soy un estudiante de software especializado en desarrollo de videojuegos. Estoy aprendiendo sobre desarrollo back-end y hoy en día busco mejorar mis habilidades y aprender cosas nuevas, estoy abierto a cualquier tipo de oportunidad.",

    snapshot: [
      {
        label: "",
        value: (
          <img
            src="/projects/myfit.png"
            className="w-full h-full object-cover rounded-md"
            draggable="false"
          />
        ),
      },
      {
        label: "",
        value: (
          <img
            src="/projects/vrbox.png"
            className="w-full h-full object-cover rounded-md"
            draggable="false"
          />
        ),
      },
      {
        label: "",
        value: (
          <img
            src="/projects/pipeeye.png"
            className="w-full h-full object-cover rounded-md"
            draggable="false"
          />
        ),
      },
    ],

    // ⭐ HOBBIES actualizados (gaming, basquet, música)
    hobbies: [
      { name: "Gaming", icon: <Gamepad2 className="size-6 text-zinc-400" /> },
      { name: "Basquet", icon: <img src="/basquet.png" className="w-6 h-6 object-contain" /> },
      { name: "Música", icon: <img src="/musica.png" className="w-6 h-6 object-contain" /> },
    ],

    other:
      "Me interesan los proyectos donde pueda aprender cosas nuevas, experimentar con tecnología y seguir creciendo como desarrollador.",
  },

  // ===================== CONTACTO =====================
  contact: {
    email: "tomashauser2007@gmail.com",
    phone: "+54 9 11 5220-1926",
    whatsapp: "https://wa.me/5491152201926",
    linkedin: "#",
    github: "#",
    location: "Buenos Aires, Argentina",
  },

  // ===================== EXPERIENCIA =====================
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
        "Página web potenciada por inteligencia artificial dedicada a detectar y clasificar fallas en radiografías de soldaduras.",
      technologies: ["SupaBase DB", "Python", "React", "FastAPI", "Modelo IA"],
      liveLink: "",
      githubLink: "",
      image: "/projects/pipeeye.png",
    },
  ],

  certifications: [],
};
