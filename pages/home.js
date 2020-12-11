import WelcomeBackground from "../containers/Background";
import WoodBox from "../components/WoodBox";
import Box from "../components/Box";
import Text from "../components/Text";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const AboutMeHome = () => {
  const user = useSelector((state) => state.userReducer.user);
  return (
    <WelcomeBackground>
      <div style={{ padding: "20px" }}>
        <Box height="5vh" />
        <motion.div
          initial="init"
          animate="visible"
          variants={{
            init: {
              y: -300,
            },
            visible: {
              y: 0,
            },
          }}
        >
          <WoodBox height="10vh" width="100vh">
            <Text size="20px" color="white">
              Welcome, {user?.name}
              &nbsp;
              <Link href="/">
              <button type="button" className="nes-btn is-error">
                Exit
              </button>
            </Link>
            </Text>
            
          </WoodBox>
        </motion.div>
        <Box height="5vh" />
        <motion.div
          initial="init"
          animate="visible"
          variants={{
            init: {
              y: -300,
            },
            visible: {
              y: 0,
            },
          }}
        >
          <section className="nes-container">
            <section className="message-list ">
              <section className="message-right">
                <div className="nes-balloon from-left">
                  <p>
                    After I graduated from a bachelor degrese, I started
                    working.
                  </p>
                </div>

                <div className="nes-balloon from-left">
                  <p>Almost a year that I had to find yourself.</p>
                </div>

                <div className="nes-balloon from-left">
                  <p>
                    Today, I think I found that I wanna be a programmer or
                    developer.
                  </p>
                </div>

                <div className="nes-balloon from-left">
                  <p>
                    So, I decided to study in IT, master degree. And I hope I
                    will have a programmer or developer job.{" "}
                  </p>
                </div>

                <div className="nes-balloon from-left">
                  <p>
                    Betweeen studying in master degree, I'm learning more
                    knowledge by yourself from youtube, udemy, coursera, etc. A
                    thing that I want is IT jobs experience.{" "}
                  </p>
                </div>
              </section>
            </section>
          </section>
        </motion.div>
      </div>
    </WelcomeBackground>
  );
};

export default AboutMeHome;
