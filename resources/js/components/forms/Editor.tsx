import React, { useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TextFieldProps, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';

type Props = TextFieldProps & {
    register?: Function,
    setValue?: Function,
    errors?: any,
    name: string,
    id?: string,
    rules?: {},
}

export default function Editor({ ...props }: Props) {
    const { errors, name, label, id, register, setValue, defaultValue } = props;

    useEffect(() => {
        (register ?? (() => {}))(name);
    })

    return (
        <div className="App">
            <Typography variant="subtitle1"
                fontWeight={600} component="label" htmlFor={id || name} mb="5px">{label}</Typography>

            <CKEditor
                editor={ClassicEditor}
                data={defaultValue as string}
                // onReady={editor => {
                //     console.log('Editor is ready to use!', editor);
                // }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    (setValue ?? (() => {}))(data);
                    //control.set
                }}
                //onBlur={onBlur}
                // onFocus={(event, editor) => {
                //     console.log('Focus.', editor);
                // }}
            />
            {errors && errors[name] && <p style={{ color: 'red' }}>{errors[name].message}</p>}

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
