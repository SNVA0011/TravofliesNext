import React, { useState } from "react";
import BreadHero from "../../component/Breadcrumb/BreadHero";
import Pageerror from "../../component/PageError/Pageerror";
import { useRouter } from "next/router"; 
import Moment from 'react-moment';
import PageHead from "../../component/PageHead";
import RecentBlog from "../../component/RecentBlog";
import { siteid } from "../../utils/static";
import ReactHtmlParser from 'react-html-parser';
import SpaceMy from "../../component/SpaceHoriztal/SpaceMy";
import styles from "./slugdt.module.css"


export default function blogDetails({ singleblog, allblog }) {
  const location = useRouter();

  // isFallback
  if (location.isFallback) {
    return  <div className={styles.loadPage}> 
    <div className='text-center full-w my-auto py-5'>
    <div className={`spinner-border ${styles.loadPageSpin}`} role="status">
      </div>
    </div>
  </div>
  }

  return (
    <>

      {singleblog?.length > 0 ? (
        <>
          <PageHead
            title={ReactHtmlParser(singleblog[0].title)}
            description={ReactHtmlParser(singleblog[0].description)}
            keywords={ReactHtmlParser(singleblog[0].keywords)}
          />

          <BreadHero
            heading={singleblog[0].title}
            blogHeading={true}
            pathBetween={[
              {
                'title': 'Blogs',
                'url': '/blogs'
              }
            ]}
            currentPage="Blog Details"
          />


          <SpaceMy>
            <div className="blog-inner-box">
              {singleblog[0].content === "" ? (
                <p className="pb-2">No Content found</p>
              ) : (
                <>
                  <ul className={styles.postDateMore}>
                    <li>
                      by Admin
                    </li>
                    <li>
                      <img src="/images/calendar-linear.png" alt="calendar-linear" className={styles.postDateImg} />
                      <Moment date={singleblog[0].posttime} format="DD MMM-YYYY" />
                    </li>
                    <li>
                      <img src="/images/tag-outline.png" alt="tag-outline" className={styles.postTagImg} />
                      Travel
                    </li>
                  </ul>

                  <div
                    className={styles.contentBasic}
                    dangerouslySetInnerHTML={{
                      __html: singleblog[0].content,
                    }}></div>
                </>
              )}
            </div>
          </SpaceMy>


          <SpaceMy bgYellow={true}>
            <RecentBlog
              recentitem={allblog}
              path={`blogs`}
              title={`Latest Posts`}
              searchtext={`Search Blog`}
              viewcontent={`View All`}
              readmore={`Read more`}
              noitem={`No items found !`}
              admintext={`Travel`}
              showitem={6}
              RecentBlog={true}
            />
          </SpaceMy>

        </>
      ) : (
        <>
          <Pageerror
            metatitle={`404 Page Not Found`}
            title={`The page you are looking for was not found.`}
            link={`/`}
            linktext={`Back to Home`} />
        </>
      )}
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  // single slug
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    id: "",
    title: "",
    titleUrl: `${params.slug}`,
    content: "",
    description: "",
    keywords: "",
    posttime: "",
    status: "",
    heading: "",
    img_url: "",
    siteId: siteid,
    categoryName: "",
    blogdes2: "",
    blogTagsName2: "",
    extarTag: "",
    tfnHeader: "",
    tfnFooter1: "",
    tfnFooter2: "",
    tfnFooter3: "",
    tfnPopup: "",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const res = await fetch(
    "https://cms.travomint.com/travoles-content/blogdatabyid?authcode=Trav3103s987876",
    requestOptions
  );
  const onejson = await res.json();

  // All blog
  var myHeadersal = new Headers();
  myHeadersal.append("Content-Type", "application/json");

  var rawall = JSON.stringify({
    id: "",
    title: "",
    titleUrl: "",
    content: "",
    description: "",
    keywords: "",
    posttime: "",
    status: "",
    heading: "",
    img_url: "",
    siteId: siteid,
    categoryName: "",
    blogdes2: "",
    blogTagsName2: "",
    extarTag: "",
    tfnHeader: "",
    tfnFooter1: "",
    tfnFooter2: "",
    tfnFooter3: "",
    tfnPopup: "",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeadersal,
    body: rawall,
    redirect: "follow",
  };
  const resall = await fetch(
    "https://cms.travomint.com/travoles-content/showblogdata?authcode=Trav3103s987876",
    requestOptions
  );
  const multiplejson = await resall.json();
 

  return {
    props: {
      singleblog: onejson.response,
      allblog: multiplejson.response, 
    }, 
    revalidate: 10 
  };
}



// paths -> slugs which are allowed
export const getStaticPaths = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "id": "",
    "title": "",
    "titleUrl": "",
    "content": "",
    "description": "",
    "keywords": "",
    "posttime": "",
    "status": "",
    "heading": "",
    "img_url": "",
    "siteId": siteid,
    "categoryName": "",
    "blogdes2": "",
    "blogTagsName2": "",
    "extarTag": "",
    "tfnHeader": "",
    "tfnFooter1": "",
    "tfnFooter2": "",
    "tfnFooter3": "",
    "tfnPopup": ""
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  const res = await fetch("https://cms.travomint.com/travoles-content/showblogdata?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  const data = json.response;

  // fallback -> 
  const paths = data.map((post) => ({
    params: { slug: post.titleUrl }
  }))

  return {
    paths,
    fallback: true
  }
}