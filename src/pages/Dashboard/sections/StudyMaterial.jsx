import React, { useEffect, useState } from "react";
import "./StudyMaterial.css";

import SearchBox from "../../../Components/studymaterial/SearchBox";
import MaterialTable from "../../../Components/studymaterial/MaterialTable";
import Pagination from "../../../Components/studymaterial/Pagination";
import ClassWisePanel from "../../../Components/studymaterial/ClassWisePanel";
import SubjectWisePanel from "../../../Components/studymaterial/SubjectWisePanel";
import UploadModal from "../../../Components/studymaterial/UploadModal";
import DeleteModal from "../../../Components/studymaterial/DeleteModal";
import BottomWidgets from "../../../Components/studymaterial/BottomWidgets";

export default function StudyMaterial() {

const [materials,setMaterials]=useState([]);

const [showUpload,setShowUpload]=useState(false);

const [showDelete,setShowDelete]=useState(false);


/* LOAD */

const loadMaterials=()=>{

const data=
JSON.parse(
localStorage.getItem(
"studyMaterials"
)
)||[];

setMaterials(data);

};


/* AUTO REFRESH */

useEffect(()=>{

loadMaterials();

const refresh=()=>{

loadMaterials();

};

window.addEventListener(
"materialUploaded",
refresh
);

window.addEventListener(
"materialDeleted",
refresh
);

return()=>{

window.removeEventListener(
"materialUploaded",
refresh
);

window.removeEventListener(
"materialDeleted",
refresh
);

};

},[]);



return(

<div className="study-page">

<header className="study-header">

<div>

<h1>
Study Material
</h1>

<p>
Manage and organize all uploaded study materials
</p>

</div>


<div className="header-actions">

<SearchBox />

<button
className="upload-btn"

onClick={()=>
setShowUpload(true)
}
>

Upload Study Material

</button>


<button
className="delete-btn"

onClick={()=>
setShowDelete(true)
}
>

Delete Study Material

</button>

</div>

</header>


<section className="stats-grid">

<div className="stats-card">
<h3>{materials.length}</h3>
<p>Total Materials</p>
</div>

<div className="stats-card">
<h3>
{
materials.slice(
0,
5
).length
}
</h3>

<p>
Recent Uploads
</p>

</div>

<div className="stats-card">
<h3>12</h3>
<p>Total Classes</p>
</div>

<div className="stats-card">
<h3>45</h3>
<p>Total Subjects</p>
</div>

<div className="stats-card">
<h3>
{
materials.reduce(
(
a,
b
)=>
a+
(
b.downloads||
0
),
0
)
}
</h3>

<p>
Downloads
</p>

</div>

</section>



<div className="study-layout">

<div className="left-content">

<MaterialTable

materials={materials}

refresh={
loadMaterials
}

/>

<Pagination/>

</div>


<div className="right-content">

<ClassWisePanel/>

<SubjectWisePanel/>

</div>

</div>


<BottomWidgets/>


{
showUpload&&(

<UploadModal

close={()=>
setShowUpload(false)
}

refresh={
loadMaterials
}

/>

)
}


{
showDelete&&(

<DeleteModal

materials={
materials
}

close={()=>
setShowDelete(false)
}

refresh={
loadMaterials
}

/>

)
}

</div>

);

}