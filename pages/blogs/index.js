import { useEffect, useState } from 'react'
import BreadHero from '../../component/Breadcrumb/BreadHero'
import PageHead from '../../component/PageHead';
import { siteid } from '../../utils/static';
import PageHeading from '../../component/HeadingStyle/PageHeading';
import SpaceMy from '../../component/SpaceHoriztal/SpaceMy'; 
import BlogTile from '../../component/BlogCard/BlogTile';

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

