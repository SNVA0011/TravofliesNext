import React from 'react'; 
import BlogTile from './BlogCard/BlogTile';
import PageHeading from './HeadingStyle/PageHeading';
import LinkButtonSite from './ButtonSite/LinkButtonSite'; 


const RecentBlog = ({ recentitem, path, title, viewcontent, readmore, noitem, admintext ,showitem, Thumbnail, RecentBlog}) => {

    return (
        <>
            <aside className="recent-blogsalide position-relative bx-2">
                <div className="text-center">
                    <PageHeading title={title} />

                    <div className={`${RecentBlog ? '': 'mt-58'} text-left`}> 
                        <BlogTile
                            allbloglist={recentitem}
                            path={path}
                            readmore={readmore}
                            noitem={noitem}
                            admintext={admintext}
                            showitem={showitem}
                            Thumbnail={Thumbnail}
                            RecentBlog={RecentBlog} />
                    </div>
                                        
                    <div className={`mt-35 clearfix`}>
                        <LinkButtonSite path={`/${path}`}>
                            {viewcontent}
                        </LinkButtonSite>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default RecentBlog