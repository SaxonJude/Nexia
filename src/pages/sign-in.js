import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import signUp from './styles/sign-up.module.scss';

const SignIn = () => {
    return (
        <main>
            <Layout>
                <div className={signUp.signUpContainer}>
                    <div className={signUp.signUpBox}>
                            <i class="fas fa-sign-in-alt"></i>
                            <h3>Sign In</h3>
                            <section>
                            </section>
                            <input type="email" placeholder="Email *"/>
                            <input type="password" placeholder="Password *"/>
                            <button className={signUp.login}>Login</button>
                            <Link to="/sign-up">Don’t have an account? Register now  <i class="fas fa-long-arrow-alt-right"></i></Link>
                    </div>
                </div>
            </Layout>
        </main>
    )
};

export default SignIn;
