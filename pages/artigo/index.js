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
        title="Artigo | Travoflies"
        description="Aqui você obtém informações úteis sobre as políticas da companhia aérea, como política de check-in, política de reembolso, política de animais de estimação e muito mais."
        keywords=""
      />

      <BreadHero
        heading="Artigo"
        currentPage="Artigo"
      />


      <SpaceMy>
        <div className='text-center'>
          <PageHeading title={'Todos os artigos'} />
        </div> 
        <SpaceMy bottomSpczero={true}>
          <BlogTile allbloglist={allbloglist} path={`artigo`} readmore={`Read more`} noitem={`No items found !`} admintext={`Viagem`} />
        </SpaceMy>
      </SpaceMy> 
    </>
  )
}



export const getStaticProps = async ({ params }) => {
  // Get All blogs
  const GetBlogData = await getApiData(`https://laravelapi.hunterwave.com/api/pt/article/${siteid}?api_token=KcvgFODiK8wMdjR4BcP9mA5YUNMfd6bs1Miy5LGgA86fhHWRAv63rTwZpMyB`);

  return {
    props: {
       allbloglist: GetBlogData 
     },
    revalidate: 10
  }
}

