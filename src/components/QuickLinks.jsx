import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/QuickLinks.scss';
import Form from './Form';

const QuickLinks = () => {
  return (
    <>
    <div className='container quickLinkSection p-4'>
        <h1 className='mb-3'>Quick Links</h1>
        <section><h5>Serving in</h5><p>Ludhiana • Kochi • Kanpur • Agra • Bhopal • Guwahati • Vijayawada • Varanasi • Coimbatore • Thiruvananthapuram • Patna • Raipur • Nashik • Jabalpur • Jamshedpur • Dehradun • Meerut • Ranchi • Prayagraj • Amritsar • Gwalior • Kota • Aurangabad • Mysore • Guntur • Cuttack • Udaipur • Ahmedabad • Bangalore • Chennai • Delhi NCR • Chandigarh Tricity • Jaipur • Hyderabad • Kolkata • Mumbai • Pune • Nagpur • Visakhapatnam • Vadodara • Lucknow • Bhubaneswar • Surat • Indore • Rajahmundry • Madurai • Jodhpur • Kakinada • Warangal • Sonipat • Panipat • Karnal • Rohtak • Alwar </p></section>
        <section><h5>Also available in</h5><p>Electricians in Delhi NCR, India • Electricians in Kharkhari Jatmal, South Delhi, Delhi NCR, India • Electricians in Raja Garden, West Delhi, Delhi NCR, India • Electricians in Badusarai, South Delhi, Delhi NCR, India • Electricians in Nizamuddin West, South Delhi, Delhi NCR, India • Electricians in Kapashera, South Delhi, Delhi NCR, India • Electricians in Budh Vihar, North Delhi, Delhi NCR, India • Electricians in Karam Pura, West Delhi, Delhi NCR, India • Electricians in Yusuf Sarai, South Delhi, Delhi NCR, India • Electricians in Mandawali, East Delhi, Delhi NCR, India • <Link to ="/">See more</Link> </p></section>
        <section><h5>Services Offered</h5><p>Carpenters in Delhi NCR, India • Air Conditioner in Delhi NCR, India • Salon Prime in Delhi NCR, India • Plumbers in Delhi NCR, India • Electricians in Delhi NCR, India • Massage For Men in Delhi NCR, India • Washing Machine in Delhi NCR, India • Spa For Women in Delhi NCR, India • Television in Delhi NCR, India • Full Home Cleaning in Delhi NCR, India • <Link to ="/">See more</Link></p></section>

       
          
       
    </div>
  <Form />   
    </>
  )
}

export default QuickLinks