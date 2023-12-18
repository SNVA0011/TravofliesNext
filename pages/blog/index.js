import { useEffect, useState } from 'react'
import Link from "next/link"
import BlogTile from '../../component/BlogTile';
import BreadHero from '../../component/BreadHero' 
import PageHead from '../../component/PageHead';
import RecentBlog from '../../component/RecentBlog'; 
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { siteid } from '../../utils/static';

export default function Blog(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
 
  return (
    <div className='bggrad-light pb-5 mb-5'>
      <PageHead
        title="Travoflies | Blogs"
        description=""
        keywords=""
      />

      <div className='blogdt-single'>


        <div className='blogadda'>

          <div className="d-flex align-items-center justify-content-center flex-column page-title page-title--small page-title--blog text-center" >
            <div className="container">
              <div className="page-title__content">
                <h1 className="page-title__name">Blog </h1>
                <p className="page-title__slogan">Ask your query and leave the rest to us</p>
              </div>
            </div>
            <BreadHero linkhtml={<><ul className="bradcum container">
              <li><Link href="/">Home</Link></li>
              <li className='mr-2'>/</li>
              <li aria-current="page">Blog</li>
            </ul>
            </>} />
          </div> 


          <Container>
          <Row className='mb-3'>
              <Col xs={12} xl={8}>
              <div className='popular-destination blogaddalist full-w pb-0'>
                  <BlogTile allbloglist={props.allbloglist} path={`blog`} readmore={`Read more`} noitem={`No items found !`} admintext={`Travoflies`}/>
                </div>
              </Col>

              <Col xs={12} xl={4} className='mt-5 mt-xl-0'>
                <div className="stickyasd">

                  <RecentBlog
                   recentitem={props.allbloglist}
                    path={`blog`} 
                    searchtext={`Search Blog`}
                   title={`Recent Posts`}
                   viewcontent={`View All`} /> 

                </div>
              </Col>
            </Row>
          </Container>



        </div>

      </div>
    </div>
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
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  }
}

