import { useMsal } from "@azure/msal-react";
import { useIsAuthenticated } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";
import { Button } from '@fluentui/react-components';
import { Image } from '@fluentui/react-components';
import { getUserAvatar } from "../User/graph";

export default function LogoutButton() {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  const { instance: msalInstance } = useMsal();

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
        src="https://media.licdn.com/dms/image/D4E03AQEpuhuYeJ29Ow/profile-displayphoto-shrink_200_200/0/1676289501661?e=1712793600&v=beta&t=jPARjYKWMJ8pcqu-CdMwsTGgnFD4xzOcYBwaynauZxc"
        alt="User avatar"
        style={{width:'1rem', height:'1rem', borderRadius:'50%', marginRight: '2px'}}
      />
        Log Out
    </Button>
  );
}

