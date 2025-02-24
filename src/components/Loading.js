import React from "react"
import ContentLoader from "react-content-loader";

function Loading(props) {
  return (
    <ContentLoader
      viewBox="0 0 500 300" // Fixed aspect ratio
      width="100%" // Adjusts to container width
      height="auto" // Maintains proportion
      preserveAspectRatio="xMidYMid meet" // Ensures proper alignment
      {...props}
    >
      {props.type === "container" ? (
        <>
          <rect x="10" y="20" rx="4" ry="4" width="80%" height="50" />
          <rect x="10" y="80" rx="4" ry="4" width="90%" height="100" />
          <rect x="10" y="200" rx="4" ry="4" width="20%" height="30" />
          <rect x="35%" y="200" rx="4" ry="4" width="20%" height="30" />
          <rect x="60%" y="200" rx="4" ry="4" width="20%" height="30" />
        </>
      ) : props.type === "grid" ? (
        <>
          <rect x="5%" y="5%" rx="4" ry="4" width="90%" height="30" />
          <rect x="5%" y="15%" rx="4" ry="4" width="90%" height="20" />
          <rect x="5%" y="25%" rx="4" ry="4" width="30%" height="150" />
          <rect x="37%" y="25%" rx="4" ry="4" width="30%" height="150" />
          <rect x="69%" y="25%" rx="4" ry="4" width="30%" height="150" />
        </>
      ) : (
        <>
          <rect x="5%" y="10%" rx="4" ry="4" width="80%" height="20" />
          <rect x="5%" y="20%" rx="4" ry="4" width="90%" height="100" />
          <rect x="5%" y="50%" rx="4" ry="4" width="40%" height="20" />
          <rect x="50%" y="50%" rx="4" ry="4" width="40%" height="20" />
        </>
      )}
    </ContentLoader>
  );
}

export default Loading;
