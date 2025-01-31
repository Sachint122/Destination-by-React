import React from 'react'
// import FCard from './FCard'
import card1 from '../images/dCard/Coding 5.png'
import card2 from '../images/dCard/Search Engine.png'
import card3 from '../images/dCard/Google Ad.png'
import card4 from '../images/dCard/Social Media Carousel.png'
import card5 from '../images/dCard/Email Campaign.png'
import card6 from '../images/dCard/Content Creation.png'
import card7 from '../images/dCard/Advertising 3.png'
import card8 from '../images/dCard/Artificial Intelligence 3.png'
import DCard from './DCard'
function Digital_Card() {

  const cards1 = [
    {
      image:
        card1,
      title: "Website Designing",
      description:
        "Learn the fundamentals of website design using WordPress, one of the most popular content management systems.",
    },
    {
      image:
        card2,
      title: "Search Engine Optimization",
      description:
        "Enhance website visibility and drive organic traffic by mastering SEO techniques, keyword research, on-page and off-page optimization.",
    },
    {
      image:
        card3,
      title: "Pay-Per-Click Ads (PPC)",
      description:
        "Create and manage targeted PPC campaigns on platforms like Google Ads and Facebook Ads to drive traffic and conversions.",
    },
    {
      image:
        card4,
      title: "Social Media Marketing",
      description:"Harness the power of social media platforms to build brand presence, engage with audiences, and create effective social media strategies.",
    },
    {
      image:
        card5,
      title: "Email Marketing",
      description:"Utilize email campaigns to nurture leads, build customer relationships, and drive conversions through effective email marketing strategies.",
    },
    {
      image:
        card6,
      title: "Content Marketing",
      description:"Create valuable and engaging content that resonates with your target audience, leveraging storytelling, distribution strategies, and content promotion.",
    },
    {
      image:
        card7,
      title: "Mobile Marketing",
      description:"Discover the opportunities and challenges of mobile marketing, including mobile app marketing, mobile advertising, and responsive design.",
    },
    {
      image:
        card8,
      title: "Marketing Automation",
      description:"Automate marketing processes and workflows using tools like CRM, email marketing automation, and customer segmentation.",
    },
  ];
  return (
    <div className="custom-container">
      <div className="Digital-custom-grid">
        {cards1.slice(0, 8).map((card, index) => (
          <DCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            list={card.list}
          />
        ))}
      </div>
    </div>
  )
}

export default Digital_Card