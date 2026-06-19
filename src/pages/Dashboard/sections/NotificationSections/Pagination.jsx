import "../Notifications.css";
import {
FaChevronLeft,
FaChevronRight,
} from "react-icons/fa";

export default function Pagination({
page = 1,
total = 6,
setPage,
}) {

const prev=()=>{

if(page>1){

setPage(
page-1
);

}

};

const next=()=>{

if(
page<total
){

setPage(
page+1
);

}

};

return(

<div
className="
notification-pagination
"
>

<button

className="
page-arrow
"

onClick={
prev
}

disabled={
page===1
}

>

<FaChevronLeft />

</button>


<div
className="
page-numbers
"
>

{

Array
.from(
{
length:
total
}
)

.map(
(
_,
i
)=>(

<button

key={
i
}

className={
page===i+1

?

"active"

:

""
}

onClick={()=>

setPage(
i+1
)

}

>

{
i+1
}

</button>

)

)

}

</div>


<button

className="
page-arrow
"

onClick={
next
}

disabled={
page===
total
}

>

<FaChevronRight />

</button>

</div>

);

}