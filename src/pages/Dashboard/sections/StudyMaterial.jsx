import "./StudyMaterial.css";
import { useState } from "react";

import MaterialStats from "../../../Components/studymaterial/MaterialStats";
import MaterialTable from "../../../Components/studymaterial/MaterialTable";
import Pagination from "../../../Components/studymaterial/Pagination";
import SearchBox from "../../../Components/studymaterial/SearchBox";
import SubjectWisePanel from "../../../Components/studymaterial/SubjectWisePanel";
import UploadModal from "../../../Components/studymaterial/UploadModal";

const StudyMaterial = () => {

const [materials] = useState([]);

const [search,setSearch] =
useState("");

const [openUpload,setOpenUpload] =
useState(false);

const deleteMaterials=()=>{

alert(
"Delete Study Material clicked"
);

};

return(

<div className="study-page">

{/* HEADER */}

<div className="study-header">

<div>

<h1 className="study-title">

Study Material

</h1>

<p className="study-subtitle">

Manage and organize all uploaded study materials

</p>

</div>

<div className="header-actions">

<input
className="header-search"

value={search}

placeholder=
"Search materials..."

onChange={(e)=>
setSearch(
e.target.value
)
}
/>

<button
className="upload-btn"

onClick={()=>
setOpenUpload(
true
)
}
>

Upload Study Material

</button>

<button
className="delete-btn"

onClick={
deleteMaterials
}
>

Delete Study Material

</button>

</div>

</div>

{/* SEARCH */}

<SearchBox
value={search}
onChange={
setSearch
}
/>

{/* STATS */}

<MaterialStats
total={1248}
uploads={156}
classes={12}
subjects={45}
downloads={8732}
/>

{/* CONTENT */}

<div className="study-content">

<div className="table-section">

<MaterialTable
data={materials}
search={search}
/>

<Pagination/>

</div>

<div className="side-section">

<SubjectWisePanel/>

</div>

</div>

{/* MODAL */}

{

openUpload && (

<div
className="popup-overlay"
>

<div
className="popup-window"
>

<UploadModal

onClose={()=>
setOpenUpload(
false
)
}

/>

</div>

</div>

)

}

</div>

);

};

export default StudyMaterial;