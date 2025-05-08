"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import TemplateSelector from "../components/TemplateSelector";
import Form from "../components/Form";

export default function ResumeBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState<null | {
    name: string;
    image: string;
  }>(null);

  const router = useRouter();

  const handleFormComplete = async (latex: string) => {
    router.push("/loading");

    try {
      const compileRes = await fetch("/api/compile-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ latex }),
      });

      const { id } = await compileRes.json();
      router.push(`/result?id=${id}`);
    } catch (err) {
      console.error("PDF compilation failed:", err);
      router.push("/build");
    }
  };


  return (
    <div className="p-8">
      {!selectedTemplate ? (
        <TemplateSelector onSelect={setSelectedTemplate} />
      ) : (
        <Form selectedTemplate={selectedTemplate} 
        onComplete={handleFormComplete}/>
      )}
    </div>
  );
}
