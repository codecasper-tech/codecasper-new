import vid from "../assets/videos/dance.mp4";

function SmallCard() {
  return (
    <article className="no-padding round">
      <video className="responsive medium">
        <source src={vid} type="video/mp4" />
      </video>
      <div className="absolute bottom left right padding bottom-shadow bottom-round white-text">
        <nav>
          <h5>Web Development</h5>
          <div className="max"></div>
        </nav>
      </div>
    </article>
  );
}

export default SmallCard;
