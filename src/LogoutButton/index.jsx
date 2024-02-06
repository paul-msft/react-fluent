import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from '@fluentui/react-components';
import { Image } from '@fluentui/react-components';
import { getUserAvatar } from "../User/graph";

export default function LogoutButton() {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  const { instance: msalInstance } = useMsal();
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    const fetchAvatar = async () => {
      const response = await getUserAvatar(msalInstance);
      const blob = await response.blob();
      const avatarUrl = URL.createObjectURL(blob);
      setAvatarUrl(avatarUrl);
    };

    fetchAvatar();
  }, [msalInstance]);

  async function handleLogout(event) {
    event.preventDefault();
    if (isAuthenticated) {
      await msalInstance.logoutPopup();
      navigate("/");
    }
  }

  return (
    <Button size="small" appearance="subtle" style={{marginLeft:'0.5rem'}} onClick={handleLogout}>
      <Image
        src={avatarUrl}
        alt="User avatar"
        style={{width:'1rem', height:'1rem', borderRadius:'50%', marginRight: '2px'}}
      />
        Log Out
    </Button>
  );
}

