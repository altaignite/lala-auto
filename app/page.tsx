'use client'

import { useState } from 'react'
import {
  ArrowRight,
  CarFront,
  CircleHelp,
  Globe2,
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
        <img src={car[5]} alt={`${car[1]} rental car`} loading="lazy" />
      </div>
      <h3>{car[1]}</h3>
      <p className="muted"><CarFront /> {car[3]}</p>
      <p className="stats">♧  {index + 3}　▣  {index % 3 + 1}　☆ {car[4]}</p>
      <small>Start from</small>
      <div className="price">{car[2]} <em>/ day</em></div>
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
        <section id="cars" className="section"><div className="section-heading"><div><h2>Top picks vehicle this month</h2><p>Experience the epitome of amazing journey with our top picks.</p></div></div><div className="car-grid">{cars.map((car, i) => <CarCard key={car[1]} car={car} index={i} />)}</div><button className="see-more">See More</button></section>

      </div>
      <footer id="footer"><div><Logo /><p>Our mission is to equip modern explorers<br />with cutting-edge, functional, and stylish<br />bags that elevate every adventure.</p></div><div><b>About</b><a>About Us</a><a>Blog</a><a>Career</a></div><div><b>Support</b><a>Contact Us</a><a>Return</a><a>FAQ</a></div><div className="updates"><b>Get Updates</b><div><input placeholder="Enter your email" /><button>Subscribe</button></div><p className="social"><span>◎</span><X /><span>f</span><CircleHelp /><span>♪</span></p></div><small className="copyright">©2024 LALA G. All rights reserved.</small><div className="legal">Privacy Policy　 Terms of Service</div></footer>
    </main>
  )
}
