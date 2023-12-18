import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Moment from 'react-moment';
import ReactHtmlParser from 'react-html-parser';


export default function BlogTile({ allbloglist, showitem = allbloglist?.length, path, readmore, noitem, admintext }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const removeHtml = (string) =>{
    const regex = /(<([^>]+)>)/gi;
    const newString = string.replaceAll(regex, " ");
    return newString
  }
 
  
  return (
    <>
      <div className="blogadda">
        <div className={"popular-destination blogaddalist full-w "}>
          {allbloglist?.length > 0 ? (
            <Row>
              {allbloglist.slice(0, showitem).filter((items) => items.status === "Active").map((items, i) => (
                <Col xs={12} md={6} xl={6} key={i} className={"clearfix mb-4" + ' sparticle-' + i}>
                  <Link href={`/${path}/${items.titleUrl}`}>
                    <a className="clearfix post hover__box bog-border h-100 d-flex flex-column splitsm-box">
                      <div className="wrapper"></div>

                      <a className="flex-grow-1">
                        <div className="post__info">
                          <ul className="post__category">
                            <li className="">
                              <img src="/favicon.ico" className="favadminis mr-2" />
                              <span>{admintext}</span>
                            </li>
                            <li>
                              {" "}
                              <i className="bi bi-calendar4 mr-2"></i>{" "}
                              <span>
                                <Moment date={items.posttime} format="MMM DD, YYYY" />
                              </span>
                            </li>
                          </ul>
                          <div className="blog-p  mb-4 content-ullist">
                          <h3 className="page-title__name mb-2"> {ReactHtmlParser(items.heading)}</h3>
                          
                            <div className="d-inline" dangerouslySetInnerHTML={{ __html: removeHtml(items.content).substring(0, 250) + "..." }}></div>
                          </div>
                        </div>
                      </a>

                      <span className="btnread-sm">
                        {readmore} <i className="bi bi-arrow-right ml-1"></i>
                      </span>

                    </a>
                  </Link>
                </Col>
              ))}

            </Row>
          ) : (
            <p className="text-center"> {noitem}</p>
          )}
        </div>
      </div>
    </>
  );
}
