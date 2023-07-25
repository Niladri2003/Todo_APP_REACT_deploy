import React from "react";
import { GrClose } from "react-icons/gr";

const TodoCard = ({ description, title, deleteTodoHandler, id }) => {
  return (
    <div className="flex flex-col p-[1rem] cursor-pointer bg-[#f1f1f3] rounded-md w-full relative border ">
      {/* <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggle}
          /> */}
      <span className="text-lg font-bold">{title}</span>
      <span className="text-base ">{description}</span>
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
