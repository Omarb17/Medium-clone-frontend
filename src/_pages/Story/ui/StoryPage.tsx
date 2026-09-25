"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Image from "next/image";

import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import mediumLogo from "../../../../public/images/mediumLogo.png";
import { storyApi, type Story } from "@/src/entities/story";

const StoryPage = () => {
  const params = useParams();
  const id = Number(params.id);

  const [story, setStory] = useState<Story | null>(null);

  // Article actions
  const [claps, setClaps] = useState(0);
  const [hasClapped, setHasClapped] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [commentsOpen, setCommentsOpen] = useState(false);

  // More menu
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  // Share message
  const [shareMessage, setShareMessage] = useState("");

  useEffect(() => {
    const loadStory = async () => {
      try {
        const response = await storyApi.getStoryById(id);
        setStory(response.data);
      } catch (error) {
        console.error("Failed to fetch story", error);
      }
    };

    if (id) {
      loadStory();
    }
  }, [id]);

  /*
   * Clap
   */
  const handleClap = () => {
    if (hasClapped) {
      setClaps((prev) => Math.max(0, prev - 1));
      setHasClapped(false);
    } else {
      setClaps((prev) => prev + 1);
      setHasClapped(true);
    }
  };

  /*
   * Bookmark
   */
  const handleBookmark = () => {
    setBookmarked((prev) => !prev);
  };

  /*
   * Share
   */
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);

      setShareMessage("Link copied");

      setTimeout(() => {
        setShareMessage("");
      }, 2000);
    } catch (error) {
      console.error("Failed to copy link", error);
    }
  };

  /*
   * More menu
   */
  const handleMoreClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMoreClose = () => {
    setMenuAnchor(null);
  };

  const handleReport = () => {
    handleMoreClose();

    console.log("Report story:", story?.id);
  };

  if (!story) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        pt: { xs: 10, md: 14 },
        pb: 10,
      }}
    >
      {/* =========================
          ARTICLE HEADER
      ========================== */}

      <Box
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          px: { xs: 3, md: 5 },
        }}
      >
        {/* Title */}

        <Typography
          component="h1"
          sx={{
            fontSize: {
              xs: "2.4rem",
              md: "4rem",
            },
            lineHeight: 1.1,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            maxWidth: "900px",
            mb: 3,
          }}
        >
          {story.title}
        </Typography>

        {/* Subtitle */}

        <Typography
          sx={{
            fontSize: {
              xs: "1.2rem",
              md: "1.5rem",
            },
            lineHeight: 1.5,
            color: "#6b6b6b",
            maxWidth: "800px",
            mb: 4,
          }}
        >
          {story.subTitle}
        </Typography>

        {/* =========================
            AUTHOR
        ========================== */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            mb: 4,
          }}
        >
          {/* Avatar */}

          <Avatar
            sx={{
              width: 32,
              height: 32,
              fontSize: "0.9rem",
            }}
          >
            {story.userName?.charAt(0).toUpperCase()}
          </Avatar>

          {/* Author information */}

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0.4,
            }}
          >
            {/* Author + Follow */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                {story.userName}
              </Typography>

              <Typography
                component="button"
                sx={{
                  border: "none",
                  background: "none",
                  padding: 0,
                  color: "#1a8917",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  fontWeight: 500,
                }}
              >
                Follow
              </Typography>
            </Box>

            {/* Reading information */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.7,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "#6b6b6b",
                }}
              >
                6 min read
              </Typography>

              <Typography
                sx={{
                  color: "#6b6b6b",
                }}
              >
                ·
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "#6b6b6b",
                }}
              >
                Jun 2, 2026
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* =========================
            ARTICLE ACTIONS
        ========================== */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #e6e6e6",
            borderBottom: "1px solid #e6e6e6",
            py: 1,
            mt: 2,
            mb: 5,
          }}
        >
          {/* Left actions */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {/* Clap */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <IconButton
                onClick={handleClap}
                size="small"
                sx={{
                  color: hasClapped ? "#e25555" : "#6b6b6b",
                }}
              >
                {hasClapped ? (
                  <VolunteerActivismIcon fontSize="small" />
                ) : (
                  <VolunteerActivismOutlinedIcon fontSize="small" />
                )}
              </IconButton>

              <Typography
                sx={{
                  fontSize: "0.85rem",
                  color: "#6b6b6b",
                }}
              >
                {claps}
              </Typography>
            </Box>

            {/* Comments */}

            <IconButton
              onClick={() => setCommentsOpen((prev) => !prev)}
              size="small"
              sx={{
                color: "#6b6b6b",
              }}
            >
              <ModeCommentOutlinedIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Right actions */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            {/* Bookmark */}

            <IconButton
              onClick={handleBookmark}
              size="small"
              sx={{
                color: bookmarked ? "#242424" : "#6b6b6b",
              }}
            >
              <BookmarkBorderIcon
                fontSize="small"
                sx={{
                  fill: bookmarked ? "#242424" : "none",
                }}
              />
            </IconButton>

            {/* Share */}

            <IconButton
              onClick={handleShare}
              size="small"
              sx={{
                color: "#6b6b6b",
              }}
            >
              <ShareOutlinedIcon fontSize="small" />
            </IconButton>

            {/* More */}

            <IconButton
              onClick={handleMoreClick}
              size="small"
              sx={{
                color: "#6b6b6b",
              }}
            >
              <MoreHorizIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* =========================
            MORE MENU
        ========================== */}

        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={handleMoreClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem
            onClick={() => {
              handleMoreClose();
              handleShare();
            }}
          >
            Copy link
          </MenuItem>

          <MenuItem onClick={handleReport}>Report story</MenuItem>
        </Menu>

        {/* Share notification */}

        {shareMessage && (
          <Box
            sx={{
              position: "fixed",
              bottom: 30,
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#242424",
              color: "#fff",
              px: 2,
              py: 1,
              borderRadius: 2,
              zIndex: 2000,
            }}
          >
            <Typography
              sx={{
                fontSize: "0.85rem",
              }}
            >
              {shareMessage}
            </Typography>
          </Box>
        )}

        <Divider />
      </Box>

      {/* =========================
          COVER IMAGE
      ========================== */}

      <Box
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          px: { xs: 2, md: 5 },
          mt: 5,
        }}
      >
        <Image
          src={mediumLogo}
          alt={story.title}
          width={1100}
          height={600}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "600px",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* =========================
          ARTICLE CONTENT
      ========================== */}

      <Box
        sx={{
          maxWidth: "720px",
          mx: "auto",
          px: { xs: 3, md: 0 },
          mt: 7,
        }}
      >
        <Typography
          component="div"
          sx={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: {
              xs: "1.15rem",
              md: "1.25rem",
            },
            lineHeight: 1.8,
            color: "#242424",
            whiteSpace: "pre-wrap",
          }}
        >
          {story.text}
        </Typography>
      </Box>

      {/* =========================
          COMMENTS
      ========================== */}

      {commentsOpen && (
        <Box
          sx={{
            maxWidth: "720px",
            mx: "auto",
            px: { xs: 3, md: 0 },
            mt: 6,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 3,
            }}
          >
            Comments
          </Typography>

          <Box
            sx={{
              border: "1px solid #e6e6e6",
              borderRadius: 2,
              p: 3,
            }}
          >
            <Typography
              sx={{
                color: "#6b6b6b",
                fontSize: "0.95rem",
              }}
            >
              No comments yet.
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default StoryPage;
