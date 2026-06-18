
import "./Announcement.css";

import { useState } from "react";

import {
FaBullhorn,
FaUsers,
FaThumbtack,
FaCalendarAlt,
FaUpload,
FaPen,
FaTrash,
FaPlus,
} from "react-icons/fa";

const Announcements = () => {

const [title,setTitle]=useState("");
const [message,setMessage]=useState("");
const [selectedClass,setSelectedClass]=useState("");
const [priority,setPriority]=useState("Normal");

const [notify,setNotify]=useState(true);
const [pin,setPin]=useState(true);

const [date,setDate]=useState("");
const [time,setTime]=useState("");

const [openPopup,setOpenPopup]=
useState(false);

const [announcements,setAnnouncements]=
useState(
JSON.parse(
localStorage.getItem(
"announcements"
)
) || []
);

const publish=()=>{

if(!title||!message){

alert("Fill all fields");

return;

}

const newAnnouncement={

id:Date.now(),

title,

message,

class:
selectedClass ||
"All Classes",

priority,

status:
date
?
"Scheduled"
:
"Published",

date:
date ||
new Date()
.toLocaleDateString(),

time:
time ||
"Now",

views:0,

};

const updated=[
newAnnouncement,
...announcements,
];

setAnnouncements(updated);

localStorage.setItem(
"announcements",
JSON.stringify(
updated
)
);

setTitle("");
setMessage("");
setSelectedClass("");
setDate("");
setTime("");

setOpenPopup(false);

alert(
"Announcement Published"
);

};

const remove=(index)=>{

const updated=
announcements.filter(
(_,i)=>
i!==index
);

setAnnouncements(
updated
);

localStorage.setItem(
"announcements",
JSON.stringify(
updated
)
);

};

return(

<div className="announcement-page">

<div className="head">

<div>

<h1>
Announcements
</h1>

<p>
Send updates and notifications
</p>

</div>

<button
className="new-btn"
onClick={()=>
setOpenPopup(
true
)
}
>

<FaPlus/>

New Announcement

</button>

</div>

<div className="stats">

<div className="card">

<FaBullhorn/>

<h2>
{
announcements.length
}
</h2>

<p>Total</p>

</div>

<div className="card">

<FaUsers/>

<h2>
248
</h2>

<p>Students</p>

</div>

<div className="card">

<FaThumbtack/>

<h2>
4
</h2>

<p>Pinned</p>

</div>

<div className="card">

<FaCalendarAlt/>

<h2>
6
</h2>

<p>Scheduled</p>

</div>

</div>

<div className="recent">

<h2>
Recent Announcements
</h2>

{
announcements.length===0
?

<p>
No announcements created
</p>

:

announcements.map(
(item,index)=>(

<div
key={item.id}
className="announcement"
>

<div>

<h3>
{item.title}
</h3>

<p>
{item.message}
</p>

</div>

<div className="meta">

<span>
{item.class}
</span>

<span>
{item.date}
</span>

<span>
{item.status}
</span>

<button>

<FaPen/>

</button>

<button
onClick={()=>
remove(
index
)
}
>

<FaTrash/>

</button>

</div>

</div>

)
)

}

</div>

{
openPopup && (

<div
className="announcement-popup"
>

<div
className="announcement-modal"
>

<button
className="close-modal"
onClick={()=>
setOpenPopup(
false
)
}
>

✕

</button>

<h2>

Create Announcement

</h2>

<input
placeholder=
"Announcement Title"
value={title}
onChange={(e)=>
setTitle(
e.target.value
)
}
/>

<select
value={
selectedClass
}
onChange={(e)=>
setSelectedClass(
e.target.value
)
}
>

<option value="">
Select Class
</option>

<option>
Class 10A
</option>

<option>
Class 10B
</option>

<option>
All Classes
</option>

</select>

<textarea
rows="6"
placeholder=
"Write announcement"
value={
message
}
onChange={(e)=>
setMessage(
e.target.value
)
}
/>

<input
type="date"
value={date}
onChange={(e)=>
setDate(
e.target.value
)
}
/>

<input
type="time"
value={time}
onChange={(e)=>
setTime(
e.target.value
)
}
/>

<label>

<input
type="checkbox"
checked={
notify
}
onChange={()=>
setNotify(
!notify
)
}
/>

Notify Students

</label>

<label>

<input
type="checkbox"
checked={
pin
}
onChange={()=>
setPin(
!pin
)
}
/>

Pin Announcement

</label>

<button
className="upload"
>

<FaUpload/>

Upload File

</button>

<div
className="popup-actions"
>

<button
className="cancel"
onClick={()=>
setOpenPopup(
false
)
}
>

Cancel

</button>

<button
className="publish"
onClick={
publish
}
>

Publish

</button>

</div>

</div>

</div>

)

}

</div>

);

};

export default Announcements;

