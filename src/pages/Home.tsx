import Countdown from '../components/Countdown';
import { Link } from 'react-router-dom';
import bannerImg from '../assets/banner/banner.jpg'; 

export default function Home() {
  const target = new Date('2025-10-09T00:00:00+07:00').getTime();

  return (
    <section className="container narrow center" style={{ paddingBottom: 96 }}>
      <h1 className="title" style={{ marginTop: 8 }}>Ame Birthday 2025</h1>

      <Countdown target={target} />

      <div className="big-pill" aria-label="Big date">09 / 10</div>

      <div className="banner-home">
        <img src={bannerImg} alt="Birthday banner" className="banner-img" loading="lazy" />
      </div>

      <div className="sticky-cta">
        <Link to="/create" className="btn focus-ring w-full">เขียนคำอวยพร</Link>
      </div>
    </section>
  );
}
