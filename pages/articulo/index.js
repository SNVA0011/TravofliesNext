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
        title="Articulo | Travoflies"
        description="Para conocer la información más reciente sobre la política de equipaje de la aerolínea, la política de cancelación y la política de cambio de vuelo, puede ponerse en contacto con los artículos de Travoflies."
        keywords=""
      />

      <BreadHero
        heading="Articulo"
        currentPage="Articulo"
      />


      <SpaceMy>
        <div className='text-center'>
          <PageHeading title={'Todos Articulos'} />
        </div> 
        <SpaceMy bottomSpczero={true}>
          <BlogTile allbloglist={allbloglist} path={`articulo`} readmore={`Read more`} noitem={`No items found !`} admintext={`Viajar`} />
        </SpaceMy>
      </SpaceMy> 
    </>
  )
}



export const getStaticProps = async ({ params }) => {
  // Get All blogs
  const GetBlogData = await getApiData(`https://laravelapi.hunterwave.com/api/es/blogs/${siteid}?api_token=KcvgFODiK8wMdjR4BcP9mA5YUNMfd6bs1Miy5LGgA86fhHWRAv63rTwZpMyB`);

  return {
    props: {
       allbloglist: GetBlogData 
     },
    revalidate: 10
  }
}

