import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import searchStyles from './styles/search.module.scss';

const Search = props => {
    return (
        <main>
            <Layout>
                <div className={searchStyles.container}>
                    <div className={searchStyles.searchBar}>
                        <section>
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder="Search..."/>
                        </section>
                        <Link to="/"><i className={`fas fa-times ${searchStyles.closeIcon}`}></i></Link>
                    </div>
                    <div className={searchStyles.itemList}></div>
                    <div className={searchStyles.itemList}></div>
                    <div className={searchStyles.itemList}></div>
                </div>
            </Layout>
        </main>
    )
};

export default Search;
