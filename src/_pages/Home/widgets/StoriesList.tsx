import React, { useEffect, useState } from "react";
import { stories } from "../api";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Image from "next/image";
import mediumLogo from "../../../../public/images/mediumLogo.png";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import RepeatIcon from "@mui/icons-material/Repeat";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const StoriesList = () => {
  interface Story {
    id: number;
    title: string;
    subTitle: string;
    text: string;
  }

  const [storiesList, setstoriesList] = useState<Story[]>([]);

  useEffect(() => {
    const loadStories = async () => {
      try {
        const response = await stories.getAllStories();
        setstoriesList(response.data);
      } catch (error) {
        console.log("Failed to fetch users", error);
      }
    };

    loadStories();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "7px",
      }}
    >
      {storiesList.map((story) => (
        <Card
          key={story.id}

          sx={{
            display: "flex",
            flexDirection: "row",
            width: "800px",
            minHeight: "250px",
            padding: "15px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ width: 20, height: 20 }} aria-label="recipe">
                  R
                </Avatar>
              }
              title={
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Omar Bouslime
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 100 }}
                    color="text.secondary"
                  >
                    Sep 14
                  </Typography>
                </Box>
              }
            />
            <CardContent>
              <Typography variant="h4" component="div">
                {story.title}
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                {story.subTitle}
              </Typography>
              <Typography variant="body2">well meaning and kindly.</Typography>
            </CardContent>

            <CardActions disableSpacing>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box sx={{ display: "flex", gap: 1 }}>
                  <IconButton aria-label="add to favorites">
                    <WavingHandIcon
                      fontSize="small"
                      sx={{ transform: "scaleX(-1)" }}
                    />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ModeCommentIcon fontSize="small" />
                  </IconButton>
                  <IconButton aria-label="share">
                    <RepeatIcon
                      fontSize="small"
                      sx={{ transform: "scaleY(-1)" }}
                    />
                  </IconButton>
                </Box>

                <Box sx={{ display: "flex", gap: 1 }}>
                  <IconButton aria-label="add to favorites">
                    <ThumbDownOutlinedIcon fontSize="large" />
                  </IconButton>
                  <IconButton aria-label="add to favorites">
                    <BookmarkAddOutlinedIcon fontSize="large" />
                  </IconButton>
                  <IconButton aria-label="add to favorites">
                    <MoreHorizIcon fontSize="large" />
                  </IconButton>
                </Box>
              </Box>
            </CardActions>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "200px",
              padding: 2,
            }}
          >
            <CardContent>
              <Image
                src={mediumLogo}
                alt=""
                width={150}
                height={150}
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
            </CardContent>
          </Box>
        </Card>
      ))}
    </Box>
  );
};
