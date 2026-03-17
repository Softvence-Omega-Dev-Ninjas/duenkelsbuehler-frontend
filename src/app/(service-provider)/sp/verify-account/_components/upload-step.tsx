"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CrownSVG, BrandLabel } from "./shared";

export function UploadStep({ onNext }: { onNext: () => void }) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPreviewUrl(URL.createObjectURL(file));
  };

  return (
    <div className="max-w-lg mx-auto w-full flex flex-col items-center">
      <CrownSVG className="w-20 h-14" />
      <BrandLabel />

      <p className="font-work-sans text-sm text-[#414651] text-center mb-6">
        Place your ID within the borders. Then press the green button to capture the image. You will recieve notification of sucess.
      </p>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        onClick={() => fileInputRef.current?.click()}
        className="w-full rounded-2xl overflow-hidden border-2 border-dashed border-gray-300 bg-gray-50 cursor-pointer hover:border-gray-400 transition-colors mb-6 aspect-[1.6/1] flex items-center justify-center"
      >
        {previewUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={previewUrl} alt="ID preview" className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-work-sans text-sm">Tap to upload your ID</span>
          </div>
        )}
      </motion.div>

      <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />

      <Button
        onClick={onNext}
        className="w-full h-14 rounded-full bg-[#181D27] hover:bg-[#181D27]/90 font-work-sans font-semibold text-base"
      >
        Upload
      </Button>
    </div>
  );
}
