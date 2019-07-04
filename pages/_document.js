import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { CustomBody } from "./Styles";

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <CustomBody>
          <Main />
          <NextScript />
        </CustomBody>
      </Html>
    );
  }
}

export default CustomDocument;
