import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import BreadHero from "../../component/BreadHero";
import { useRouter } from "next/router";
import Pageerror from "../../component/Pageerror";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Moment from 'react-moment';
import PageHead from "../../component/PageHead";
import RecentBlog from "../../component/RecentBlog"; 
import { siteid } from "../../utils/static";
import ReactHtmlParser from 'react-html-parser';


export default function BlogDetails(props, router) {
  const location = useRouter();

  // RateUs
  const [message, setMessage] = useState("");
  const [countrating, setCountrating] = useState(0);
  const RateUs = (val) => {
    setCountrating(val)
  }

  // CommentSubmit
  const CommentSubmit = async (event) => {
    event.preventDefault();
    document.getElementById('leavecomment').scrollIntoView();

    if (event.target.authorcomment.value.length !== 0) { event.target.authorcomment.classList.remove("error") }
    if (event.target.authorname.value.length !== 0) { event.target.authorname.classList.remove("error") }
    if (event.target.authoremail.value.length !== 0) { event.target.authoremail.classList.remove("error") }
    if (event.target.authornumber.value.length !== 0) { event.target.authornumber.classList.remove("error") }

    if (countrating == 0) {
      alert("Please rate us!");
      event.target.authorrate.focus();
    }
    else if (event.target.authorcomment.value.length == 0) {
      alert("Please enter your comment!");
      event.target.authorcomment.focus();
      event.target.authorcomment.classList.add("error");
    }
    else if (event.target.authorname.value.length == 0) {
      alert("Please provide your name!");
      event.target.authorname.focus()
      event.target.authorname.classList.add("error");
    }
    else if (event.target.authoremail.value.length == 0) {
      alert("Please provide your email!");
      event.target.authoremail.focus()
      event.target.authoremail.classList.add("error");
    }
    else if (event.target.authornumber.value.length == 0) {
      alert("Please provide your phone number!");
      event.target.authornumber.focus()
      event.target.authornumber.classList.add("error");
    }
    else {

      try {
        let res = await fetch("https://cms.travomint.com/travoles-content/addreview?authcode=Trav3103s987876", {
          method: "POST",
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
          body: JSON.stringify({
            "reviewId": "",
            "userName": event.target.authorname.value,
            "userEmail": event.target.authoremail.value,
            "userPhone": event.target.authornumber.value,
            "reviewMessage": event.target.authorcomment.value,
            "reviewDate": "",
            "reviewRating": event.target.authorrate.value,
            "reviewRpyId": "0",
            "reviewStatus": "Inactive",
            "siteId": siteid,
            "reviewUrl": props.singleblog[0].titleUrl
          }),
        });
        if (res.status === 200) {
          event.target.reset();
          setMessage("success");
          setTimeout(function () {
            setMessage("");
          }, 6000);
        } else {
          setMessage("error");
        }
      } catch (err) {
        console.log(err);
      }

    }
  };


  // isFallback
  if (location.isFallback) {
    return <>
      <div className='text-center full-w my-5 py-5'>
        <div className="spinner-border text-secondary mr-2" role="status">
        </div>
      </div>
    </>
  }

  return (
    <>

      {props.singleblog?.length > 0 ? (
        <>

          <PageHead
            title={ReactHtmlParser(props.singleblog[0].title)}
            description={ReactHtmlParser(props.singleblog[0].description)}
            keywords={ReactHtmlParser(props.singleblog[0].keywords)}
          />

          <div className="blogdt-single">

            <div className="blogadda bg-white">
              <div className="d-flex align-items-center justify-content-center flex-column page-title page-title--small page-title--blog text-center ">
                <div className="container">
                  <div className="page-title__content">
                    <div className="page-title__name">Blog Details</div>
                    <p className="page-title__slogan" dangerouslySetInnerHTML={{
                      __html: props.singleblog[0].heading
                    }}></p>
                  </div>
                </div>
                <BreadHero
                  linkhtml={
                    <>
                      <ul className="bradcum container">
                        <li>
                          <Link href="/">Home</Link>{" "}
                        </li>
                        <li className="mr-2">/</li>
                        <li>
                          <Link href="/blog">Blog</Link>
                        </li>
                        <li className="mr-2">/</li>
                        <li>
                          Blog Details
                        </li>
                      </ul>
                    </>
                  }
                />
              </div>

              <div className="popular-destination blogaddalist details full-w">
                <Container className="pb-5">
                  <Row>

                    <Col xs={12} xl={8}>
                      <div className="blogaddalist-round anchorsc-space">
                        <div className="blogaddalist-inner">
                          <div className="blog-inner-box2 mb-5 content-ullist">
                            {props.singleblog[0].content === "" ? (
                              <p className="pb-2">No Content found</p>
                            ) : (
                              <>
                                <div className="mb-2 text-secondary">
                                  <i className="bi bi-calendar4 ckdate"></i> <Moment date={props.singleblog[0].posttime} format="MMM DD, YYYY" />
                                </div>

                                <h1 className="page-title__name mb-4 bloginner-title"> {ReactHtmlParser(props.singleblog[0].heading)}</h1>

                                <hr></hr>

                                <div
                                  className="blog-p mb-5 content-ullist"
                                  dangerouslySetInnerHTML={{
                                    __html: props.singleblog[0].content,
                                  }}
                                />
                              </>
                            )}
                          </div>
                        </div>
                      </div>
 

                    </Col>


                    <Col xs={12} xl={4} className='mt-5 mt-xl-0'>
                      <div className="stickyasd">

                        <RecentBlog
                          recentitem={props.allblog}
                          path={`blog`}
                          title={`Recent Posts`}
                          searchtext={`Search Blog`}
                          viewcontent={`View All`} /> 

                      </div>
                    </Col>


                  </Row>




                </Container>
              </div>
            </div>

          </div>
        </>
      ) : (
        <>
          <Pageerror
            metatitle={`404 Page Not Found`}
            title={`The page you are looking for was not found.`}
            link={`/`}
            linktext={`Back to Home`} />
        </>
      )}
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  // single blogDetail
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    id: "",
    title: "",
    titleUrl: `${params.blogDetail}`,
    content: "",
    description: "",
    keywords: "",
    posttime: "",
    status: "",
    heading: "",
    img_url: "",
    siteId: siteid,
    categoryName: "",
    blogdes2: "",
    blogTagsName2: "",
    extarTag: "",
    tfnHeader: "",
    tfnFooter1: "",
    tfnFooter2: "",
    tfnFooter3: "",
    tfnPopup: "",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const res = await fetch(
    "https://cms.travomint.com/travoles-content/blogdatabyid?authcode=Trav3103s987876",
    requestOptions
  );
  const onejson = await res.json();

  // All blog
  var myHeadersal = new Headers();
  myHeadersal.append("Content-Type", "application/json");

  var rawall = JSON.stringify({
    id: "",
    title: "",
    titleUrl: "",
    content: "",
    description: "",
    keywords: "",
    posttime: "",
    status: "",
    heading: "",
    img_url: "",
    siteId: siteid,
    categoryName: "",
    blogdes2: "",
    blogTagsName2: "",
    extarTag: "",
    tfnHeader: "",
    tfnFooter1: "",
    tfnFooter2: "",
    tfnFooter3: "",
    tfnPopup: "",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeadersal,
    body: rawall,
    redirect: "follow",
  };
  const resall = await fetch(
    "https://cms.travomint.com/travoles-content/showblogdata?authcode=Trav3103s987876",
    requestOptions
  );
  const multiplejson = await resall.json();


  // All Comments  
  var requestComment = {
    method: "POST",
    body: JSON.stringify({
      "reviewId": "",
      "userName": "",
      "userEmail": "",
      "userPhone": "",
      "reviewMessage": "",
      "reviewDate": "",
      "reviewRating": "",
      "reviewRpyId": "",
      "reviewStatus": "",
      "siteId": siteid,
      "reviewUrl": `${params.blogDetail}`
    }),
    redirect: "follow",
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  };
  const commentall = await fetch(
    "https://cms.travomint.com/travoles-content/reviewbyurl?authcode=Trav3103s987876",
    requestComment
  );
  const commentjson = await commentall.json();

  return {
    props: {
      singleblog: onejson.response,
      allblog: multiplejson.response,
      getallcomments: commentjson.response,
    },
    revalidate: 60,
  };
}



// paths -> slugs which are allowed
export const getStaticPaths = async () => {
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
  const data = json.response;

  // fallback ->
  let paths = [];

  data.forEach((post) => {
    paths.push({
      params: { blogDetail: post.titleUrl }
    })
  })

  return {
    paths,
    fallback: true
  }
}