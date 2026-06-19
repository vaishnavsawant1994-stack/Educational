import "./NotificationRequestPopup.css";
import { useState } from "react";

export default function NotificationRequestModal({
onClose,
requests=[]
}){

const [tab,setTab]=
useState("notifications");

const notifications=[

{
id:1,
title:"New Assignment Submitted",
time:"10 mins ago"
},

{
id:2,
title:"Attendance Updated",
time:"1 hour ago"
},

{
id:3,
title:"Study Material Downloaded",
time:"Today"
},

{
id:4,
title:"Parent Meeting Reminder",
time:"Tomorrow"
}

];

return(

<div className="notify-overlay">

<div className="notify-modal">

<button
className="notify-close"
onClick={onClose}
>

✕

</button>


<div className="notify-header">

<h2>

Notifications & Requests

</h2>

</div>


<div className="notify-tabs">

<button

className={
tab==="notifications"
?
"active-tab"
:
""
}

onClick={()=>
setTab(
"notifications"
)
}

>

🔔 Notifications

</button>


<button

className={
tab==="requests"
?
"active-tab"
:
""
}

onClick={()=>
setTab(
"requests"
)
}

>

📩 Requests

</button>

</div>



<div className="notify-content">

{

tab==="notifications"

?

notifications.map(
(
item
)=>(

<div
key={item.id}
className="notify-card"
>

<h4>
{item.title}
</h4>

<small>
{item.time}
</small>

</div>

))

:

requests.map(
(
item
)=>(

<div
key={item.id}
className="request-card"
>

<div>

<h4>
{item.name}
</h4>

<p>
{item.msg}
</p>

<small>
{item.time}
</small>

</div>


<div className="status">

{item.status}

</div>

</div>

))

}

</div>

</div>

</div>

);

}