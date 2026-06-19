import { useMemo, useState } from "react";
import "../Notifications.css";import NotificationRow from "./NotificationRow";
import Pagination from "./Pagination";

import { notifications } from "./data";

export default function NotificationPanel() {

const [filter,setFilter]=
useState("All Notifications");

const [page,setPage]=
useState(1);

const [rows,setRows]=
useState(notifications);

const perPage=5;

const markRead=(id)=>{

setRows(
rows.map(
(item)=>

item.id===id

?{
...item,
status:"Read"
}

:item
)

);

};

const deleteItem=(id)=>{

setRows(

rows.filter(
(item)=>
item.id!==id
)

);

};

const filtered=
useMemo(()=>{

if(
filter===
"All Notifications"
){

return rows;

}

return rows.filter(

(item)=>

item.type
.toLowerCase()

===

filter
.toLowerCase()

);

},

[filter,rows]);

const totalPages=
Math.ceil(
filtered.length/
perPage
);

const current=

filtered.slice(

(page-1)
*
perPage,

page*
perPage

);

return(

<div className="panel">

<div className="panel-top">

<div
className="panel-title"
>

<div
className="panel-icon"
>

🔔

</div>

<div>

<h3>
Notifications
</h3>

<p>
All system notifications
</p>

</div>

</div>


<div
className="panel-controls"
>

<label>

Filter:

</label>

<select

value={filter}

onChange={(e)=>{

setPage(1);

setFilter(
e.target.value
);

}}

>

<option>

All Notifications

</option>

<option>

Student

</option>

<option>

Test

</option>

<option>

Assignment

</option>

<option>

Reminder

</option>

</select>

<button>

⋮

</button>

</div>

</div>


<div
className="table-scroll"
>

<table>

<thead>

<tr>

<th>

<input
type="checkbox"
/>

</th>

<th>
Notification
</th>

<th>
Type
</th>

<th>
Time
</th>

<th>
Status
</th>

<th>
Actions
</th>

</tr>

</thead>

<tbody>

{

current.map(
(item)=>(

<NotificationRow

key={
item.id
}

item={
item
}

onRead={
markRead
}

onDelete={
deleteItem
}

/>

)

)

}

</tbody>

</table>

</div>


<div
className="table-footer"
>

<span>

Showing

{" "}

{
(page-1)
*
perPage

+1
}

{" "}

to

{" "}

{

Math.min(

page*
perPage,

filtered.length

)

}

{" "}

of

{" "}

{
filtered.length
}

entries

</span>


<Pagination

page={page}

pages={totalPages}

setPage={setPage}

/>

</div>

</div>

);

}