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
import { getApiData } from "../../utils/GetApiResp";


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
            title={ReactHtmlParser(singleblog[0].meta_title)}
            description={ReactHtmlParser(singleblog[0].meta_desc)}
            keywords={ReactHtmlParser(singleblog[0].meta_keywords)}
          />

          <BreadHero
            heading={singleblog[0].title}
            blogHeading={true}
            pathBetween={[
              {
                'title': 'Articulo',
                'url': '/articulo'
              }
            ]}
            currentPage="Articulo Detalles"
          />


          <SpaceMy>
            <div className="blog-inner-box">
              {singleblog[0].desc === "" ? (
                <p className="pb-2">No Content found</p>
              ) : (
                <>
                  <ul className={styles.postDateMore}>
                    <li>
                      by Admin
                    </li>
                    <li>
                      <img src="/images/calendar-linear.png" alt="calendar-linear" className={styles.postDateImg} />
                      <Moment date={singleblog[0].created_at} format="DD MMM-YYYY" />
                    </li>
                    <li>
                      <img src="/images/tag-outline.png" alt="tag-outline" className={styles.postTagImg} />
                      Viajar
                    </li>
                  </ul>

                  <div
                    className={styles.contentBasic}
                    dangerouslySetInnerHTML={{
                      __html: singleblog[0].desc,
                    }}></div>
                </>
              )}
            </div>
          </SpaceMy>


          <SpaceMy bgYellow={true}>
            <RecentBlog
              recentitem={allblog}
              path={`articulo`}
              title={`Últimos Artículos`}
              
              viewcontent={`View All`}
              readmore={`Read more`}
              noitem={`No items found !`}
              admintext={`Viajar`}
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

  // Single blog
  const GetSingleBlog = await getApiData(`https://laravelapi.hunterwave.com/api/es/blogs/${siteid}/${params.slug}?api_token=KcvgFODiK8wMdjR4BcP9mA5YUNMfd6bs1Miy5LGgA86fhHWRAv63rTwZpMyB`);

  // All blog
  const GetBlogData = await getApiData(`https://laravelapi.hunterwave.com/api/es/blogs/${siteid}?api_token=KcvgFODiK8wMdjR4BcP9mA5YUNMfd6bs1Miy5LGgA86fhHWRAv63rTwZpMyB`);

  return {
    props: {
      singleblog: GetSingleBlog,
      allblog: GetBlogData, 
    }, 
    revalidate: 10 
  };
}


// paths -> slugs which are allowed
export const getStaticPaths = async () => {
  const data = await getApiData(`https://laravelapi.hunterwave.com/api/es/blogs/${siteid}?api_token=KcvgFODiK8wMdjR4BcP9mA5YUNMfd6bs1Miy5LGgA86fhHWRAv63rTwZpMyB`);

  // fallback -> 
  const paths = data.map((post) => ({
    params: { slug: post.blog_url }
  }))

  return {
    paths,
    fallback: true
  }
}