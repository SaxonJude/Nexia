import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import lookBookStyles from './styles/lookbook.module.scss';

const Women = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulWomen {
                edges {
                    node {
                        title
                      price1
                      slug
                      description
                      id
                      image {
                        title
                        resize(width:490, height:735) {
                          src
                        }
                      }
                    }
                }
            }
        }
    `)

    return (
        <main>
            <Layout>
            <Head title="Women"/>
                <div className={lookBookStyles.containerMenWomen}>
                    <div className={lookBookStyles.lookbookTitle}>
                        <div>
                            <section></section>
                            <h3>Shop Women</h3>
                        </div>
                    </div>
                    <div className={lookBookStyles.lookbookMenWomen}>
                        <ol className={lookBookStyles.posts}>
                        <li className={lookBookStyles.post}>
                                <Link to={`/women/${data.allContentfulWomen.edges[1].node.slug}`}>
                                    <img src={data.allContentfulWomen.edges[1].node.image[0].resize.src} alt="Clothing Item"/>
                                </Link>
                                    <i className={`far fa-heart ${lookBookStyles.heart}`}></i>
                                    <h3>{data.allContentfulWomen.edges[1].node.title}</h3>
                                    <p>{data.allContentfulWomen.edges[1].node.price1}</p>
                            </li>
                            <li className={lookBookStyles.post}>
                                <Link to={`/women/${data.allContentfulWomen.edges[2].node.slug}`}>
                                    <img src={data.allContentfulWomen.edges[2].node.image[0].resize.src} alt="Clothing Item"/>
                                </Link>
                                    <i className={`far fa-heart ${lookBookStyles.heart}`}></i>
                                    <h3>{data.allContentfulWomen.edges[2].node.title}</h3>
                                    <p>{data.allContentfulWomen.edges[2].node.price1}</p>
                            </li>
                            <li className={lookBookStyles.post}>
                                <Link to={`/women/${data.allContentfulWomen.edges[3].node.slug}`}>
                                    <img src={data.allContentfulWomen.edges[3].node.image[0].resize.src} alt="Clothing Item"/>
                                </Link>
                                    <i className={`far fa-heart ${lookBookStyles.heart}`}></i>
                                    <h3>{data.allContentfulWomen.edges[3].node.title}</h3>
                                    <p>{data.allContentfulWomen.edges[3].node.price1}</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </Layout>
        </main>
    )
};

export default Women;
