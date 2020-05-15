import React from "react"
import { Link } from "gatsby"
import AppScreenshot1 from "../../images/LandingPage/AppScreenshot_MACAIR_Light.png"
import AppScreenshot2 from "../../images/LandingPage/LandingImage.png"

const featureList = [
  {
    title: "Flexible & Forgiving",
    icon: "ri-magic-line",
    subtitle:
      "Forget the days of stretching and cropping screenshots to perfect pixel dimensions. Our devices are generated dynamically around your image",
  },
  {
    title: "Consistent Graphics",
    icon: "ri-brush-line",
    subtitle:
      "With a wide range of devices and colors, you can keep your graphics fresh, but maintain consistency",
  },
  {
    title: "Transparent, or Colorful",
    icon: "ri-palette-line",
    subtitle:
      "Export your graphic with a transparent background, or give it a color pop right off the bat",
  },
  {
    title: "Modern and Clean",
    icon: "ri-palette-fill",
    subtitle:
      "Clean designs, and modern options - give your iPhone graphic a notch, or not!",
  },
]

const Feature = ({ title, icon, subtitle }) => (
  <li className="my-4">
    <div className="flex items-center">
      <div className="flex items-center justify-center text-white bg-primary-400 h-8 w-8 rounded mr-2">
        <i className={`${icon} text-lg`} />
      </div>
      <h2 className="text-gray-800">{title}</h2>
    </div>

    <p className="text-gray-600 font-thin">{subtitle}</p>
  </li>
)

const Features = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center mx-auto my-12 px-4">
      <h2 className="highlight text-3xl">Make Your Website Pop</h2>
      <h5 className="text-2xl my-4 font-thin text-center max-w-xl">
        Quickly create beautiful mockups for your landing page or marketing
        materials
      </h5>
      <div className="flex flex-wrap-reverse xl:flex-wrap items-center justify-around">
        <img
          src={AppScreenshot1}
          className="w-full max-w-2xl"
          alt="Screendo device screenshot Macbook"
        />
        <div className="text-left max-w-md">
          <ul>
            <Feature
              title={featureList[0].title}
              icon={featureList[0].icon}
              subtitle={featureList[0].subtitle}
            />
            <Feature
              title={featureList[1].title}
              icon={featureList[1].icon}
              subtitle={featureList[1].subtitle}
            />
            <Feature
              title={featureList[2].title}
              icon={featureList[2].icon}
              subtitle={featureList[2].subtitle}
            />
          </ul>
        </div>
      </div>
      <Link
        className="btn btn-primary shadow-lg justify-center w-40 mx-auto md:mx-0"
        to="/app"
      >
        <span>Go To App</span>
        <i className="ri-arrow-right-fill ml-4" />
      </Link>
    </section>
  )
}

export default Features
