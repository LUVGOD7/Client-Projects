import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Check Our Pricing</h1>
            <p className="font13">
              Our Affordable customer-centric approach ensures tailored
              solutions that streamline operations,
              <br /> reduce errors, and enhance productivity. By leveraging the
              latest technologies and industry best <br />
              practices, we empower organizations to optimize processes, drive
              efficiency, and succeed in the digital landscape.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                price=" starting  ₵200"
                title="Software Services"
                text="Awesome web design solution and alternatives to help you take your business to the internet"
                offers={[
                  { name: "Wed design", cheked: true },
                  { name: "Mobile app", cheked: true },
                  { name: "IOS app", cheked: true },
                  { name: "Android apps", cheked: true },
                  { name: "Websites", cheked: true },
                  { name: "Blogging Sites", cheked: true },
                ]}
                action={() => window.open(` https://wa.me/0244348301`)}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price="Start  ₵200"
                title="Door to Door Services"
                text="L-keyTech sales reps visit potential customers in their homes and convince them to buy products or services."
                offers={[
                  { name: "Electronic sales", cheked: true },
                  { name: "Tech installment", cheked: true },
                  { name: "Network fixes", cheked: true },
                  { name: "Computer Repairs", cheked: true },
                  { name: "Troubleshooting", cheked: true },
                ]}
                action={() => window.open(` https://wa.me/0244348301`)}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                price="Starting  ₵200"
                title="Hardwore Services"
                text="providing fundamental and essential hardware-related solutions to customers. Here are some basic IT hardware services L-ket Tech offers:"
                offers={[
                  { name: "IoT Solutions ", cheked: true },
                  { name: "Printer Repairs", cheked: true },
                  { name: "Hardware Maintenance and Support", cheked: true },
                  { name: "Hardware Upgrades", cheked: true },
                  { name: "Laptop Customization", cheked: true },
                ]}
                action={() => window.open(` https://wa.me/0244348301`)}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto;
  }
`;
