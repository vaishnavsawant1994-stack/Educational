import { useMemo, useState } from "react";
import "../Notifications.css";
import RequestRow from "./RequestRow";
import Pagination from "./Pagination";

import { requests } from "./data";

export default function RequestPanel() {

const [filter,setFilter]=
useState("All Requests");

const [page,setPage]=
useState(1);

const [rows,setRows]=
useState(requests);

const perPage=5;


/* UPDATE STATUS */

const updateRequest=(
id,
status
)=>{

setRows(

rows.map(
(item)=>

item.id===id

?{
...item,
status
}

:item

)

);

};


/* DELETE */

const deleteRequest=(id)=>{

setRows(

rows.filter(
(item)=>

item.id!==id

)

);

};


/* FILTER */

const filtered=
useMemo(()=>{

if(
filter===
"All Requests"
){

return rows;

}

return rows.filter(

(item)=>

item.status

===

filter

);

},

[filter,rows]);


const totalPages=

Math.ceil(
filtered.length
/
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
className="panel-icon request"
>

📩

</div>

<div>

<h3>
Requests
</h3>

<p>
Manage student requests
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

All Requests

</option>

<option>

Pending

</option>

<option>

Approved

</option>

<option>

Rejected

</option>

<option>

Rescheduled

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
Request
</th>

<th>
Category
</th>

<th>
Submitted
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

<RequestRow

key={
item.id
}

item={
item
}

onUpdate={
updateRequest
}

onDelete={
deleteRequest
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

-

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

Requests

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