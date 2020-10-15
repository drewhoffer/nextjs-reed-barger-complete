import Document, { Head, Main, NextScript } from 'next/document';


export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta name="description" content="A site for my programming portfolio"/>
                    <meta charSet="utf-8"/>
                    <meta name="robots" content="noindex, nofollow"/>
                    <meta name="viewport" content="width=device-width"/>
                    <link 
                        rel="stylesheet" 
                        href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
                    />
                    <link
                        href="https://font.googleapis.com/css?family=Roboto" rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>

                <style global jsx>
                {`
                    body {
                        font-family: 'Roboto', sans-serif;
                        font-weight: 300;
                    }
                `}</style>
            </html>
        )
    }
}