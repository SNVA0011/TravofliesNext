import React, { useEffect } from 'react'
import PageHead from '../../component/PageHead'
import BreadHero from '../../component/Breadcrumb/BreadHero'
import PageHeading from '../../component/HeadingStyle/PageHeading'
import SpaceMy from '../../component/SpaceHoriztal/SpaceMy'
import ChpFlgCard from '../../component/ChpFlight/ChpFlgCard'

const cheapFlight = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
            defaulText={'Cheap Flights to'}
            listItems={[
              {
                'url': '/cheap-flight/pensacola-pns',
                'title': 'South Affrica'
              },
              {
                'url': '/cheap-flight/pensacola-pns',
                'title': 'South Affrica'
              },
              {
                'url': '/cheap-flight/pensacola-pns',
                'title': 'South Affrica'
              },
              {
                'url': '/cheap-flight/pensacola-pns',
                'title': 'South Affrica'
              },
              {
                'url': '/cheap-flight/pensacola-pns',
                'title': 'South Affrica'
              },
              {
                'url': '/cheap-flight/pensacola-pns',
                'title': 'South Affrica'
              },
              {
                'url': '/cheap-flight/pensacola-pns',
                'title': 'South Affrica'
              },
              {
                'url': '/cheap-flight/pensacola-pns',
                'title': 'South Affrica'
              },
            ]}
          />
        </div>
      </SpaceMy>
    </>
  )
}

export default cheapFlight







