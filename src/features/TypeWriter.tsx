import React from "react";
import Typewriter from "typewriter-effect";
const data = ["web Developer", "and", "Mathematic Student"];
export default function TypeWriter() {
  return (
    <div className="container-writer">
      <Typewriter
        options={{
          strings: data,
          autoStart: true,
          loop: true,
          deleteSpeed: 100,
          delay: 200,
        }}
      />
    </div>
  );
}
