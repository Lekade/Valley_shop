import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Header.module.css";
import {setCategoryId} from "../../redux/slices/filterSlice";
import {useDispatch} from "react-redux";

const CategoryMenu = ({category, gender, url, categoryId}) => {
    const dispatch = useDispatch()

    return <>
             <div className={gender > 0 ? style.categoryBlock : `${style.categoryBlock} ${style.remove}` }>
            {category.map((name, i) =>
                <NavLink key={i} to='/Category' className={(url !== '/Category') ? `${style.category} ${style.removeActive}` : style.category} href="#">
                    <div  onClick={() => dispatch(setCategoryId(i))} className={categoryId === i ? `${style.item} ${style.active}` : style.item}>{name}</div>
                </NavLink>
            )}
        </div>
    </>
}

export default CategoryMenu