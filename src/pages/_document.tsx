import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    // 쿠키에서 darkMode 값을 가져옵니다. (여기서는 예시로 "darkMode"라는 이름을 사용)
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
