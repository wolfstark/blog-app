const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: colors.lightBlue[500],
          DEFAULT: colors.lightBlue[600],
          // DEFAULT: "#A1A4A5",
          dark: colors.lightBlue[700],
        },
        // secondary: colors.yellow,
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.primary"),
              "text-decoration": "none",
              "&:hover": {
                color: theme("colors.primary.light"),
              },
              "&::after": {
                content: '""',
                "background-color": "currentColor",
                display: "inline-block",
                margin: "0 1px 0 5px",
                left: "-1px",
                "-webkit-mask-box-image":
                  "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGDSURBVHgBtZaNcYMwDIUfGzgbqBuUDcwkaTdoJ4AN0gmaTNJu0GyQdILSCUjRIa6yMT+x4d29O7CNPmMLmQzryYhZ39hIDChbX1vflPn+2JqwoigA8t20fsEKogCslrZ6C6iG/UhAo/qLwBhCpCzc2T+OjNu1PquxB0TqpIK8e33k3Rdw3zJKnyqIVe2VtF1UW4b/PW0QuawaaDyYH5iBVyQCSQA2ALvJPRRQT8QgUdUEjPWs+r6QqHIGlsPdv/1UMIuuNJ3Fh4UwI8+WcAvAZQxEcJNCm2ZgOYZVpodRCPaAYblqxP0MK4wv42sA9oGJzPRLEQez8oDBfILwhHl1eAuOcL/RgZ48mF+uqhnY3dI1b781zHgBl8AKuSZEiOCe1KF2P/V1UiQBa6+Ps7OBu4w2FQi4308RmJDWCePH02K9qSCcQLuRcTncZbaIFKH7HPRe8ptmYp4A/0bUCO93lDhgg2U/RqPlag3o4toYK0JXmvoM1fW0QuIhmmEezvoVJ+sPourrpWEel2gAAAAASUVORK5CYII=)",
                "object-fit": "cover",
                position: "relative",
                transition: "0.3s",
                height: "14px",
                width: "14px",
              },
            },
            // ...
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["gatsby-plugin-postcss", require("@tailwindcss/typography")],
}
