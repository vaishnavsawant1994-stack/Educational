import "../../pages/Dashboard/sections/StudyMaterial.css";
import { useState } from "react";

export default function BottomWidgets() {

const [open,setOpen]=useState("");

const data={

bulk:{
title:"Bulk Upload",
content:
"Upload multiple files at once. Supported: PDF, DOCX, PPTX, XLSX. Drag & drop support can be added later."
},

folder:{
title:"Folder Management",
content:
"Create folders, move materials between folders and organize by subject or class."
},

report:{
title:"Downloads Report",
content:
"View total downloads, top performing files and student engagement analytics."
},

storage:{
title:"Storage Used",
content:
"Current Usage: 2.45 GB / 10 GB. Delete old files or upgrade storage."
},

notice:{
title:"Important Notice",
content:
"Add important notices for students. These appear on dashboard and notifications."
}

};

return (

<>

<div className="bottom-grid">

{/* BULK */}

<div
className="bottom-card"
onClick={()=>setOpen("bulk")}
>

<div className="bottom-icon green">
📤
</div>

<div>

<b><h3>Bulk Upload</h3></b>

<p>Upload multiple files</p>

<p>at once</p>

</div>

</div>


{/* FOLDER */}

<div
className="bottom-card"
onClick={()=>setOpen("folder")}
>

<div className="bottom-icon yellow">
📁
</div>

<div>

<h3>Folder Management</h3>

<p>Organize materials</p>

<p>in folders</p>

</div>

</div>


{/* REPORT */}

<div
className="bottom-card"
onClick={()=>setOpen("report")}
>

<div className="bottom-icon purple">
📈
</div>

<div>

<h3>Downloads Report</h3>

<p>View detailed</p>

<p>download analytics</p>

</div>

</div>


{/* STORAGE */}

<div
className="bottom-card"
onClick={()=>setOpen("storage")}
>

<div className="bottom-icon blue">
☁️
</div>

<div>

<h3>Storage Used</h3>

<p>2.45 GB of 10 GB used</p>

<div className="progress">

<div className="progress-fill"/>

</div>

</div>

</div>


{/* NOTICE */}

<div
className="bottom-card"
onClick={()=>setOpen("notice")}
>

<div className="bottom-icon red">
📢
</div>

<div>

<h3>Important Notice</h3>

<p>Add important notes</p>

<p>for students</p>

</div>

</div>

</div>


{/* POPUP */}

{
open && (

<div
className="widget-overlay"
onClick={()=>setOpen("")}
>

<div
className="widget-modal"
onClick={(e)=>
e.stopPropagation()
}
>

<button
className="widget-close"
onClick={()=>setOpen("")}
>
✕
</button>

<h2>
{data[open].title}
</h2>

<p>
{data[open].content}
</p>

<div className="widget-body">

{open==="bulk" &&
<button>
Start Upload
</button>
}

{open==="folder" &&
<button>
Open Folder
</button>
}

{open==="report" &&
<button>
View Report
</button>
}

{open==="storage" &&
<button>
Manage Storage
</button>
}

{open==="notice" &&
<button>
Create Notice
</button>
}

</div>

</div>

</div>

)

}

</>

);

}