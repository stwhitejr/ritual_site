import React, {useEffect, useState} from 'react';
import cx from 'classnames';
import Owner from '@root/media/images/owner.jpg';
import Hero from '@root/app/components/hero';
import '@root/app/pages/about.scss';

const testimonials = [
  {
    copy: `I’ve practiced yoga on and off since I was a teen, and I've never had a teacher who is able to balance giving clear instruction and meditative guidance as well as Sara. I felt like Goldilocks when I found her practice — not too hippy crunchy, not too 'no pain no gain' — just right. She delivers the whole body experience yoga is meant to be in the best way. And her playlists are bomb.`,
    author: 'Melissa C',
  },
  {
    copy: `Sara brings good vibes and intentions as she builds upon an unsuspectingly challenging and dynamic flow. Her class sneaks up on you when you least it expect it! If you don't want the challenge, Sara offers modifications that make it effortless to stay in the same flow but in a more gentle way. Heck sometimes I just lay on my mat and breathe! That's the beauty of Ritual Yoga, high or low there is always something for everyone to get what they came for.`,
    author: 'Theresia C',
  },
  {
    copy: `Sara is the reason I practice yoga and is the reason I continue to practice yoga. Whether for the beginner or experienced, casual or dedicated, she is an exceptional teacher and you should join and support her!`,
    author: 'John F',
  },
  {
    copy: `Sara is a strong lady, inside and out! When I saw her Ritual Yoga web site, I was literally excited. I feel that I can continue to connect to the incredible yoga community that Sara embodies! Thank you Sara!`,
    author: 'Rachel N',
  },
];

const Testimonials = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isTransitioning, setTransition] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTransition(true);
    }, 9000);
    setTimeout(() => {
      setTransition(false);
      if (testimonialIndex === testimonials.length - 1) {
        setTestimonialIndex(0);
      } else {
        setTestimonialIndex(testimonialIndex + 1);
      }
    }, 10000);
  }, [testimonialIndex]);

  return (
    <div className="Testimonials">
      <div className="Testimonials-inner">
        <p
          className={cx('Testimonials-copy', {
            'is-transitioning': isTransitioning,
          })}
        >
          “{testimonials[testimonialIndex].copy}”
        </p>
        <p
          className={cx('Testimonials-author', {
            'is-transitioning': isTransitioning,
          })}
        >
          - {testimonials[testimonialIndex].author}
        </p>
      </div>
    </div>
  );
};

const About = React.forwardRef((props, ref) => {
  return (
    <div className="About" ref={ref} style={{opacity: props.opacity}}>
      <Hero page="about" />
      <div className="u-Wrap">
        <section className="u-Column">
          <h2 className="u-Header">About Ritual Yoga Studio</h2>
          <p className="u-Copy">
            At Ritual Yoga, we embrace and cultivate practices that empower you
            to be happy, healthy and uniquely you!
          </p>
          <p className="u-Copy" style={{paddingBottom: '30px'}}>
            Through a daily yoga practice you’ll learn to love every part of
            yourself, freeing you to live your most authentic life. This is the
            “me time” that you deserve — that time and space to give your mind
            and body exactly what it needs.
          </p>

          <Testimonials />
        </section>
        <section className="u-Column">
          <h2 className="u-Header">Meet The Owner</h2>
          <img src={Owner} className="About-ownerImage" alt="Ritual Yoga" />
          <p className="u-Copy">
            Sara’s interest in yoga began when she was a child with an active
            imagination. She practiced yoga poses, listened to meditation tapes,
            burned incense and made potions from dirt and glitter with her best
            friend. It felt like magic.
          </p>
          <p className="u-Copy">
            As she got older, that sparkle died and was replaced with pressure
            to fit in among her peers. Luckily, in high school she began to find
            it again as she started practicing power yoga. She continued to
            practice as she studied at Mass College of Art and Design.
          </p>
          <p className="u-Copy">
            In 2014 she travelled to India for an intensive 200 hour yoga
            teacher training. She came home to spread her love for the practice
            in various gyms and studios. Her days are now filled with teaching
            and practicing yoga, creating art and crafts, spending time with her
            dogs and working towards ways to help others find the magic in every
            day life.
          </p>
          <h3 className="u-SubHeader">
            So what are you waiting for? Start your journey with Sara today!
          </h3>
        </section>
      </div>
    </div>
  );
});

export default About;
