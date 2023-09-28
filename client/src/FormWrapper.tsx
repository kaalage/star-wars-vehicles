import { ReactNode, CSSProperties } from "react";
import React from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
  inputStyle?: CSSProperties;
};

export function FormWrapper({ title, children, inputStyle }: FormWrapperProps) {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: 'auto', marginBottom: "2rem", fontWeight:'300' }}>
        {title}
      </h2>
      <div
        style={{
          display: "grid",
          gap: "1rem .8rem",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmax(auto, 400px)",
          fontWeight:'300',
          color:'#48898B'
        }}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child as React.ReactElement, { style: inputStyle })
        )}
      </div>
    </>
  );
}
