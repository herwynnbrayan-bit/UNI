use client;

import React, { useEffect, useRef, useState } from "react";

// CSS optimizado iOS 26 & accesibilidad
const css = `
:root {
  --primary: #40E0D0;
  --secondary: #001F3F;
  --accent: #660000;
  --highlight: #D4AF37;
  --bg-light: #f2f2f7;
  --bg-dark: #000;
  --text-light: #001F3F;
  --text-dark: #fff;
  --shadow-light: rgba(0,0,0,0.15);
  --shadow-dark: rgba(0,0,0,0.3);
  --radius: clamp(20px, 3vw, 34px);
  --transition: 0.45s cubic-bezier(.61,-0.01,.48,1.23);
  --anim-spring: cubic-bezier(.22,1,.36,1);
  --anim-fade: cubic-bezier(.61,-0.01,.48,1.23);
}
/* ... Resto del CSS igual que en la respuesta anterior ... */
`;

const days = [
  { key: "lunes", label: "🟢 Lun" },
  { key: "martes", label: "🟢 Mar" },
  { key: "miercoles", label: "🟢 Mié" },
  { key: "jueves", label: "🟢 Jue" },
  { key: "viernes", label: "🟢 Vie" },
  { key: "sabado", label: "🟠 Sáb" },
  { key: "domingo", label: "🔵 Dom" },
  { key: "claves", label: "🚀 Claves" },
];

const horario = {
  /* ... Horario igual que en la respuesta anterior ... */
};

const calendarEvents = {
  /* ... Eventos igual que en la respuesta anterior ... */
};

function getKeywords(day) {
  /* ... Función igual que en la respuesta anterior ... */
}

export default function Page() {
  // States y funciones igual que en la respuesta anterior

  /* ... Todo el componente igual que en la respuesta anterior ... */
}