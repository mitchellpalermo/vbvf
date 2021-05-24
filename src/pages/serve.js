import React, { useState, useEffect } from "react";
import "../css/serve.scss";
import Ben from "../images/serve/ben_coffee.jpg";
import Cathy from "../images/serve/cathy_greeting.jpg";
import KidsMinistry from "../images/serve/kids_ministry.jpg";
import Levi from "../images/serve/levi_setup.jpg";
import John from "../images/serve/john_praying.jpg";
import { sanity } from "../util/index";
import PortableText from "@sanity/block-content-to-react";
import ScriptureVerse from "../components/scripture-verse";
import Button from "../components/button";
import { Spinner } from "reactstrap";

export default function Serve() {
  const query = `*[_type == "page" && title == "Serve"]{
    paragraphs,
    scripture,
  }`;

  const serializers = {
    //this helps react understand how to present links
    marks: {
      link: ({ mark, children }) => {
        const { href } = mark;
        return <a href={href}>{children}</a>;
      },
      list: (props) => {
        const { type } = props;
        const bullet = type === "bullet";
        if (bullet) {
          return <ul>{props.children}</ul>;
        }
        return <ol>{props.children}</ol>;
      },
      listItem: (props) => <li>{props.children}</li>,
    },
  };

  const [pageData, setPageData] = useState([]);
  const [pageDataIsLoading, setPageDataIsLoading] = useState(true);

  useEffect(() => {
    sanity.fetch(query).then((result) => {
      setPageData(result[0]);
      setPageDataIsLoading(!pageDataIsLoading);
    });
    //eslint-disable-next-line
  }, [query]);

  return (
    <div className="serve-container">
      <div className="serve-photo-collage">
        <div id="top-row">
          <img id="kids" src={KidsMinistry} alt="serving at the coffee bar" />
          <img id="ben" src={Ben} alt="serving at the coffee bar" />
        </div>
        <div id="bottom-row">
          <div id="title-block">
            <h1>Serve Together</h1>
            <img id="levi" src={Levi} alt="serving at the coffee bar" />
          </div>
          <img id="cathy" src={Cathy} alt="serving at the coffee bar" />
        </div>
      </div>
      <div className="serve-photo-collage-mobile">
        <h1>Serve Together</h1>
      </div>

      {pageDataIsLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="first-row">
            <PortableText
              renderContainerOnSingleChild={true}
              className="first-row-paragraph"
              blocks={pageData.paragraphs[0].bodyText}
              serializers={serializers}
            />

            <ScriptureVerse
              verse={pageData.scripture.verseText[0]}
              reference={pageData.scripture.reference}
            />
          </div>

          <div className="second-row">
            <div className="button-section">
              <PortableText
                renderContainerOnSingleChild={true}
                className="second-row-paragraph"
                blocks={pageData?.paragraphs[1].bodyText}
                serializers={serializers}
              />
              <div className="button-wrapper">
                <Button
                  size="large"
                  color="green"
                  title="Get Involved"
                  link="https://vbvf.churchcenter.com/people/forms/33404?open-in-church-center-modal=true"
                />
              </div>
            </div>
            <img src={John} alt="volunteer praying with children" />
          </div>
        </>
      )}
    </div>
  );
}
