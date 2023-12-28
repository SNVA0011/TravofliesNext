import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Moment from 'react-moment';
import ReactHtmlParser from 'react-html-parser';
import styles from "./blogbx.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";


export default function BlogTile({ allbloglist, showitem = allbloglist?.length, path, readmore, noitem, admintext, Thumbnail = false, RecentBlog = false }) {

  const removeHtml = (string) => {
    const regex = /(<([^>]+)>)/gi;
    const newString = string.replaceAll(regex, " ");
    return newString
  }

  // slideOpt
  const length = allbloglist?.length;

  const slideOpt = {
    initialSlide: 0,
    spaceBetween: 10,
    navigation: true,
    pagination: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 29,
      }
    },
    modules: [Navigation, Autoplay, Pagination],
  };
 
 

  return (
    <>
      {RecentBlog ? (
        <>
          {allbloglist?.length > 0 ? (
            <Swiper className={'RecentBlogSlide'} {...slideOpt}>
              {allbloglist.slice(0, showitem).filter((items) => items.status === "active").map((items, i) => {
                const ImgPath = i == 0 ? "/images/plane-window.jpg" : i == 1 ? "/images/blogthumbnail.png" : i == 2 ? "/images/airport-img.jpg" : ""
                return (
                  <SwiperSlide key={i}>
                    <Link href={`/${path}/${items.blog_url}`}>
                      <a className={`d-flex flex-column ${styles.mbspace} ${styles.ViewMoreBlog} ${Thumbnail ? styles.borderTp : styles.borderNone}`}>

                        {Thumbnail && <div className={styles.imgCoverbg}>
                          <img src={ImgPath} alt={ReactHtmlParser(items.title)} />
                        </div>}

                        <div className={`flex-grow-1 ${styles.abReadMore}`}>
                          <div className="post-info">
                            <p className={styles.bxTitle}>{ReactHtmlParser(items.title)}</p>
                            <div className={styles.bxSubs} dangerouslySetInnerHTML={{ __html: removeHtml(items.desc).substring(0, 300) + "..." }}></div>
                          </div>
                        </div>

                        <span className={styles.ReadMore}>
                          {readmore} <i className="bi bi-arrow-right ml-1"></i>
                        </span>

                        <hr className={styles.hrReadMore}></hr>

                        <Row className={styles.postDateMore}>
                          <Col xs={7}>
                            <img src="/images/calendar-linear.png" alt="calendar-linear" className={styles.postDateImg} />
                            <Moment date={items.created_at} format="DD MMM-YYYY" />
                          </Col>
                          <Col xs={5} className="text-right">
                            <img src="/images/tag-outline.png" alt="tag-outline" className={styles.postTagImg} />
                            {admintext}
                          </Col>
                        </Row>
                      </a>
                    </Link>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          ) : (
            <p className="text-center m-0 mt-4 pt-4 text-danger font-weight-semibold"> {noitem}</p>
          )}
        </>
      )
        :
        (
          <div className={styles.AllBlogWrap}>
            {allbloglist?.length > 0 ? (
              <Row className={styles.AllBlogRow}>
                {allbloglist.slice(0, showitem).filter((items) => items.status === "active").map((items, i) => (
                  <Col xs={12} sm={6} lg={4} key={i} className={styles.RoundBlogCol}>
                    <Link href={`/${path}/${items.blog_url}`}>
                      <a className={`d-flex flex-column ${styles.ViewMoreBlog} ${Thumbnail ? styles.borderTp : ''}`}>

                        {Thumbnail && <div className={styles.imgCoverbg}>
                          <img src="/images/blogthumbnail.png" alt={ReactHtmlParser(items.title)} />
                        </div>}

                        <div className={`flex-grow-1 ${styles.abReadMore}`}>
                          <div className="post-info">
                            <p className={styles.bxTitle}>{ReactHtmlParser(items.title)}</p>
                            <div className={styles.bxSubs} dangerouslySetInnerHTML={{ __html: removeHtml(items.desc).substring(0, 300) + "..." }}></div>
                          </div>
                        </div>

                        <span className={styles.ReadMore}>
                          {readmore} <i className="bi bi-arrow-right ml-1"></i>
                        </span>

                        <hr className={styles.hrReadMore}></hr>

                        <Row className={styles.postDateMore}>
                          <Col xs={7}>
                            <img src="/images/calendar-linear.png" alt="calendar-linear" className={styles.postDateImg} />
                            <Moment date={items.created_at} format="DD MMM-YYYY" />
                          </Col>
                          <Col xs={5} className="text-right">
                            <img src="/images/tag-outline.png" alt="tag-outline" className={styles.postTagImg} />
                            {admintext}
                          </Col>
                        </Row>


                      </a>
                    </Link>
                  </Col>
                ))}

              </Row>
            ) : (
              <p className="text-center m-0 mt-4 pt-4 text-danger font-weight-semibold"> {noitem}</p>
            )}
          </div>
        )
      }




    </>
  );
}
