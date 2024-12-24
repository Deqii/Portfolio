tailwind.config = {
  theme: {
    extend: {
      keyframes: {
        typingEffect: {
          "0%": { width: 0 },
          "100%": { width: "100%" },
        },
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      animation: {
        spin_slow: "spin 6s linear infinite",
        typingEffect: "typingEffect 2s forwards",
      },
    },
  },
  darkMode: "selector",
};
