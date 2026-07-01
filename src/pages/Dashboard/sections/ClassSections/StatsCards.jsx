import "../Classes.css";
import {
 FaBookOpen,
 FaUsers,
 FaUserGraduate,
 FaClipboardList
} from "react-icons/fa";
export default function StatsCards(){

const stats=[

{
title:"Total Classes",
value:"12",
},

{
title:"Students",
value:"248",
},

{
title:"Subjects",
value:"18",
},

{
title:"Attendance",
value:"91%",
},

];

return(

<div className="stats-grid">

{

stats.map(
(item)=>(

<div
key={item.title}
className="stats-card"
>

<h2>

{
item.value
}

</h2>

<p>

{
item.title
}

</p>

</div>

))

}

</div>

);

}