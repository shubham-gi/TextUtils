import React from "react";

const Alert = (props) => {
  console.log("alert called");
  let type=""
  if(props.alert){
    type=props.alert.type[0].toUpperCase()+props.alert.type.substr(1);
  }
  return (
    // <div className="alert alert-danger" role="alert">
    //   <strong>{props.alert.type}</strong>: {props.alert.msg}
    // </div>
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{type}</strong>: {props.alert.msg}.
      </div>
    )
  );
};

export default Alert;
