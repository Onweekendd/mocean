"use client";

import dynamic from "next/dynamic";

const DynamicEditor = dynamic(() => import("../../components/Editor/Editor"), {
  ssr: false,
});

export default DynamicEditor;
