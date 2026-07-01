import "../Classes.css";
import ClassCard from "./ClassCard";

export default function ClassGrid({
    classes,
    deleteClass,
    selectClass,
}) {
    if (!classes.length) {
        return (
            <div className="empty">
                No Classes Created
            </div>
        );
    }

    return (
        <div className="class-list">
            {classes.map((item) => (
                <ClassCard
                    key={item.id}
                    item={item}
                    deleteClass={deleteClass}
                    selectClass={selectClass}
                />
            ))}
        </div>
    );
}