// AttendanceModal.jsx

import "./AttendanceModal.css";
import { useState } from "react";

import {
FaTimes,
FaSearch,
FaUsers,
FaPercentage,
FaDownload,
FaPaperPlane,
FaUndo
}
from "react-icons/fa";

export default function AttendanceModal({
open,
onClose
}){

if(!open)return null;

const initial=[

{id:1,name:"Rahul Sharma",status:"present"},
{id:2,name:"Neha Verma",status:"absent"},
{id:3,name:"Aman Singh",status:"present"},
{id:4,name:"Riya Patel",status:"present"},
{id:5,name:"Soham Mehta",status:"late"}

];

const[
students,
setStudents
]=useState(initial);

const update=(id,value)=>{

setStudents(
prev=>

prev.map(
s=>

s.id===id
?{
...s,
status:value
}
:s
)

);

};

const all=(value)=>{

setStudents(
prev=>

prev.map(
s=>({
...s,
status:value
})

)

);

};

const reset=()=>{

setStudents(
initial
);

};

const present=

students.filter(
x=>
x.status==="present"
).length;

const absent=

students.filter(
x=>
x.status==="absent"
).length;

const late=

students.filter(
x=>
x.status==="late"
).length;

const percent=

Math.round(
(
present/
students.length
)
*
100
);

return(

<div className="attendance-overlay">

<div className="attendance-modal">

<button
className="attendance-close"
onClick={onClose}

>

<FaTimes/>

</button>

<div className="attendance-header">

<h1>

Attendance

</h1>

<p>

Manage daily attendance for your class.

</p>

</div>

<div className="attendance-body">

<div className="attendance-left">

<div className="attendance-filters">

<input
placeholder="Search student..."
/>

</div>

<div className="attendance-table">

{

students.map(
(item)=>(

<div
key={item.id}
className="attendance-row"
>

<span>

{item.name}

</span>

<div
className="attendance-actions"
>

<button
onClick={()=>
update(
item.id,
"present"
)
}

>

✔

</button>

<button
onClick={()=>
update(
item.id,
"absent"
)
}

>

✖

</button>

<button
onClick={()=>
update(
item.id,
"late"
)
}

>

●

</button>

</div>

</div>

))

}

</div>

<div className="attendance-bottom">

<button
onClick={()=>
all(
"present"
)
}

>

Mark All Present

</button>

<button
onClick={()=>
all(
"absent"
)
}

>

Mark All Absent

</button>

<button
onClick={
reset
}

>

Reset

</button>

</div>

</div>

<div className="attendance-right">

<h2>

Attendance Summary

</h2>

<div>

Present:
{present}

</div>

<div>

Absent:
{absent}

</div>

<div>

Late:
{late}

</div>

<div>

Attendance:
{percent}%

</div>

<button>

Download Attendance Report

</button>

<button
onClick={
onClose
}

>

Submit Attendance

</button>

</div>

</div>

</div>

</div>

);

}
