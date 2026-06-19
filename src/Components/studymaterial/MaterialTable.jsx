import React, { useState } from "react";
import {
FaEye,
FaDownload,
FaTrash
} from "react-icons/fa";

import "../../pages/Dashboard/sections/StudyMaterial.css";

export default function MaterialTable({
materials=[],
refresh
}) {

const [viewItem,setViewItem]=
useState(null);

const [downloadItem,
setDownloadItem]=
useState(null);

const removeMaterial=(id)=>{

const ok=
window.confirm(
"Delete this material?"
);

if(!ok) return;

const updated=
materials.filter(
(i)=>
i.id!==id
);

localStorage.setItem(
"studyMaterials",
JSON.stringify(updated)
);

refresh?.();

};

return(

<>

<div className="table-card">

<div className="table-head">

<h2>
All Uploaded Materials
</h2>

<p>

{materials.length}

materials found

</p>

</div>


<div className="table-wrap">

<table className="material-table">

<thead>

<tr>

<th>
Material
</th>

<th>
Class
</th>

<th>
Subject
</th>

<th>
Type
</th>

<th>
Uploaded
</th>

<th
className="action-col"
>
Actions
</th>

</tr>

</thead>


<tbody>

{

materials.length===0

?

<tr>

<td
colSpan="6"
className="empty-table"
>

No Materials Uploaded

</td>

</tr>

:

materials.map(
(item)=>(

<tr
key={item.id}
>

<td>

<div className="material-cell">

<div className="file-icon">

📄

</div>

<div className="material-info">

<h4>

{item.title}

</h4>

<span>

Study Material

</span>

</div>

</div>

</td>

<td>

{item.class}

</td>

<td>

{item.subject}

</td>

<td>

<span
className="type-pill"
>

{item.type}

</span>

</td>

<td>

{item.uploaded}

</td>


<td>

<div
className="icon-actions"
>

<button
title="View"

className="view-icon"

onClick={()=>
setViewItem(
item
)
}
>

<FaEye/>

</button>

<button
title="Download"

className="download-icon"

onClick={()=>
setDownloadItem(
item
)
}
>

<FaDownload/>

</button>

<button
title="Delete"

className="delete-icon"

onClick={()=>
removeMaterial(
item.id
)
}
>

<FaTrash/>

</button>

</div>

</td>

</tr>

)

)

}

</tbody>

</table>

</div>

</div>

</>

);

}