import React from "react";

export default function Button({ children, variant = "primary", className = "" }) {

  const base =
    "px-6 py-3 rounded-lg font-medium transition duration-300";

  const variants = {
    primary: `
      bg-[var(--btn-primary-bg)]
      text-[var(--btn-primary-text)]
      hover:bg-[var(--btn-primary-hover)]
    `,
    secondary: `
      bg-[var(--btn-secondary-bg)]
      text-[var(--btn-secondary-text)]
      hover:bg-[var(--btn-secondary-hover)]
    `,
    outline: `
      border
      border-[var(--btn-outline-border)]
      text-[var(--btn-outline-text)]
      hover:bg-[var(--btn-outline-hover-bg)]
      hover:text-[var(--btn-outline-hover-text)]
    `,
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}