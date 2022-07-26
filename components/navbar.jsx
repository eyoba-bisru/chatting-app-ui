import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../feature/user/userSlice";

export default function Navbar({ username, email }) {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <div
        className={`
        ${colorMode === "dark" ? "bg-slate-900" : "bg-white"}
        shadow-lg py-2 fixed top-0 w-full z-[999]`}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          width="80%"
          margin="auto "
        >
          <Link href="/home">
            <a>
              <Image
                src="/images/chatnow.png"
                alt="Logo"
                width="90px"
                height="50px"
              />
            </a>
          </Link>
          <Flex gap="2rem" justifyContent="center" alignItems="center">
            <IconButton
              onClick={toggleColorMode}
              icon={colorMode == "light" ? <MoonIcon /> : <SunIcon />}
            ></IconButton>
            {user ? (
              <Menu>
                <MenuButton>
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    gap="1rem"
                    className="border rounded-lg px-2 py-1"
                  >
                    <Flex
                      justifyContent="start"
                      flexDirection="column"
                      alignItems="start"
                    >
                      <p className="font-bold text-md">{username}</p>
                      <p className="text-xs">{email}</p>
                    </Flex>
                  </Flex>
                </MenuButton>
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      dispatch(logout());
                    }}
                  >
                    logout
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              ""
            )}
          </Flex>
        </Flex>
      </div>
    </div>
  );
}
