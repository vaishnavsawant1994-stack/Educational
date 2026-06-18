import "./UploadStudyMaterialModal.css";

import { useState } from "react";

import {
FaUpload,
FaFilePdf,
FaFilePowerpoint,
FaFileExcel,
FaFileAlt,
} from "react-icons/fa";

const UploadStudyMaterialModal = ({
onClose,
}) => {

const [file,setFile]=
useState(null);

const [drag,setDrag]=
useState(false);

const [material,setMaterial]=
useState("pdf");

const [uploadedMaterials,setUploadedMaterials]=
useState(

JSON.parse(
localStorage.getItem(
"studyMaterials"
)

)||[]

);

const chooseFile=(e)=>{

const selected=
e.target.files[0];

if(selected){

setFile(
selected
);

}

};

const dropFile=(e)=>{

e.preventDefault();

setDrag(false);

const selected=
e.dataTransfer.files[0];

if(selected){

setFile(
selected
);

}

};

const uploadMaterial=()=>{

if(!file){

alert(
"Select file first"
);

return;

}

const newMaterial={

id:Date.now(),

name:file.name,

size:
(
file.size/
1024/
1024
).toFixed(2),

type:
material,

date:
new Date()
.toLocaleDateString(),

};

const updated=[

newMaterial,

...uploadedMaterials,

];

setUploadedMaterials(
updated
);

localStorage.setItem(

"studyMaterials",

JSON.stringify(
updated
)

);

alert(
"Material Uploaded Successfully"
);

setFile(
null
);

};

const removeMaterial=(id)=>{

const updated=

uploadedMaterials.filter(
item=>
item.id!==id
);

setUploadedMaterials(
updated
);

localStorage.setItem(

"studyMaterials",

JSON.stringify(
updated
)

);

};

return(

<div className="upload-modal">

<button
className="close-btn"
onClick={onClose}
>

✕

</button>

<div className="upload-header">

<div className="upload-icon">

<FaUpload/>

</div>

<div>

<h1>

Upload Study Material

</h1>

<p>

Upload notes, presentations, documents or any study material

</p>

</div>

</div>

<div className="upload-body">

<div className="upload-left">

<div className="form-group">

<label>

Title *

</label>

<input
placeholder=
"Enter material title"
/>

</div>

<div className="form-group">

<label>

Description

</label>

<textarea
placeholder=
"Enter description"
/>

</div>

<div className="form-group">

<label>

Select Class *

</label>

<select>

<option>
Select class
</option>

<option>
Class 10A
</option>

<option>
Class 10B
</option>

</select>

</div>

<div className="form-group">

<label>

Subject

</label>

<select>

<option>
Select subject
</option>

<option>
Math
</option>

<option>
Science
</option>

</select>

</div>

<label>

Material Type *

</label>

<div className="material-grid">

<div
className={`material ${
material==="pdf"
?
"active"
:
""
}`}

onClick={()=>
setMaterial(
"pdf"
)
}
>

<FaFilePdf/>

<span>

PDF

</span>

</div>

<div
className={`material ${
material==="ppt"
?
"active"
:
""
}`}

onClick={()=>
setMaterial(
"ppt"
)
}
>

<FaFilePowerpoint/>

<span>

PPT

</span>

</div>

<div
className={`material ${
material==="excel"
?
"active"
:
""
}`}

onClick={()=>
setMaterial(
"excel"
)
}
>

<FaFileExcel/>

<span>

Excel

</span>

</div>

<div
className={`material ${
material==="text"
?
"active"
:
""
}`}

onClick={()=>
setMaterial(
"text"
)
}
>

<FaFileAlt/>

<span>

Text

</span>

</div>

</div>

<div className="check">

<input
type="checkbox"
defaultChecked
/>

<label>

Make visible to students

</label>

</div>

<div className="check">

<input
type="checkbox"
/>

<label>

Allow download

</label>

</div>

</div>

<div className="upload-right">

<div

className={`drop-area ${
drag
?
"dragging"
:
""
}`}

onDragOver={(e)=>{

e.preventDefault();

setDrag(
true
);

}}

onDragLeave={()=>

setDrag(
false
)

}

onDrop={
dropFile
}

>

<input
hidden
id="upload"
type="file"
onChange={
chooseFile
}
/>

<label
htmlFor="upload"
>

<FaUpload/>

<h2>

{
file
?

file.name

:

"Drag & Drop your file"
}

</h2>

<p>

{
file
?

"File Selected"

:

"or Browse Files"
}

</p>

</label>

</div>

<div className="file-info">

<h3>

File Information

</h3>

{

file

?

<>

<p>

Name:
{file.name}

</p>

<p>

Size:
{
(
file.size/
1024/
1024
)
.toFixed(2)
}
MB

</p>

<p>

Type:
{
file.type
}

</p>

</>

:

<>

<p>

Maximum file size:
50MB

</p>

<p>

Supported:
PDF,
PPT,
XLSX,
TXT

</p>

</>

}

</div>

</div>

</div>

<div className="file-info">

<h3>

Uploaded Materials

</h3>

{

uploadedMaterials.length===0

?

<p>

No material uploaded

</p>

:

uploadedMaterials.map(
(item)=>(

<div
key={item.id}

style={{
display:"flex",
justifyContent:"space-between",
marginBottom:"12px"
}}

>

<div>

<p>

{item.name}

</p>

<small>

{item.size}
MB

</small>

</div>

<button

onClick={()=>

removeMaterial(
item.id
)

}

>

Delete

</button>

</div>

)

)

}

</div>

<div className="modal-actions">

<button
className="cancel"
onClick={onClose}
>

Cancel

</button>

<button
className="upload-btn"

onClick={
uploadMaterial
}
>

Upload Material

</button>

</div>

</div>

);

};

export default UploadStudyMaterialModal;