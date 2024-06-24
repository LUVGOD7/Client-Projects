import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Services</h1>
            <p className="font13">
              Our mission at L-Key Tech is to provide top-notch technology
              solutions and services that empower organizations <br /> to
              achieve their goals, streamline their operations, and stay ahead
              in a rapidly evolving digital landscape. <br />
              We are committed to delivering innovative, reliable, and
              cost-effective solutions while maintaining a strong focus on
              customer satisfaction.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                title="Software development"
                text=" L-Key Tech specializes in building custom software solutions tailored to the specific requirements of its clients."
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                title="Cyber Security"
                text="L-key Tech focuses on protecting systems, networks, and programs from digital attacks"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600"
                title="Data analytics"
                text=" L-Key Tech leverages advanced techniques and tools to extract valuable insights and patterns from large sets of data."
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img="https://images.pexels.com/photos/8761047/pexels-photo-8761047.jpeg?auto=compress&cs=tinysrgb&w=600"
                title="Graphic Design"
                text="With L-key Tech Graphic design is a craft where professionals create visual content to communicate messages"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img="https://images.pexels.com/photos/3183170/pexels-photo-3183170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                title="Digital marketing"
                text="L-key Tech uses the Internet and online-based digital technologies such as desktop computers, mobile phones and other digital media and platforms to promote products and"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img="https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                title="Mobile and Remote Networking"
                text="L-key Tech deals with interconnected computing devices that can exchange data and share resources with each other"
              />
            </div>
          </div>
          {/* <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton
                title="Custom Services"
                onClick={() => {
                  window.open("https://google.com");
                }}
              />
            </div>
          </div> */}
        </div>
      </div>
      <div className="lightBg pt-5 mt-5">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img
                    className="radius8"
                    src="https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="add"
                    height="607px"
                    width="427px"
                  />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">A few words about our company</h4>
              <h2 className="font40 extraBold">L-key Tech Says!</h2>
              <p className="font12">
                we have assembled a highly skilled and experienced team of
                technology professionals who are dedicated to delivering
                exceptional results. Our team consists of software engineers,
                designers, data scientists, project managers, and consultants
                who possess deep expertise in their respective fields. We foster
                a culture of continuous learning and innovation to ensure that
                our team stays up-to-date with the latest industry trends and
                technologies.
              </p>
              <ButtonsRow
                className="flexNullCenter"
                style={{ margin: "30px 0" }}
              >
                <div style={{ width: "190px" }}>
                  <FullButton
                    title="Get Started"
                    action={() =>
                      window.open(
                        ` https://wa.me/233244348301?text=Hello%20Mr%20Victor%20I'm%20interested%20in%20your%20services%20`
                      )
                    }
                  />
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton
                    title="Contact Us"
                    border
                    action={() =>
                      window.open(
                        ` https://wa.me/233244348301?text=Hello%20Mr%20Victor%20I'm%20interested%20in%20your%20services%20`
                      )
                    }
                  />
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
