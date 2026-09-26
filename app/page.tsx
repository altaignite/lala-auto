'use client'

import { useState } from 'react'
import {
  ArrowRight,
  CarFront,
  CircleHelp,
  Globe2,
  Heart,
  Menu,
  X,
} from 'lucide-react'

const heroImage = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=90'
const cars = [
  ['Hatchback', 'Toyota Yaris', '$70', 'Automatic/Manual', '4.7', 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=900&q=85'],
  ['Minivan', 'Alphard', '$95', 'Automatic', '4.8', 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=85'],
  ['SUV', 'Lexus NX-300', '$88', 'Automatic', '4.7', 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=85'],
  ['Sedan', 'Camry', '$50', 'Automatic', '4.9', 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=85'],
  ['Minivan', 'Innova', '$85', 'Manual', '4.9', 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=85'],
  ['SUV', 'Toyota Fortuner', '$75', 'Automatic', '4.8', 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=85'],
  ['MPV', 'Innova Zenix', '$60', 'Automatic/Manual', '4.8', 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=85'],
  ['SUV', 'Terios', '$70', 'Automatic/Manual', '4.6', 'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=900&q=85'],
]

function Logo() {
  return <div className="logo"><span className="logo-mark">✣</span><span>LALA G</span></div>
}

function CarCard({ car, index }: { car: string[]; index: number }) {
  return (
    <article className="car-card">
      <div className="car-image">
        <span className="tag">{car[0]}</span>
        <button className="favorite" aria-label={`Save ${car[1]}`}><Heart /></button>
        <img src={car[5]} alt={`${car[1]} rental car`} loading="lazy" />
      </div>
      <div className="car-card-body">
        <div className="car-name-row"><h3>{car[1]}</h3><span className="availability">Available now</span></div>
        <div className="car-details"><span><CarFront /> {car[3]}</span><span>● {index + 3} seats</span><span>▣ {index % 3 + 1} bags</span></div>
        <div className="car-footer"><div><small>Starting from</small><div className="price">{car[2]} <em>/ day</em></div></div><button className="view-car">View car <ArrowRight /></button></div>
      </div>
    </article>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <main>
      <section className="hero-wrap">
        <div className="hero" style={{ backgroundImage: `linear-gradient(180deg, rgba(11,24,31,.34), rgba(10,12,14,.72)), url(${heroImage})` }}>
          <header className="nav">
            <Logo />
            <nav className={menuOpen ? 'open' : ''}><a href="#cars">Our Fleet</a><a href="#cars">Locations</a><a href="#cars">How It Works</a><a href="#footer">Support</a></nav>
            <div className="nav-right"><a className="nav-help" href="#footer"><CircleHelp /> Need help?</a><span><Globe2 /> EN</span><a href="#footer">Log In</a><button className="reserve-btn">Reserve a car <ArrowRight /></button></div>
            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
          </header>
          <div className="hero-copy"><span className="eyebrow">LALA G AUTO RENTALS</span><div className="hero-title">Your journey starts with the right car.</div><p>Reliable vehicles, flexible rentals, and a smoother way to get where you&apos;re going.</p><a className="hero-cta" href="#cars">Explore our fleet <ArrowRight /></a></div>
        </div>
      </section>

      <div className="content">
        <section id="cars" className="section"><div className="section-heading"><div><span className="section-kicker">OUR FLEET</span><h2>Choose your perfect ride</h2><p>Well-maintained vehicles for city days, weekend escapes, and everything between.</p></div><a className="fleet-link" href="#footer">View all cars <ArrowRight /></a></div><div className="car-grid">{cars.map((car, i) => <CarCard key={car[1]} car={car} index={i} />)}</div><button className="see-more">See More</button></section>
              </div>
      <footer id="footer"><div className="footer-brand"><Logo /><span className="footer-kicker">DRIVE WELL. GO FURTHER.</span><p>Premium vehicles for modern explorers,<br />with simple booking and dependable service<br />for every kind of journey.</p><div className="footer-stat"><strong>4.9/5</strong><span>from 4,000+ happy renters</span></div></div><div><b>Explore</b><a href="#cars">Our fleet</a><a href="#cars">Locations</a><a href="#cars">How it works</a></div><div><b>Company</b><a href="#footer">About LALA G</a><a href="#footer">Careers</a><a href="#footer">Contact</a></div><div className="updates"><b>Stay in the know</b><p>Get offers, new cars, and travel inspiration in your inbox.</p><div><input placeholder="Your email address" /><button>Join</button></div><p className="social"><span>◎</span><span>in</span><span>f</span><X /></p></div><small className="copyright">©2024 LALA G Auto Rentals. All rights reserved.</small><div className="legal">Privacy Policy　 Terms of Service</div></footer>
    </main>
  )
}
