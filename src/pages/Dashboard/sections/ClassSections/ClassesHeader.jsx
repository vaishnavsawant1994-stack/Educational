import "../Classes.css";
import {
 FaSearch,
 FaFilter,
 FaBell
} from "react-icons/fa";
export default function ClassesHeader(){

return(

<div className="classes-header">

<div>

<h1>

Classes Management

</h1>

<p>

Manage classes and batches

</p>

</div>

<div className="teacher-box">

<img
src="https://i.pravatar.cc/150?img=47"
alt=""
/>

<div>

<h4>

Priyanka

</h4>

<span>

Teacher

</span>

</div>

</div>

</div>

);

}