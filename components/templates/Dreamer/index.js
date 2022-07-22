import Card from "../../elements/Card";
import ImageLearning from "/public/images/learning-by-doing.png";
import ImageLive from "/public/images/live-to-code.png";
import ImageBugs from "/public/images/any-bugs.png";

export default function Dreamer() {
  return (
    <div className="dreamer container-page grid gap-y-6 lg:gap-y-16 mb-16 lg:mb-36">
      <h2 className=" font-bebasNeue font-normal text-4xl text-black tracking-wider lg:text-center">
        FRONT-END WEB DEVELOPER DREAMER
      </h2>
      <div className="row-card grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center sm:px-36 md:px-0">
        <Card
          image={ImageLive}
          title="Live to code"
          desc="Writing code has already 
become one of my passions !"
        />
        <Card
          image={ImageLearning}
          title="Learning by doing"
          desc="Doing practice is a thousand times 
better than just listening to theory"
        />
        <Card
          image={ImageBugs}
          title="Any bugs? hit it"
          desc="I'm not afraid of bugs, 
we have to get rid of them!"
        />
      </div>
    </div>
  );
}
