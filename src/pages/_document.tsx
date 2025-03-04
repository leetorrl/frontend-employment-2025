import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    const darkMode = ctx.req.cookies?.darkMode === 'true' ? 'dark' : '';

    return {
      ...initialProps,
      darkMode,
    };
  }

  render() {
    const { darkMode } = this.props;

    return (
      <Html className={darkMode}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
