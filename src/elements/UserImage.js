import React from "react";
import { Avatar } from "@mui/material";

const UserImage = ({ size }) => {
  return (
    <div>
      {size === "small" ? (
        <>
          <Avatar
            alt="Vemy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 32, height: 32 }}
          />
        </>
      ) : (
        <div>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
      )}
    </div>
  );
};

export default UserImage;
