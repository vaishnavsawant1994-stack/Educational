import "./UploadStudyMaterialModal.css";
import { useState } from "react";

export default function UploadStudyMaterialModal({
onClose,
}) {

const [form,setForm]=useState({
title:"",
class:"",
subject:"",
type:"PDF",
});

const upload=()=>{

if(
!form.title ||
!form.class ||
!form.subject
){
alert("Fill all fields");
return;
}

const old=
JSON.parse(
localStorage.getItem(
"studyMaterials"
)
)||[];

const newItem={
id:Date.now(),

title:form.title,

class:form.class,

subject:form.subject,

type:form.type,

uploaded:
new Date()
.toLocaleDateString(),

downloads:0,
};

localStorage.setItem(
"studyMaterials",

JSON.stringify([
newItem,
...old,
])
);

alert(
"Material Uploaded"
);

onClose();

window.dispatchEvent(
new Event(
"materialUploaded"
)
);

};

return(

<div
className="upload-overlay"
>

<div
className="upload-modal"
>

<button
className="close-btn"
onClick={onClose}
>
✕
</button>

<h2>
Upload Study Material
</h2>

<input
placeholder="Material Title"

onChange={(e)=>

setForm({
...form,
title:
e.target.value,
})

}
/>

<select
onChange={(e)=>

setForm({
...form,
class:
e.target.value,
})

}
>

<option>
Select Class
</option>

<option>
Class 9
</option>

<option>
Class 10
</option>

<option>
Class 11
</option>

<option>
Class 12
</option>

</select>

<select
onChange={(e)=>

setForm({
...form,
subject:
e.target.value,
})

}
>

<option>
Select Subject
</option>

<option>
Physics
</option>

<option>
Math
</option>

<option>
Chemistry
</option>

<option>
Biology
</option>

</select>

<select
onChange={(e)=>

setForm({
...form,
type:
e.target.value,
})

}
>

<option>
PDF
</option>

<option>
DOCX
</option>

<option>
PPT
</option>

<option>
XLSX
</option>

</select>

<input
type="file"
/>

<div
className="upload-actions"
>

<button
onClick={onClose}
>
Cancel
</button>

<button
onClick={upload}
>
Upload
</button>

</div>

</div>

</div>

);

}