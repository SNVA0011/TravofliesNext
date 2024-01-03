
import PageHead from '../component/PageHead';
import { siteid } from '../utils/static';
import SpaceMy from '../component/SpaceHoriztal/SpaceMy';
import RecentBlog from '../component/RecentBlog';
import AboutDiscoverBx from '../component/AboutDiscover/AboutDiscoverBx'; 
import Enginebox from '../component/EngineBlock/Enginebox';
import { getApiData } from '../utils/GetApiResp';

export default function Home({ allbloglist}) {
 
  return (
    <>
      <PageHead
        title="Plane Ticket Booking & Get Cheap Flight Deals - Travoflies"
        description="Plan your next trip via plane and fly with Travoflies to save money on airline tickets. Get useful information about airline policies and update yourself."
        keywords="Travoflies, Plane Ticket Booking, flight booking, Cheap Flight Deals"
      />


      <div className='homepage'>

        <div className='business-main'>
          <main id="main" className="site-main overflow">

            {/*---- Engine Box ----*/}
            <Enginebox />

            {/*---- About US ----*/}
            <AboutDiscoverBx
              ThumbnailPath="/images/aboutHome.png"
              Heading="About us"
              ContentOne="Being one of the prominent travel agencies offering the best trip packages to travelers, Travoflies makes it easier to enjoy more and worry less about the travel plans made. At every step you take, towards your destination, we help provide the additional stride required to make the trip memories to be everlasting. We ensure to specially cater to and make modifications under the demands that you have."
              ContentTwo="The main precept of Travoflies is to furnish travelers with a wide range of choices to pick from varied destinations around the world. As part of the same, we offer jaw-dropping deals and expert guidance for all travel destinations worldwide. Our team of highly skilled travel experts always finds the best deals and offers on flights without hampering your budget."
              Discover={{
                'url': 'about-us',
                'title': 'Discover more'
              }}
              HappyCustomer={{
                'number': 500,
                'title': 'Happy Customer'
              }}
            />

  
            {/*---- latest news ----*/}
            <SpaceMy>
              <RecentBlog
                recentitem={allbloglist}
                path={`blogs`}
                title={`Latest Blogs`} 
                viewcontent={`View All`}
                readmore={`Read more`}
                noitem={`No items found !`}
                admintext={`Travel`}
                showitem={3}
                Thumbnail={true}
                RecentBlog={true}
              />
            </SpaceMy>


          </main>

        </div>


      </div>
    </>
  )
}


export const getStaticProps = async ({ params }) => {
  // Get All blogs
  const GetBlogData = await getApiData(`https://laravelapi.hunterwave.com/api/en/blogs/${siteid}?api_token=KcvgFODiK8wMdjR4BcP9mA5YUNMfd6bs1Miy5LGgA86fhHWRAv63rTwZpMyB`);
  return {
    props: {
       allbloglist: GetBlogData 
     },
    revalidate: 10
  }
}

