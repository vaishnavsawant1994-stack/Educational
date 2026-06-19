import "../../pages/Dashboard/sections/StudyMaterial.css";
import { useState } from "react";

export default function SubjectWisePanel() {

const [selected,setSelected]=useState(null);

const subjects=[

{
name:"Physics",
materials:[
"Motion Notes",
"Electricity PDF",
"Question Bank",
"Lab Manual"
]
},

{
name:"Chemistry",
materials:[
"Organic Chemistry",
"Chemical Bonding",
"Reaction Notes",
"MCQ Set"
]
},

{
name:"Mathematics",
materials:[
"Formula Book",
"Calculus",
"Algebra",
"Practice Sheets"
]
},

{
name:"Biology",
materials:[
"Human Anatomy",
"Revision Notes",
"Important Questions",
"Worksheets"
]
},

{
name:"English",
materials:[
"Grammar",
"Literature",
"Essay Writing",
"Poems"
]
},

{
name:"Computer Science",
materials:[
"Java",
"Python",
"Projects",
"Assignments"
]
},

{
name:"History",
materials:[
"Ancient India",
"World History",
"Revision",
"Question Set"
]
},

{
name:"Geography",
materials:[
"Maps",
"Climate",
"Practice Files",
"Assignments"
]
},

{
name:"Economics",
materials:[
"Micro Economics",
"Case Studies",
"MCQ",
"Practice"
]
}

];

return(

<>

<div className="side-card">

<div className="subject-header">

<h3>
Subject Wise Materials
</h3>

<button>
View All
</button>

</div>

<div className="subject-scroll">

{

subjects.map((subject)=>(

<div
key={subject.name}
className="subject-row"
onClick={()=>
setSelected(subject)
}
>

<span>

📚
{" "}
{subject.name}

</span>

<span>

→

</span>

</div>

))

}

</div>

</div>


{

selected && (

<div
className="subject-popup-overlay"
onClick={()=>
setSelected(null)
}
>

<div
className="subject-popup"
onClick={(e)=>
e.stopPropagation()
}
>

<button
className="subject-close"
onClick={()=>
setSelected(null)
}
>

✕

</button>

<h2>

{selected.name}

</h2>

<p>

Available materials

</p>

<div className="subject-files">

{

selected.materials.map(
(item,index)=>(

<div
key={index}
className="subject-file"
>

📄

{item}

</div>

)

)

}

</div>

<button
className="subject-open-btn"
>

Open Materials

</button>

</div>

</div>

)

}

</>

);

}