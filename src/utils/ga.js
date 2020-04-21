import { trackCustomEvent } from "gatsby-plugin-google-analytics"

export const gaImageUpload = () => {
  trackCustomEvent({
    category: "editor",
    action: "upload_image",
  })
}

export const gaImageDownload = () => {
  trackCustomEvent({
    category: "editor",
    action: "download_image",
  })
}
