import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import cls from "classnames";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { closeMenu, openMenu } from "../redux/reducers/modalSlice";
import MenuModal from "./MenuModal";


const Header = () => {
    const {menuModal} = useAppSelector((state) => state.modal); 
    const dispatch = useAppDispatch();
    const handleMenu = useCallback(() => {
        if(menuModal){
            dispatch(closeMenu());
        }else{
            dispatch(openMenu());
        }
       
    }, [menuModal])

    return (
        <>
        <div className=" w-full h-[60px] fixed z-10 bg-orange-400">
            <div className="h-full w-[94%] mx-auto flex items-center justify-between">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
                {menuModal?(
                    <FontAwesomeIcon onClick={handleMenu} icon={faClose} size="2x" />
                ):(
                    <FontAwesomeIcon onClick={handleMenu} icon={faBars} size="2x" />
                )}
                
            </div>
        </div>
        <div className={cls("w-full h-screen fixed z-10 top-[60px] right-0", {"block":menuModal}, {"hidden":!menuModal})}>
            <MenuModal />
        </div>
        </>

    );
};

export default Header;