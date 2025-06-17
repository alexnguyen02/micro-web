import "./ProblemSection.css";

const ProblemSection = () => {
  return (
    <div className="prob-sect">
      <div className="main-content">
        <h2>Let's be honest...</h2>
        <p className="first-line">
          <strong>
            Most of us don't wear 70%-80% of our clothes - yet we keep buying more.
          </strong>
        </p>
        <p>
          With households spending around $300 monthly on clothing (Statistics
          Canada), our closets have become expensive graveyards of barely-worn
          pieces. Then, when our closets overflow, we simply throw clothes away.
          On average, a Canadian throws away 81 pounds of textiles every year –
          that's equivalent to 27 t-shirts, 16 jeans, 18 jackets, 18 dresses and
          18 sweaters heading straight to landfills.
        </p>
        <p>
          Those unworn clothes are a waste of money. But it does not have to be that way. Dressing well can be fun, creative and financially friendly. 
        </p>
      </div>
      <div className="citation">
        <p>Sources: CityNews Toronto & waste solutions</p>
        <p>Photo by Ron Lach</p>
      </div>
    </div>
  );
};

export default ProblemSection;
