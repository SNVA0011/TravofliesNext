import React, { useEffect } from 'react'
import PageHead from '../../component/PageHead'
import BreadHero from '../../component/Breadcrumb/BreadHero'
import PageHeading from '../../component/HeadingStyle/PageHeading'
import SpaceMy from '../../component/SpaceHoriztal/SpaceMy'
import ChpFlgCard from '../../component/ChpFlight/ChpFlgCard'
import { getApiData } from '../../utils/GetApiResp'
import { FlightSiteid } from '../../utils/static'

const cheapFlight = ({ flightslist }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  console.log('flightslist-', flightslist)

  return (
    <>
      <PageHead
        title="Cheap Flight, Tickets, and Airfare Deals - Travoflies.com"
        description="Book a cheap flight on Travoflies.com to find amazing ticket deals to all your favorite destinations and save money. Get cheap airfare offers at the best prices."
        keywords="Cheap Flight, Tickets, Cheap Airfare Deals"
      />

      <BreadHero AirplaneBg={true}
        heading="Cheap-Flight"
        currentPage="Cheap Flight"
      />


      <SpaceMy>
        <div className='text-center'>
          <PageHeading title={'Cheap Flights'} />
        </div>

        <div className='mt-58'>
          <ChpFlgCard
            path={`cheap-flight`}
            flightslist={flightslist}
          />
        </div>
      </SpaceMy>
    </>
  )
}

export default cheapFlight



export const getStaticProps = async ({ params }) => {
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
      flightslist: GetFlightsData.response || []
    },
    revalidate: 10
  }
}








