import Head from "next/head";
import Demosection from "../components/Demosection";
import PageHeaders from "../components/PageHeaders";
import UploadForm from "@/components/UploadForm";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <Link rel="icon" href="public/logo.svg" type="image/svg+xml" />
      </Head> 
      <PageHeaders title="Add epic Caption to your videos" subtitle="just upload your video and we will do the rest" />
      <div className="text-center pt-4">
        <UploadForm/>
      </div>
      <Demosection />
    </>
  );
}
