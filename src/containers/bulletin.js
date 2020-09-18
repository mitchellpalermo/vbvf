import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { Spinner } from "reactstrap";
import { sanity } from "../util/index";

export default function Bulletin() {
  const bulletinQuery = `*[_type=="bulletin"] | order(_createdAt desc)[0]
  {
  "bulletinUrl": bulletinPdf.asset->url
  }
  `;
  const [bulletinUrl, setBulletinUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    sanity.fetch(bulletinQuery).then((bulletin) => {
      setBulletinUrl(bulletin.bulletinUrl);
    });
    setIsLoading(!isLoading);
  }, []);
  console.log(bulletinUrl);
  return (
    <div>
      {isLoading ? (
        <Spinner color="dark" />
      ) : (
        <Document file={bulletinUrl} options={{ workerSrc: "/pdf.worker.js" }}>
          <Page pageNumber={1} />
        </Document>
      )}
    </div>
  );
}
