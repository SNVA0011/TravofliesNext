
import PageHead from '../component/PageHead';
import { siteid } from '../utils/static';
import SpaceMy from '../component/SpaceHoriztal/SpaceMy';
import RecentBlog from '../component/RecentBlog';
import AboutDiscoverBx from '../component/AboutDiscover/AboutDiscoverBx'; 
import Enginebox from '../component/EngineBlock/Enginebox';
import { getApiData } from '../utils/GetApiResp';

export default function Home({ allbloglist }) {
 
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
              ContentOne="Lorem ipsum dolor sit amet consectetur. Nisi ut massa id dignissim ullamcorper maecenas massa. Phasellus mi egestas egestas sit. Mi lacus lacus arcu interdum tristique proin. Fringilla suscipit risus elit vehicula. Vestibulum id sit sed nisl leo volutpat viverra. Proin in quam faucibus eget ut elementum. Aliquam nisl ipsum elementum massa imperdiet in viverra sollicitudin tellus. Viverra sed ridiculus dolor sit cursus a pellentesque commodo.Viverra sed ridiculus dolor sit cursus a pellentesque commodo."
              ContentTwo="Lorem ipsum dolor sit amet consectetur. Nisi ut massa id dignissim ullamcorper maecenas massa. Phasellus mi egestas egestas sit. Mi lacus lacus arcu interdum tristique proin. Fringilla suscipit risus elit vehicula. Vestibulum id sit sed nisl leo volutpat viverra"
              Discover={{
                'url': '/about-us',
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
                searchtext={`Search Blog`}
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

