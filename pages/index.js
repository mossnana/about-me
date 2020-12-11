import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import WelcomeBackground from "../containers/Background";
import WoodBox from "../components/WoodBox";
import Box from "../components/Box";
import Text from "../components/Text";
import { useState } from "react";
import { updateUser } from "../redux/actions/userAction";
import { User } from "../models/User";

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [anime, changeAnime] = useState({
    initial: "init",
    animate: "visible",
    variants: {
      init: {
        y: -300,
      },
      visible: {
        y: 0,
      },
    },
  });

  const newAnime = (old, init, visible) => {
    return {
      ...old,
      variants: {
        init,
        visible,
      },
    };
  };

  const submit = (e) => {
    e.preventDefault();
    changeAnime(newAnime(anime, { y: 0 }, { y: -1000 }));
    setTimeout(() => {
      router.push("/home");
    }, 500);
  };

  const inputName = (e) => {
    e.preventDefault();
    let user = new User(e.target.value)
    dispatch(updateUser(user));
  };

  return (
    <WelcomeBackground>
      <Box height="30vh" />
      <motion.div
        initial={anime.initial}
        animate={anime.animate}
        variants={anime.variants}
      >
        <WoodBox height="30vh" width="30vh">
          <Text size="15px" color="white">
            Your name ?
          </Text>
          <input
            type="text"
            id="input_name"
            className="nes-input"
            maxLength="10"
            onChange={inputName}
          />
          <Box height="2vh" />
          <Text size="15px" color="white">
            Remember me ?
          </Text>
          <label>
            <input
              type="radio"
              className="nes-radio is-dark"
              name="answer"
              defaultChecked
            />
            <Text tag="span" size="15px" color="white">
              Yes
            </Text>
          </label>
          <label>
            <input type="radio" className="nes-radio is-dark" name="answer" />
            <Text tag="span" size="15px" color="white">
              No
            </Text>
          </label>
          <Box height="2vh" />
          <Link href="/home">
            <button
              type="button"
              className="nes-btn is-success"
              onClick={submit}
            >
              Submit
            </button>
          </Link>
        </WoodBox>
      </motion.div>
    </WelcomeBackground>
  );
};

export default Index;
