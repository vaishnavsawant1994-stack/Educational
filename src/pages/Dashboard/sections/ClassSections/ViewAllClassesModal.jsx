import {
FaTimes,
FaUsers,
} from "react-icons/fa";

import "./ViewAllClassesModal.css";

export default function ViewAllClassesModal({
open,
onClose,
classes,
selectClass,
}){

if(!open)
return null;

return(

<div
className="view-overlay"
>

<div
className="view-modal"
>

<button
className="view-close"
onClick={onClose}
>

<FaTimes/>

</button>

<h1>
Created Classes
</h1>

<div
className="view-list"
>

{

classes.length
?

classes.map(
(item)=>(
<div

key={
item.id
}

className="view-card"

onClick={()=>{

selectClass(
item
);

onClose();

}}

>

<div
className="view-icon"
>

<FaUsers/>

</div>

<div>

<h3>

{
item.className ||
item.name ||
"Class"
}

</h3>

<p>

{
item.batch ||
"Batch A"
}

</p>

</div>

</div>
)
)

:

<div
className="empty"
>

No Classes Found

</div>

}

</div>

</div>

</div>

);

}