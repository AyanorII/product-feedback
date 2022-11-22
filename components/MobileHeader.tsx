import ClickAwayListener from "@mui/base/ClickAwayListener";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  DANGER_LIGHT_COLOR,
  LIGHT_COLOR,
  LIVE_COLOR,
  SECONDARY_MAIN_COLOR,
} from "../lib/constants";
import { setHeaderHeight, setOpen } from "../store/navSlice";
import MobileNav from "./MobileNav";

type Props = {};

const MobileHeader = (props: Props) => {
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setIsMenuOpen((prev) => {
      dispatch(setOpen(!prev));
      return !prev
    });
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      dispatch(setOpen(false));
    }
  };

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const header = ref.current as unknown as HTMLElement;
      dispatch(setHeaderHeight(header.offsetHeight));
    }

    document.body.style.overflow = isMenuOpen ? "hidden" : "auto"
  }, [ref.current, isMenuOpen]);

  return (
    <ClickAwayListener onClickAway={closeMenu}>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        padding="1rem 1.5rem"
        component="header"
        sx={{
          background: `linear-gradient(211deg, ${DANGER_LIGHT_COLOR} 0%, ${SECONDARY_MAIN_COLOR} 46%, ${LIVE_COLOR} 100%)`,
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
        <IconButton onClick={toggleMenuOpen}>
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
