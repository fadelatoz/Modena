import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fullscreen video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
        src="https://media.web.modena.com/seamless/seamless/section/0a2f3020357f73714aa055b6627a28e215edfb78dbe17eb10c2ede6c7b400485.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />

      <Container
        maxWidth="xl"
        className="relative z-10 text-center text-white pt-32 md:pt-48"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
