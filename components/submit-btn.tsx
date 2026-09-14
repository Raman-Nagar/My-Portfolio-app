import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group relative flex items-center justify-center gap-2 h-[3rem] w-full sm:w-[10rem] bg-[#6366f1] hover:bg-[#4f46e5] text-white rounded-xl outline-none transition-all focus:scale-105 hover:scale-105 active:scale-100 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-indigo-500/25 font-semibold overflow-hidden"
      disabled={pending}
    >
      {/* shimmer on hover */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {pending ? (
        <>
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          Sending...
        </>
      ) : (
        <>
          Send message
          <FaPaperPlane className="text-xs opacity-80 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
