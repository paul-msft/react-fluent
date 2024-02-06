import { useUser } from "../../Provider";
import { DrawerBody, DrawerHeader,DrawerHeaderTitle, Drawer } from "@fluentui/react-components/unstable";
import { Button, Persona } from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";
import SignoutButton from "../../SignoutButton";
import styles from './styles.module.css';
import PropTypes from 'prop-types';

UserDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
};

export default function UserDrawer(props) {

  const { isOpen, closeHandler } = props;
  const { userData } = useUser();

  return (
    <div className={styles.root}>
      <Drawer position="right" size="medium" open={isOpen}>
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={closeHandler}
              />
            }
          >
          {userData && 
          <>
            <Persona
              name={userData.displayName}
              secondaryText={userData.jobTitle}
              presence={{ status: "available" }}
              avatar={{
                image: {
                  src: "https://graph.microsoft.com/v1.0/me/photo/$value"
                },
              }}
            />
            <SignoutButton />
          </>
          }
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
           
        </DrawerBody>
      </Drawer>
    </div>
  );
}