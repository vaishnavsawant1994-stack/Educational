import "../../pages/Dashboard/sections/StudyMaterial.css";
import { useState } from "react";

export default function BottomWidgets({ refresh }) {
    
const [open,setOpen]=useState("");
const [files,setFiles]=useState([]);

const [folders,setFolders]=useState(
JSON.parse(
localStorage.getItem(
"studyFolders"
)
) || []
);
const data={

bulk:{
title:"Bulk Upload"
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

const selectFiles=(e)=>{
setFiles(Array.from(e.target.files));
};

const uploadBulk=()=>{

if(files.length===0){
alert("Select files first");
return;
}

const old=
JSON.parse(
localStorage.getItem(
"studyMaterials"
)
)||[];

const newItems=
files.map(file=>({

id:
Date.now()+Math.random(),

title:
file.name,

class:
"Bulk Upload",

subject:
"General",

type:
file.name.split(".").pop().toUpperCase(),

uploaded:
new Date().toLocaleDateString(),

downloads:0

}));

localStorage.setItem(
"studyMaterials",
JSON.stringify([
...newItems,
...old
])
);

window.dispatchEvent(
new Event(
"materialUploaded"
)
);

refresh?.();

alert(
`${files.length} files uploaded successfully`
);

setFiles([]);
setOpen("");

};



const createFolder=()=>{

if(!folderName.trim()){

alert("Enter folder name");

return;

}

const newFolder={

id:Date.now(),

name:folderName

};

const updated=[
...folders,
newFolder
];

setFolders(updated);

localStorage.setItem(
"studyFolders",
JSON.stringify(updated)
);

setFolderName("");

};

const deleteFolder=(id)=>{

const updated=
folders.filter(
folder=>folder.id!==id
);

setFolders(updated);

localStorage.setItem(
"studyFolders",
JSON.stringify(updated)
);

};



return(

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
<h3>Bulk Upload</h3>
<p>Upload multiple files</p>
<p>at once</p>
</div>

</div>

{/* FOLDER */}

<div
className="bottom-card"
onClick={()=>setOpen("folder")}
>
<div className="bottom-icon yellow">📁</div>

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

{/* BULK UPLOAD POPUP */}

{
open==="bulk" && (

<div
className="widget-overlay"
onClick={()=>setOpen("")}
>

<div
className="bulk-modal"
onClick={(e)=>e.stopPropagation()}
>

<button
className="widget-close"
onClick={()=>setOpen("")}
>
✕
</button>

<div className="bulk-top-icon">
📤
</div>

<h2>Bulk Upload</h2>

<p className="bulk-subtitle">
Upload multiple study materials at once
</p>

<div className="file-types">
<span>PDF</span>
<span>DOCX</span>
<span>PPTX</span>
<span>XLSX</span>
</div>

<div className="bulk-dropzone">

<div className="bulk-folder">
📂
</div>

<h3>Drag & Drop Files Here</h3>

<p>or click to browse files</p>

<label className="choose-file-btn">

Choose Files

<input
type="file"
multiple
hidden
onChange={selectFiles}
/>

</label>

</div>

<div className="selected-files-header">

<h3>
Selected Files ({files.length})
</h3>

{
files.length>0 && (
<button
className="clear-files"
onClick={()=>setFiles([])}
>
Clear All
</button>
)
}

</div>

<div className="selected-files">

{
files.map((file,index)=>(
<div
className="file-row"
key={index}
>

<span>{file.name}</span>

<span>
{(
file.size/
1024/
1024
).toFixed(2)} MB
</span>

</div>
))
}

</div>

<div className="bulk-footer">

<button
className="bulk-cancel"
onClick={()=>setOpen("")}
>
Cancel
</button>

<button
className="bulk-upload-btn"
onClick={uploadBulk}
>
Upload {files.length} Files
</button>

</div>

</div>

</div>

)
}

{/* OTHER POPUPS */}
{
open==="folder" && (

<div
className="widget-overlay"
onClick={()=>setOpen("")}
>

<div
className="folder-modal"
onClick={(e)=>e.stopPropagation()}
>

<button
className="widget-close"
onClick={()=>setOpen("")}
>
✕
</button>

<div className="folder-top-icon">
📁
</div>

<h2>Folder Management</h2>

<p className="folder-subtitle">
Create folders and organize study materials efficiently
</p>

<div className="folder-toolbar">

<input
className="folder-input"
placeholder="Enter folder name"
value={folderName}
onChange={(e)=>
setFolderName(e.target.value)
}
/>

<button
className="create-folder-btn"
onClick={createFolder}
>
+ Create Folder
</button>

</div>

<div className="folder-list">

{
folders.map((folder,index)=>(

<div
className="folder-card"
key={index}
>

<div className="folder-card-top">

<div className="folder-icon-large">
📁
</div>

<button
className="folder-delete"
onClick={()=>
deleteFolder(index)
}
>
🗑
</button>

</div>

<div className="folder-name">
{folder.name}
</div>

<div className="folder-files">
{folder.files} Files
</div>

</div>

))
}

</div>

<div className="folder-footer">

<button
className="folder-cancel"
onClick={()=>setOpen("")}
>
Cancel
</button>

<button
className="folder-save"
onClick={()=>setOpen("")}
>
Save Changes
</button>

</div>

</div>

</div>

)
}

</>

);

}