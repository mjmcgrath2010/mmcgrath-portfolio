import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";


const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false })

export  default function ReadmeEditor({ value, onChange }) {
    return (
        <SimpleMDE
            options={{
                spellChecker: false,
                sideBySideFullscreen: false,
            }}
            value={value}
            onChange={onChange} />
    );
}