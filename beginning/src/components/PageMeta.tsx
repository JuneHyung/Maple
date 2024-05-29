import { Helmet } from "react-helmet-async";
interface PageMetaProps {
  siteName?: string;
  title: string;
  desc: string;
}
const PageMeta = ({siteName='완전 메짱이셔', title, desc}: PageMetaProps) => {
  return (
    <Helmet>
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content="/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <title>{title}</title>
    </Helmet>
  );
};

export default PageMeta;
