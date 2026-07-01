import "./ScheduleModal.css";
import { useState, useEffect } from "react";

import {
FaTimes,
FaCalendarAlt,
FaClock,
FaUsers,
FaBookOpen,
FaStickyNote,
FaCheckCircle
}
from "react-icons/fa";

export default function ScheduleModal({

open,
onClose,

}){

const[day,setDay]=
useState("Monday");

const[start,setStart]=
useState("09:00");

const[end,setEnd]=
useState("10:00");

const[batch,setBatch]=
useState("Batch A");

const[subject,setSubject]=
useState("Mathematics");

const[note,setNote]=
useState("");

if(!open)
return null;

const saveSchedule=()=>{

const data=

JSON.parse(
localStorage.getItem(
"classSchedules"
)

)||[];

const newItem={

id:
Date.now(),

day,

start,

end,

batch,

subject,

note,

};

localStorage.setItem(

"classSchedules",

JSON.stringify([

...data,

newItem

])

);

alert(
"Schedule Saved"
);

onClose();

};

return(

<div
className="schedule-overlay"
>

<div
className="schedule-modal"
>

<button

className="schedule-close"

onClick={onClose}

>

<FaTimes/>

</button>

<div className="schedule-header">

<h1>

Schedule Class

</h1>

<p>

Manage timetable and class sessions.

</p>

</div>

<div className="schedule-body">

<div className="schedule-left">

<div>

<label>

Select Day

</label>

<select

value={day}

onChange={(e)=>

setDay(
e.target.value
)

}

>

<option>Monday</option>
<option>Tuesday</option>
<option>Wednesday</option>
<option>Thursday</option>
<option>Friday</option>

</select>

</div>

<div className="time-row">

<div>

<label>

Start

</label>

<input

type="time"

value={start}

onChange={(e)=>

setStart(
e.target.value
)

}

/>

</div>

<div>

<label>

End

</label>

<input

type="time"

value={end}

onChange={(e)=>

setEnd(
e.target.value
)

}

/>

</div>

</div>

<div>

<label>

Select Batch

</label>

<select

value={batch}

onChange={(e)=>

setBatch(
e.target.value
)

}

>

<option>Batch A</option>
<option>Batch B</option>
<option>Batch C</option>

</select>

</div>

<div>

<label>

Subject

</label>

<select

value={subject}

onChange={(e)=>

setSubject(
e.target.value
)

}

>

<option>Mathematics</option>
<option>Physics</option>
<option>Chemistry</option>
<option>Biology</option>

</select>

</div>

<div>

<label>

Notes

</label>

<textarea

value={note}

onChange={(e)=>

setNote(
e.target.value
)

}

/>

</div>

</div>

<div className="schedule-right">

<h2>

Schedule Preview

</h2>

<div>

<FaCalendarAlt/>

<span>

{day}

</span>

</div>

<div>

<FaClock/>

<span>

{start}
–
{end}

</span>

</div>

<div>

<FaUsers/>

<span>

{batch}

</span>

</div>

<div>

<FaBookOpen/>

<span>

{subject}

</span>

</div>

<div>

<FaStickyNote/>

<span>

{
note||
"No notes"
}

</span>

</div>

<div className="schedule-update">

<FaCheckCircle/>

Updates:

Batch Schedule

Class Details

</div>

<div className="schedule-actions">

<button

onClick={onClose}

>

Cancel

</button>

<button

onClick={
saveSchedule
}

>

Save Schedule

</button>

</div>

</div>

</div>

</div>

</div>

);

}
