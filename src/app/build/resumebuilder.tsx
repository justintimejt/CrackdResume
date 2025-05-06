"use client";

import React, { useState } from "react";
import TemplateSelector from "../components/TemplateSelector";
import Form from "../components/Form";

export default function ResumeBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState<null | {
    name: string;
    image: string;
  }>(null);

  return (
    <div className="p-8">
      {!selectedTemplate ? (
        <TemplateSelector onSelect={setSelectedTemplate} />
      ) : (
        <Form selectedTemplate={selectedTemplate} />
      )}
    </div>
  );
}
