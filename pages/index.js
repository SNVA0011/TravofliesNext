 
import Enginebox from '../component/Enginebox'
import BlogTile from '../component/BlogTile';
import Link from "next/link"
import PageHead from '../component/PageHead';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { siteid } from '../utils/static';

export default function Home(props) {
  return (
    <>
      <PageHead
        title=""
        description=""
        keywords=""
      />


      <div className='homepage'>

        <div className='business-main'>
          <main id="main" className="site-main overflow">
          <Enginebox />
 

            {/*-------- latestnews --------*/}
            <div className="blogs latestnews pb-0 pb-xl-5">
              <Container className='mb-5 p-0'>
                <Row>
                  <Col xs={12} className="mb-4">
                    <div className='latestnews-area'>
                      <div className='row align-items-end'>
                        <div className='col-7'>
                          <h2 className="latestnews-title text-capitalize">Our Blog</h2>
                        </div>
                        <div className='col-5'>
                          <div className='text-right'>
                            <Link href="/blog">
                              <a className="btn-latestnews-readmore text-capitalize">
                                View more <i className="bi bi-arrow-right ml-1"></i>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='popular-destination blogaddalist full-w'>
                      <BlogTile allbloglist={props.allbloglist} showitem={4} path={`blog`} readmore={`Read more`} noitem={`No items found !`} admintext={`Travoflies`} />
                    </div>
                  </Col>

                </Row>
              </Container>
            </div>
            {/*-------- end latestnews --------*/}


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
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  }
}

