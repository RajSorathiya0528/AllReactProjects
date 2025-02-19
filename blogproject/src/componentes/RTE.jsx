import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export default function RTE({
    name, control, lable, defaultValue = ""
}) {
    return (
        <div className='w-full'>
            {lable && <lable className="inline-block mb-1 pl-1"> {lable} </lable>}
            <controller
                name={name || "content"}
                control={control}
                rander={({ field: { onChange } }) => (
                    <Editor
                        initialValue={defaultValue}
                        init={
                            {
                                initialValue: defaultValue,
                                branding: false,
                                height: 500,
                                menubar: true,
                                plugins: [
                                    "image",
                                    "advlist",
                                    "autolink",
                                    "lists",
                                    "link",
                                    "image",
                                    "charmap",
                                    "preview",
                                    "anchor",
                                    "searchreplace",
                                    "visualblock",
                                    "code",
                                    "fullscreen",
                                    "insertdatetime",
                                    "media",
                                    "table",
                                    "chod",
                                    "help",
                                    "wordcount",
                                    "anchor"
                                ],
                                toolbar: 'undo redo | formatselect | bold italic backcolor \ alignleft alignright aligncenter alignjustify | \ buildlist numlist outdent indent | removeformat | help',
                                content_style: "body {font-family:Helvetica, Arial, sens-serif; font-size:14px }"
                            }
                        }
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    )
}