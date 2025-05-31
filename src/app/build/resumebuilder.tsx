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
  // const [error, setError] = useState<string | null>(null);
  // const [pdfUrl, setPdfUrl] = useState<string | null>(null); 


  const router = useRouter();

  const handleFormComplete = async (latex: string) => {
    if (latex === "loading") {
      setLoading(true); //render loading screen immediately

      return;
    }

    setLoading(true);


    try {
      //compile and upload pdf + tex to supabase, get the urls back for tex + pdf
      const compileRes = await fetch("/api/compile-pdf-online", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ latex }),
      });

      if (!compileRes.ok) {
        const errorData = await compileRes.json();
        throw new Error(`HTTP error! status: ${compileRes.status}`);
      }

      const { id, pdfUrl, texUrl } = await compileRes.json();

      if (!id || !pdfUrl || !texUrl) {
        throw new Error("Missing PDF or TeX URL in response");
      }


      console.log("ID:", id);
      console.log("PDF URL:", pdfUrl);
      console.log("TeX URL:", texUrl);

      //navigate to result page with pdf url
      router.push(`/result?id=${id}`);


    } catch (err) {
      console.error("PDF compilation failed:", err);
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
