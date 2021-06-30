const React = require("react")
const Layout = require("./src/components/Layout").default

// gatsy-browser api: wrapPageElement
exports.wrapPageElement = ({ element, props }) => {
  // element represent the page
  return <Layout {...props}>{element}</Layout>
}
