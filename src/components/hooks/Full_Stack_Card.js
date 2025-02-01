import React from 'react'
import FCard from './FCard'
import card1 from './images/card/Java-Full-stack-–-1.png'
import card2 from './images/card/Python-Full-Stack-–-1.png'
import card3 from './images/card/Python-Java-–-1.png'
import card4 from './images/card/Unified-1.png'
import card5 from './images/card/Unified-2.png'
import card6 from './images/card/Unified-3.png'
function Full_Stack_Card() {

  const cards1 = [
    {
      image:
        card1,
      title: "Java Full-Stack",
      description:
        "Master the art of Full Stack Web Development using Java. Gain proficiency in Java programming, front-end technologies, back-end frameworks, and database integration. Build dynamic and robust web applications with the power of Java.",
    },
    {
      image:
        card2,
      title: "Python Full-Stack",
      description:
        "Dive into Full Stack Web Development using Python. Learn Python programming, front-end frameworks, back-end development, and database management. Harness the versatility of Python to create scalable and efficient web applications.",
    },
    {
      image:
        card3,
      title: "Java + Python Full Stack",
      description:
        "Experience the best of both worlds with our Java + Python Full Stack course. Acquire skills in Java and Python programming, along with comprehensive knowledge of front-end and back-end technologies. Develop the ability to work across multiple programming languages and enhance your career prospects.",
    },
    {
      image:
        card4,
      title: "Unified Course 1",
      list: ["Core Java", "Advanced Java", "J2EE", "Projects"],
    },
    {
      image:
        card5,
      title: "Unified Course 2",
      list: ["Java","HTML","CSS","Javascript","Boostrap","Manual Testing","SQL"],
    },
    {
      image:
        card6,
      title: "Integrated Course",
      list: ["Java","HTML","CSS","Javascript","Boostrap","Manual Testing","SQL Automation Testing (Selenium)"],
    },
  ];
  return (
    <div className="custom-container">
      <div className="custom-grid">
        {cards1.slice(0, 6).map((card, index) => (
          <FCard
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

export default Full_Stack_Card