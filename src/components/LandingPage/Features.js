import React from "react"
import AppScreenshot1 from "../../images/LandingPage/AppScreenshot_MACAIR_Light.png"
import AppScreenshot2 from "../../images/LandingPage/LandingImage.png"

const featureList = [
  {
    title: "Flexible & Forgiving",
    subtitle:
      "Forget the days of stretching and cropping screenshots to perfect pixel dimensions. Our devices are generated dynamically around your image",
  },
  {
    title: "Consistent Graphics",
    subtitle:
      "With a wide range of devices and colors, you can keep your graphics fresh, but maintain consistency",
  },
  {
    title: "Transparent, or Colorful",
    subtitle:
      "Export your graphic with a transparent background, or give it a color pop right off the bat",
  },
  {
    title: "Modern and Clean",
    subtitle:
      "Clean designs, and modern options - give your iPhone graphic a notch, or not!",
  },
]

const Feature = ({ title, subtitle }) => (
  <li className="my-4">
    <h2 className="highlight text-gray-800">{title}</h2>
    <p className="text-gray-600">{subtitle}</p>
  </li>
)

const Features = () => {
  return (
    <section className="w-full text-center my-12">
      <div className="flex flex-wrap items-center justify-around">
        <img src={AppScreenshot1} className="w-full max-w-2xl" />
        <div className="text-left max-w-md">
          <ul>
            <Feature
              title={featureList[0].title}
              subtitle={featureList[0].subtitle}
            />
            <Feature
              title={featureList[1].title}
              subtitle={featureList[1].subtitle}
            />
            <Feature
              title={featureList[2].title}
              subtitle={featureList[2].subtitle}
            />
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Features
