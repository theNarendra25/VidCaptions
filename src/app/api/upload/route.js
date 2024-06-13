import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import uniqid from "uniqid";
import { NextResponse } from "next/server";

export async function POST(req) {
    const formData = await req.formData();
    const file = formData.get('file');
    const { name, type } = file;
    const data = await file.arrayBuffer();
    const s3client = new S3Client({
        region: 'us-east-1',
        credentials: {
            accessKeyId: process.env.MY_PROJECT_AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        }
    });
    
    const id = uniqid();
    const ext = name.split(".").pop();
    const newName = `${id}.${ext}`;
    
    const uploadCommand = new PutObjectCommand({
        Bucket: process.env.BUCKET_NAME,
        Body: data,
        ACL: 'public-read',
        ContentType: type,
        Key: newName
    });

    try {
        await s3client.send(uploadCommand);
        return NextResponse.json({ name, ext, newName, id });
    } catch (error) {
        return NextResponse.json({ error: "Failed to upload file to S3", details: error.message }, { status: 500 });
    }
}
