export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{ primary:"#007BFF", primaryDark:"#0056B3", light:"#F4F6F8", lightBlue:"#F3F7FF", lightIndigo:"#EEF2FF" },
      boxShadow:{ soft:"0 10px 30px -10px rgba(0,0,0,.15)" }
    },
  },
  plugins: [],
}