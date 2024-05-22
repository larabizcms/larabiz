import React, { useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TextFieldProps, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';

type Props = TextFieldProps & {
    control?: any,
    register?: any,
    setValue?: any,
    errors?: any,
    name: string,
    id?: string,
    rules?: {},
}

export default function Editor({ ...props }: Props) {
    const { control, errors, name, label, id, rules, defaultValue } = props;

    useEffect(() => {
        //props?.register('input')
    })

    return (
        <div className="App">
            <Typography variant="subtitle1"
                fontWeight={600} component="label" htmlFor={id || name} mb="5px">{label}</Typography>

            <CKEditor
                editor={ClassicEditor}
                data={defaultValue as string}
                onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    //props?.setValue(data);
                    //control.set
                }}
                //onBlur={onBlur}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            />

            {/* <Controller
                control={control || undefined}
                rules={rules || undefined}
                defaultValue={defaultValue || ''}
                render={({ field: { onChange, onBlur, value } }: any) => (

                )}
                name={name}
            /> */}
        </div>
    );
}
