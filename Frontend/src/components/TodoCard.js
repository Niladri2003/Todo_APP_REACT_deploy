import React from "react";
import { GrClose } from "react-icons/gr";

const TodoCard = ({ description, title, deleteTodoHandler, id }) => {
  return (
    <div className="flex lg:flex-col flex-col col-span-2 lg:col-span-1 p-[1rem] cursor-pointer bg-[#f1f1f3] rounded-md w-auto h-auto relative border ">
      {/* <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggle}
          /> */}
      <span className="text-lg font-bold">{title}</span>
      <span className="text-base max-w-md ">{description}</span>
      <button
        className="absolute top-2 right-2 "
        onClick={() => deleteTodoHandler(id)}
      >
        <GrClose size={14} />
      </button>
    </div>
  );
};

export default TodoCard;
