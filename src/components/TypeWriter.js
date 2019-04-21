import React from "react";
import Typewriter from "typewriter-effect";

export default () => (
  <Typewriter
    onInit={typewriter => {
      typewriter
        .typeString("Hello World!")
        .callFunction(() => {
          console.log("String typed out!");
        })
        .pauseFor(2500)
        .deleteAll()
        .callFunction(() => {
          console.log("All strings were deleted");
        })
        .start();
    }}
    options={{
      strings: [
        "BACKEND DEVELOPER",
        "FRONTEND DEVELOPER",
        "SOFTWARE ENGINEER",
        "FOOD LOVER"
      ],
      autoStart: true,
      loop: true
    }}
  />
);
