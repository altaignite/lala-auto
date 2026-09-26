'use client'

import { useState } from 'react'
import {
  ArrowRight,
  CalendarDays,
  CarFront,
  CircleHelp,
  Globe2,
  MapPin,
  Menu,
  Search,
  X,
} from 'lucide-react'

const heroImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Car%20Rental%203-fhOEWv8kxugPianx8liqo6a2DMSXaO.webp'
const secondImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Car%20Rental%202-pIURTJrTO0pQN2yNw3aT47dHvNtCKz.webp'

const cars = [
  ['Hatchback', 'Toyota Yaris', '$70', 'Automatic/Manual', '4.7', 'white'],
  ['Minivan', 'Alphard', '$95', 'Automatic', '4.8', 'black'],
  ['SUV', 'Lexus NX-300', '$88', 'Automatic', '4.7', 'white'],
  ['Sedan', 'Camry', '$50', 'Automatic', '4.9', 'silver'],
  ['Minivan', 'Innova', '$85', 'Manual', '4.9', 'dark'],
  ['SUV', 'Toyota Fortuner', '$75', 'Automatic', '4.8', 'white'],
  ['MPV', 'Innova Zenix', '$60', 'Automatic/Manual', '4.8', 'silver'],
  ['SUV', 'Terios', '$70', 'Automatic/Manual', '4.6', 'white'],
]

function Logo() {
  return <div className="logo"><span className="logo-mark">✣</span><span>LALA G</span></div>
}

function SearchPanel() {
  return (
    <div className="search-panel">
      <div className="field"><small>Departure</small><span><MapPin /> City, airport or station</span></div>
      <div className="round-trip"><small>Round-trip?</small><span className="switch"><i /></span></div>
      <div className="field"><small>Return Location</small><span><MapPin /> City, airport or station</span></div>
      <div className="field"><small>Pick Up Date &amp; Time</small><span><CalendarDays /> 14 Jan 2024　 10:30 AM</span></div>
      <div className="field"><small>Return Date &amp; Time</small><span><CalendarDays /> 19 Jan 2024　 04:30 PM</span></div>
      <div className="filter"><small>Filter:</small><b>Without Driver</b><span>With Driver</span></div>
      <button className="search-btn">Search <ArrowRight /></button>
    </div>
  )
}

function CarCard({ car, index }: { car: string[]; index: number }) {
  return (
    <article className="car-card">
      <div className="car-image">
        <span className="tag">{car[0]}</span>
        <div className={`car-shape car-${index % 4} ${car[5]}`}><CarFront /></div>
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
            <nav className={menuOpen ? 'open' : ''}><a href="#cars">Hotel</a><a href="#cars">Flight</a><a href="#cars">Train</a><a href="#discover">Travel</a><a href="#cars">Car Rental</a></nav>
            <div className="nav-right"><div className="nav-search"><input placeholder="Search destination..." aria-label="Search destination" /><Search /></div><span><Globe2 /> EN</span><a href="#footer">Log In</a><button>Sign Up</button></div>
            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
          </header>
          <div className="hero-title">Rent a Car for Every Journey</div>
          <SearchPanel />
        </div>
      </section>

      <div className="content">
        <section id="cars" className="section"><div className="section-heading"><div><h2>Top picks vehicle this month</h2><p>Experience the epitome of amazing journey with our top picks.</p></div></div><div className="car-grid">{cars.map((car, i) => <CarCard key={car[1]} car={car} index={i} />)}</div><button className="see-more">See More</button></section>
        <section id="discover" className="section discover"><h2>Discover popular car rental in worldwide</h2><p>Explore a diverse and extensive range of rental cars.</p><div className="chips">{['Car Rental in Bandung','Car Rental in Jakarta','Car Rental in Bali','Car Rental in Sydney','Car Rental in New York','Car Rental in Seoul','Car Rental in Tokyo','Car Rental in Paris','Car Rental in Jeju Island','Car Rental in Los Angeles','Car Rental in Berlin','Car Rental in Munich','Car Rental in Yogyakarta','Car Rental in Liverpool','Car Rental in Glasgow','Car Rental in Birmingham'].map(x => <span key={x}>{x}</span>)}</div></section>
        <section className="section deals"><div className="deal-heading"><h2>Enjoy extra miles with our best deal</h2><button>See All <ArrowRight /></button></div><div className="deal-grid"><div className="deal" style={{ backgroundImage: `linear-gradient(90deg, rgba(4,12,12,.7), rgba(4,12,12,.1)), url(${secondImage})` }}><strong>40%</strong><p>Experience the Holidays with<br />Our Festive Promotions</p></div><div className="deal alt" style={{ backgroundImage: `linear-gradient(90deg, rgba(4,12,12,.7), rgba(4,12,12,.1)), url(${heroImage})` }}><strong>65%</strong><p>Unlock Online-Only Discounts for a<br />Seamless Booking Experience</p></div></div></section>
        <div className="brands"><span>▽ HELLOSIGN</span><span>◒ DOORDASH</span><span>coinbase</span><span>◈ Airtable</span><span>◢ pendo</span><span>◈ treehouse</span></div>
        <section className="feature-grid"><div className="feature small" style={{backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.75), rgba(0,0,0,.05)), url(${secondImage})`}}><h2>Explore more to get your<br />comfort zone</h2><p>Book your perfect stay with us.</p><button>Booking Now <ArrowRight /></button></div><div className="feature wide" style={{backgroundImage: `linear-gradient(rgba(0,0,0,.25), rgba(0,0,0,.4)), url(${heroImage})`}}><h2>Beyond accomodation, creating<br />memories of a lifetime</h2></div><div className="feature small gauge"><h2>Vehicle Available</h2><strong>3,490</strong></div></section>
      </div>
      <footer id="footer"><div><Logo /><p>Our mission is to equip modern explorers<br />with cutting-edge, functional, and stylish<br />bags that elevate every adventure.</p></div><div><b>About</b><a>About Us</a><a>Blog</a><a>Career</a></div><div><b>Support</b><a>Contact Us</a><a>Return</a><a>FAQ</a></div><div className="updates"><b>Get Updates</b><div><input placeholder="Enter your email" /><button>Subscribe</button></div><p className="social"><span>◎</span><X /><span>f</span><CircleHelp /><span>♪</span></p></div><small className="copyright">©2024 LALA G. All rights reserved.</small><div className="legal">Privacy Policy　 Terms of Service</div></footer>
    </main>
  )
}
