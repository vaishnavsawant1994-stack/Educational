import "../Classes.css";
import { useState } from "react";

import {
FaUsers,
FaBookOpen,
FaCalendarAlt,
FaClipboardCheck,
FaChartPie,
FaPlus,
FaUserGraduate
}
from "react-icons/fa";

import AssignStudentsModal from "./AssignStudentsModal";

/* KEEP */
import CreateClassModal from "../../../../Components/CreateClassModal";

/* KEEP */
import AssignSubjectsModal from "./AssignSubjectsModal";

/* KEEP */
import ScheduleModal from "./ScheduleModal";

/* KEEP */
import AttendanceModal from "./AttendanceModal";

/* ADD */
import ReportsModal from "./ReportsModal";

export default function QuickActions(){

const[
openAssign,
setOpenAssign
]=useState(false);

/* KEEP */
const[
openCreate,
setOpenCreate
]=useState(false);

/* KEEP */
const[
openSubject,
setOpenSubject
]=useState(false);

/* KEEP */
const[
openSchedule,
setOpenSchedule
]=useState(false);

/* KEEP */
const[
openAttendance,
setOpenAttendance
]=useState(false);

/* ADD */
const[
openReports,
setOpenReports
]=useState(false);

const actions=[

{
title:
"Create Class",

icon:
<FaPlus/>,
},

{
title:
"Assign Students",

icon:
<FaUserGraduate/>,
},

{
title:
"Assign Subjects",

icon:
<FaBookOpen/>,
},

{
title:
"Schedule",

icon:
<FaCalendarAlt/>,
},

{
title:
"Attendance",

icon:
<FaClipboardCheck/>,
},

{
title:
"Reports",

icon:
<FaChartPie/>,
},

];

const handleClick=(item)=>{

/* KEEP */

if(
item===
"Create Class"
){

setOpenCreate(
true
);

return;

}

/* KEEP */

if(
item===
"Assign Students"
){

setOpenAssign(
true
);

return;

}

/* KEEP */

if(
item===
"Assign Subjects"
){

setOpenSubject(
true
);

return;

}

/* KEEP */

if(
item===
"Schedule"
){

setOpenSchedule(
true
);

return;

}

/* KEEP */

if(
item===
"Attendance"
){

setOpenAttendance(
true
);

return;

}

/* ADD ONLY THIS */

if(
item===
"Reports"
){

setOpenReports(
true
);

return;

}

alert(
`${item} clicked`
);

};

return(

<>

<div className="quick-grid">

{

actions.map(
(item)=>(

<button

key={
item.title
}

className="quick-card"

onClick={()=>
handleClick(
item.title
)
}

>

<div className="quick-icon">

{
item.icon
}

</div>

<span>

{
item.title
}

</span>

</button>

))

}

</div>

{/* KEEP */}

<CreateClassModal

open={
openCreate
}

onClose={()=>

setOpenCreate(
false
)

}

/>

{/* KEEP */}

<AssignStudentsModal

open={
openAssign
}

onClose={()=>

setOpenAssign(
false
)

}

/>

{/* KEEP */}

<AssignSubjectsModal

open={
openSubject
}

onClose={()=>

setOpenSubject(
false
)

}

/>

{/* KEEP */}

<ScheduleModal

open={
openSchedule
}

onClose={()=>

setOpenSchedule(
false
)

}

/>

{/* KEEP */}

<AttendanceModal

open={
openAttendance
}

onClose={()=>

setOpenAttendance(
false
)

}

/>

{/* ADD */}

<ReportsModal

open={
openReports
}

onClose={()=>

setOpenReports(
false
)

}

/>

</>

);

}