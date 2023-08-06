import React from "react"
import ContentLoader from "react-content-loader"
import style from "./Selection.module.css"


const Skeleton = (props) => {


   return <ContentLoader
        className={style.skeleton}
        speed={2}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
       <rect className={style.skeletonText} />
       <rect className={style.skeletonPrice} />
       <rect className={style.skeletonImage} />
       <rect className={style.skeletonRating} />
    </ContentLoader>
}

export default Skeleton

