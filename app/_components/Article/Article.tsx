import styles from "./Article.module.css";

type ArticleProps = {
  text: string;
  title: string;
  img: string;
  inverted: boolean;
  children?: React.ReactNode;
};

function Article({
  text,
  title,
  img,
  children,
  inverted = false,
}: ArticleProps) {
  return (
    <article
      className={`${styles.article} ${inverted ? styles.inverted : ""} `}
    >
      <section className={styles.section}>
        <h2>{title}</h2>
        <div className={styles.textContainer}>
          <p>{text}</p>
        </div>
        {children}
      </section>
      <div className={styles.imageContainer}>
        <img src={img} alt={img} />
      </div>
    </article>
  );
}

export default Article;
