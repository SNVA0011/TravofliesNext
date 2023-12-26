
import PageHead from '../component/PageHead';
import { siteid } from '../utils/static';
import SpaceMy from '../component/SpaceHoriztal/SpaceMy';
import RecentBlog from '../component/RecentBlog';
import AboutDiscoverBx from '../component/AboutDiscover/AboutDiscoverBx'; 
import Enginebox from '../component/EngineBlock/Enginebox';

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
  return {
    props: { allbloglist: json.response },
    revalidate: 10
  }
}

