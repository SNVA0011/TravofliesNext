import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Moment from 'react-moment';
import ReactHtmlParser from 'react-html-parser';
import styles from "./blogbx.module.css"

export default function BlogTile({ allbloglist, showitem = allbloglist?.length, path, readmore, noitem, admintext ,limit}) {
 
  const removeHtml = (string) => {
    const regex = /(<([^>]+)>)/gi;
    const newString = string.replaceAll(regex, " ");
    return newString
  }


  return (
    <>
      <div className={styles.AllBlogWrap}>
        {allbloglist?.length > 0 ? (
          <Row className={styles.AllBlogRow}>
            {allbloglist.slice(0, showitem).filter((items) => items.status === "Active").map((items, i) => (
              <Col xs={12} sm={6} xl={4} key={i} className={styles.RoundBlogCol}>
                <Link href={`/${path}/${items.titleUrl}`}>
                  <a className={`d-flex flex-column ${styles.ViewMoreBlog}`}>
                    <div className={`flex-grow-1 ${styles.abReadMore}`}>
                      <div className="post-info">
                        <p className={styles.bxTitle}>{ReactHtmlParser(items.heading)}</p>
                        <div className={styles.bxSubs} dangerouslySetInnerHTML={{ __html: removeHtml(items.content).substring(0, 300) + "..." }}></div>
                      </div>
                    </div>

                    <span className={styles.ReadMore}>
                      {readmore} <i className="bi bi-arrow-right ml-1"></i>
                    </span>

                    <hr className={styles.hrReadMore}></hr>

                    <Row className={styles.postDateMore}>
                      <Col xs={6}>
                        <img src="/images/calendar-linear.png" alt="calendar-linear" className={styles.postDateImg}/>
                        <Moment date={items.posttime} format="DD MMM-YYYY" />
                      </Col>
                      <Col xs={6} className="text-right">
                        <img src="/images/tag-outline.png" alt="tag-outline" className={styles.postTagImg}/>
                        {admintext}
                      </Col>
                    </Row>
                    

                  </a>
                </Link>
              </Col>
            ))}

          </Row>
        ) : (
          <p className="text-center m-0 mt-4 text-danger font-weight-semibold"> {noitem}</p>
        )}
      </div>
    </>
  );
}
