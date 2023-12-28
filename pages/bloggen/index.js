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
        title="Bloggen | Travoflies"
        description="Hier erhalten Sie nützliche Informationen über die Richtlinien der Fluggesellschaften wie Check-in-Richtlinien, Rückerstattungsrichtlinien, Richtlinien für Haustiere und vieles mehr."
        keywords=""
      />

      <BreadHero
        heading="Bloggen"
        currentPage="Bloggen"
      />


      <SpaceMy>
        <div className='text-center'>
          <PageHeading title={'All Articles'} />
        </div> 
        <SpaceMy bottomSpczero={true}>
          <BlogTile allbloglist={allbloglist} path={`bloggen`} readmore={`Weiterlesen`} noitem={`No items found !`} admintext={`Reisen`} />
        </SpaceMy>
      </SpaceMy> 
    </>
  )
}



export const getStaticProps = async ({ params }) => {
  // Get All blogs
  const GetBlogData = await getApiData(`https://laravelapi.hunterwave.com/api/de/artikel/${siteid}?api_token=KcvgFODiK8wMdjR4BcP9mA5YUNMfd6bs1Miy5LGgA86fhHWRAv63rTwZpMyB`);

  return {
    props: {
       allbloglist: GetBlogData 
     },
    revalidate: 10
  }
}

