import styles from "../style";
import Button from "./Button";

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} sm:flex-row flex-col bg-black-gradient-2 box-shadow rounded-[20px]`}
    >
      <div className="flex flex-1 flex-col">
        <h2 className={styles.heading2}>Let's try our servises now!</h2>
        <p className={`max-w-[470px] mt-5 mb-5 ${styles.paragraph}`}>
          Everything you need to accept card payments and grow your business
          anywhere on the Earth.
        </p>
      </div>
      <div>
        <Button className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-10 mt-5`}></Button>
      </div>
    </section>
  );
};

export default CTA;
