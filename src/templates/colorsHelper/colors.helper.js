// =============================================================================
// THEME CONFIGURATION - Edit these to change the entire color scheme
// =============================================================================

// export const sexyMainColor = '#6d5590'
// // #a41304
// export const sexyBlack = '#0e0e0e'

// // Color definitions
// const purple = { hex: '#6d5590', rgb: { r: 109, g: 85, b: 144 } }
// const black = { hex: '#0e0e0e', rgb: { r: 14, g: 14, b: 14 } }

const THEME = {
  // Background colors (used for dark/light themes)
  dark: {
    bg: { hex: "#1a1b1f", rgb: { r: 26, g: 27, b: 31 } }, // charcoal
    text: { hex: "#f3f2f0", rgb: { r: 243, g: 242, b: 240 } }, // off-white
  },
  light: {
    bg: { hex: "#fafafa", rgb: { r: 250, g: 250, b: 250 } }, // soft white
    text: { hex: "#1a1b1f", rgb: { r: 26, g: 27, b: 31 } }, // charcoal
  },

  // Accent colors - moody/modern/sci-fi palette
  accents: {
    primary: { hex: "#6d5590", rgb: { r: 109, g: 85, b: 144 } },
    // secondary: { hex: '#e63946', rgb: { r: 230, g: 57, b: 70 } },  // vibrant coral red
    secondary: { hex: "#b23a2f", rgb: { r: 178, g: 58, b: 47 } },
    // tertiary: { hex: "#4cc9f0", rgb: { r: 76, g: 201, b: 240 } }, // electric cyan
    tertiary: { hex: "#4a6fa5", rgb: { r: 74, g: 111, b: 165 } },
  },
};

// =============================================================================
// Derived values (auto-computed from theme)
// =============================================================================

const isDarkMode = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-color-scheme: dark)").matches;

const getThemeColors = () => (isDarkMode() ? THEME.dark : THEME.light);

// Exports for external use
export const sexyMainColor = THEME.accents.primary.hex;
export const sexyBlack = THEME.dark.bg.hex;
export { THEME };

// Full cycle for particles: primary -> bg -> secondary -> bg -> tertiary -> bg
const getParticleColors = () => {
  const bg = getThemeColors().bg;
  return [
    THEME.accents.primary,
    bg,
    THEME.accents.secondary,
    bg,
    THEME.accents.tertiary,
    bg,
  ];
};

// Icons/CSS cycle: primary -> secondary -> tertiary (no bg color)
const iconColors = [
  THEME.accents.primary,
  THEME.accents.secondary,
  THEME.accents.tertiary,
];

// Text cycle: Rowadz -> رُوَّاد
const nameTexts = [
  { text: "Rowadz", isArabic: false },
  { text: "رُوَّاد", isArabic: true },
];

const CYCLE_DURATION = 5000; // 5 seconds for testing (change back to 30000)

let currentColorIndex = 0;
let currentTextIndex = 0;
let colorListeners = [];
let textListeners = [];
let tajawalFontLoaded = false;

export const getCurrentAccentColor = () =>
  getParticleColors()[currentColorIndex];
export const getCurrentNameText = () => nameTexts[currentTextIndex];

export const onAccentColorChange = (callback) => {
  colorListeners.push(callback);
  return () => {
    colorListeners = colorListeners.filter((cb) => cb !== callback);
  };
};

export const onNameTextChange = (callback) => {
  textListeners.push(callback);
  return () => {
    textListeners = textListeners.filter((cb) => cb !== callback);
  };
};

// Lazy load Tajawal font only when needed
const loadTajawalFont = () => {
  if (tajawalFontLoaded) return Promise.resolve();

  return new Promise((resolve) => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Tajawal:wght@700&display=swap";
    link.rel = "stylesheet";
    link.onload = () => {
      tajawalFontLoaded = true;
      resolve();
    };
    document.head.appendChild(link);
  });
};

const updateCycle = async () => {
  // Update color
  const particleColors = getParticleColors();
  currentColorIndex = (currentColorIndex + 1) % particleColors.length;
  const particleColor = particleColors[currentColorIndex];
  const bgColor = getThemeColors().bg;

  if (particleColor.hex !== bgColor.hex) {
    console.log("Icon color changed to:", particleColor.hex);
    document.documentElement.style.setProperty("--accent", particleColor.hex);
  }

  console.log("Particle color changed to:", particleColor.hex);
  colorListeners.forEach((cb) => cb(particleColor));

  // Update text (every other color change, since we have 6 colors and 2 texts)
  // Change text when going from last color back to first, or at midpoint
  if (currentColorIndex === 0 || currentColorIndex === 3) {
    const nextTextIndex = (currentTextIndex + 1) % nameTexts.length;
    const nextText = nameTexts[nextTextIndex];

    // Load font before showing Arabic text
    if (nextText.isArabic) {
      await loadTajawalFont();
    }

    currentTextIndex = nextTextIndex;
    console.log("Text changed to:", nextText.text);
    textListeners.forEach((cb) => cb(nextText));
  }
};

// Start the cycle
setInterval(updateCycle, CYCLE_DURATION);
