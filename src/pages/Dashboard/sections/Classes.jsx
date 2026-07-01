import "./Classes.css";
import { useEffect, useState } from "react";

import StatsCards from "./ClassSections/StatsCards";
import HeroBanner from "./ClassSections/HeroBanner";
import ClassGrid from "./ClassSections/ClassGrid";
import QuickActions from "./ClassSections/QuickActions";
import BatchTable from "./ClassSections/BatchTable";
import ClassDetails from "./ClassSections/ClassDetails";
import { FaBookOpen } from "react-icons/fa";

import { batches } from "./ClassSections/ClassesData";

import ViewAllClassesModal from "./ClassSections/ViewAllClassesModal";
import EditClassModal from "./ClassSections/EditClassModal";

const Classes=()=>{

const[
classes,
setClasses
]=useState([]);

const[
openEdit,
setOpenEdit
]=useState(false);

const[
selectedClass,
setSelectedClass
]=useState(null);

const[
openViewAll,
setOpenViewAll
]=useState(false);

useEffect(()=>{

loadClasses();

},[]);

const loadClasses=()=>{

const data=

JSON.parse(
localStorage.getItem(
"createdClasses"
)

)||[];

setClasses(
data
);

if(
!selectedClass &&
data.length
){

setSelectedClass(
data[0]
);

}

};

/* DELETE */

const deleteClass=(id)=>{

const updated=

classes.filter(
(item)=>
item.id!==id
);

localStorage.setItem(

"createdClasses",

JSON.stringify(
updated
)

);

setClasses(
updated
);

if(
selectedClass?.id===
id
){

setSelectedClass(
updated[0]
||
null
);

}

};

/* CLICK CLASS */

const selectClass=(item)=>{

/* UPDATE DETAILS */

setSelectedClass({
...item
});

/* KEEP EDIT POPUP */

setOpenEdit(
true
);

/* CLOSE VIEW */

setOpenViewAll(
false
);

};

return(

<div className="classes-page">

<div className="top-area">

<div className="left-top">

<StatsCards/>

</div>

<div className="right-top">

<HeroBanner

onClassCreated={()=>{

loadClasses();

}}

/>

</div>

</div>

<div className="section">

<div className="section-header">

<h2>

Created Classes

</h2>

<button

onClick={()=>

setOpenViewAll(
true
)

}

>

View All

</button>

</div>

<ClassGrid

classes={
classes
}

deleteClass={
deleteClass
}

selectClass={
selectClass
}

selectedClass={
selectedClass
}

/>

</div>

<div className="bottom-layout">

<BatchTable

selectedClass={
selectedClass
}

showAddButton={
!selectedClass?.batches?.length
}

/>

<ClassDetails

selected={
selectedClass
}

/>

</div>

<div className="section">

<div className="section-header">

<h2>

Quick Actions

</h2>

</div>

<QuickActions/>

</div>

<ViewAllClassesModal

open={
openViewAll
}

onClose={()=>

setOpenViewAll(
false
)

}

classes={
classes
}

selectClass={
selectClass
}

/>

<EditClassModal

open={
openEdit
}

data={
selectedClass
}

onClose={()=>{

setOpenEdit(
false
);

loadClasses();

}}

/>

</div>

);

};

export default Classes;
