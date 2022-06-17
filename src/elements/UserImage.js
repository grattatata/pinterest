import React from "react";
import { Avatar } from "@mui/material";

const UserImage = ({ size }) => {
  return (
    <div>
      {size === "small" ? (
        <div>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 24, height: 24 }}
          />
        </div>
      ) : (
        <div>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
      )}
    </div>
  );
};

export default UserImage;
