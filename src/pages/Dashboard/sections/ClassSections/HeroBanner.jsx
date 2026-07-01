import "../Classes.css";
import { useState } from "react";

import CreateClassModal from "../../../../Components/CreateClassModal";

export default function HeroBanner({

onClassCreated

}){

const[
openCreate,
setOpenCreate
]=useState(false);

return(

<>

<div className="hero-card">

<div>

<h2>

Create &
Manage Classes

</h2>

<p>

Assign students,
manage batches,
track attendance
and schedules.

</p>

<button

onClick={()=>

setOpenCreate(
true
)

}

>

Create Class

</button>

</div>

</div>

<CreateClassModal

open={
openCreate
}

onClose={()=>{

setOpenCreate(
false
);

/* REFRESH CREATED CLASSES */

onClassCreated?.();

}}

/>

</>

);

}