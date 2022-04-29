import {navbar} from "../conponent/navbar";

import '../styles/navbar.css'
console.log("navbar",navbar)


let navbar_div = document.getElementById("navbar")

navbar_div.innerHTML = navbar();
