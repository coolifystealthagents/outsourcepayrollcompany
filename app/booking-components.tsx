'use client';
import { stealthAgentsReviews } from './reviews';

export function TestimonialsRail({ contact = false }: { contact?: boolean }) {
  return <section className={`sa-testimonials${contact ? ' sa-testimonials-contact' : ''}`} aria-labelledby={contact ? 'contact-client-reviews' : 'booking-client-reviews'}>
    <div className="sa-testimonial-heading"><span aria-hidden="true">★★★★★</span><h2 id={contact ? 'contact-client-reviews' : 'booking-client-reviews'}>StealthAgents reviews</h2></div>
    <p className="sa-testimonial-intro">Verified client feedback published by Stealth Agents.</p>
    <div className="sa-testimonial-viewport" tabIndex={0} aria-label="StealthAgents client reviews. Scroll horizontally to read more.">
      <div className="sa-testimonial-track">
        {stealthAgentsReviews.map((review) => <article className="sa-testimonial-card" key={review.name}>
          <div className="sa-testimonial-stars"><span aria-hidden="true">★★★★★</span><span className="sa-sr-only">5 out of 5 stars</span></div>
          <blockquote>“{review.quote}”</blockquote><p> -  {review.name}</p>
        </article>)}
      </div>
    </div>
    <p className="sa-testimonial-source">Source: <a href="https://stealthagents.com/our-clients" target="_blank" rel="noopener noreferrer">Stealth Agents client reviews</a>.</p>
  </section>;
}
