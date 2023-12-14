import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <>
      {props.alert &&
      <div
        class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
        role="alert"
      >
        <div class="flex">
          <div>
            <strong> {capitalize(props.alert.type)} </strong> :
            {props.alert.msg}
          </div>
        </div>
      </div>}
    </>
  );
}
