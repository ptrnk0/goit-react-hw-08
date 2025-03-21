import { Link } from "react-router";

const Home = () => {
  return (
    <div
      className="hero h-full rounded-xl overflow-hidden"
      style={{
        backgroundImage: 'url("/6227297.webp")',
      }}
    >
      <div className="hero-overlay "></div>
      <div className="hero-content text-neutral-content text-center  backdrop-blur-xs rounded-xl p-10">
        <div className="max-w-lg ">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Easily create, organize, and store important contacts in a secure
            space. Forget the mess in notebooks - manage your contacts quickly
            and effortlessly!
          </p>
          <Link to="/contacts" className="btn btn-neutral">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
