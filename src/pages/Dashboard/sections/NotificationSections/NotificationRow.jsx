import "../Notifications.css";
import {
FaCheckCircle,
FaTrash,
FaUserGraduate,
FaClipboardCheck,
FaBookOpen,
FaCalendarAlt,
} from "react-icons/fa";
import { FaBell } from "react-icons/fa";
export default function NotificationRow({
item,
onRead,
onDelete,
}) {

const getIcon=()=>{

switch(item.type){

case "Student":
return(
<FaUserGraduate />
);

case "Test":
return(
<FaClipboardCheck />
);

case "Assignment":
return(
<FaBookOpen />
);

default:
return(
<FaCalendarAlt />
);

}

};

return(

<tr
className="notify-row"
>

<td>

<input
type="checkbox"
/>

</td>


{/* NOTIFICATION */}

<td>

<div
className="notify-cell"
>

<div
className={`notify-icon ${
item.status==="Unread"
?
"active"
:
""
}`}
>

{
getIcon()
}

</div>

<div>

<h4>

{
item.title
}

</h4>

<p>

{
item.message
}

</p>

</div>

</div>

</td>


{/* TYPE */}

<td>

<span
className={`
notify-type
type-${
item.type
.toLowerCase()
}
`}
>

{
item.type
}

</span>

</td>


{/* TIME */}

<td>

<div
className="notify-time"
>

{
item.time
}

</div>

</td>


{/* STATUS */}

<td>

<span
className={`
notify-status
${
item.status
==="Unread"

?

"unread"

:

"read"

}
`}
>

{
item.status
}

</span>

</td>


{/* ACTION */}

<td>

<div
className="notify-actions"
>

<button

title="Mark Read"

className="read-btn"

onClick={()=>

onRead(
item.id
)

}

>

<FaCheckCircle />

</button>


<button

title="Delete"

className="delete-action"

onClick={()=>

onDelete(
item.id
)

}

>

<FaTrash />

</button>

</div>

</td>

</tr>

);

}