"use client";
import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setUrl(data.url);
  };

  return (
    <div>
      <h2>Upload PDF/DOC</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleUpload}>
        Upload
      </button>

      {url && (
        <div>
          <p>Uploaded File:</p>
          <a href={url} target="_blank">{url}</a>
        </div>
      )}
    </div>
  );
}
