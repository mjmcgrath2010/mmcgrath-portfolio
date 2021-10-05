import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

export default function NewPost() {
  const [value, setSource] = useState("");
  const handleChange = (val) => {
    setSource(val);
  };

  return useMemo(
    () => (
      <div>
        <h1>New Post:</h1>
        <SimpleMDE
          options={{
            sideBySideFullscreen: true,
          }}
          value={value}
          onChange={handleChange}
        />
      </div>
    ),
    []
  );
}
