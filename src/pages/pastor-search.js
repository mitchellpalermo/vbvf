import React, { useEffect } from "react";

export default function PastorSearch() {
  useEffect(() => {
    //make the sanity call for content
  });
  const [componentToShow, setComponentToShow] = useState("The Opportunity");

  function TheOpportunity() {
    <div>
      <h1>The Opportunity</h1>
      <p>
        The Verse by Verse Fellowship (VBVF), Senior Pastor position, is located
        in beautiful and historic San Antonio, Texas. The Senior Pastor leads a
        vibrant and growing congregation of approximately 300 people at our
        church, which is centrally located in San Antonio.
      </p>
      <p>
        VBVF is a church that follows Jesus through teaching the whole counsel
        of God, making disciples, and living with eyes for eternity. We believe
        that expository Bible teaching from the Word is central to changing
        hearts and lives for Christ.
      </p>
      <p>
        We aim to model Jesus; inviting one another to grow toward maturity in
        Him with an anticipation of our eternal reward. The Senior Pastor will
        join this elder-led congregation as shepherds, moving the congregation
        toward spiritual maturity and equipping them for the work of the
        ministry.
      </p>
      <p>
        The Senior Pastor will model a faithful life of service to Christ in his
        teaching, discipling and personal life.
      </p>
    </div>;
  }

  

  const currentComponent = () => {
    switch (componentToShow) {
      case 'Opportunity'
        case "About":
        return <AboutVbvf />;
      case "Believe":
        return <Believe />;
      case "Candidate":
        return <Successful Candidate />;
      case "Hiring":
        return <HiringProcess />;
      case "Apply":
        return <HowToApply />;

      default:
        return <TheOpportunity />;
    }
  };
  return (
    <div>
      <div>
        <ul>
          <li onClick={() => setComponentToShow("Opportunity")}>The Opportunity</li>
          <li onClick={() => setComponentToShow("About")}>About VBVF</li>
          <li onClick={() => setComponentToShow("Believe")}>What We Believe</li>
          <li onClick={() => setComponentToShow("Candidate")}>The Successful Candidate Will...</li>
          <li onClick={() => setComponentToShow("Hiring")}>The Hiring Process</li>
          <li onClick={() => setComponentToShow("Apply")}>How to Apply</li>
        </ul>
      </div>
      {currentComponent()}
    </div>
  );
}
