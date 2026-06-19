import "../Notifications.css";

import {
FaCheckCircle,
FaCalendarAlt,
FaTrash,
} from "react-icons/fa";

export default function RequestRow({
request,
onDelete,
onStatusChange,
}) {

if (!request) return null;

const {
id,
avatar = "👤",
name = "Unknown",
msg = "No request",
type = "General",
time = "--",
status = "Pending",
} = request;

const statusClass =
(status || "pending")
.toLowerCase();

return (

<tr>

<td>

<input type="checkbox" />

</td>

<td>

<div className="user-cell">

<div className="avatar">

{avatar}

</div>

<div>

<h4>

{name}

</h4>

<p>

{msg}

</p>

</div>

</div>

</td>

<td>

<span className="type-tag">

{type}

</span>

</td>

<td>

{time}

</td>

<td>

<span
className={`status ${statusClass}`}
>

{status}

</span>

</td>

<td>

<div className="action-icons">

<button
onClick={()=>
onStatusChange?.(
id,
"Accepted"
)
}
title="Accept"
>

<FaCheckCircle />

</button>

<button
onClick={()=>
onStatusChange?.(
id,
"Rescheduled"
)
}
title="Reschedule"
>

<FaCalendarAlt />

</button>

<button
onClick={()=>
onDelete?.(
id
)
}
title="Delete"
>

<FaTrash />

</button>

</div>

</td>

</tr>

);

}