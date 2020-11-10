import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import signUp from './styles/sign-up.module.scss';

const SignUp = () => {
    return (
        <main>
            <Layout>
                <div className={signUp.signUpContainer}>
                    <div className={signUp.signUpBox}>
                            <i class="far fa-user"></i>
                            <h3>Sign Up</h3>
                            <section>
                            <p>Create an account to expedite future checkouts, tack order 
history & receive emails, discounts & special offers</p>
                            </section>
                            <input type="email" placeholder="Email *"/>
                            <input type="password" placeholder="Password *"/>
                            <input type="password" placeholder="Confirm Password *"/>
                            <button className={signUp.login}>Login</button>
                            <Link to="/sign-in"><i class="fas fa-long-arrow-alt-left"></i> Back to login</Link>
                    </div>
                </div>
            </Layout>
        </main>
    )
};

export default SignUp;
