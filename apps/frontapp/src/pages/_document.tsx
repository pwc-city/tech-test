import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(
    context: DocumentContext
  ): Promise<DocumentInitialProps> {
    const originalRenderPage = context.renderPage;
    // Run the React rendering logic synchronously
    context.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(context);

    return initialProps;
  }

  render() {
    return (
      <Html
        dir={this.props.locale === 'ar-ae' ? 'rtl' : 'ltr'}
        lang={this.props.locale || 'en-GB'}
      >
        <Head></Head>

        <body data-theme="light">
          <header>Header</header>
          <Main />
          <NextScript />
          <footer>Footer</footer>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
