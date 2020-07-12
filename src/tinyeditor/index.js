import React from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { uploadFile } from '@/api'

export default class TinyEditor extends React.Component {

    imagesUploadHandler = async (blobInfo, success, failure, progress) => {
        var data = new FormData();
        data.append('files', blobInfo.blob(), blobInfo.filename());
        let res = await uploadFile(data);
        if (res) {
            let { errno } = res;
            if (errno === 0) {
                success(res.data[0]);//return Json Format is ["imageUrl","imageUrl1"]
            } else {
                failure("图片上传失败")
            }
        } else {
            failure("图片上传失败")
        }
    }

    handleEditorChange = (e) => {
        console.log(e);
    }

    render() {
        return (
            <Editor
                initialValue=""
                apiKey="hq72bjfug6s56a5qxa2oxpbqsxc58nv4v7nfruyd5ndpgu72"
                init={{
                    height: 500,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount imagetools codesample'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic backcolor |  alignleft aligncenter alignright alignjustify |bullist numlist outdent indent | removeformat |image|codesample|code|preview|fullscreen | help',
                    menu: {
                        file: { title: '文件', items: 'newdocument restoredraft | preview | print ' },
                        edit: { title: 'Edit', items: 'undo redo | cut copy paste | selectall | searchreplace' },
                        view: { title: 'View', items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen' },
                        insert: { title: 'Insert', items: 'image link media template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime' },
                        format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align | forecolor backcolor | removeformat' },
                        tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | code wordcount' },
                        table: { title: 'Table', items: 'inserttable | cell row column | tableprops deletetable' },
                        favs: { title: 'My Favorites', items: 'code visualaid | searchreplace | spellchecker | emoticons' }
                    },
                    menubar: 'file edit view insert format tools table',
                    codesample_languages: [
                        { text: 'HTML/XML', value: 'markup' },
                        { text: 'JavaScript', value: 'javascript' },
                        { text: 'CSS', value: 'css' },
                        { text: 'PHP', value: 'php' },
                        { text: 'Ruby', value: 'ruby' },
                        { text: 'Python', value: 'python' },
                        { text: 'Java', value: 'java' },
                        { text: 'C', value: 'c' },
                        { text: 'C#', value: 'csharp' },
                        { text: 'C++', value: 'cpp' },
                        { text: 'Scala', value: 'scala' }
                    ],
                    language: "zh_CN",
                    image_uploadtab: true,
                    images_upload_handler: this.imagesUploadHandler
                }}
                onEditorChange={this.handleEditorChange}
            />
        );
    }
}

