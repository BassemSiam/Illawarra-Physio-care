import Header from "./Header";
import VideoBackground from "./VideoBackground";

function HeroSection({ src, headerText, text, buttonDisplay , textOne }) {
  return (
   <section className="relative h-screen w-full">
      <Header buttonDisplay={buttonDisplay}/>
      <VideoBackground
        src={src}
        textOne={textOne}
        headerText={headerText}
        text={text}
        buttonDisplay={buttonDisplay}
      />
    </section>
  );
}

export default HeroSection;
