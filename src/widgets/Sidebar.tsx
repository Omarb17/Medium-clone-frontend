"use client";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import Person2Icon from "@mui/icons-material/Person2";
import ArticleIcon from "@mui/icons-material/Article";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import GroupIcon from "@mui/icons-material/Group";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  open: boolean;
}

const drawerWidth = 240;

const links = [
  { label: "Home", href: "/", icon: <HomeIcon /> },
  { label: "Library", href: "/library", icon: <BookmarksIcon /> },
  { label: "Profile", href: "/profile", icon: <Person2Icon /> },
  { label: "Stories", href: "/stories", icon: <ArticleIcon /> },
  { label: "Stats", href: "/stats", icon: <SignalCellularAltIcon /> },
  { label: "Following", href: "/following", icon: <GroupIcon /> },
];

const Sidebar = ({ open }: NavbarProps) => {
  const pathname = usePathname();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,

          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            top: "66px",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <List>
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <ListItem key={link.href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={link.href}
                  sx={{
                    "& .MuiListItemIcon-root": {
                      color: active ? "black" : "grey.500",
                    },
                  }}
                >
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
