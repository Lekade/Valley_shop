import React from "react"
import ContentLoader from "react-content-loader"
import style from "./Selection.module.css"

const Skeleton = (props) => (
    <ContentLoader
        className={style.skeleton}
        speed={2}
        width={384}
        height={568}
        viewBox="0 0 384 568"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="0" ry="0" width="384" height="493" />
        <rect x="-2" y="508" rx="0" ry="0" width="234" height="21" />
        <rect x="-1" y="546" rx="0" ry="0" width="234" height="19" />
        <rect x="287" y="516" rx="0" ry="0" width="78" height="44" />
    </ContentLoader>
)

export default Skeleton