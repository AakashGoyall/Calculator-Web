import {useState} from "react"
import { FaSun } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";

const ThemeMode = () =>{
    const [isSunVisible, setIsSunVisible] = useState(true)
    const [isMoonVisible, setIsMoonVisible] = useState(false);

    const changeTheme = () => {
        setIsSunVisible(!isSunVisible)
        setIsMoonVisible(!isMoonVisible); // Toggle the visibility state
        try{
            document.querySelector(".bodyChange").classList.toggle("darkTheme");
            document.querySelector(".containerChange").classList.toggle("bg-light-container-color");
            document.querySelector(".valueColorChange").classList.toggle('darkTextColor');
            let elements = document.querySelectorAll(".btnChangeColor");
            
            elements.forEach(element => {
                element.classList.toggle('text-dark-text-color');
                element.classList.toggle('bg-light-btn-bg-color');
                element.classList.toggle('hover:bg-light-btn-hover-bg-color');
            });
        }catch(e){
            console.log(e)
        }
       
      };

    return(
        <>
        {isSunVisible && <FaSun title="Light" onClick={changeTheme}/>}
        {isMoonVisible && <IoMoon title="Dark" className="text-white" onClick={changeTheme}/>}
        </>
    )
}

export default ThemeMode;