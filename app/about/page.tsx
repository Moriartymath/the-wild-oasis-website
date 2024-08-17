import styles from "./about.module.css";
import bg1 from "@/public/about-1.jpg";
import bg2 from "@/public/about-2.jpg";
import Image from "next/image";
import { supabase } from "../_supabase/supabase";
import { CabinType } from "../_types/types";

const arr = [
  {
    text: ` Where nature's beauty and comfortable living blend seamlessly. Hidden away in the heart of the Italian Dolomites, this is your paradise away from home. But it's not just about the luxury cabins. It's about the experience of reconnecting with nature and enjoying simple pleasures with family.

Our %s luxury cabins provide a cozy base, but the real freedom and peace you'll find in the surrounding mountains. Wander through lush forests, breathe in the fresh air, and watch the stars twinkle above from the warmth of a campfire or your hot tub.

This is where memorable moments are made, surrounded by nature's splendor. It's a place to slow down, relax, and feel the joy of being together in a beautiful setting.`,
    title: "Welcome to The Wild Oasis",
    img: "/about-1.jpg",
  },
  {
    text: `Since 1962, The Wild Oasis has been a cherished family-run retreat. Started by our grandparents, this haven has been nurtured with love and care, passing down through our family as a testament to our dedication to creating a warm, welcoming environment.

Over the years, we've maintained the essence of The Wild Oasis, blending the timeless beauty of the mountains with the personal touch only a family business can offer. Here, you're not just a guest; you're part of our extended family. So join us at The Wild Oasis soon, where tradition meets tranquility, and every visit is like coming home.`,
    title: "Managed by our family since 1962",
    img: "/about-2.jpg",
  },
];

export const revalidate = 60;

async function Page() {
  const res = await supabase.from("cabins").select("*", { count: "exact" });

  const cabins = res.data as Array<CabinType>;

  return (
    <div className={styles.container}>
      {arr.map(({ text, title }, i) => {
        return (
          <section
            key={title}
            style={{ flexDirection: i !== 0 ? "row-reverse" : "row" }}
          >
            <div className={styles.textContainer}>
              <h1>{title}</h1>
              <p>{text.replace("%s", String(cabins.length))}</p>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src={i !== 0 ? bg2 : bg1}
                placeholder="blur"
                quality={40}
                alt="about"
                className={styles.image}
              />
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Page;
