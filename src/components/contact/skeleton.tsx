import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={450}
    height={84}
    viewBox="0 0 450 84"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="396" y="29" rx="0" ry="0" width="16" height="16" /> 
    <rect x="366" y="29" rx="0" ry="0" width="16" height="16" /> 
    <rect x="-15" y="12" rx="0" ry="0" width="371" height="50" />
  </ContentLoader>
)

export default Skeleton