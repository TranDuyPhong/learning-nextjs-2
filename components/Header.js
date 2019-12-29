import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Menu, Container, Image } from 'semantic-ui-react';

Router.onRouteChangeStart = url => {
    NProgress.start();
}

Router.onRouteChangeComplete = url => {
    NProgress.done();
}

Router.onRouteChangeError = url => {
    NProgress.done();
}

export default () => (
    <React.Fragment>
        <Head>
            <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
        </Head>
        <Menu inverted fixed='top' size='huge'>
            <Container text>
                <Link href='/' prefetch passHref>
                    <Menu.Item as ='a' header>
                        <Image 
                            size='mini' 
                            src='/static/moltin-light-hex.svg'
                            style={{
                                marginRight: '1.5em'
                            }} />
                        NextJS Store
                    </Menu.Item>
                </Link>
                <Link href='/register' prefetch passHref>
                    <Menu.Item as ='a'>
                        Sign up
                    </Menu.Item>
                </Link>
                <Link href='/login' prefetch passHref>
                    <Menu.Item as ='a'>
                        Sign in
                    </Menu.Item>
                </Link>
                <Link href='/cart' prefetch passHref>
                    <Menu.Item position='right' as ='a' header>
                        Cart
                    </Menu.Item>
                </Link>
            </Container>
        </Menu>
    </React.Fragment>
)
