import React from "react";
import Editor  from "~/components/forms/Editor";

type Props = {
    config: {
        attributes: { [k: string]: any };
    }
};

export default function EditorField({ config }: Props) {
    return <Editor name={config.attributes.name}  {...config.attributes} />;
}
