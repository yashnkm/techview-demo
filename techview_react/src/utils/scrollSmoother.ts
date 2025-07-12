import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

class ScrollManager {
  private smoother: ScrollSmoother | null = null;
  
  init() {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    
    this.smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });
  }
  
  scrollTo(target: string) {
    this.smoother?.scrollTo(target, true, "top top");
  }
  
  destroy() {
    this.smoother?.kill();
  }
}

export const scrollManager = new ScrollManager();