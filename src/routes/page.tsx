import { Helmet } from '@modern-js/runtime/head';
import './index.css';
import { blogPosts } from '@/lib/blog/config';
import { Link } from '@modern-js/runtime/router';
const Index = () => (
  <div className="container-box">
    <Helmet>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
      />
    </Helmet>
    <main>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Hello World</h1>
      </div>
      <Link to="/blog" className="text-6xl font-extrabold">
        Blog
      </Link>
    </main>
  </div>
);

export default Index;
