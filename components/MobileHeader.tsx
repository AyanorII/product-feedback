import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  DANGER_LIGHT_COLOR,
  LIVE_COLOR,
  SECONDARY_MAIN_COLOR,
} from "../lib/constants";
import { setHeaderHeight } from "../store/navSlice";
import MobileNav from "./MobileNav";
import { LIGHT_COLOR } from '../lib/constants';
import ClickAwayListener from "@mui/base/ClickAwayListener";

type Props = {};

const MobileHeader = (props: Props) => {
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const header = ref.current as unknown as HTMLElement;
      dispatch(setHeaderHeight(header.offsetHeight));
    }
  }, [ref.current]);

  return (
    <ClickAwayListener onClickAway={closeMenu}>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        padding="1rem 1.5rem"
        component="header"
        sx={{
          background: `linear-gradient(211deg, ${DANGER_LIGHT_COLOR} 0%, ${SECONDARY_MAIN_COLOR} 46%, ${LIVE_COLOR} 100%)`,
          boxShadow: isMenuOpen ? "100px 100px 100vh 100vh #00000075" : 0,
          transition: "all 0.1s ease-in-out",
        }}
        ref={ref}
      >
        <Stack>
          <Typography variant="h6" fontWeight="bold" color={LIGHT_COLOR}>
            Frontend Mentor
          </Typography>
          <Typography color={LIGHT_COLOR}>Feedback Board</Typography>
        </Stack>
        <IconButton onClick={toggleMenu}>
          {isMenuOpen ? (
            <CloseIcon sx={{ color: "#ffffff" }} />
          ) : (
            <MenuIcon sx={{ color: "#ffffff" }} />
          )}
        </IconButton>
        <MobileNav isMenuOpen={isMenuOpen} />
      </Stack>
    </ClickAwayListener>
  );
};

export default MobileHeader;
