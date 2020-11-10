import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import lookBookStyles from './styles/lookbook.module.scss';
import Head from '../components/head';

const Ss = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost ( sort: { fields: title, order: DESC } ) {
            edges {
                node {
                    title
                    slug
                    description
                    image {
                        title
                        resize(width:490, height:735) {
                            src
                        }
                    }
                    price1
                }
            }
        }
    }
`)

return (
    <main>
        <Layout>
        <Head title="Ss"/>
            <div className={lookBookStyles.containerSsFw}>
                <div className={lookBookStyles.lookbookTitle}>
                    <div>
                        <section></section>
                        <h3>SPRING / SUMMER - SS-22</h3>
                    </div>
                </div>
                <div className={lookBookStyles.lookbook}>
                    <ol className={lookBookStyles.posts}>
                        {data.allContentfulBlogPost.edges.map((edge) => {
                            return (
                                <li className={lookBookStyles.post}>
                                    <Link to={`/ss/${edge.node.slug}`}>
                                        <img src={edge.node.image[0].resize.src} alt="Clothing Item"/>
                                        </Link>
                                        <i className={`far fa-heart ${lookBookStyles.heart}`}></i>
                                        <h3>{edge.node.title}</h3>
                                        <p>{edge.node.price1}</p>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        </Layout>
    </main>
)
};

export default Ss;
