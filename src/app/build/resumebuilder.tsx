"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import TemplateSelector from "../components/TemplateSelector";
import Form from "../components/Form";
import LoadingPage from "../components/LoadScreen";

export default function ResumeBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState<null | {
    name: string;
    image: string;
  }>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleFormComplete = async (latex: string) => {
    if (latex === "loading") {
      setLoading(true); //render loading screen immediately
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const compileRes = await fetch("/api/compile-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ latex }),
      });

      if (!compileRes.ok) {
        throw new Error(`HTTP error! status: ${compileRes.status}`);
      }

      const { id } = await compileRes.json();
      router.push(`/result?id=${id}`);
    } catch (err) {
      console.error("PDF compilation failed:", err);
      router.push("/build");
    } finally {
      setLoading(false);
    }
};


  return (
    <div className="p-8">
      {loading ? (
        <LoadingPage/> //render loading screen
      ) : !selectedTemplate ? (
        <TemplateSelector onSelect={setSelectedTemplate} />
      ) : (
        <Form selectedTemplate={selectedTemplate} onStartLoading={() => setLoading(true)} onComplete={handleFormComplete}/>
      )}
    </div>
  );
}
