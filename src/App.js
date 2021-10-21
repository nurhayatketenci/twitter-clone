import React from "react";
import Container from "./layout/Container";
import Sidebar from "./layout/Sidebar";
import Content from "./layout/Content";
import Widgets from "./layout/Widgets";

export const App = () => {
  return (
    <Container className="flex min-h-screen mx-auto bg-black max-w-7xl border">
      <Sidebar />
      <Content />
      <Widgets />
    </Container>
  );
};
