"use client";
import { React, useState } from 'react'
import { useRouter } from 'next/navigation';
import UploadIcon from './UploadIcon';
import axios from 'axios';
const UploadForm = () => {

    const [isUploading, setUploading] = useState(false);
    const router  = useRouter();

    async function upload(e) {
        e.preventDefault();
        const file = e.target.files[0];
        if (file) {
            setUploading(true);
            const res = await axios.postForm('api/upload', { file, })
            console.log(res.data)
            const newName = res.data.newName;
            router.push('/'+ newName);
        }
        setUploading(false);
    }

    return (
        <>
            {isUploading && (<div className="fixed inset-0 flex items-center justify-center bg-gray-900/90 z-50">
                <div className="flex flex-col items-center animate-bounce">
                    <div className="text-white text-3xl">Uploading...</div>
                </div>
            </div>)}

            <label className="bg-green-400 py-2 px-4 rounded-md inline-flex gap-2 border-2 border-purple-600/50 cursor-pointer">
                <UploadIcon />
                <span>Choose File</span>
                <input onChange={upload} type="file" className="hidden" />
            </label>
        </>
    )
}

export default UploadForm;