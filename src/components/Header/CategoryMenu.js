import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Header.module.css";
import {setCategoryId} from "../../redux/slices/filterSlice";
import {useDispatch} from "react-redux";

const CategoryMenu = ({category, gender, url, categoryId}) => {
    const dispatch = useDispatch()
    return <>
        {gender > 0 && <div className={style.categoryBlock}>
            {category.map((name, i) =>
                <NavLink to='/Category' className={(url !== '/Category') ? `${style.category} ${style.removeActive}` : style.category} href="#">
                    <div key={i} onClick={() => dispatch(setCategoryId(i))} className={categoryId === i ? `${style.item} ${style.active}` : style.item}>{name}</div>
                </NavLink>
            )}
        </div>}
    </>
}

export default CategoryMenu