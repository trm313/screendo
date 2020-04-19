/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "remixicon/fonts/remixicon.css"

// TailwindCSS
import "tailwindcss/base.css"
import "tailwindcss/components.css"

// Custom Styles
import "./src/styles/fonts.css"
// import "./src/styles/gatsby-layout.css"
import "./src/styles/elements.css"
import "./src/styles/components.css"

// End TailwindCSS
import "tailwindcss/utilities.css"

// import "./src/styles/tailwind.css"

export { default as wrapRootElement } from "./src/reducers/wrapper"
