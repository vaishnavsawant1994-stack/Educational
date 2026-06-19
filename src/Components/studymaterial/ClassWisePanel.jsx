import "../../pages/Dashboard/sections/StudyMaterial.css";
import { useState } from "react";

export default function ClassWisePanel() {

const [selected,setSelected]=useState(null);

const classes=[

{
name:"Class 6",
materials:78,
content:[
"Science Notes",
"Math Worksheets",
"English Grammar",
"History PDFs"
]
},

{
name:"Class 7",
materials:92,
content:[
"Biology Material",
"Physics Intro",
"Math Practice",
"Assignments"
]
},

{
name:"Class 8",
materials:105,
content:[
"Chemistry Notes",
"MCQ Sets",
"Project Files",
"Video Lessons"
]
},

{
name:"Class 9",
materials:132,
content:[
"English Literature",
"Physics Chapter 1",
"Tests",
"Assignments"
]
},

{
name:"Class 10",
materials:210,
content:[
"Board Material",
"Sample Papers",
"MCQ Practice",
"Revision Notes"
]
},

{
name:"Class 11",
materials:285,
content:[
"Science Material",
"Math PDFs",
"Presentations",
"Question Bank"
]
},

{
name:"Class 12",
materials:346,
content:[
"Boards Revision",
"Physics Material",
"Biology Notes",
"Important Questions"
]
},

{
name:"Class Diploma",
materials:124,
content:[
"Projects",
"Practical Notes",
"Lab Reports"
]
}

];

return(

<>

<div className="side-card">

<div className="side-title">

<h3>
Class Wise Materials
</h3>

<button>
View All
</button>

</div>

<div className="class-scroll">

{

classes.map((item)=>(

<div
key={item.name}
className="class-item"
onClick={()=>
setSelected(item)
}
>

<div>

📁
{" "}
{item.name}

</div>

<span>

{item.materials}

Materials

</span>

</div>

))

}

</div>

</div>


{

selected && (

<div
className="class-overlay"
onClick={()=>
setSelected(null)
}
>

<div
className="class-modal"
onClick={(e)=>
e.stopPropagation()
}
>

<button
className="class-close"
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

Available Study Materials

</p>

<div className="class-materials">

{

selected.content.map(
(mat,index)=>(

<div
key={index}
className="material-box"
>

📄

{mat}

</div>

)
)

}

</div>

<button
className="open-class"

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