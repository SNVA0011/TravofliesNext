import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import Link from "next/link";
import { useRouter } from "next/router";
import Dropdown from 'react-bootstrap/Dropdown';


const RecentBlog = ({ recentitem, path, title, viewcontent, searchtext, recentvisiblity = true }) => {
    const location = useRouter();

    const [blogName, setblogName] = useState("");

    const makeBold = (item, keyword) => {
        var re = new RegExp(keyword, 'g')
        return (
            item.replace(re, '<b>'+keyword+ '</b>')
        )
    }

    useEffect(() => {
        setblogName("")
    }, [location.asPath]);


    return (
        <>
            <aside className="recent-blogsalide position-relative bx-1">
                <div className="post__info form-underline">
                    <h3 className="post__title position-relative text-capitalize">
                        {searchtext}
                    </h3>

                    <div className={`field-input typeblogsearch ${blogName?.length === 0 ? "null" : ""}`}>
                        <Dropdown>
                            <Dropdown.Toggle>
                                <i className="bi bi-search"></i>
                                <input type="text" placeholder="Type to search..." className='form-control' value={blogName} onChange={(e) => { setblogName(e.target.value) }}/>
                            </Dropdown.Toggle>

                            {blogName?.length > 0 && <Dropdown.Menu show>
                                {
                                    recentitem.filter(({ heading }) => heading.toLowerCase().includes(blogName.toLowerCase())).map((items, i) => (
                                        <Dropdown.Item href={`/${path}/${items.titleUrl}`} as={Link}>
                                            <a className='dropdown-item' dangerouslySetInnerHTML={{__html:  makeBold(`${items.heading.toLowerCase()}`, blogName.toLowerCase())}}></a>
                                        </Dropdown.Item>
                                    ))
                                }
                            </Dropdown.Menu>}

                        </Dropdown>
                    </div>


                </div>
            </aside>


            {recentvisiblity && <aside className="recent-blogsalide position-relative bx-2">
                <div className="post__info">
                    <h3 className="post__title position-relative text-capitalize">
                        {title}
                    </h3>

                    <Link href={`/${path}`}>
                        <a className='view-allblg'>
                            {viewcontent}
                        </a>
                    </Link>


                    {recentitem?.length > 0 ? (
                        <ul>
                            {recentitem.slice(0, 4).filter((items) => items.status === "Active").map((items, i) => (
                                <li key={i}>
                                    <div className="overflow-hidden">
                                        <Link href={`/${path}/${items.titleUrl}`}>
                                            <a className={location.asPath === `/${path}/` + items.titleUrl ? "active" : "not-active"}>
                                                <span className="d-block" dangerouslySetInnerHTML={{ __html: items.title }}></span>
                                            </a>
                                        </Link>
                                        <ul className="post__category p-0 m-0">
                                            <li className="p-0 m-0">
                                                <i className="bi bi-clock mr-2"></i>
                                                <span>
                                                    <Moment date={items.posttime} format="MMM DD, YYYY" />
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        ""
                    )}
                </div>
            </aside>}

        </>
    )
}

export default RecentBlog