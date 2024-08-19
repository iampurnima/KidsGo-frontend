import React from "react";
import './css/About.css';

function About() {
  return (
    <div className="aboutContainer">
      <section className="heroAboutSection">
        <h1>About Us</h1>
        <h2>Welcome to KidsZone's Second-Hand Marketplace!</h2>
      </section>
      <section className="missionSection">
        <p>At KidsZone, our mission is to provide a trusted platform where parents and caregivers can buy and sell gently used children's items, from doll carts to clothes and books. We understand that raising kids comes with its own set of challenges, and we're here to make it a little easier by offering a convenient, eco-friendly, and cost-effective solution.</p>
      </section>
      <section className="storySection">
        <h2>Our Story</h2>
        <p>Founded with a passion for helping families find high-quality, affordable items for their little ones, KidsZone started as a vision to create a community where second-hand goods are celebrated for their value and sustainability. Our platform was designed with you in mind—whether you're looking to declutter your home or find a great deal on children's essentials, we aim to make the process simple and enjoyable.</p>
      </section>
      <section className="offerSection">
        <h3>What We Offer</h3>
        <ul>
          <li>High-quality, gently used children's items</li>
          <li>Eco-friendly and cost-effective shopping</li>
          <li>A community-driven platform</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
