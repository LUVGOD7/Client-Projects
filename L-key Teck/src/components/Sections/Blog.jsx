import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Sub Companies we own</h1>
            <p className="font13">
              By leveraging the latest technologies and industry best practices,
              we empower organizations to optimize processes, drive efficiency,
              and succeed in the digital landscape.
              <br />
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="L-Key Tech E-commerce"
                text="With L-key Tech E-commerce you can view a wide range of product catalog. You can buy, "
                tag="company"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="E-pharmacy"
                text="E-pharmacy software is a digital solution designed specifically for online pharmacies to streamline their operations and enhance customer experience. "
                tag="company"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="E-Hospital"
                text="E-hospital consultation software is a digital platform that facilitates remote medical consultations between healthcare providers and patients. "
                tag="company"
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Church Blog"
                text="A church blog website serves as a digital platform for the church community to connect, engage, and share valuable information. "
                tag="company"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Social Initiative"
                text="L-Key Tech has launched a social initiative to equip society with IT skills. They offer digital skills training programs, engage with communities through workshops and partnerships"
                tag="School"
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "fit-content" }}>
              <FullButton
                title="Get to our Sub services"
                action={() => window.open(` https://wa.me/0244348301`)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font13">
              Since our inception, L-Key Tech has had the privilege of working
              with a diverse range of clients, <br />
              including small startups, medium-sized enterprises, and large
              corporations. Our client base spans across
              <br /> industries such as healthcare, finance, e-commerce,
              education, and more. We are committed to forging strong,
              <br />
              long-lasting partnerships with our clients and helping them
              achieve their business objectives through our technology
              solutions.
            </p>
          </HeaderInfo>
          {/* <TestimonialSlider /> */}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
