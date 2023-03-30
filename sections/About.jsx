'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Ai" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Ai Code Labs integrates AI.</span> Artificial Intelligence is revolutionizing the way we live and work, offering unprecedented opportunities for businesses and individuals alike. From improving healthcare to optimizing supply chains, AI is enhancing efficiency and productivity{' '} 
        <span className="font-extrabold text-white">
        across industries, and driving innovation like never before. Get ready to 
        experience the transformative power of AI. {' '}
        </span>{' '}
        of today, using only{' '}
        <span className="font-extrabold text-white">Discover</span>  how it can help you achieve your goals.{' '}
        <span className="font-extrabold text-white">Explore</span> Read Below and get your head around it.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
