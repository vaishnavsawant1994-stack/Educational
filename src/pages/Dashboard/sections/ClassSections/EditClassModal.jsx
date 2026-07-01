import "./EditClassModal.css";
import { useEffect, useState } from "react";

import {
FaTimes,
FaUndo,
FaSave
} from "react-icons/fa";

export default function EditClassModal({

open,
data,
onClose,

}){

const[
form,
setForm
]=useState(null);

const[
original,
setOriginal
]=useState(null);

useEffect(()=>{

if(data){

setForm(
{...data}
);

setOriginal(
{...data}
);

}

},[data]);

if(
!open ||
!form
)
return null;

const handleChange=(e)=>{

const{
name,
value
}=e.target;

setForm(
(prev)=>({

...prev,

[name]:
value

})

);

};

const resetForm=()=>{

setForm(
{
...original
}
);

};

const saveChanges=()=>{

const classes=

JSON.parse(
localStorage.getItem(
"createdClasses"
)

)||[];

const updated=

classes.map(
(item)=>

item.id===form.id
?

form

:

item

);

localStorage.setItem(

"createdClasses",

JSON.stringify(
updated
)

);

alert(
"Class Updated"
);

onClose();

};

return(

<div className="edit-overlay">

<div className="edit-modal">

<div className="edit-header">

<div>

<h1>

Edit Class

</h1>

<p>

Update class information

</p>

</div>

<button

className="edit-close"

onClick={
onClose
}

>

<FaTimes/>

</button>

</div>

<div className="edit-body">

<div className="edit-grid">

<div className="field">

<label>

Class Name

</label>

<input

name="className"

value={
form.className
}

onChange={
handleChange
}

/>

</div>

<div className="field">

<label>

Class Code

</label>

<input

name="classCode"

value={
form.classCode
}

onChange={
handleChange
}

/>

</div>

<div className="field">

<label>

Subject

</label>

<input

name="subject"

value={
form.subject
}

onChange={
handleChange
}

/>

</div>

<div className="field">

<label>

Grade

</label>

<input

name="grade"

value={
form.grade
}

onChange={
handleChange
}

/>

</div>

<div className="field">

<label>

Section

</label>

<input

name="section"

value={
form.section || ""
}

onChange={
handleChange
}

/>

</div>

<div className="field">

<label>

Room

</label>

<input

name="room"

value={
form.room || ""
}

onChange={
handleChange
}

/>

</div>

</div>

<div className="field">

<label>

Description

</label>

<textarea

rows="5"

name="description"

value={
form.description || ""
}

onChange={
handleChange
}

/>

</div>

</div>

<div className="edit-actions">

<button

className="reset-btn"

onClick={
resetForm
}

>

<FaUndo/>

Reset

</button>

<button

className="save-btn"

onClick={
saveChanges
}

>

<FaSave/>

Save

</button>

</div>

</div>

</div>

);

}