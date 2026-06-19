import "../../pages/Dashboard/sections/StudyMaterial.css";
import { useState } from "react";

export default function UploadModal({
close,
refresh
}) {

const [form,setForm]=
useState({

title:"",
class:"",
subject:"",
type:"PDF",

});


const upload=()=>{

if(
!form.title||
!form.class||
!form.subject
){

alert(
"Fill all fields"
);

return;

}


const old=
JSON.parse(
localStorage.getItem(
"studyMaterials"
)
)||[];


const item={

id:Date.now(),

title:
form.title,

class:
form.class,

subject:
form.subject,

type:
form.type,

uploaded:
new Date()
.toLocaleDateString(),

downloads:0,

};


localStorage.setItem(

"studyMaterials",

JSON.stringify([
item,
...old
])

);


window.dispatchEvent(
new Event(
"materialUploaded"
)
);


refresh();

alert(
"Upload Successful"
);

close();

};



return(

<div className="upload-overlay">

<div className="upload-modal">

<h2>

Upload Study Material

</h2>


<input

placeholder=
"Title"

onChange={(e)=>

setForm({

...form,

title:
e.target.value

})

}

/>


<select

onChange={(e)=>

setForm({

...form,

class:
e.target.value

})

}

>

<option value="">
Select Class
</option>

<option>
Class 6
</option>

<option>
Class 7
</option>

<option>
Class 8
</option>

<option>
Class 9
</option>

</select>


<select

onChange={(e)=>

setForm({

...form,

subject:
e.target.value

})

}

>

<option value="">
Select Subject
</option>

<option>
Physics
</option>

<option>
Chemistry
</option>

<option>
Math
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
e.target.value

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

</select>



<div className="upload-actions">

<button
onClick={
close
}
>

Cancel

</button>


<button
onClick={
upload
}
>

Upload

</button>

</div>

</div>

</div>

);

}