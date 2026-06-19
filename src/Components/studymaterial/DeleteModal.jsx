import "./DeleteModal.css";

export default function DeleteModal({
close,
materials,
refresh
}){

const remove=(id)=>{

const updated=
materials.filter(
m=>
m.id!==id
);

localStorage.setItem(
"studyMaterials",
JSON.stringify(
updated
)
);

window.dispatchEvent(
new Event(
"materialDeleted"
)
);

refresh();

};

return(

<div className="delete-overlay">

<div className="delete-modal">

<button
className="close"
onClick={close}
>
✕
</button>

<h2>
Delete Study Material
</h2>

<div className="delete-list">

{
materials.length===0?

<p>
No Materials Found
</p>

:

materials.map(
(item)=>(

<div
key={item.id}
className="delete-item"
>

<div>

<h4>
{item.title}
</h4>

<p>
{item.class}
•
{item.subject}
</p>

</div>

<button

onClick={()=>
remove(
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

</div>

</div>

);

}