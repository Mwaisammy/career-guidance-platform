import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <html>
      <body> {children} </body>
    </html>
  );
};

export default AuthLayout;
