// Import the logo image
import logo from '@src/assets/images/logo/logo.svg'

// Define the configuration options for the template
const themeConfig = {
  app: {
    appName: 'JRS UI', // The name of the application
    appLogoImage: logo // The image to be used as the application logo
  },
  layout: {
    isRTL: false, // Whether the layout should be displayed from right to left
    skin: 'light', // The color scheme to be used for the layout
    type: 'vertical', // The layout type (vertical or horizontal)
    contentWidth: 'boxed', // The width of the content area (full or boxed)
    menu: {
      isHidden: false, // Whether the menu should be hidden
      isCollapsed: false // Whether the menu should be collapsed
    },
    navbar: {
      type: 'floating', // The type of the navbar (static, sticky, floating, or hidden)
      backgroundColor: 'white' // The background color of the navbar
    },
    footer: {
      type: 'static' // The type of the footer (static, sticky, or hidden)
    },
    customizer: false, // Whether the layout customizer should be enabled
    scrollTop: true, // Whether the scroll to top button should be enabled
    toastPosition: 'top-right' // The position of the toast notifications (top-left, top-center, top-right, bottom-left, bottom-center, or bottom-right)
  }
}

// Export the configuration options
export default themeConfig