import React from "react";
const pdfPath = "/privacy.pdf#zoom=100";

export default function PrivacyPage() {
    return (
        <div className="flex items-center justify-center h-screen w-full bg-gray-100">
            <iframe src={pdfPath} className="h-screen w-full"/>
        </div>
    );
}