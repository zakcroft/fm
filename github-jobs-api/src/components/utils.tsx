import React from "react";

interface props {
  msg: string;
}
export const LoadingIndicator = ({ msg }: props) => (
  <div className="spinner">{msg}</div>
);
