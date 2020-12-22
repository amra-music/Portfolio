import React from 'react';
import { SiJava, SiHtml5, SiJavascript, SiCss3 } from 'react-icons/si';

export const getLanguageIcon = (name) => {
    switch (name.toLowerCase()) {
        case "java":
            return <SiJava className="language-icon" />;
        case "css":
            return <SiCss3 className="language-icon" />;
        case "html":
            return <SiHtml5 className="language-icon" />
        case "javascript":
            return <SiJavascript className="language-icon" />
        default:
            return null;
    }
}