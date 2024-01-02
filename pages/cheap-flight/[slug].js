import React from "react";
import BreadHero from "../../component/Breadcrumb/BreadHero";
import Pageerror from "../../component/PageError/Pageerror";
import { useRouter } from "next/router";
import Moment from 'react-moment';
import PageHead from "../../component/PageHead";
import { FlightSiteid, siteid } from "../../utils/static";
import ReactHtmlParser from 'react-html-parser';
import SpaceMy from "../../component/SpaceHoriztal/SpaceMy";
import styles from "./slugdt.module.css"
import ChpFlgCard from "../../component/ChpFlight/ChpFlgCard";
import LinkButtonSite from "../../component/ButtonSite/LinkButtonSite";
import PageHeading from "../../component/HeadingStyle/PageHeading";
import { getApiData } from "../../utils/GetApiResp";
import Image from "next/image";


export default function blogDetails({ SingleFlight, flightslist }) {
  const location = useRouter();

  // isFallback
  if (location.isFallback) {
    return <div className={styles.loadPage}>
      <div className='text-center full-w my-auto py-5'>
        <div className={`spinner-border ${styles.loadPageSpin}`} role="status">
        </div>
      </div>
    </div>
  }

  return (
    <>

      {SingleFlight?.length > 0 ? (
        <>
          <PageHead
            title={ReactHtmlParser(SingleFlight[0].title)}
            description={ReactHtmlParser(SingleFlight[0].description)}
            keywords={ReactHtmlParser(SingleFlight[0].keyword)}
          />

          <BreadHero
            heading={SingleFlight[0].title}
            blogHeading={true}
            pathBetween={[
              {
                'title': 'Cheap Flight',
                'url': '/cheap-flight'
              }
            ]}
            currentPage="Flight Details"
          />


          <SpaceMy>
            <div className="blog-inner-box">
              {SingleFlight[0].content === "" ? (
                <p className="pb-2">No Content found</p>
              ) : (
                <>
                  <ul className={styles.postDateMore}>
                    <li>
                      by Admin
                    </li>
                    <li>
                      <span className={styles.postDateImg}>
                      <Image src="/images/calendar-linear.png" alt="calendar-linear" className={styles.postDateImg} 
                               width={18}
                        height={19}
                      />
                       </span>
                      <Moment date={SingleFlight[0].postTime} format="DD MMM-YYYY" />
                    </li>
                    <li>
                      <span className={styles.postTagImg}>
                      <Image src="/images/tag-outline.png" alt="tag-outline" className={styles.postTagImg} 
                              width={14}
                        height={15}
                      />
                         </span>
                      {SingleFlight[0].origingAirportCode}
                    </li>
                  </ul>

                  <div
                    className={styles.contentBasic}
                    dangerouslySetInnerHTML={{
                      __html: SingleFlight[0].content,
                    }}></div>
                </>
              )}
            </div>
          </SpaceMy>


          <SpaceMy bgYellow={true}>

            <div className="text-center">
              <PageHeading title="Latest Cheap Flights" />

              <div className='mt-58 mb-4 text-left'>
                <ChpFlgCard
                  path={`cheap-flight`}
                  flightslist={flightslist}
                  showitem={6}
                />
              </div>

              <div className='mt-35 clearfix'>
                <LinkButtonSite path={`/cheap-flight`}>
                  View All
                </LinkButtonSite>
              </div>
            </div> 

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


  // Get single Flights
  const GetSingleFlight = await getApiData(`https://cms.travomint.com/route-source/showRouteSourceContent?authcode=Trav3103s987876`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "siteId": FlightSiteid,
      "language": "eng",
      "pageType": "cheap-flight",
      "url": params.slug
    }),
    redirect: 'follow'
  });


  // Get All Flights
  const GetFlightsData = await getApiData(`https://cms.travomint.com/route-source/showRouteSourceList?authcode=Trav3103s987876`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "siteId": FlightSiteid,
      "pageType": "cheap-flight"
    }),
    redirect: 'follow'
  });

  return {
    props: {
      SingleFlight: GetSingleFlight.response || [],
      flightslist: GetFlightsData.response || [],
    },
    revalidate: 10
  };
}



// paths -> slugs which are allowed
export const getStaticPaths = async () => {
  // Get All Flights
  const GetFlightsData = await getApiData(`https://cms.travomint.com/route-source/showRouteSourceList?authcode=Trav3103s987876`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "siteId": FlightSiteid,
      "pageType": "cheap-flight"
    }),
    redirect: 'follow'
  });
  const data = GetFlightsData.response || [];

  // fallback ->
  const paths = data.map((post) => ({
    params: { slug: post.url }
  }))

  return {
    paths,
    fallback: true
  }
}