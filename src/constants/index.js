import DefaultAndroid from "../images/defaultScreenshots/Default_Android@2x.png"
import DefaultIPhone from "../images/defaultScreenshots/Default_iPhone@2x.png"
import DefaultBrowser from "../images/defaultScreenshots/Default_Browser@2x.png"
import DefaultComputer from "../images/defaultScreenshots/Default_PC@2x.png"

export const deviceTypes = {
  PHONE: "PHONE",
  PC: "PC",
  BROWSER: "BROWSER",
}

export const deviceTypesMeta = [
  {
    name: "All",
    type: "ALL",
    icon: "ri-device",
  },
  {
    name: "Browser",
    type: deviceTypes.BROWSER,
    icon: "ri-layout-5",
  },
  {
    name: "Phone",
    type: deviceTypes.PHONE,
    icon: "ri-smartphone",
  },
  {
    name: "Computer",
    type: deviceTypes.PC,
    icon: "ri-macbook",
  },
]

export const devices = {
  SAFARIBROWSER: "SAFARIBROWSER",
  MACCOMPUTER: "MACCOMPUTER",
  MACAIR: "MACAIR",
  IMACPRO: "IMACPRO",
  IPHONEX: "IPHONEX",
  ANDROID: "ANDROID",
}

export const deviceConfigs = [
  {
    id: "BROWSER-000",
    name: "Safari",
    type: deviceTypes.BROWSER,
    device: devices.SAFARIBROWSER,
    defaultScreenshot: DefaultBrowser,
    recommended: {
      imageSize: "885x500",
      aspectRatio: "",
    },
    enabledControls: {
      padding: true,
      bgColor: true,
      frameStyleSelection: true,
      boxShadow: true,
    },
    styles: [
      {
        type: "Light",
        color: "#dbdbdb",
        default: true,
      },
      {
        type: "Dark",
        color: "#3c3c3e",
      },
    ],
  },
  {
    id: "IPHONE-X-000",
    name: "iPhone X",
    type: deviceTypes.PHONE,
    device: devices.IPHONEX,
    defaultScreenshot: DefaultIPhone,
    recommended: {
      imageSize: "375x812",
      aspectRatio: "",
    },
    enabledControls: {
      padding: true,
      bgColor: true,
      frameStyleSelection: true,
      boxShadow: true,
      notchSelection: true,
    },
    styles: [
      {
        type: "Light",
        color: "#ececec",
        default: true,
      },
      {
        type: "Dark",
        color: "#4e4e4e",
        default: false,
      },
    ],
  },
  {
    id: "ANDROID-000",
    name: "Android",
    type: deviceTypes.PHONE,
    device: devices.ANDROID,
    defaultScreenshot: DefaultAndroid,
    recommended: {
      imageSize: "411x823",
      aspectRatio: "",
    },
    enabledControls: {
      padding: true,
      bgColor: true,
      frameStyleSelection: true,
      boxShadow: true,
    },
    styles: [
      {
        type: "Light",
        color: "#ececec",
        default: true,
      },
      {
        type: "Dark",
        color: "#4e4e4e",
        default: false,
      },
    ],
  },
  {
    id: "MACBOOK-AIR-000",
    name: "Macbook Air",
    type: deviceTypes.PC,
    device: devices.MACAIR,
    defaultScreenshot: DefaultComputer,
    recommended: {
      imageSize: "885x500",
      aspectRatio: "",
    },
    enabledControls: {
      padding: true,
      bgColor: true,
      frameStyleSelection: true,
      boxShadow: true,
      notchSelection: false,
    },
    styles: [
      {
        type: "Light",
        color: "#ececec",
        default: true,
      },
      {
        type: "Silver",
        color: "#dfe0e2",
        default: false,
      },
      {
        type: "Gold",
        color: "#fbd8c6",
        default: false,
      },
      {
        type: "Dark",
        color: "#4e4e4e",
        default: false,
      },
    ],
  },
  {
    id: "IMAC-PRO-000",
    name: "iMac Pro",
    type: deviceTypes.PC,
    device: devices.IMACPRO,
    defaultScreenshot: DefaultBrowser,
    recommended: {
      imageSize: "885x500",
      aspectRatio: "",
    },
    enabledControls: {
      padding: true,
      bgColor: true,
      frameStyleSelection: true,
      boxShadow: true,
      notchSelection: false,
    },
    styles: [
      {
        type: "Light",
        color: "#ececec",
        default: true,
      },
      {
        type: "Silver",
        color: "#dfe0e2",
        default: false,
      },
      {
        type: "Dark",
        color: "#4e4e4e",
        default: false,
      },
    ],
  },
]
