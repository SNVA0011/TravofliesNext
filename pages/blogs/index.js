import { useEffect, useState } from 'react'
import BreadHero from '../../component/Breadcrumb/BreadHero'
import PageHead from '../../component/PageHead';
import { siteid } from '../../utils/static';
import PageHeading from '../../component/HeadingStyle/PageHeading';
import SpaceMy from '../../component/SpaceHoriztal/SpaceMy'; 
import BlogTile from '../../component/BlogCard/BlogTile';
import { getApiData } from '../../utils/GetApiResp';


export default function Blog({ allbloglist }) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <PageHead
        title="Blog | Travoflies"
        description="Here you get useful information about the airline policies such as check-in policy, refund policy, pet policy, and much more."
        keywords=""
      />

      <BreadHero
        heading="Blog"
        currentPage="Blog"
      />


      <SpaceMy>
        <div className='text-center'>
          <PageHeading title={'All Blogs'} />
        </div> 
        <SpaceMy bottomSpczero={true}>
          <BlogTile allbloglist={allbloglist} path={`blogs`} readmore={`Read more`} noitem={`No items found !`} admintext={`Travel`} />
        </SpaceMy>
      </SpaceMy> 
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

