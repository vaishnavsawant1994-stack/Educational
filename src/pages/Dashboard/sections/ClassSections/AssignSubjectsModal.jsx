import "./AssignSubjectsModal.css";
import { useState } from "react";

import {
FaTimes,
FaSearch,
FaBookOpen,
FaClock
}
from "react-icons/fa";

export default function AssignSubjectsModal({

open,
onClose,

}){

const subjects=[

"Mathematics",
"Physics",
"Chemistry",
"Biology",
"English",

];

const[
selected,
setSelected
]=useState([]);

const[
hours,
setHours
]=useState({});

const toggleSubject=(name)=>{

if(
selected.includes(
name
)
){

setSelected(

selected.filter(
(s)=>
s!==name
)

);

return;

}

setSelected([

...selected,
name,

]);

};

const saveSubjects=()=>{

localStorage.setItem(

"assignedSubjects",

JSON.stringify({

subjects:
selected,

hours,

})

);

alert(
"Subjects Assigned"
);

onClose();

};

if(
!open
)
return null;

return(

<div className="subject-overlay">

<div className="subject-modal">

<button

className="subject-close"

onClick={
onClose
}

>

<FaTimes/>

</button>

<div className="subject-header">

<h1>

Assign Subjects
<br></br>
<h3>
Assign Subjects to Class.
</h3>
</h1>
<br></br>


</div>

<div className="subject-body">

<div className="subject-left">

<div className="subject-search">

<FaSearch/>

<input
placeholder=
"Search Subject"
/>

</div>

<div className="subject-list">

{

subjects.map(
(item)=>(

<label

key={
item
}

className="subject-row"

>

<input

type="checkbox"

checked={

selected.includes(
item
)

}

onChange={()=>

toggleSubject(
item
)

}

/>

<div>

<FaBookOpen/>

</div>

<span>

{
item
}

</span>

</label>

))

}

</div>

</div>

<div className="subject-right">

<h2>

Weekly Hours

</h2>

{
selected.length===0

?

<div className="empty-subject">

Select Subject

</div>

:

<div className="subject-scroll">

{

selected.map(
(item)=>(

<div
key={item}
className="hour-row"
>

<span>

{item}

</span>

<input

type="number"

min="1"

value={
hours[item]
||
""
}

onChange={(e)=>

setHours({

...hours,

[item]:
e.target.value

})

}

/>

</div>

))

}

</div>

}
<div className="subject-batch">

<label>

Batch

</label>

<select>

<option>

Class 10 - Batch A

</option>

<option>

Class 11 - Batch B

</option>

</select>

</div>

<div className="subject-actions">

<button
onClick={
onClose
}
>

Cancel

</button>

<button
onClick={
saveSubjects
}
>

Save Subjects

</button>

</div>

</div>

</div>

</div>

</div>

);

}