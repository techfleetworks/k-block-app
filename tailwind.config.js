/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "var(--container-padding)",
        screens: {
          "2xl": "1440px",
        },
      },

      colors: {
        // Primary Blues
        "primary-b-900": "var(--primary-b-900)",
        "primary-b-600": "var(--primary-b-600)",
        "primary-b-500": "var(--primary-b-500)",
        "primary-b-400": "var(--primary-b-400)",
        "primary-b-300": "var(--primary-b-300)",
        "primary-b-200": "var(--primary-b-200)",
        "primary-b-100": "var(--primary-b-100)",
        "primary-b-50": "var(--primary-b-50)",

        // Semantic Colors
        "semantic-g-500": "var(--semantic-g-500)",
        "semantic-g-300": "var(--semantic-g-300)",
        "semantic-g-50": "var(--semantic-g-50)",

        "semantic-r-500": "var(--semantic-r-500)",
        "semantic-r-100": "var(--semantic-r-100)",
        "semantic-r-50": "var(--semantic-r-50)",

        "semantic-b-900": "var(--semantic-b-900)",
        "semantic-b-300": "var(--semantic-b-300)",
        "semantic-b-100": "var(--semantic-b-100)",
        "semantic-b-50": "var(--semantic-b-50)",

        "semantic-y-500": "var(--semantic-y-500)",
        "semantic-y-100": "var(--semantic-y-100)",
        "semantic-y-700": "var(--semantic-y-700)",

        // Neutrals
        "neutral-n-900": "var(--neutral-n-900)",
        "neutral-n-800": "var(--neutral-n-800)",
        "neutral-n-700": "var(--neutral-n-700)",
        "neutral-n-500": "var(--neutral-n-500)",
        "neutral-n-450": "var(--neutral-n-450",
        "neutral-n-400": "var(--neutral-n-400)",
        "neutral-n-300": "var(--neutral-n-300)",
        "neutral-n-250": "var(--neutral-n-250)",
        "neutral-n-200": "var(--neutral-n-200)",
        "neutral-n-100": "var(--neutral-n-100)",
        "neutral-n-50": "var(--neutral-n-50)",
        "neutral-n-0": "var(--neutral-n-0)",

        // Neutral Table Border Color
        "neutral-table-border": "var(--neutral-table-border)",

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        none: "0",
        sm: "0.125rem",
        rounded: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      dropShadow: {
        md: "4px 4px 10px hsla(208, 17%, 80%, 0.25)",
        low: "2px 2px 14px hsla(208, 17%, 80%, 0.25)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
  components: {
    // Table Styles
    ".table-text": {
      color: "var(--neutral-n-800)",
      lineHeight: "1.125",
      fontWeight: "500",
      fontSize: "0.875rem",
    },
    ".table-link": {
      color: "var(--primary-b-500)",
      lineHeight: "1.125",
      fontWeight: "500",
      fontSize: "0.875rem",
    },
    ".sm-muted-table-text": {
      color: "var(--neutral-n-500)",
      fontSize: "0.75rem",
      fontWeight: "400",
      lineHeight: "1",
    },
    ".medium-muted-table-text": {
      color: "var(--neutral-n-500)",
      fontSize: "0.875rem",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};
